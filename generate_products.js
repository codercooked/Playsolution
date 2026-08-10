const fs = require('fs');

const categories = [
  { id: 'indoor', name: 'Indoor Play Equipment', slug: 'indoor', icon: 'play', color: '#FF6B35', description: 'Fun indoor setups for active play', count: 6 },
  { id: 'outdoor', name: 'Outdoor Play Sets', slug: 'outdoor', icon: 'shapes', color: '#4ECDC4', description: 'Durable outdoor playground equipment', count: 6 },
  { id: 'classroom', name: 'Classroom Furniture', slug: 'classroom', icon: 'furniture', color: '#7B68EE', description: 'Ergonomic furniture for little learners', count: 4 },
  { id: 'slides-swings', name: 'Slides & Swings', slug: 'slides-swings', icon: 'shapes', color: '#FF6B9D', description: 'Classic playground favorites', count: 4 },
  { id: 'ball-pools', name: 'Ball Pools & Sandpits', slug: 'ball-pools', icon: 'toys', color: '#45B7D1', description: 'Sensory play zones for kids', count: 2 },
  { id: 'toys', name: 'Educational Toys', slug: 'toys', icon: 'toys', color: '#96CEB4', description: 'Learning through play essentials', count: 4 },
];

const categoryThumbnails = {
  'indoor': ['E85D2C', 'D4522A', 'FF8C5E'],
  'outdoor': ['3DBDB5', '2DADA5', '6EDDD5'],
  'classroom': ['6A57DD', '5946CC', '8C79FF'],
  'slides-swings': ['E85A8C', 'D4497B', 'FF7CAE'],
  'ball-pools': ['34A6C0', '2395AF', '56C8E2'],
  'toys': ['85BDA3', '74AC92', 'A7DFC5']
};

const rawProducts = [
  { name: 'Rainbow Slide Set', category: 'indoor' },
  { name: 'Ball Pool with Fence', category: 'indoor' },
  { name: 'Indoor Play House', category: 'indoor' },
  { name: 'Rocking Horse', category: 'indoor' },
  { name: 'Soft Play Station', category: 'indoor' },
  { name: 'Foam Climbing Block', category: 'indoor' },
  
  { name: 'Multi-Play Station', category: 'outdoor' },
  { name: 'Outdoor Swing Set', category: 'outdoor' },
  { name: 'See-Saw Classic', category: 'outdoor' },
  { name: 'Merry-Go-Round', category: 'outdoor' },
  { name: 'Spring Rider', category: 'outdoor' },
  { name: 'Climbing Frame', category: 'outdoor' },
  
  { name: 'Kindergarten Table-Chair Set', category: 'classroom' },
  { name: 'Colorful Storage Shelf', category: 'classroom' },
  { name: 'Alphabet Mat', category: 'classroom' },
  { name: 'Classroom Bench Set', category: 'classroom' },
  
  { name: 'Double Slide Tower', category: 'slides-swings' },
  { name: 'Toddler Swing Set', category: 'slides-swings' },
  { name: 'Spiral Slide', category: 'slides-swings' },
  { name: 'Combo Slide & Swing', category: 'slides-swings' },
  
  { name: 'Deluxe Ball Pool', category: 'ball-pools' },
  { name: 'Sandpit Play Zone', category: 'ball-pools' },
  
  { name: 'Wooden Building Blocks', category: 'toys' },
  { name: 'Xylophone Set', category: 'toys' },
  { name: 'Stacking Rings', category: 'toys' },
  { name: 'Educational Puzzle Set', category: 'toys' },
];

function generateSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

let products = [];
rawProducts.forEach((rp, idx) => {
  const cat = categories.find(c => c.id === rp.category);
  const color = cat.color.replace('#', '');
  const thumbColors = categoryThumbnails[cat.id];
  const urlName = rp.name.replace(/ /g, '+');
  const image = \`https://placehold.co/600x400/\${color}/white?text=\${urlName}\`;
  
  products.push({
    id: \`prod-\${idx+1}\`,
    slug: generateSlug(rp.name),
    name: rp.name,
    category: cat.name,
    categoryId: cat.id,
    categoryColor: cat.color,
    shortDescription: \`High-quality \${rp.name.toLowerCase()} for children.\`,
    description: \`This \${rp.name.toLowerCase()} provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.\`,
    longDescription: \`The \${rp.name} is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.\`,
    features: [
      'Durable and safe construction',
      'Non-toxic, child-friendly materials',
      'Encourages physical and cognitive development',
      'Easy to assemble and clean',
      'Vibrant, engaging colors'
    ],
    specifications: {
      material: 'High-density Polyethylene (HDPE)',
      ageGroup: '2-6 years',
      dimensions: '120cm x 80cm x 100cm',
      capacity: 'Up to 3 children',
      colorOptions: 'Multicolor',
      warranty: '1 Year Limited Warranty'
    },
    image: image,
    imageUrl: image,
    thumbnails: thumbColors.map(tc => \`https://placehold.co/200x200/\${tc}/white?text=\${urlName}\`)
  });
});

const fileContent = \`export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  description?: string;
  count?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  categoryColor: string;
  shortDescription: string;
  description: string;
  longDescription?: string;
  features: string[];
  specifications: {
    material: string;
    ageGroup: string;
    dimensions: string;
    capacity?: string;
    colorOptions?: string;
    warranty?: string;
  };
  image: string;
  imageUrl: string;
  thumbnails: string[];
}

export const categories: Category[] = \${JSON.stringify(categories, null, 2)};

export const products: Product[] = \${JSON.stringify(products, null, 2)};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categoryId === categorySlug);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, limit);
}
\`;

fs.writeFileSync('/Users/sarthak/Downloads/Funplay/src/data/products.ts', fileContent);
console.log('products.ts generated successfully');
