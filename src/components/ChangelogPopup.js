import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { loadFromLocalStorage, saveToLocalStorage } from '../5etoolLayout/PersistData';

const LAST_SEEN_CHANGELOG_KEY = 'lastSeenChangelog';

export const ChangelogPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [latestChangelog, setLatestChangelog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkForNewChangelog = async () => {
      try {
        // Import all changelog files
        const importAllPosts = (r) => r.keys().map(r);
        const markdownFiles = importAllPosts(
          require.context('../ChangeLog/ChangeLogArchives', false, /\.md$/)
        ).sort().reverse();

        if (markdownFiles.length > 0) {
          // Fetch the latest changelog
          const latestFile = markdownFiles[0];
          const response = await fetch(latestFile);
          const content = await response.text();

          // Extract the date from the filename
          const filename = latestFile.split('/').pop();
          const dateMatch = filename.match(/(\d{4}-\d{2}-\d{2})/);
          const date = dateMatch ? dateMatch[1] : 'Unknown';

          // Get the last seen changelog date
          const lastSeen = loadFromLocalStorage(LAST_SEEN_CHANGELOG_KEY);

          // If this changelog is newer than the last seen one, show the popup
          if (!lastSeen || date > lastSeen) {
            setLatestChangelog({
              date,
              content,
              filename
            });
            setIsOpen(true);
            // Save this as the last seen changelog
            saveToLocalStorage(LAST_SEEN_CHANGELOG_KEY, date);
          }
        }
      } catch (error) {
        console.error('Error checking for new changelog:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkForNewChangelog();
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (isLoading || !isOpen || !latestChangelog) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={closePopup}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: '0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px',
            borderRadius: '8px 8px 0 0',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>
              ✨ Nouvelles mises à jour !
            </h2>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
              Une nouvelle version est disponible
            </p>
          </div>
          <button
            onClick={closePopup}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '28px',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.3)')}
            onMouseOut={(e) => (e.target.style.background = 'rgba(255, 255, 255, 0.2)')}
          >
            ×
          </button>
        </div>

        <div style={{ padding: '30px' }}>
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => (
                <h1 style={{ color: '#667eea', marginTop: 0 }} {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 style={{ color: '#667eea', marginTop: '20px' }} {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 style={{ color: '#764ba2' }} {...props} />
              ),
              blockquote: ({ ...props }) => (
                <blockquote
                  style={{
                    color: '#666',
                    margin: '15px 0',
                    paddingLeft: '15px',
                    borderLeft: '4px solid #667eea',
                    fontStyle: 'italic'
                  }}
                  {...props}
                />
              ),
              ul: ({ ...props }) => (
                <ul style={{ lineHeight: '1.8' }} {...props} />
              ),
              li: ({ ...props }) => (
                <li style={{ marginBottom: '8px' }} {...props} />
              ),
              p: ({ ...props }) => (
                <p style={{ lineHeight: '1.6', color: '#333' }} {...props} />
              )
            }}
          >
            {latestChangelog.content}
          </ReactMarkdown>
        </div>

        <div
          style={{
            padding: '20px 30px',
            borderTop: '1px solid #eee',
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-end'
          }}
        >
          <button
            onClick={closePopup}
            style={{
              padding: '10px 24px',
              backgroundColor: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#e5e7eb')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#f3f4f6')}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
