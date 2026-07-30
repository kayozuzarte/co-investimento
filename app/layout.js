import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://SEU-DOMINIO.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kayo Zuzarte | Assessor de Investimentos com Consórcio',
    template: '%s | Kayo Zuzarte',
  },
  description:
    'Eu não vendo investimentos. Eu invisto junto. Método de co-investimento com alinhamento real de interesses, antes de qualquer proposta.',
  keywords: [
    'assessor de investimentos',
    'consórcio',
    'co-investimento',
    'Kayo Zuzarte',
    'investimentos São Paulo',
  ],
  authors: [{ name: 'Kayo Zuzarte' }],
  openGraph: {
    title: 'Kayo Zuzarte | Assessor de Investimentos com Consórcio',
    description: 'Eu não vendo investimentos. Eu invisto junto.',
    url: SITE_URL,
    siteName: 'Kayo Zuzarte',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kayo Zuzarte | Assessor de Investimentos com Consórcio',
    description: 'Eu não vendo investimentos. Eu invisto junto.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0e0e0c',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
