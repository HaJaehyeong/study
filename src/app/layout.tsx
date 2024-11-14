import type { Metadata } from 'next';
import { NavLinks } from './[lang]/ui/nav-links';
import './globals.css';

export const metadata: Metadata = {
  title: 'Root Study',
  description: 'next app',
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <div>{auth}</div>
        <main>{children}</main>
      </body>
    </html>
  );
}
