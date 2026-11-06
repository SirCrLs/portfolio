import Page from '@/components/Page';
import ContactForm from '@/components/ContactForm';
import { site } from '@/data/site';

export const metadata = { title: 'Contact | Carlos' };

const links = [
  ['Email', `mailto:${site.email}`, site.email],
  ['GitHub', `https://github.com/${site.github}`, `github.com/${site.github}`],
  ['LinkedIn', site.linkedin, 'Connect with me'],
];

export default function Contact() {
  return (
    <Page title="Contact" subtitle="Let's talk about your project or opportunity">
      <div className="split rev">
        <div className="stack">
          {links.map(([label, href, text], i) => (
            <div key={label} className="card">
              <h5>{label}</h5>
              <p className="muted">{text}</p>
              <a href={href} target="_blank" rel="noreferrer" className={`btn ${i ? 'btn-secondary' : 'btn-primary'}`}>Open</a>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </Page>
  );
}