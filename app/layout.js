import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = { title: 'Carlos | Portfolio', description: 'Backend & data developer portfolio' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Navbar /><main>{children}</main></body>
    </html>
  );
}