import { Metadata } from 'next';
import ProductsPageContent from './ProductsPageContent';

export const metadata: Metadata = {
  title: 'Products — Play Solution',
  description: 'Browse our complete range of kindergarten play equipment, from indoor play stations to outdoor swings and educational toys.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16">
      <ProductsPageContent />
    </main>
  );
}
