import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import CategoriesSection from '@/components/sections/CategoriesSection';
import TrendingProducts from '@/components/sections/TrendingProducts';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import HowItWorks from '@/components/sections/HowItWorks';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import OurWorkShowcase from '@/components/sections/OurWorkShowcase';
import InstagramShowcase from '@/components/sections/InstagramShowcase';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Play Solution — Premium Kindergarten Equipment | Where Little Dreams Come to Play',
  description: 'India\'s trusted kindergarten equipment supplier. Slides, swings, play stations, classroom furniture & more. Trusted by 200+ schools. Get a free quote today!',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <HeroSection />
      <StatsBar />
      <CategoriesSection />
      <TrendingProducts />
      <WhyChooseUs />
      <HowItWorks />
      <OurWorkShowcase />
      <InstagramShowcase />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}
