import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/data/products';
import ProductDetailContent from './ProductDetailContent';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  return {
    title: `${product?.name || 'Product Not Found'} — Play Solution`,
    description: product?.description || 'Premium kindergarten equipment',
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <ProductDetailContent product={product} />
    </main>
  );
}
