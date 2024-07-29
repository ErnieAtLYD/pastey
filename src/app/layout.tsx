// app/layout.tsx
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pastebin Service',
  description: 'A simple pastebin service built with Next.js and React Server Components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}