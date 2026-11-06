import Page from '@/components/Page';
import { site } from '@/data/site';

export const metadata = { title: 'About | Carlos' };

export default function About() {
  return (
    <Page title="About me" subtitle={site.role}>
      {site.about.map((p) => <p key={p} style={{ maxWidth: 720 }}>{p}</p>)}
      <h3 style={{ marginTop: 48 }}>Focus areas</h3>
      <div className="grid two">
        {site.focus.map((f) => (
          <div key={f.title} className="card"><h5>{f.title}</h5><p className="muted">{f.text}</p></div>
        ))}
      </div>

    </Page>
  );
}