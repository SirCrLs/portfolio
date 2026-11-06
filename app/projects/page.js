import Page from '@/components/Page';
import ProjectCard from '@/components/ProjectCard';
import { getRepos } from '@/lib/github';

export const metadata = { title: 'Projects | Carlos' };

export default async function Projects() {
  const repos = await getRepos();
  return (
    <Page title="Projects" subtitle="Live from my GitHub repositories">
      {!repos.length && <p>No public repositories yet.</p>}
      <div className="grid">{repos.map((r) => <ProjectCard key={r.id} r={r} />)}</div>
    </Page>
  );
}