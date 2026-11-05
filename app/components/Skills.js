import Section from './Section';
import { site } from '../../data/mydata';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid">
        {Object.entries(site.skills).map(([group, items]) => (
          <div key={group} className="card">
            <h3>{group}</h3>
            <div className="row">{items.map((i) => <span key={i} className="tag">{i}</span>)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}