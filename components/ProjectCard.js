import Link from 'next/link';

export default function ProjectCard({ r }) {
  return (
    <Link href={`/projects/${r.name}`} className="card project-card">
      <div className="project-card-topline">
        <span className="project-index" aria-hidden="true">Project</span>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>
      <h3>{r.name}</h3>
      <p className="project-description">{r.description || 'No description'}</p>
      <div className="project-card-footer">
        <div className="row">
          {r.language && <span className="chip solid">{r.language}</span>}
          <span className="chip">★ {r.stargazers_count}</span>
        </div>
        <span className="project-cta">View project <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}