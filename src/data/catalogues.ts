export interface CatalogueItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Indoor' | 'Outdoor' | 'Wooden & Montessori' | 'Complete Bundle';
  productCount: number;
  pageCount: number;
  fileSize: string;
  pdfUrl: string;
  description: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  isBundle?: boolean;
}

export const CATALOGUES: CatalogueItem[] = [
  {
    id: 'all-catalogues-bundle',
    title: 'Complete Master Catalogues Package',
    subtitle: 'All 4 Official Product Catalogues (2025-2026)',
    category: 'Complete Bundle',
    productCount: 954,
    pageCount: 304,
    fileSize: '41 MB',
    pdfUrl: '/catalogues/Play_Solution_All_Catalogues_2026.zip',
    description: 'Download all 4 official product catalogues in a single ZIP package containing Indoor, Outdoor, ZippyPlay, and Little Woods Wooden Montessori ranges.',
    badge: '📦 Master ZIP Package (All 4 Catalogues)',
    badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
    accentColor: 'from-amber-500 via-orange-500 to-red-500',
    isBundle: true,
  },
  {
    id: 'indoor-catalogue-2026',
    title: 'Indoor Equipment & School Furniture',
    subtitle: 'Official Indoor Catalogue 2026',
    category: 'Indoor',
    productCount: 259,
    pageCount: 100,
    fileSize: '18 MB',
    pdfUrl: '/catalogues/Indoor_Catalogue_2026.pdf',
    description: 'Classroom desks & seating, activity tables, storage cabinets, soft play modules, indoor slides, and play structures for preschools & schools.',
    badge: '🏫 259 Indoor & Classroom Products',
    badgeColor: 'bg-blue-600 text-white',
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'outdoor-catalogue-2026',
    title: 'Outdoor Playground & Park Equipment',
    subtitle: 'Official Outdoor Catalogue 2026',
    category: 'Outdoor',
    productCount: 217,
    pageCount: 68,
    fileSize: '8.9 MB',
    pdfUrl: '/catalogues/Outdoor_Catalogue_2026.pdf',
    description: 'Multi-play stations, outdoor swings, see-saws, slides, outdoor fitness equipment, merry-go-rounds, and safety rubber flooring mats.',
    badge: '🌲 217 Outdoor Playground Products',
    badgeColor: 'bg-emerald-600 text-white',
    accentColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'zippyplay-catalogue-2025',
    title: 'ZippyPlay Outdoor Series',
    subtitle: 'ZippyPlay Premium Catalogue 2025',
    category: 'Outdoor',
    productCount: 128,
    pageCount: 80,
    fileSize: '8.0 MB',
    pdfUrl: '/catalogues/ZippyPlay_Outdoor_Catalogue_2025.pdf',
    description: 'Modern architectural outdoor multiplay systems, interactive climbers, spring riders, theme-based play stations, and park accessories.',
    badge: '⚡ 128 ZippyPlay Outdoor Systems',
    badgeColor: 'bg-purple-600 text-white',
    accentColor: 'from-purple-600 to-pink-600',
  },
  {
    id: 'little-woods-catalogue-2025',
    title: 'Little Woods Wooden & Montessori Toys',
    subtitle: 'Little Woods Catalogue 2025-26',
    category: 'Wooden & Montessori',
    productCount: 350,
    pageCount: 56,
    fileSize: '9.0 MB',
    pdfUrl: '/catalogues/Little_Woods_Wooden_Catalogue_2025.pdf',
    description: 'Eco-friendly wooden Montessori learning tools, sensory toys, wooden chairs & tables, pretend play sets, puzzles, and fine-motor gear.',
    badge: '🪵 350 Wooden Montessori Products',
    badgeColor: 'bg-amber-700 text-white',
    accentColor: 'from-amber-700 to-amber-900',
  },
];
