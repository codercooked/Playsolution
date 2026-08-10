export interface Category {
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
  price: string;
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

export const categories: Category[] = [
  {
    "id": "indoor",
    "name": "Indoor Play Equipment",
    "slug": "indoor",
    "icon": "play",
    "color": "#FF6B35",
    "description": "Fun indoor setups for active play",
    "count": 6
  },
  {
    "id": "outdoor",
    "name": "Outdoor Play Sets",
    "slug": "outdoor",
    "icon": "shapes",
    "color": "#4ECDC4",
    "description": "Durable outdoor playground equipment",
    "count": 6
  },
  {
    "id": "classroom",
    "name": "Classroom Furniture",
    "slug": "classroom",
    "icon": "furniture",
    "color": "#7B68EE",
    "description": "Ergonomic furniture for little learners",
    "count": 4
  },
  {
    "id": "slides-swings",
    "name": "Slides & Swings",
    "slug": "slides-swings",
    "icon": "shapes",
    "color": "#FF6B9D",
    "description": "Classic playground favorites",
    "count": 4
  },
  {
    "id": "ball-pools",
    "name": "Ball Pools & Sandpits",
    "slug": "ball-pools",
    "icon": "toys",
    "color": "#45B7D1",
    "description": "Sensory play zones for kids",
    "count": 2
  },
  {
    "id": "toys",
    "name": "Educational Toys",
    "slug": "toys",
    "icon": "toys",
    "color": "#96CEB4",
    "description": "Learning through play essentials",
    "count": 4
  }
];

export const products: Product[] = [
  {
    "id": "prod-1",
    "slug": "rainbow-slide-set",
    "name": "Rainbow Slide Set",
    "price": "₹14,999",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "High-quality rainbow slide set for children.",
    "description": "This rainbow slide set provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Rainbow Slide Set is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B35/white?text=Rainbow+Slide+Set",
    "imageUrl": "https://placehold.co/600x400/FF6B35/white?text=Rainbow+Slide+Set",
    "thumbnails": [
      "https://placehold.co/200x200/E85D2C/white?text=Rainbow+Slide+Set",
      "https://placehold.co/200x200/D4522A/white?text=Rainbow+Slide+Set",
      "https://placehold.co/200x200/FF8C5E/white?text=Rainbow+Slide+Set"
    ]
  },
  {
    "id": "prod-2",
    "slug": "ball-pool-with-fence",
    "name": "Ball Pool with Fence",
    "price": "₹28,500",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "High-quality ball pool with fence for children.",
    "description": "This ball pool with fence provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Ball Pool with Fence is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B35/white?text=Ball+Pool+with+Fence",
    "imageUrl": "https://placehold.co/600x400/FF6B35/white?text=Ball+Pool+with+Fence",
    "thumbnails": [
      "https://placehold.co/200x200/E85D2C/white?text=Ball+Pool+with+Fence",
      "https://placehold.co/200x200/D4522A/white?text=Ball+Pool+with+Fence",
      "https://placehold.co/200x200/FF8C5E/white?text=Ball+Pool+with+Fence"
    ]
  },
  {
    "id": "prod-3",
    "slug": "indoor-play-house",
    "name": "Indoor Play House",
    "price": "₹34,999",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "High-quality indoor play house for children.",
    "description": "This indoor play house provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Indoor Play House is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B35/white?text=Indoor+Play+House",
    "imageUrl": "https://placehold.co/600x400/FF6B35/white?text=Indoor+Play+House",
    "thumbnails": [
      "https://placehold.co/200x200/E85D2C/white?text=Indoor+Play+House",
      "https://placehold.co/200x200/D4522A/white?text=Indoor+Play+House",
      "https://placehold.co/200x200/FF8C5E/white?text=Indoor+Play+House"
    ]
  },
  {
    "id": "prod-4",
    "slug": "rocking-horse",
    "name": "Rocking Horse",
    "price": "₹4,499",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "High-quality rocking horse for children.",
    "description": "This rocking horse provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Rocking Horse is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B35/white?text=Rocking+Horse",
    "imageUrl": "https://placehold.co/600x400/FF6B35/white?text=Rocking+Horse",
    "thumbnails": [
      "https://placehold.co/200x200/E85D2C/white?text=Rocking+Horse",
      "https://placehold.co/200x200/D4522A/white?text=Rocking+Horse",
      "https://placehold.co/200x200/FF8C5E/white?text=Rocking+Horse"
    ]
  },
  {
    "id": "prod-5",
    "slug": "soft-play-station",
    "name": "Soft Play Station",
    "price": "₹42,000",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "High-quality soft play station for children.",
    "description": "This soft play station provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Soft Play Station is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B35/white?text=Soft+Play+Station",
    "imageUrl": "https://placehold.co/600x400/FF6B35/white?text=Soft+Play+Station",
    "thumbnails": [
      "https://placehold.co/200x200/E85D2C/white?text=Soft+Play+Station",
      "https://placehold.co/200x200/D4522A/white?text=Soft+Play+Station",
      "https://placehold.co/200x200/FF8C5E/white?text=Soft+Play+Station"
    ]
  },
  {
    "id": "prod-6",
    "slug": "foam-climbing-block",
    "name": "Foam Climbing Block",
    "price": "₹18,500",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "High-quality foam climbing block for children.",
    "description": "This foam climbing block provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Foam Climbing Block is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B35/white?text=Foam+Climbing+Block",
    "imageUrl": "https://placehold.co/600x400/FF6B35/white?text=Foam+Climbing+Block",
    "thumbnails": [
      "https://placehold.co/200x200/E85D2C/white?text=Foam+Climbing+Block",
      "https://placehold.co/200x200/D4522A/white?text=Foam+Climbing+Block",
      "https://placehold.co/200x200/FF8C5E/white?text=Foam+Climbing+Block"
    ]
  },
  {
    "id": "prod-7",
    "slug": "multi-play-station",
    "name": "Multi-Play Station",
    "price": "₹85,000",
    "category": "Outdoor Play Sets",
    "categoryId": "outdoor",
    "categoryColor": "#4ECDC4",
    "shortDescription": "High-quality multi-play station for children.",
    "description": "This multi-play station provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Multi-Play Station is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/4ECDC4/white?text=Multi-Play+Station",
    "imageUrl": "https://placehold.co/600x400/4ECDC4/white?text=Multi-Play+Station",
    "thumbnails": [
      "https://placehold.co/200x200/3DBDB5/white?text=Multi-Play+Station",
      "https://placehold.co/200x200/2DADA5/white?text=Multi-Play+Station",
      "https://placehold.co/200x200/6EDDD5/white?text=Multi-Play+Station"
    ]
  },
  {
    "id": "prod-8",
    "slug": "outdoor-swing-set",
    "name": "Outdoor Swing Set",
    "price": "₹38,999",
    "category": "Outdoor Play Sets",
    "categoryId": "outdoor",
    "categoryColor": "#4ECDC4",
    "shortDescription": "High-quality outdoor swing set for children.",
    "description": "This outdoor swing set provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Outdoor Swing Set is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/4ECDC4/white?text=Outdoor+Swing+Set",
    "imageUrl": "https://placehold.co/600x400/4ECDC4/white?text=Outdoor+Swing+Set",
    "thumbnails": [
      "https://placehold.co/200x200/3DBDB5/white?text=Outdoor+Swing+Set",
      "https://placehold.co/200x200/2DADA5/white?text=Outdoor+Swing+Set",
      "https://placehold.co/200x200/6EDDD5/white?text=Outdoor+Swing+Set"
    ]
  },
  {
    "id": "prod-9",
    "slug": "see-saw-classic",
    "name": "See-Saw Classic",
    "price": "₹16,500",
    "category": "Outdoor Play Sets",
    "categoryId": "outdoor",
    "categoryColor": "#4ECDC4",
    "shortDescription": "High-quality see-saw classic for children.",
    "description": "This see-saw classic provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The See-Saw Classic is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/4ECDC4/white?text=See-Saw+Classic",
    "imageUrl": "https://placehold.co/600x400/4ECDC4/white?text=See-Saw+Classic",
    "thumbnails": [
      "https://placehold.co/200x200/3DBDB5/white?text=See-Saw+Classic",
      "https://placehold.co/200x200/2DADA5/white?text=See-Saw+Classic",
      "https://placehold.co/200x200/6EDDD5/white?text=See-Saw+Classic"
    ]
  },
  {
    "id": "prod-10",
    "slug": "merry-go-round",
    "name": "Merry-Go-Round",
    "price": "₹29,999",
    "category": "Outdoor Play Sets",
    "categoryId": "outdoor",
    "categoryColor": "#4ECDC4",
    "shortDescription": "High-quality merry-go-round for children.",
    "description": "This merry-go-round provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Merry-Go-Round is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/4ECDC4/white?text=Merry-Go-Round",
    "imageUrl": "https://placehold.co/600x400/4ECDC4/white?text=Merry-Go-Round",
    "thumbnails": [
      "https://placehold.co/200x200/3DBDB5/white?text=Merry-Go-Round",
      "https://placehold.co/200x200/2DADA5/white?text=Merry-Go-Round",
      "https://placehold.co/200x200/6EDDD5/white?text=Merry-Go-Round"
    ]
  },
  {
    "id": "prod-11",
    "slug": "spring-rider",
    "name": "Spring Rider",
    "price": "₹12,499",
    "category": "Outdoor Play Sets",
    "categoryId": "outdoor",
    "categoryColor": "#4ECDC4",
    "shortDescription": "High-quality spring rider for children.",
    "description": "This spring rider provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Spring Rider is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/4ECDC4/white?text=Spring+Rider",
    "imageUrl": "https://placehold.co/600x400/4ECDC4/white?text=Spring+Rider",
    "thumbnails": [
      "https://placehold.co/200x200/3DBDB5/white?text=Spring+Rider",
      "https://placehold.co/200x200/2DADA5/white?text=Spring+Rider",
      "https://placehold.co/200x200/6EDDD5/white?text=Spring+Rider"
    ]
  },
  {
    "id": "prod-12",
    "slug": "climbing-frame",
    "name": "Climbing Frame",
    "price": "₹49,500",
    "category": "Outdoor Play Sets",
    "categoryId": "outdoor",
    "categoryColor": "#4ECDC4",
    "shortDescription": "High-quality climbing frame for children.",
    "description": "This climbing frame provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Climbing Frame is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/4ECDC4/white?text=Climbing+Frame",
    "imageUrl": "https://placehold.co/600x400/4ECDC4/white?text=Climbing+Frame",
    "thumbnails": [
      "https://placehold.co/200x200/3DBDB5/white?text=Climbing+Frame",
      "https://placehold.co/200x200/2DADA5/white?text=Climbing+Frame",
      "https://placehold.co/200x200/6EDDD5/white?text=Climbing+Frame"
    ]
  },
  {
    "id": "prod-13",
    "slug": "kindergarten-table-chair-set",
    "name": "Kindergarten Table-Chair Set",
    "price": "₹8,999",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "High-quality kindergarten table-chair set for children.",
    "description": "This kindergarten table-chair set provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Kindergarten Table-Chair Set is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/7B68EE/white?text=Kindergarten+Table-Chair+Set",
    "imageUrl": "https://placehold.co/600x400/7B68EE/white?text=Kindergarten+Table-Chair+Set",
    "thumbnails": [
      "https://placehold.co/200x200/6A57DD/white?text=Kindergarten+Table-Chair+Set",
      "https://placehold.co/200x200/5946CC/white?text=Kindergarten+Table-Chair+Set",
      "https://placehold.co/200x200/8C79FF/white?text=Kindergarten+Table-Chair+Set"
    ]
  },
  {
    "id": "prod-14",
    "slug": "colorful-storage-shelf",
    "name": "Colorful Storage Shelf",
    "price": "₹11,499",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "High-quality colorful storage shelf for children.",
    "description": "This colorful storage shelf provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Colorful Storage Shelf is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/7B68EE/white?text=Colorful+Storage+Shelf",
    "imageUrl": "https://placehold.co/600x400/7B68EE/white?text=Colorful+Storage+Shelf",
    "thumbnails": [
      "https://placehold.co/200x200/6A57DD/white?text=Colorful+Storage+Shelf",
      "https://placehold.co/200x200/5946CC/white?text=Colorful+Storage+Shelf",
      "https://placehold.co/200x200/8C79FF/white?text=Colorful+Storage+Shelf"
    ]
  },
  {
    "id": "prod-15",
    "slug": "alphabet-mat",
    "name": "Alphabet Mat",
    "price": "₹3,999",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "High-quality alphabet mat for children.",
    "description": "This alphabet mat provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Alphabet Mat is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/7B68EE/white?text=Alphabet+Mat",
    "imageUrl": "https://placehold.co/600x400/7B68EE/white?text=Alphabet+Mat",
    "thumbnails": [
      "https://placehold.co/200x200/6A57DD/white?text=Alphabet+Mat",
      "https://placehold.co/200x200/5946CC/white?text=Alphabet+Mat",
      "https://placehold.co/200x200/8C79FF/white?text=Alphabet+Mat"
    ]
  },
  {
    "id": "prod-16",
    "slug": "classroom-bench-set",
    "name": "Classroom Bench Set",
    "price": "₹14,500",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "High-quality classroom bench set for children.",
    "description": "This classroom bench set provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Classroom Bench Set is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/7B68EE/white?text=Classroom+Bench+Set",
    "imageUrl": "https://placehold.co/600x400/7B68EE/white?text=Classroom+Bench+Set",
    "thumbnails": [
      "https://placehold.co/200x200/6A57DD/white?text=Classroom+Bench+Set",
      "https://placehold.co/200x200/5946CC/white?text=Classroom+Bench+Set",
      "https://placehold.co/200x200/8C79FF/white?text=Classroom+Bench+Set"
    ]
  },
  {
    "id": "prod-17",
    "slug": "double-slide-tower",
    "name": "Double Slide Tower",
    "price": "₹54,999",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "High-quality double slide tower for children.",
    "description": "This double slide tower provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Double Slide Tower is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B9D/white?text=Double+Slide+Tower",
    "imageUrl": "https://placehold.co/600x400/FF6B9D/white?text=Double+Slide+Tower",
    "thumbnails": [
      "https://placehold.co/200x200/E85A8C/white?text=Double+Slide+Tower",
      "https://placehold.co/200x200/D4497B/white?text=Double+Slide+Tower",
      "https://placehold.co/200x200/FF7CAE/white?text=Double+Slide+Tower"
    ]
  },
  {
    "id": "prod-18",
    "slug": "toddler-swing-set",
    "name": "Toddler Swing Set",
    "price": "₹22,000",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "High-quality toddler swing set for children.",
    "description": "This toddler swing set provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Toddler Swing Set is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B9D/white?text=Toddler+Swing+Set",
    "imageUrl": "https://placehold.co/600x400/FF6B9D/white?text=Toddler+Swing+Set",
    "thumbnails": [
      "https://placehold.co/200x200/E85A8C/white?text=Toddler+Swing+Set",
      "https://placehold.co/200x200/D4497B/white?text=Toddler+Swing+Set",
      "https://placehold.co/200x200/FF7CAE/white?text=Toddler+Swing+Set"
    ]
  },
  {
    "id": "prod-19",
    "slug": "spiral-slide",
    "name": "Spiral Slide",
    "price": "₹46,500",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "High-quality spiral slide for children.",
    "description": "This spiral slide provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Spiral Slide is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B9D/white?text=Spiral+Slide",
    "imageUrl": "https://placehold.co/600x400/FF6B9D/white?text=Spiral+Slide",
    "thumbnails": [
      "https://placehold.co/200x200/E85A8C/white?text=Spiral+Slide",
      "https://placehold.co/200x200/D4497B/white?text=Spiral+Slide",
      "https://placehold.co/200x200/FF7CAE/white?text=Spiral+Slide"
    ]
  },
  {
    "id": "prod-20",
    "slug": "combo-slide-swing",
    "name": "Combo Slide & Swing",
    "price": "₹62,000",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "High-quality combo slide & swing for children.",
    "description": "This combo slide & swing provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Combo Slide & Swing is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/FF6B9D/white?text=Combo+Slide+&+Swing",
    "imageUrl": "https://placehold.co/600x400/FF6B9D/white?text=Combo+Slide+&+Swing",
    "thumbnails": [
      "https://placehold.co/200x200/E85A8C/white?text=Combo+Slide+&+Swing",
      "https://placehold.co/200x200/D4497B/white?text=Combo+Slide+&+Swing",
      "https://placehold.co/200x200/FF7CAE/white?text=Combo+Slide+&+Swing"
    ]
  },
  {
    "id": "prod-21",
    "slug": "deluxe-ball-pool",
    "name": "Deluxe Ball Pool",
    "price": "₹31,500",
    "category": "Ball Pools & Sandpits",
    "categoryId": "ball-pools",
    "categoryColor": "#45B7D1",
    "shortDescription": "High-quality deluxe ball pool for children.",
    "description": "This deluxe ball pool provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Deluxe Ball Pool is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/45B7D1/white?text=Deluxe+Ball+Pool",
    "imageUrl": "https://placehold.co/600x400/45B7D1/white?text=Deluxe+Ball+Pool",
    "thumbnails": [
      "https://placehold.co/200x200/34A6C0/white?text=Deluxe+Ball+Pool",
      "https://placehold.co/200x200/2395AF/white?text=Deluxe+Ball+Pool",
      "https://placehold.co/200x200/56C8E2/white?text=Deluxe+Ball+Pool"
    ]
  },
  {
    "id": "prod-22",
    "slug": "sandpit-play-zone",
    "name": "Sandpit Play Zone",
    "price": "₹26,999",
    "category": "Ball Pools & Sandpits",
    "categoryId": "ball-pools",
    "categoryColor": "#45B7D1",
    "shortDescription": "High-quality sandpit play zone for children.",
    "description": "This sandpit play zone provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Sandpit Play Zone is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/45B7D1/white?text=Sandpit+Play+Zone",
    "imageUrl": "https://placehold.co/600x400/45B7D1/white?text=Sandpit+Play+Zone",
    "thumbnails": [
      "https://placehold.co/200x200/34A6C0/white?text=Sandpit+Play+Zone",
      "https://placehold.co/200x200/2395AF/white?text=Sandpit+Play+Zone",
      "https://placehold.co/200x200/56C8E2/white?text=Sandpit+Play+Zone"
    ]
  },
  {
    "id": "prod-23",
    "slug": "wooden-building-blocks",
    "name": "Wooden Building Blocks",
    "price": "₹2,499",
    "category": "Educational Toys",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "High-quality wooden building blocks for children.",
    "description": "This wooden building blocks provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Wooden Building Blocks is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/96CEB4/white?text=Wooden+Building+Blocks",
    "imageUrl": "https://placehold.co/600x400/96CEB4/white?text=Wooden+Building+Blocks",
    "thumbnails": [
      "https://placehold.co/200x200/85BDA3/white?text=Wooden+Building+Blocks",
      "https://placehold.co/200x200/74AC92/white?text=Wooden+Building+Blocks",
      "https://placehold.co/200x200/A7DFC5/white?text=Wooden+Building+Blocks"
    ]
  },
  {
    "id": "prod-24",
    "slug": "xylophone-set",
    "name": "Xylophone Set",
    "price": "₹1,899",
    "category": "Educational Toys",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "High-quality xylophone set for children.",
    "description": "This xylophone set provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Xylophone Set is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/96CEB4/white?text=Xylophone+Set",
    "imageUrl": "https://placehold.co/600x400/96CEB4/white?text=Xylophone+Set",
    "thumbnails": [
      "https://placehold.co/200x200/85BDA3/white?text=Xylophone+Set",
      "https://placehold.co/200x200/74AC92/white?text=Xylophone+Set",
      "https://placehold.co/200x200/A7DFC5/white?text=Xylophone+Set"
    ]
  },
  {
    "id": "prod-25",
    "slug": "stacking-rings",
    "name": "Stacking Rings",
    "price": "₹1,299",
    "category": "Educational Toys",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "High-quality stacking rings for children.",
    "description": "This stacking rings provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Stacking Rings is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/96CEB4/white?text=Stacking+Rings",
    "imageUrl": "https://placehold.co/600x400/96CEB4/white?text=Stacking+Rings",
    "thumbnails": [
      "https://placehold.co/200x200/85BDA3/white?text=Stacking+Rings",
      "https://placehold.co/200x200/74AC92/white?text=Stacking+Rings",
      "https://placehold.co/200x200/A7DFC5/white?text=Stacking+Rings"
    ]
  },
  {
    "id": "prod-26",
    "slug": "educational-puzzle-set",
    "name": "Educational Puzzle Set",
    "price": "₹2,999",
    "category": "Educational Toys",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "High-quality educational puzzle set for children.",
    "description": "This educational puzzle set provides endless fun and development. Built with durable materials for safety and longevity. Perfect for engaging young minds and active bodies.",
    "longDescription": "The Educational Puzzle Set is designed to spark imagination and encourage physical activity. It features sturdy construction with non-toxic finishes, ensuring a safe play environment. Easy to assemble and maintain, it is an excellent addition to any play area. Recommended by educators and parents alike for its developmental benefits.",
    "features": [
      "Durable and safe construction",
      "Non-toxic, child-friendly materials",
      "Encourages physical and cognitive development",
      "Easy to assemble and clean",
      "Vibrant, engaging colors"
    ],
    "specifications": {
      "material": "High-density Polyethylene (HDPE)",
      "ageGroup": "2-6 years",
      "dimensions": "120cm x 80cm x 100cm",
      "capacity": "Up to 3 children",
      "colorOptions": "Multicolor",
      "warranty": "1 Year Limited Warranty"
    },
    "image": "https://placehold.co/600x400/96CEB4/white?text=Educational+Puzzle+Set",
    "imageUrl": "https://placehold.co/600x400/96CEB4/white?text=Educational+Puzzle+Set",
    "thumbnails": [
      "https://placehold.co/200x200/85BDA3/white?text=Educational+Puzzle+Set",
      "https://placehold.co/200x200/74AC92/white?text=Educational+Puzzle+Set",
      "https://placehold.co/200x200/A7DFC5/white?text=Educational+Puzzle+Set"
    ]
  }
];

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
