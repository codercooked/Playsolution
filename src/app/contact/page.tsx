import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us — Play Solution',
  description: 'Get in touch with Play Solution for kindergarten equipment enquiries, custom quotes, and support. We deliver across India.',
};

export default function ContactPage() {
  return <ContactContent />;
}
