import { site } from '../../data/mydata';

export default function Hero() {
  return (
    <section id="about" className="wrap hero">
      <p className="muted">Hi, I'm</p>
      <h1>{site.name}</h1>
      <h2>{site.role}</h2>
      <p>{site.tagline}</p>
      <div className="row">
        <a href="#projects" className="btn">View projects</a>
        <a href={`https://github.com/${site.github}`} className="btn ghost">GitHub</a>
      </div>
    </section>
  );
}