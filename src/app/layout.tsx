import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Nesso Digitale',
    template: '%s | Nesso Digitale',
  },
  description:
    'Digital agency helping businesses design, build, and scale high-quality digital products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${plusJakartaSans.variable}
          ${poppins.variable}
          antialiased text-gray-900
          `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
