'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Name<input name="name" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Message<textarea name="message" rows={5} required /></label>
      <button className="btn btn-primary" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send'}</button>
      {status === 'success' && <p className="alert success">Message sent!</p>}
      {status === 'error' && <p className="alert error">Something went wrong. Please retry.</p>}
    </form>
  );
}