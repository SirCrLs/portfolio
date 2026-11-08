import Page from '@/components/Page';
import { site } from '@/data/site';

export const metadata = { title: 'Skills | Carlos' };

export default function Skills() {
  const skillGroups = Object.entries(site.skills);
  const totalSkills = skillGroups.reduce((total, [, { items }]) => total + items.length, 0);

  return (
    <Page className="skills-page" title="Skills" subtitle="Tools and technologies I work with">
      <div className="skills-intro">
        <div>
          <p className="eyebrow">Technical toolkit</p>
          <h2>Built for thoughtful, reliable delivery.</h2>
          <p className="skills-lead">
            A practical set of technologies I use to design, build, and ship software.
          </p>
        </div>
        <div className="skills-summary" aria-label={`${skillGroups.length} skill categories and ${totalSkills} technologies`}>
          <div>
            <strong>{skillGroups.length}</strong>
            <span>focus areas</span>
          </div>
          <div>
            <strong>{totalSkills}</strong>
            <span>technologies</span>
          </div>
        </div>
      </div>
      <div className="grid two skills-grid">
        {skillGroups.map(([group, { text, items }], index) => (
          <section key={group} className="card skill-card">
            <div className="skill-card-heading">
              <span className="skill-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="skill-count">{items.length} {items.length === 1 ? 'skill' : 'skills'}</span>
            </div>
            <h2>{group}</h2>
            <p className="skill-description">{text}</p>
            <div className="skill-list" aria-label={`${group} technologies`}>
              {items.map((i) => <span key={i} className="chip solid">{i}</span>)}
            </div>
          </section>
        ))}
      </div>
    </Page>
  );
}