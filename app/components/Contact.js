'use client';
import { useState } from 'react';
import Section from './Section';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      });
      if (!res.ok) throw new Error();
      e.target.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Section id="contact" title="Contact">
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows={5} required />
        <button className="btn" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send'}</button>
        {status === 'success' && <p className="ok">Message sent!</p>}
        {status === 'error' && <p className="error">Something went wrong. Please retry.</p>}
      </form>
    </Section>
  );
}