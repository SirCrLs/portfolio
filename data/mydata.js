export const site = {
  name: 'Carlos Leal',
  role: 'Backend & Data Developer',
  tagline: 'CS student focused on backend development and SQL.',
  github: process.env.NEXT_PUBLIC_GITHUB_USER || 'sircrls',
  email: 'you@example.com',
  nav: ['about', 'skills', 'projects', 'contact'],
  skills: {
    Backend: ['Python', 'FastAPI', 'Scala', 'Node.js'],
    Data: ['SQL', 'PostgreSQL', 'ETL', 'Machine Learning'],
    Frontend: ['React', 'Next.js', 'CSS', 'JavaScript'],
    DevOps: ['Docker', 'Git', 'Vercel', 'AWS'],
  }
};