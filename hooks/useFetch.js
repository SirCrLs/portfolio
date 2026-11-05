'use client';
import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [state, setState] = useState({ status: 'loading', data: null, error: null });
  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch(url, { signal: ac.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setState({ status: 'success', data: await res.json(), error: null });
      } catch (e) {
        if (e.name !== 'AbortError') setState({ status: 'error', data: null, error: e.message });
      }
    })();
    return () => ac.abort();
  }, [url]);
  return state;
}