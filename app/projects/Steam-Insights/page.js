import Link from 'next/link';
import { notFound } from 'next/navigation';
import Page from '@/components/Page';
import { getRepo } from '@/lib/github';

export async function generateMetadata({ params }) {
  return { title: `${(await params).name} | Projects` };
}

export default async function ProjectPage({ params }) {
  const data = await getRepo((await params).name);
  if (!data) notFound();
  const { repo: r, languages } = data;
  const total = Object.values(languages).reduce((a, b) => a + b, 0) || 1;
  const stats = [['Stars', r.stargazers_count], ['Forks', r.forks_count], ['Open issues', r.open_issues_count], ['Updated', r.pushed_at.slice(0, 10)]];

  return (
    <Page title={r.name} subtitle={r.description || 'No description'}>
      <div className="row" style={{ marginBottom: 32 }}>
        <a href={r.html_url} target="_blank" rel="noreferrer" className="btn btn-primary">View on GitHub</a>
        {r.homepage && <a href={r.homepage} target="_blank" rel="noreferrer" className="btn btn-secondary">Live demo</a>}
        <Link href="/projects" className="btn btn-text">← Back</Link>
      </div>
      <div className="split">
        <div className="card">
          <h5>Languages</h5>
          {Object.entries(languages).map(([l, b]) => (
            <div key={l}>
              <small>{l} · {Math.round((b / total) * 100)}%</small>
              <div className="bar"><i style={{ width: `${(b / total) * 100}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="card">
          <h5>Details</h5>
          {stats.map(([k, v]) => <div key={k}><b>{k}:</b> {v}</div>)}
          <div className="row" style={{ marginTop: 16 }}>{r.topics?.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        </div>
      </div>
    </Page>
  );
}