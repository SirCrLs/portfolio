import './globals.css';

export const metadata = { title: 'Carlos | Portfolio', description: 'Backend & data developer portfolio' };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}