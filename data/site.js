export const site = {
  name: 'Carlos',
  role: 'Backend & Data Developer',
  tagline: 'CS student focused on backend development and SQL.',
  github: 'sircrls',
  email: 'carlos.leal.lcc@outlook.com',
  linkedin: 'https://linkedin.com/in/carlos-leal-delgado',
  nav: [
    { label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' }, { label: 'Contact', href: '/contact' },
  ],
  about: ['Computer Science student focused on backend development and SQL.', 'Mas cosas, ahorita los pongo.'],
  focus: [
    { title: 'Backend', text: 'APIs and services.' },
    { title: 'SQL & Data', text: 'Schemas, queries and ETL pipelines.' },
  ],
  skills: {
    Backend: { text: 'Services and APIs.', items: ['Python', 'FastAPI', 'Scala', 'Http4s'] },
    Data: { text: 'Modeling, pipelines and ML.', items: ['SQL', 'PostgreSQL', 'ETL', 'Machine Learning'] },
    Frontend: { text: 'Interfaces with React.', items: ['React', 'Next.js', 'MUI', 'JavaScript'] },
    DevOps: { text: 'Shipping to production.', items: ['Docker', 'Git', 'Vercel', 'AWS'] },
  },
};