import Link from 'next/link';

export default function ProjectCard({ r }) {
  return (
    <Link href={`/projects/${r.name}`} className="card">
      <h5>{r.name}</h5>
      <p className="muted">{r.description || 'No description'}</p>
      <div className="row">
        {r.language && <span className="chip solid">{r.language}</span>}
        <span className="chip">★ {r.stargazers_count}</span>
      </div>
    </Link>
  );
}