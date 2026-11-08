export default function Page({ title, subtitle, children, className = '' }) {
  return (
    <>
      <header className={`page-head${className ? ` ${className}` : ''}`}>
        <div className="container"><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
      </header>
      <div className={`container section${className ? ` ${className}` : ''}`}>{children}</div>
    </>
  );
}