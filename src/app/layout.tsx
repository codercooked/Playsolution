import type { Metadata } from 'next';
import { Nunito, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIChatbot from '@/components/ui/AIChatbot';
import TextLoop from '@/components/ui/TextLoop';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Play Solution — Premium Kindergarten Equipment',
  description: 'Where Little Dreams Come to Play. Premium kindergarten school equipment including slides, swings, play stations, and classroom furniture. Trusted by 200+ schools across India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-text antialiased relative min-h-screen">
        
        {/* Global Ambient Background TextLoop Layer across ALL pages & slides */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.14] flex flex-col justify-around py-16 select-none">
          <TextLoop
            text="PLAY SOLUTION ✦ WHERE LITTLE DREAMS COME TO PLAY ✦ KINDERGARTEN EQUIPMENT"
            shape="wave"
            speed={75}
            direction="forward"
            separator="✦"
            curviness={95}
            fontSize={50}
            fontWeight={900}
            letterSpacing={4}
            uppercase
            color="#FF6B35"
            ribbon={true}
            ribbonColor="rgba(255, 209, 102, 0.4)"
            ribbonWidth={90}
            pauseOnHover={false}
          />
          <TextLoop
            text="PRESCHOOL FURNITURE ✦ SLIDES & SWINGS ✦ BALL POOLS ✦ TOYS ✦ PLAY STATIONS"
            shape="wave"
            speed={65}
            direction="reverse"
            separator="✦"
            curviness={85}
            fontSize={44}
            fontWeight={900}
            letterSpacing={3}
            uppercase
            color="#7B68EE"
            ribbon={true}
            ribbonColor="rgba(78, 205, 196, 0.3)"
            ribbonWidth={80}
            pauseOnHover={false}
          />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <AIChatbot />
        </div>
      </body>
    </html>
  );
}
