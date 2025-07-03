import {useEffect, useState} from "react";
import axios from "axios";

function getQueryStringValue(key) {
  if (!global.window) {
    return "";
  }
  return decodeURIComponent(window.location.search.replace(new RegExp(`^(?:.*[&\\?]${encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&')}(?:\\=([^&]*))?)?.*$`, 'i'), '$1'));
}

const githubToken = process.env.REACT_APP_GITHUB_TOKEN; // Store safely in .env
export const WEB_URL = 'https://github.com';
export const BASE_URL = 'https://api.github.com';
export const OWNER = getQueryStringValue('owner') || 'Brookimakii';
export const REPO = getQueryStringValue('repo') || 'TTRPG-wiki';
export const GIT_REPO_INFO = `${BASE_URL}/repos/${OWNER}/${REPO}`;
export const GIT_ISSUE_ENDPOINT = `${GIT_REPO_INFO}/issues`;

console.log(GIT_ISSUE_ENDPOINT);

const IssueForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const repoOwner = "Brookimakii"; // Change this
    const repoName = "TTRPG-wiki"; // Change this

    try {
      const response = await axios.post(
        `https://api.github.com/repos/${repoOwner}/${repoName}/issues`,
        {title, body},
        {headers: {Authorization: `token ${githubToken}`}}
      );

      setMessage(`Issue created: ${response.data.html_url}`);
    } catch (error) {
      setMessage("Failed to create issue");
    }
  };

  return (
    <div>
      <h2>Create a GitHub Issue</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Issue Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Issue Description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit">Submit Issue</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const repoOwner = "Brookimakii"; // Change this
  const repoName = "TTRPG-wiki"; // Change this

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${repoOwner}/${repoName}/issues`
        );
        setIssues(response.data);
      } catch (error) {
        console.error("Error fetching issues", error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div>
      <h2>Existing Issues</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              {issue.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Report() {
  return (
    <div>
      <h1>GitHub Ticket System</h1>
      <IssueForm/>
      <IssueList/>
    </div>
  )
}