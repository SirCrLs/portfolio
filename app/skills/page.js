import Page from '@/components/Page';
import { site } from '@/data/site';

export const metadata = { title: 'Skills | Carlos' };

export default function Skills() {
  return (
    <Page title="Skills" subtitle="Tools and technologies I work with">
      <div className="grid two">
        {Object.entries(site.skills).map(([group, { text, items }]) => (
          <div key={group} className="card">
            <h5>{group}</h5>
            <p className="muted">{text}</p>
            <div className="row">{items.map((i) => <span key={i} className="chip solid">{i}</span>)}</div>
          </div>
        ))}
      </div>
    </Page>
  );
}