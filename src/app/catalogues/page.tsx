import { Metadata } from 'next';
import CataloguesPageContent from './CataloguesPageContent';

export const metadata: Metadata = {
  title: 'Download Catalogues (PDF) — Play Solution',
  description: 'Download official Play Solution product catalogues in PDF format. Includes 954 products across Indoor, Outdoor, ZippyPlay, and Little Woods Wooden Montessori ranges.',
};

export default function CataloguesPage() {
  return <CataloguesPageContent />;
}
