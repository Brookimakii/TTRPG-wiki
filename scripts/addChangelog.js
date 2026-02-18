const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (question) => new Promise(resolve => rl.question(question, resolve));

async function main() {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    const filename = path.join(__dirname, `../src/ChangeLog/ChangeLogArchives/${dateStr}.md`);

    let isUpdate = false;
    let existingContent = '';

    // Check if file already exists
    if (fs.existsSync(filename)) {
        console.log(`\n📄 File already exists: ${filename}`);
        const action = await prompt('Do you want to (u)pdate it or (c)ancel? [u/c]: ');
        
        if (action.toLowerCase() !== 'u') {
            console.log('❌ Cancelled\n');
            rl.close();
            return;
        }
        
        isUpdate = true;
        existingContent = fs.readFileSync(filename, 'utf8');
    }

    console.log(`\n📝 ${isUpdate ? 'Update' : 'Create'} Changelog Entry\n`);
    const version = await prompt('Version (e.g., V0.3.1): ');
    const summary = await prompt('Summary: ');
    const details = await prompt('Details (comma-separated): ');

    if (isUpdate) {
        // Find the Résumé section and add new entries
        const lines = existingContent.split('\n');
        const resumeIdx = lines.findIndex(line => line.includes('### Résumé'));
        
        if (resumeIdx !== -1) {
            // Find the end of Résumé section (next ### or ---)
            let endIdx = lines.findIndex((line, idx) => idx > resumeIdx && (line.includes('###') || line.includes('---')));
            if (endIdx === -1) endIdx = lines.length;
            
            // Add new entries before the end
            const newEntries = details
                .split(',')
                .map(d => `  ${d.trim()}`)
                .join('\n');
            
            lines.splice(endIdx, 0, `- ${summary}\n${newEntries}\n`);
            
            const updatedContent = lines.join('\n');
            fs.writeFileSync(filename, updatedContent);
            console.log(`\n✅ Changelog updated: ${filename}\n`);
        } else {
            console.log('❌ Could not find Résumé section\n');
        }
    } else {
        const content = `# ${today.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} - ${version}

---

### Résumé

- ${summary}
${details.split(',').map(d => `  ${d.trim()}`).join('\n')}

---
`;

        fs.writeFileSync(filename, content);
        console.log(`\n✅ Changelog created: ${filename}\n`);
    }
    
    rl.close();
}

main();