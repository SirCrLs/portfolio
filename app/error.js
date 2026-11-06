'use client';

export default function ErrorPage({ reset }) {
  return (
    <div className="container section stack">
      <p className="alert error">Could not load this page. Try again later.</p>
      <div><button className="btn btn-primary" onClick={reset}>Retry</button></div>
    </div>
  );
}