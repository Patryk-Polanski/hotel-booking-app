import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import ToasterProvider from './providers/ToasterProvider';

import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
