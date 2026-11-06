export default function Page({ title, subtitle, children }) {
  return (
    <>
      <header className="page-head">
        <div className="container"><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
      </header>
      <div className="container section">{children}</div>
    </>
  );
}