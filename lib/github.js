import { site } from '@/data/site';

async function gh(path) {
  const token = process.env.GITHUB_TOKEN;
  const res = await fetch(`https://api.github.com${path}`, {
    next: { revalidate: 3600 },
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export async function getRepos() {
  return ((await gh(`/users/${site.github}/repos?sort=updated&per_page=30`)) || []).filter((r) => !r.fork);
}

export async function getRepo(name) {
  const n = encodeURIComponent(name);
  const [repo, languages] = await Promise.all([gh(`/repos/${site.github}/${n}`), gh(`/repos/${site.github}/${n}/languages`)]);
  return repo && { repo, languages: languages || {} };
}