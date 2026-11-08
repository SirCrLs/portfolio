import Page from '@/components/Page';
import ProjectCard from '@/components/ProjectCard';
import { getRepos } from '@/lib/github';

export const metadata = { title: 'Projects | Carlos' };

export default async function Projects() {
  const repos = await getRepos();
  return (
    <Page className="projects-page" title="Projects" subtitle="Live from my GitHub repositories">
      <div className="projects-intro">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Built to solve real problems.</h2>
          <p className="projects-lead">
            Explore my public repositories, from backend services to data-focused experiments.
          </p>
        </div>
        <div className="projects-count" aria-label={`${repos.length} public repositories`}>
          <strong>{repos.length}</strong>
          <span>public {repos.length === 1 ? 'repository' : 'repositories'}</span>
        </div>
      </div>
      {!repos.length && <p className="projects-empty">No public repositories yet.</p>}
      <div className="grid projects-grid">
        {repos.map((r) => <ProjectCard key={r.id} r={r} />)}
      </div>
    </Page>
  );
}