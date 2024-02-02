import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';

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
        <Modal actionLabel='Submit' title='Hello World' isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
