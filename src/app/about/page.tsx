import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us — Play Solution',
  description: 'Learn about Play Solution — India\'s trusted kindergarten equipment company since 2009. Our mission is to create safe, fun, and inspiring play spaces for children.',
};

export default function AboutPage() {
  return <AboutContent />;
}
