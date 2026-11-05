import { site } from '../../data/mydata';

export default function Nav() {
  return (
    <nav className="nav">
      {site.nav.map((id) => <a key={id} href={`#${id}`}>{id.replace('-', ' ')}</a>)}
    </nav>
  );
}