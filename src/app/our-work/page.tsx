import { Metadata } from 'next';
import OurWorkPageContent from './OurWorkPageContent';

export const metadata: Metadata = {
  title: 'Our Work & Site Showcase — Play Solution Playground Installations',
  description: 'Explore real site installation photos of Play Solution kindergarten playgrounds, outdoor multi-play stations, preschool furniture, and soft play setups across India.',
};

export default function OurWorkPage() {
  return <OurWorkPageContent />;
}
