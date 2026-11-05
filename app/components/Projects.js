'use client';
import Section from './Section';
import useFetch from '../../hooks/useFetch';
import { site } from '../../data/mydata';

const URL = `https://api.github.com/users/${site.github}/repos?sort=updated&per_page=30`;

export default function Projects() {
  const { status, data, error } = useFetch(URL);
  const repos = data?.filter((r) => !r.fork).slice(0, 6);

  return (
    <Section id="projects" title="Projects">
      {status === 'loading' && <p className="muted">Loading repositories…</p>}
      {status === 'error' && <p className="error">Could not load projects ({error}). Try again later.</p>}
      {status === 'success' && !repos.length && <p>No public repositories yet.</p>}
      {status === 'success' && (
        <div className="grid">
          {repos.map((r) => (
            <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="card">
              <h3>{r.name}</h3>
              <p className="muted">{r.description || 'No description'}</p>
              <small>{r.language} · ★ {r.stargazers_count}</small>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}