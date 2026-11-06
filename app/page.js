import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { getRepos } from '@/lib/github';
import { site } from '@/data/site';

const Head = ({ title, href }) => (
  <div className="between"><h3>{title}</h3><Link href={href} className="btn btn-text">See all →</Link></div>
);

export default async function Home() {
  const repos = (await getRepos()).slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="container">
          <p style={{ opacity: 0.8, margin: 0 }}>Hi, I'm</p>
          <h1>{site.name}</h1>
          <h4>{site.role}</h4>
          <p className="lead">{site.tagline}</p>
          <div className="row">
            <Link href="/projects" className="btn btn-secondary">View projects</Link>
            <Link href="/about" className="btn btn-outline">About me</Link>
          </div>
        </div>
      </section>
      <div className="container section">
        <Head title="Skills" href="/skills" />
        <div className="row" style={{ marginBottom: 64 }}>
          {Object.values(site.skills).flatMap((g) => g.items).map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
        <Head title="Featured projects" href="/projects" />
        <div className="grid">{repos.map((r) => <ProjectCard key={r.id} r={r} />)}</div>
      </div>
      <section className="cta">
        <h3>Let's work together</h3>
        <Link href="/contact" className="btn btn-primary">Get in touch</Link>
      </section>
    </>
  );
}