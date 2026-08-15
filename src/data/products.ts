export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export interface Product {
  id: string;
  code?: string;
  name: string;
  slug: string;
  categoryId: string;
  category: string;
  categoryColor: string;
  price: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  image: string;
  thumbnails?: string[];
  specifications: {
    material: string;
    ageGroup: string;
    dimensions: string;
    capacity: string;
    colorOptions: string;
  };
  features: string[];
  inStock: boolean;
}

export const categories: Category[] = [
  {
    "id": "cat-indoor-tables",
    "name": "Classroom Tables",
    "slug": "indoor-tables",
    "description": "Ergonomic Rounded & Shaped Classroom Tables",
    "color": "#FF6B35",
    "icon": "Blocks"
  },
  {
    "id": "cat-indoor-chairs",
    "name": "Classroom Chairs & Seating",
    "slug": "indoor-chairs",
    "description": "Heavy-Duty Stackable Student Chairs & Benches",
    "color": "#4ECDC4",
    "icon": "Smile"
  },
  {
    "id": "cat-indoor-storage",
    "name": "Storage & Racks",
    "slug": "indoor-storage",
    "description": "Toy Racks, Bookshelves & Shoe Cabinets",
    "color": "#FF6B9D",
    "icon": "Grid"
  },
  {
    "id": "cat-indoor-slides",
    "name": "Indoor Slides & Climbers",
    "slug": "indoor-slides",
    "description": "Plastic Indoor Slides, Rockers & Activity Gyms",
    "color": "#7B68EE",
    "icon": "Sparkles"
  },
  {
    "id": "cat-indoor-softplay",
    "name": "Soft Play & Ball Pools",
    "slug": "indoor-softplay",
    "description": "Foam Play Blocks, Ball Pools & Toddler Zones",
    "color": "#45B7D1",
    "icon": "Heart"
  },
  {
    "id": "cat-indoor-toys",
    "name": "Educational & Roleplay Toys",
    "slug": "indoor-toys",
    "description": "Puppets, Roleplay Sets & Learning Toys",
    "color": "#96CEB4",
    "icon": "Award"
  },
  {
    "id": "cat-outdoor-mps",
    "name": "Outdoor Multiplay Stations",
    "slug": "outdoor-multiplay",
    "description": "Heavy-Duty Multi-Slide Play Stations for Schools & Parks",
    "color": "#4ECDC4",
    "icon": "Castle"
  },
  {
    "id": "cat-outdoor-jps",
    "name": "Junior Play Stations",
    "slug": "outdoor-junior-play",
    "description": "Compact Playground Stations for Toddlers & Preschoolers",
    "color": "#FF6B9D",
    "icon": "Sparkles"
  },
  {
    "id": "cat-outdoor-wsc",
    "name": "Web Scramblers & Climbers",
    "slug": "outdoor-scramblers",
    "description": "Rope Net Scramblers, Web Climbers & Geometric Domes",
    "color": "#7B68EE",
    "icon": "Activity"
  },
  {
    "id": "cat-outdoor-sw",
    "name": "Outdoor Swings",
    "slug": "outdoor-swings",
    "description": "Single, Double & Multi-Seater Heavy-Duty Steel Swings",
    "color": "#45B7D1",
    "icon": "RotateCw"
  },
  {
    "id": "cat-outdoor-sd",
    "name": "Outdoor Slides",
    "slug": "outdoor-slides",
    "description": "Straight, Wave, Spiral & Tunnel Slides",
    "color": "#96CEB4",
    "icon": "Layers"
  },
  {
    "id": "cat-outdoor-ss",
    "name": "See Saws",
    "slug": "outdoor-seesaw",
    "description": "2-Seater, 4-Seater & Spring See-Saws",
    "color": "#FFE66D",
    "icon": "Sliders"
  },
  {
    "id": "cat-outdoor-mgr",
    "name": "Merry Go Rounds",
    "slug": "outdoor-mgr",
    "description": "Standing & Seated Rotating Merry Go Rounds",
    "color": "#FF9F43",
    "icon": "Compass"
  },
  {
    "id": "cat-outdoor-cl",
    "name": "Climbers & Trampolines",
    "slug": "outdoor-climbers",
    "description": "Climbing Frames, Monkey Bars & In-Ground Trampolines",
    "color": "#6C5CE7",
    "icon": "ShieldCheck"
  },
  {
    "id": "cat-outdoor-sr",
    "name": "Spring Riders",
    "slug": "outdoor-spring-riders",
    "description": "Animal & Vehicle UV-Resistant Spring Rockers",
    "color": "#FF7675",
    "icon": "Heart"
  },
  {
    "id": "cat-outdoor-fn",
    "name": "Outdoor Fitness Equipment",
    "slug": "outdoor-fitness",
    "description": "Park Open Gym & Exercise Station Equipment",
    "color": "#00CEC9",
    "icon": "Zap"
  },
  {
    "id": "cat-outdoor-db",
    "name": "Park Amenities & Dustbins",
    "slug": "outdoor-amenities",
    "description": "Animal & Bins Park Waste Management Solutions",
    "color": "#636E72",
    "icon": "Box"
  }
];

export const products: Product[] = [
  {
    "id": "in-3-1",
    "code": "LF-IN-3",
    "name": "LF-IN-3 - Indoor Classroom Tables (Page 3)",
    "slug": "lf-in-3-play-equipment-page-3-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-3. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_3_full.png",
    "image": "/images/products/page_3_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-4-1",
    "code": "LF7021",
    "name": "LF7021 - Indoor Classroom Tables (Page 4)",
    "slug": "lf7021-play-equipment-page-4-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b97,021",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF7021. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_4_full.png",
    "image": "/images/products/page_4_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-5-1",
    "code": "LF7022",
    "name": "LF7022 - Indoor Classroom Tables (Page 5)",
    "slug": "lf7022-play-equipment-page-5-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b97,022",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF7022. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_5_full.png",
    "image": "/images/products/page_5_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-6-1",
    "code": "LF7023",
    "name": "LF7023 - Indoor Classroom Tables (Page 6)",
    "slug": "lf7023-play-equipment-page-6-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b97,023",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF7023. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_6_full.png",
    "image": "/images/products/page_6_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-7-1",
    "code": "LF0431",
    "name": "LF0431 - Indoor Classroom Tables (Page 7)",
    "slug": "lf0431-play-equipment-page-7-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0431. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_7_full.png",
    "image": "/images/products/page_7_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-7-2",
    "code": "LF0431P",
    "name": "LF0431P - Indoor Classroom Tables (Page 7)",
    "slug": "lf0431p-play-equipment-page-7-2",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0431P. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_7_full.png",
    "image": "/images/products/page_7_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-7-3",
    "code": "LF0431M",
    "name": "LF0431M - Indoor Classroom Tables (Page 7)",
    "slug": "lf0431m-play-equipment-page-7-3",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0431M. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_7_full.png",
    "image": "/images/products/page_7_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-8-1",
    "code": "LF0447",
    "name": "LF0447 - Indoor Classroom Tables (Page 8)",
    "slug": "lf0447-play-equipment-page-8-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b910,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0447. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_8_full.png",
    "image": "/images/products/page_8_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-8-2",
    "code": "LF0447P",
    "name": "LF0447P - Indoor Classroom Tables (Page 8)",
    "slug": "lf0447p-play-equipment-page-8-2",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b910,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0447P. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_8_full.png",
    "image": "/images/products/page_8_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-9-1",
    "code": "LF0448",
    "name": "LF0448 - Indoor Classroom Tables (Page 9)",
    "slug": "lf0448-play-equipment-page-9-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0448. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_9_full.png",
    "image": "/images/products/page_9_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-9-2",
    "code": "LF0448P",
    "name": "LF0448P - Indoor Classroom Tables (Page 9)",
    "slug": "lf0448p-play-equipment-page-9-2",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0448P. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_9_full.png",
    "image": "/images/products/page_9_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-10-1",
    "code": "LF0429",
    "name": "LF0429 - Indoor Classroom Tables (Page 10)",
    "slug": "lf0429-play-equipment-page-10-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b916,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0429. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_10_full.png",
    "image": "/images/products/page_10_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-10-2",
    "code": "LF0235",
    "name": "LF0235 - Indoor Classroom Tables (Page 10)",
    "slug": "lf0235-play-equipment-page-10-2",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b98,490",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0235. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_10_full.png",
    "image": "/images/products/page_10_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-11-1",
    "code": "LF0405",
    "name": "LF0405 - Indoor Classroom Tables (Page 11)",
    "slug": "lf0405-play-equipment-page-11-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b99,490",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0405. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_11_full.png",
    "image": "/images/products/page_11_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-11-2",
    "code": "LF0406",
    "name": "LF0406 - Indoor Classroom Tables (Page 11)",
    "slug": "lf0406-play-equipment-page-11-2",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b99,490",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0406. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_11_full.png",
    "image": "/images/products/page_11_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-12-1",
    "code": "LF-IN-12",
    "name": "LF-IN-12 - Indoor Classroom Tables (Page 12)",
    "slug": "lf-in-12-play-equipment-page-12-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-12. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_12_full.png",
    "image": "/images/products/page_12_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-13-1",
    "code": "LF0407",
    "name": "LF0407 - Indoor Classroom Tables (Page 13)",
    "slug": "lf0407-play-equipment-page-13-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0407. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_13_full.png",
    "image": "/images/products/page_13_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-14-1",
    "code": "LF081",
    "name": "LF081 - Indoor Classroom Tables (Page 14)",
    "slug": "lf081-play-equipment-page-14-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b915,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF081. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_14_full.png",
    "image": "/images/products/page_14_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-14-2",
    "code": "LF082",
    "name": "LF082 - Indoor Classroom Tables (Page 14)",
    "slug": "lf082-play-equipment-page-14-2",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b98,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF082. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_14_full.png",
    "image": "/images/products/page_14_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-15-1",
    "code": "LF029",
    "name": "LF029 - Indoor Classroom Tables (Page 15)",
    "slug": "lf029-play-equipment-page-15-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b97,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF029. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_15_full.png",
    "image": "/images/products/page_15_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-16-1",
    "code": "LF028",
    "name": "LF028 - Indoor Classroom Tables (Page 16)",
    "slug": "lf028-play-equipment-page-16-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b97,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF028. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_16_full.png",
    "image": "/images/products/page_16_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-17-1",
    "code": "LF0331",
    "name": "LF0331 - Indoor Classroom Tables (Page 17)",
    "slug": "lf0331-play-equipment-page-17-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0331. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_17_full.png",
    "image": "/images/products/page_17_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-18-1",
    "code": "LF035",
    "name": "LF035 - Indoor Classroom Tables (Page 18)",
    "slug": "lf035-play-equipment-page-18-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b916,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF035. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_18_full.png",
    "image": "/images/products/page_18_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-19-1",
    "code": "LF025",
    "name": "LF025 - Indoor Classroom Tables (Page 19)",
    "slug": "lf025-play-equipment-page-19-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b98,990",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF025. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_19_full.png",
    "image": "/images/products/page_19_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-20-1",
    "code": "LF155",
    "name": "LF155 - Indoor Classroom Tables (Page 20)",
    "slug": "lf155-play-equipment-page-20-1",
    "categoryId": "cat-indoor-tables",
    "category": "Classroom Tables",
    "categoryColor": "#FF6B35",
    "price": "\u20b99,490",
    "description": "Premium kindergarten indoor classroom tables engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF155. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_20_full.png",
    "image": "/images/products/page_20_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-21-1",
    "code": "LF157",
    "name": "LF157 - Indoor Classroom Chairs & Seating (Page 21)",
    "slug": "lf157-play-equipment-page-21-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b97,490",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF157. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_21_full.png",
    "image": "/images/products/page_21_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-21-2",
    "code": "LF158",
    "name": "LF158 - Indoor Classroom Chairs & Seating (Page 21)",
    "slug": "lf158-play-equipment-page-21-2",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF158. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_21_full.png",
    "image": "/images/products/page_21_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-22-1",
    "code": "LF159",
    "name": "LF159 - Indoor Classroom Chairs & Seating (Page 22)",
    "slug": "lf159-play-equipment-page-22-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF159. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_22_full.png",
    "image": "/images/products/page_22_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-23-1",
    "code": "LF0504",
    "name": "LF0504 - Indoor Classroom Chairs & Seating (Page 23)",
    "slug": "lf0504-play-equipment-page-23-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9504",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0504. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_23_full.png",
    "image": "/images/products/page_23_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-24-1",
    "code": "LF0512",
    "name": "LF0512 - Indoor Classroom Chairs & Seating (Page 24)",
    "slug": "lf0512-play-equipment-page-24-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9512",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0512. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_24_full.png",
    "image": "/images/products/page_24_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-25-1",
    "code": "LF0513",
    "name": "LF0513 - Indoor Classroom Chairs & Seating (Page 25)",
    "slug": "lf0513-play-equipment-page-25-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9513",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0513. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_25_full.png",
    "image": "/images/products/page_25_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-26-1",
    "code": "LF311",
    "name": "LF311 - Indoor Classroom Chairs & Seating (Page 26)",
    "slug": "lf311-play-equipment-page-26-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF311. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_26_full.png",
    "image": "/images/products/page_26_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-26-2",
    "code": "LF314",
    "name": "LF314 - Indoor Classroom Chairs & Seating (Page 26)",
    "slug": "lf314-play-equipment-page-26-2",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF314. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_26_full.png",
    "image": "/images/products/page_26_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-27-1",
    "code": "LF315",
    "name": "LF315 - Indoor Classroom Chairs & Seating (Page 27)",
    "slug": "lf315-play-equipment-page-27-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b97,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF315. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_27_full.png",
    "image": "/images/products/page_27_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-28-1",
    "code": "LF211",
    "name": "LF211 - Indoor Classroom Chairs & Seating (Page 28)",
    "slug": "lf211-play-equipment-page-28-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF211. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_28_full.png",
    "image": "/images/products/page_28_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-29-1",
    "code": "LF214",
    "name": "LF214 - Indoor Classroom Chairs & Seating (Page 29)",
    "slug": "lf214-play-equipment-page-29-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF214. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_29_full.png",
    "image": "/images/products/page_29_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-29-2",
    "code": "LF215",
    "name": "LF215 - Indoor Classroom Chairs & Seating (Page 29)",
    "slug": "lf215-play-equipment-page-29-2",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b97,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF215. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_29_full.png",
    "image": "/images/products/page_29_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-30-1",
    "code": "LF110",
    "name": "LF110 - Indoor Classroom Chairs & Seating (Page 30)",
    "slug": "lf110-play-equipment-page-30-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b97,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF110. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_30_full.png",
    "image": "/images/products/page_30_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-31-1",
    "code": "LF111",
    "name": "LF111 - Indoor Classroom Chairs & Seating (Page 31)",
    "slug": "lf111-play-equipment-page-31-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b96,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF111. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_31_full.png",
    "image": "/images/products/page_31_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-31-2",
    "code": "LF113",
    "name": "LF113 - Indoor Classroom Chairs & Seating (Page 31)",
    "slug": "lf113-play-equipment-page-31-2",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b93,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF113. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_31_full.png",
    "image": "/images/products/page_31_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-32-1",
    "code": "LF114",
    "name": "LF114 - Indoor Classroom Chairs & Seating (Page 32)",
    "slug": "lf114-play-equipment-page-32-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b96,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF114. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_32_full.png",
    "image": "/images/products/page_32_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-32-2",
    "code": "LF114S",
    "name": "LF114S - Indoor Classroom Chairs & Seating (Page 32)",
    "slug": "lf114s-play-equipment-page-32-2",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF114S. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_32_full.png",
    "image": "/images/products/page_32_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-33-1",
    "code": "LF115",
    "name": "LF115 - Indoor Classroom Chairs & Seating (Page 33)",
    "slug": "lf115-play-equipment-page-33-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b95,490",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF115. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_33_full.png",
    "image": "/images/products/page_33_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-33-2",
    "code": "LF115S",
    "name": "LF115S - Indoor Classroom Chairs & Seating (Page 33)",
    "slug": "lf115s-play-equipment-page-33-2",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b93,490",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF115S. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_33_full.png",
    "image": "/images/products/page_33_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-34-1",
    "code": "LF207",
    "name": "LF207 - Indoor Classroom Chairs & Seating (Page 34)",
    "slug": "lf207-play-equipment-page-34-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b94,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF207. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_34_full.png",
    "image": "/images/products/page_34_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-34-2",
    "code": "LF202",
    "name": "LF202 - Indoor Classroom Chairs & Seating (Page 34)",
    "slug": "lf202-play-equipment-page-34-2",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b914,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF202. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_34_full.png",
    "image": "/images/products/page_34_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-34-3",
    "code": "LF206",
    "name": "LF206 - Indoor Classroom Chairs & Seating (Page 34)",
    "slug": "lf206-play-equipment-page-34-3",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b917,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF206. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_34_full.png",
    "image": "/images/products/page_34_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-34-4",
    "code": "LF205",
    "name": "LF205 - Indoor Classroom Chairs & Seating (Page 34)",
    "slug": "lf205-play-equipment-page-34-4",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b924,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF205. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_34_full.png",
    "image": "/images/products/page_34_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-34-5",
    "code": "LF201",
    "name": "LF201 - Indoor Classroom Chairs & Seating (Page 34)",
    "slug": "lf201-play-equipment-page-34-5",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b94,990",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF201. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_34_full.png",
    "image": "/images/products/page_34_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-35-1",
    "code": "LF1421",
    "name": "LF1421 - Indoor Classroom Chairs & Seating (Page 35)",
    "slug": "lf1421-play-equipment-page-35-1",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,421",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1421. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_35_full.png",
    "image": "/images/products/page_35_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-35-2",
    "code": "LF1422",
    "name": "LF1422 - Indoor Classroom Chairs & Seating (Page 35)",
    "slug": "lf1422-play-equipment-page-35-2",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,422",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1422. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_35_full.png",
    "image": "/images/products/page_35_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-35-3",
    "code": "LF1423",
    "name": "LF1423 - Indoor Classroom Chairs & Seating (Page 35)",
    "slug": "lf1423-play-equipment-page-35-3",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,423",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1423. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_35_full.png",
    "image": "/images/products/page_35_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-35-4",
    "code": "LF1424",
    "name": "LF1424 - Indoor Classroom Chairs & Seating (Page 35)",
    "slug": "lf1424-play-equipment-page-35-4",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,424",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1424. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_35_full.png",
    "image": "/images/products/page_35_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-35-5",
    "code": "LF1425",
    "name": "LF1425 - Indoor Classroom Chairs & Seating (Page 35)",
    "slug": "lf1425-play-equipment-page-35-5",
    "categoryId": "cat-indoor-chairs",
    "category": "Classroom Chairs & Seating",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,425",
    "description": "Premium kindergarten indoor classroom chairs & seating engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1425. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_35_full.png",
    "image": "/images/products/page_35_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-36-1",
    "code": "LF1426",
    "name": "LF1426 - Indoor Storage & Racks (Page 36)",
    "slug": "lf1426-play-equipment-page-36-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,426",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1426. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_36_full.png",
    "image": "/images/products/page_36_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-36-2",
    "code": "LF1428",
    "name": "LF1428 - Indoor Storage & Racks (Page 36)",
    "slug": "lf1428-play-equipment-page-36-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,428",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1428. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_36_full.png",
    "image": "/images/products/page_36_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-36-3",
    "code": "LF1427",
    "name": "LF1427 - Indoor Storage & Racks (Page 36)",
    "slug": "lf1427-play-equipment-page-36-3",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,427",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1427. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_36_full.png",
    "image": "/images/products/page_36_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-37-1",
    "code": "LF1451",
    "name": "LF1451 - Indoor Storage & Racks (Page 37)",
    "slug": "lf1451-play-equipment-page-37-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,451",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1451. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_37_full.png",
    "image": "/images/products/page_37_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-37-2",
    "code": "LF1452",
    "name": "LF1452 - Indoor Storage & Racks (Page 37)",
    "slug": "lf1452-play-equipment-page-37-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,452",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1452. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_37_full.png",
    "image": "/images/products/page_37_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-37-3",
    "code": "LF1453",
    "name": "LF1453 - Indoor Storage & Racks (Page 37)",
    "slug": "lf1453-play-equipment-page-37-3",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,453",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1453. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_37_full.png",
    "image": "/images/products/page_37_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-37-4",
    "code": "LF1454",
    "name": "LF1454 - Indoor Storage & Racks (Page 37)",
    "slug": "lf1454-play-equipment-page-37-4",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,454",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1454. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_37_full.png",
    "image": "/images/products/page_37_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-37-5",
    "code": "LF1455",
    "name": "LF1455 - Indoor Storage & Racks (Page 37)",
    "slug": "lf1455-play-equipment-page-37-5",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,455",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1455. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_37_full.png",
    "image": "/images/products/page_37_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-37-6",
    "code": "LF1456",
    "name": "LF1456 - Indoor Storage & Racks (Page 37)",
    "slug": "lf1456-play-equipment-page-37-6",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,456",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1456. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_37_full.png",
    "image": "/images/products/page_37_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-38-1",
    "code": "LF1501",
    "name": "LF1501 - Indoor Storage & Racks (Page 38)",
    "slug": "lf1501-play-equipment-page-38-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,501",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1501. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_38_full.png",
    "image": "/images/products/page_38_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-38-2",
    "code": "LF1503",
    "name": "LF1503 - Indoor Storage & Racks (Page 38)",
    "slug": "lf1503-play-equipment-page-38-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1503. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_38_full.png",
    "image": "/images/products/page_38_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-38-3",
    "code": "LF1502",
    "name": "LF1502 - Indoor Storage & Racks (Page 38)",
    "slug": "lf1502-play-equipment-page-38-3",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,503",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1502. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_38_full.png",
    "image": "/images/products/page_38_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-38-4",
    "code": "LF1504",
    "name": "LF1504 - Indoor Storage & Racks (Page 38)",
    "slug": "lf1504-play-equipment-page-38-4",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1504. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_38_full.png",
    "image": "/images/products/page_38_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-38-5",
    "code": "LF1458",
    "name": "LF1458 - Indoor Storage & Racks (Page 38)",
    "slug": "lf1458-play-equipment-page-38-5",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,502",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1458. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_38_full.png",
    "image": "/images/products/page_38_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-38-6",
    "code": "LF1459",
    "name": "LF1459 - Indoor Storage & Racks (Page 38)",
    "slug": "lf1459-play-equipment-page-38-6",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1459. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_38_full.png",
    "image": "/images/products/page_38_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-38-7",
    "code": "LF1457",
    "name": "LF1457 - Indoor Storage & Racks (Page 38)",
    "slug": "lf1457-play-equipment-page-38-7",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,504",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1457. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_38_full.png",
    "image": "/images/products/page_38_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-39-1",
    "code": "LF0701",
    "name": "LF0701 - Indoor Storage & Racks (Page 39)",
    "slug": "lf0701-play-equipment-page-39-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9701",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0701. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_39_full.png",
    "image": "/images/products/page_39_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-39-2",
    "code": "LF0702",
    "name": "LF0702 - Indoor Storage & Racks (Page 39)",
    "slug": "lf0702-play-equipment-page-39-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9702",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0702. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_39_full.png",
    "image": "/images/products/page_39_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-39-3",
    "code": "LF0703",
    "name": "LF0703 - Indoor Storage & Racks (Page 39)",
    "slug": "lf0703-play-equipment-page-39-3",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9703",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0703. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_39_full.png",
    "image": "/images/products/page_39_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-39-4",
    "code": "LF0704",
    "name": "LF0704 - Indoor Storage & Racks (Page 39)",
    "slug": "lf0704-play-equipment-page-39-4",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9704",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0704. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_39_full.png",
    "image": "/images/products/page_39_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-39-5",
    "code": "LF0705",
    "name": "LF0705 - Indoor Storage & Racks (Page 39)",
    "slug": "lf0705-play-equipment-page-39-5",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9705",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0705. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_39_full.png",
    "image": "/images/products/page_39_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-40-1",
    "code": "LF401",
    "name": "LF401 - Indoor Storage & Racks (Page 40)",
    "slug": "lf401-play-equipment-page-40-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b93,790",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF401. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_40_full.png",
    "image": "/images/products/page_40_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-40-2",
    "code": "LF402",
    "name": "LF402 - Indoor Storage & Racks (Page 40)",
    "slug": "lf402-play-equipment-page-40-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b93,790",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF402. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_40_full.png",
    "image": "/images/products/page_40_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-41-1",
    "code": "LF411",
    "name": "LF411 - Indoor Storage & Racks (Page 41)",
    "slug": "lf411-play-equipment-page-41-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF411. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_41_full.png",
    "image": "/images/products/page_41_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-41-2",
    "code": "LF412",
    "name": "LF412 - Indoor Storage & Racks (Page 41)",
    "slug": "lf412-play-equipment-page-41-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF412. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_41_full.png",
    "image": "/images/products/page_41_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-42-1",
    "code": "LF1481",
    "name": "LF1481 - Indoor Storage & Racks (Page 42)",
    "slug": "lf1481-play-equipment-page-42-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,481",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1481. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_42_full.png",
    "image": "/images/products/page_42_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-42-2",
    "code": "LF1482",
    "name": "LF1482 - Indoor Storage & Racks (Page 42)",
    "slug": "lf1482-play-equipment-page-42-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,482",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1482. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_42_full.png",
    "image": "/images/products/page_42_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-42-3",
    "code": "LF1483",
    "name": "LF1483 - Indoor Storage & Racks (Page 42)",
    "slug": "lf1483-play-equipment-page-42-3",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,483",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1483. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_42_full.png",
    "image": "/images/products/page_42_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-42-4",
    "code": "LF1484",
    "name": "LF1484 - Indoor Storage & Racks (Page 42)",
    "slug": "lf1484-play-equipment-page-42-4",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,484",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1484. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_42_full.png",
    "image": "/images/products/page_42_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-42-5",
    "code": "LF1485",
    "name": "LF1485 - Indoor Storage & Racks (Page 42)",
    "slug": "lf1485-play-equipment-page-42-5",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,485",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1485. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_42_full.png",
    "image": "/images/products/page_42_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-42-6",
    "code": "LF1486",
    "name": "LF1486 - Indoor Storage & Racks (Page 42)",
    "slug": "lf1486-play-equipment-page-42-6",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,486",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1486. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_42_full.png",
    "image": "/images/products/page_42_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-43-1",
    "code": "LF0421",
    "name": "LF0421 - Indoor Storage & Racks (Page 43)",
    "slug": "lf0421-play-equipment-page-43-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b924,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0421. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_43_full.png",
    "image": "/images/products/page_43_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-43-2",
    "code": "LF0422",
    "name": "LF0422 - Indoor Storage & Racks (Page 43)",
    "slug": "lf0422-play-equipment-page-43-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b979,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0422. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_43_full.png",
    "image": "/images/products/page_43_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-43-3",
    "code": "LF0423",
    "name": "LF0423 - Indoor Storage & Racks (Page 43)",
    "slug": "lf0423-play-equipment-page-43-3",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b924,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF0423. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_43_full.png",
    "image": "/images/products/page_43_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-44-1",
    "code": "LF960",
    "name": "LF960 - Indoor Storage & Racks (Page 44)",
    "slug": "lf960-play-equipment-page-44-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b96,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF960. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_44_full.png",
    "image": "/images/products/page_44_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-45-1",
    "code": "LF136",
    "name": "LF136 - Indoor Storage & Racks (Page 45)",
    "slug": "lf136-play-equipment-page-45-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b94,190",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF136. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_45_full.png",
    "image": "/images/products/page_45_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-45-2",
    "code": "LF507",
    "name": "LF507 - Indoor Storage & Racks (Page 45)",
    "slug": "lf507-play-equipment-page-45-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b93,490",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF507. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_45_full.png",
    "image": "/images/products/page_45_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-1",
    "code": "LF106",
    "name": "LF106 - Indoor Storage & Racks (Page 46)",
    "slug": "lf106-play-equipment-page-46-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b92,628",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF106. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-2",
    "code": "LF116",
    "name": "LF116 - Indoor Storage & Racks (Page 46)",
    "slug": "lf116-play-equipment-page-46-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,090",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF116. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-3",
    "code": "LF186",
    "name": "LF186 - Indoor Storage & Racks (Page 46)",
    "slug": "lf186-play-equipment-page-46-3",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,790",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF186. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-4",
    "code": "LF146",
    "name": "LF146 - Indoor Storage & Racks (Page 46)",
    "slug": "lf146-play-equipment-page-46-4",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,890",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF146. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-5",
    "code": "LF176",
    "name": "LF176 - Indoor Storage & Racks (Page 46)",
    "slug": "lf176-play-equipment-page-46-5",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b92,090",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF176. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-6",
    "code": "LF126",
    "name": "LF126 - Indoor Storage & Racks (Page 46)",
    "slug": "lf126-play-equipment-page-46-6",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,590",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF126. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-7",
    "code": "LF127",
    "name": "LF127 - Indoor Storage & Racks (Page 46)",
    "slug": "lf127-play-equipment-page-46-7",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b91,290",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF127. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-8",
    "code": "LF156",
    "name": "LF156 - Indoor Storage & Racks (Page 46)",
    "slug": "lf156-play-equipment-page-46-8",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b92,628",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF156. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-9",
    "code": "LF166",
    "name": "LF166 - Indoor Storage & Racks (Page 46)",
    "slug": "lf166-play-equipment-page-46-9",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b92,628",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF166. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-10",
    "code": "LF129",
    "name": "LF129 - Indoor Storage & Racks (Page 46)",
    "slug": "lf129-play-equipment-page-46-10",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b92,628",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF129. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-46-11",
    "code": "LF128",
    "name": "LF128 - Indoor Storage & Racks (Page 46)",
    "slug": "lf128-play-equipment-page-46-11",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b92,628",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF128. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_46_full.png",
    "image": "/images/products/page_46_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-47-1",
    "code": "LF801",
    "name": "LF801 - Indoor Storage & Racks (Page 47)",
    "slug": "lf801-play-equipment-page-47-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF801. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_47_full.png",
    "image": "/images/products/page_47_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-47-2",
    "code": "LF802",
    "name": "LF802 - Indoor Storage & Racks (Page 47)",
    "slug": "lf802-play-equipment-page-47-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF802. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_47_full.png",
    "image": "/images/products/page_47_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-48-1",
    "code": "LF901",
    "name": "LF901 - Indoor Storage & Racks (Page 48)",
    "slug": "lf901-play-equipment-page-48-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b949,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF901. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_48_full.png",
    "image": "/images/products/page_48_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-48-2",
    "code": "LF902",
    "name": "LF902 - Indoor Storage & Racks (Page 48)",
    "slug": "lf902-play-equipment-page-48-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b929,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF902. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_48_full.png",
    "image": "/images/products/page_48_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-49-1",
    "code": "LF903",
    "name": "LF903 - Indoor Storage & Racks (Page 49)",
    "slug": "lf903-play-equipment-page-49-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF903. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_49_full.png",
    "image": "/images/products/page_49_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-49-2",
    "code": "LF904",
    "name": "LF904 - Indoor Storage & Racks (Page 49)",
    "slug": "lf904-play-equipment-page-49-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF904. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_49_full.png",
    "image": "/images/products/page_49_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-50-1",
    "code": "LF102",
    "name": "LF102 - Indoor Storage & Racks (Page 50)",
    "slug": "lf102-play-equipment-page-50-1",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b939,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF102. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_50_full.png",
    "image": "/images/products/page_50_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-50-2",
    "code": "LF103",
    "name": "LF103 - Indoor Storage & Racks (Page 50)",
    "slug": "lf103-play-equipment-page-50-2",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b929,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF103. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_50_full.png",
    "image": "/images/products/page_50_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-50-3",
    "code": "LF105",
    "name": "LF105 - Indoor Storage & Racks (Page 50)",
    "slug": "lf105-play-equipment-page-50-3",
    "categoryId": "cat-indoor-storage",
    "category": "Storage & Racks",
    "categoryColor": "#FF6B9D",
    "price": "\u20b944,990",
    "description": "Premium kindergarten indoor storage & racks engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF105. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_50_full.png",
    "image": "/images/products/page_50_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-51-1",
    "code": "LF101",
    "name": "LF101 - Indoor Indoor Slides & Climbers (Page 51)",
    "slug": "lf101-play-equipment-page-51-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b979,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF101. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_51_full.png",
    "image": "/images/products/page_51_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-51-2",
    "code": "LF101",
    "name": "LF101 - Indoor Indoor Slides & Climbers (Page 51)",
    "slug": "lf101-play-equipment-page-51-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b979,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF101. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_51_full.png",
    "image": "/images/products/page_51_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-52-1",
    "code": "LF912",
    "name": "LF912 - Indoor Indoor Slides & Climbers (Page 52)",
    "slug": "lf912-play-equipment-page-52-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,790",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF912. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_52_full.png",
    "image": "/images/products/page_52_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-52-2",
    "code": "LF911",
    "name": "LF911 - Indoor Indoor Slides & Climbers (Page 52)",
    "slug": "lf911-play-equipment-page-52-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF911. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_52_full.png",
    "image": "/images/products/page_52_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-52-3",
    "code": "LF912",
    "name": "LF912 - Indoor Indoor Slides & Climbers (Page 52)",
    "slug": "lf912-play-equipment-page-52-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b94,790",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF912. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_52_full.png",
    "image": "/images/products/page_52_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-53-1",
    "code": "LF915",
    "name": "LF915 - Indoor Indoor Slides & Climbers (Page 53)",
    "slug": "lf915-play-equipment-page-53-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF915. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_53_full.png",
    "image": "/images/products/page_53_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-53-2",
    "code": "LF917",
    "name": "LF917 - Indoor Indoor Slides & Climbers (Page 53)",
    "slug": "lf917-play-equipment-page-53-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF917. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_53_full.png",
    "image": "/images/products/page_53_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-53-3",
    "code": "LF916",
    "name": "LF916 - Indoor Indoor Slides & Climbers (Page 53)",
    "slug": "lf916-play-equipment-page-53-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF916. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_53_full.png",
    "image": "/images/products/page_53_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-54-1",
    "code": "LF924",
    "name": "LF924 - Indoor Indoor Slides & Climbers (Page 54)",
    "slug": "lf924-play-equipment-page-54-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF924. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_54_full.png",
    "image": "/images/products/page_54_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-54-2",
    "code": "LF922",
    "name": "LF922 - Indoor Indoor Slides & Climbers (Page 54)",
    "slug": "lf922-play-equipment-page-54-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF922. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_54_full.png",
    "image": "/images/products/page_54_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-54-3",
    "code": "LF921",
    "name": "LF921 - Indoor Indoor Slides & Climbers (Page 54)",
    "slug": "lf921-play-equipment-page-54-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF921. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_54_full.png",
    "image": "/images/products/page_54_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-54-4",
    "code": "LF919",
    "name": "LF919 - Indoor Indoor Slides & Climbers (Page 54)",
    "slug": "lf919-play-equipment-page-54-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF919. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_54_full.png",
    "image": "/images/products/page_54_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-54-5",
    "code": "LF920",
    "name": "LF920 - Indoor Indoor Slides & Climbers (Page 54)",
    "slug": "lf920-play-equipment-page-54-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF920. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_54_full.png",
    "image": "/images/products/page_54_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-54-6",
    "code": "LF923",
    "name": "LF923 - Indoor Indoor Slides & Climbers (Page 54)",
    "slug": "lf923-play-equipment-page-54-6",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF923. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_54_full.png",
    "image": "/images/products/page_54_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-55-1",
    "code": "LF990",
    "name": "LF990 - Indoor Indoor Slides & Climbers (Page 55)",
    "slug": "lf990-play-equipment-page-55-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF990. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_55_full.png",
    "image": "/images/products/page_55_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-55-2",
    "code": "LF972",
    "name": "LF972 - Indoor Indoor Slides & Climbers (Page 55)",
    "slug": "lf972-play-equipment-page-55-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b98,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF972. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_55_full.png",
    "image": "/images/products/page_55_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-55-3",
    "code": "LF971",
    "name": "LF971 - Indoor Indoor Slides & Climbers (Page 55)",
    "slug": "lf971-play-equipment-page-55-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF971. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_55_full.png",
    "image": "/images/products/page_55_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-55-4",
    "code": "LF970",
    "name": "LF970 - Indoor Indoor Slides & Climbers (Page 55)",
    "slug": "lf970-play-equipment-page-55-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b98,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF970. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_55_full.png",
    "image": "/images/products/page_55_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-56-1",
    "code": "LF976",
    "name": "LF976 - Indoor Indoor Slides & Climbers (Page 56)",
    "slug": "lf976-play-equipment-page-56-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b916,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF976. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_56_full.png",
    "image": "/images/products/page_56_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-56-2",
    "code": "LF973",
    "name": "LF973 - Indoor Indoor Slides & Climbers (Page 56)",
    "slug": "lf973-play-equipment-page-56-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF973. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_56_full.png",
    "image": "/images/products/page_56_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-56-3",
    "code": "LF975",
    "name": "LF975 - Indoor Indoor Slides & Climbers (Page 56)",
    "slug": "lf975-play-equipment-page-56-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b98,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF975. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_56_full.png",
    "image": "/images/products/page_56_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-56-4",
    "code": "LF978",
    "name": "LF978 - Indoor Indoor Slides & Climbers (Page 56)",
    "slug": "lf978-play-equipment-page-56-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b915,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF978. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_56_full.png",
    "image": "/images/products/page_56_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-56-5",
    "code": "LF977",
    "name": "LF977 - Indoor Indoor Slides & Climbers (Page 56)",
    "slug": "lf977-play-equipment-page-56-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b916,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF977. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_56_full.png",
    "image": "/images/products/page_56_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-56-6",
    "code": "LF974",
    "name": "LF974 - Indoor Indoor Slides & Climbers (Page 56)",
    "slug": "lf974-play-equipment-page-56-6",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF974. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_56_full.png",
    "image": "/images/products/page_56_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-57-1",
    "code": "LF934",
    "name": "LF934 - Indoor Indoor Slides & Climbers (Page 57)",
    "slug": "lf934-play-equipment-page-57-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,053",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF934. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_57_full.png",
    "image": "/images/products/page_57_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-57-2",
    "code": "LF9053",
    "name": "LF9053 - Indoor Indoor Slides & Climbers (Page 57)",
    "slug": "lf9053-play-equipment-page-57-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,130",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF9053. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_57_full.png",
    "image": "/images/products/page_57_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-57-3",
    "code": "LF9130",
    "name": "LF9130 - Indoor Indoor Slides & Climbers (Page 57)",
    "slug": "lf9130-play-equipment-page-57-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b96,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF9130. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_57_full.png",
    "image": "/images/products/page_57_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-57-4",
    "code": "LF998",
    "name": "LF998 - Indoor Indoor Slides & Climbers (Page 57)",
    "slug": "lf998-play-equipment-page-57-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b94,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF998. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_57_full.png",
    "image": "/images/products/page_57_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-57-5",
    "code": "LF999",
    "name": "LF999 - Indoor Indoor Slides & Climbers (Page 57)",
    "slug": "lf999-play-equipment-page-57-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF999. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_57_full.png",
    "image": "/images/products/page_57_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-57-6",
    "code": "LF999B",
    "name": "LF999B - Indoor Indoor Slides & Climbers (Page 57)",
    "slug": "lf999b-play-equipment-page-57-6",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF999B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_57_full.png",
    "image": "/images/products/page_57_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-58-1",
    "code": "LF932A",
    "name": "LF932A - Indoor Indoor Slides & Climbers (Page 58)",
    "slug": "lf932a-play-equipment-page-58-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b919,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF932A. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_58_full.png",
    "image": "/images/products/page_58_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-58-2",
    "code": "LF932B",
    "name": "LF932B - Indoor Indoor Slides & Climbers (Page 58)",
    "slug": "lf932b-play-equipment-page-58-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b919,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF932B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_58_full.png",
    "image": "/images/products/page_58_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-58-3",
    "code": "LF450",
    "name": "LF450 - Indoor Indoor Slides & Climbers (Page 58)",
    "slug": "lf450-play-equipment-page-58-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b914,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF450. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_58_full.png",
    "image": "/images/products/page_58_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-58-4",
    "code": "LF9126",
    "name": "LF9126 - Indoor Indoor Slides & Climbers (Page 58)",
    "slug": "lf9126-play-equipment-page-58-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,126",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF9126. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_58_full.png",
    "image": "/images/products/page_58_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-58-5",
    "code": "LF9052",
    "name": "LF9052 - Indoor Indoor Slides & Climbers (Page 58)",
    "slug": "lf9052-play-equipment-page-58-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b98,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF9052. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_58_full.png",
    "image": "/images/products/page_58_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-1",
    "code": "LF925D",
    "name": "LF925D - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf925d-play-equipment-page-59-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,690",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF925D. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-2",
    "code": "LF629",
    "name": "LF629 - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf629-play-equipment-page-59-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b91,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF629. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-3",
    "code": "LF925B",
    "name": "LF925B - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf925b-play-equipment-page-59-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,690",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF925B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-4",
    "code": "LF925C",
    "name": "LF925C - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf925c-play-equipment-page-59-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b91,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF925C. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-5",
    "code": "LF925A",
    "name": "LF925A - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf925a-play-equipment-page-59-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b91,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF925A. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-6",
    "code": "LF628",
    "name": "LF628 - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf628-play-equipment-page-59-6",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b91,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF628. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-7",
    "code": "LF627",
    "name": "LF627 - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf627-play-equipment-page-59-7",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,390",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF627. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-8",
    "code": "LF627A",
    "name": "LF627A - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf627a-play-equipment-page-59-8",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,390",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF627A. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-59-9",
    "code": "LF624",
    "name": "LF624 - Indoor Indoor Slides & Climbers (Page 59)",
    "slug": "lf624-play-equipment-page-59-9",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,790",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF624. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_59_full.png",
    "image": "/images/products/page_59_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-60-1",
    "code": "LF108B",
    "name": "LF108B - Indoor Indoor Slides & Climbers (Page 60)",
    "slug": "lf108b-play-equipment-page-60-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b94,290",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF108B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_60_full.png",
    "image": "/images/products/page_60_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-60-2",
    "code": "LF9122",
    "name": "LF9122 - Indoor Indoor Slides & Climbers (Page 60)",
    "slug": "lf9122-play-equipment-page-60-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,122",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF9122. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_60_full.png",
    "image": "/images/products/page_60_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-60-3",
    "code": "LF417",
    "name": "LF417 - Indoor Indoor Slides & Climbers (Page 60)",
    "slug": "lf417-play-equipment-page-60-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b94,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF417. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_60_full.png",
    "image": "/images/products/page_60_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-60-4",
    "code": "LF416",
    "name": "LF416 - Indoor Indoor Slides & Climbers (Page 60)",
    "slug": "lf416-play-equipment-page-60-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b93,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF416. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_60_full.png",
    "image": "/images/products/page_60_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-60-5",
    "code": "LF419",
    "name": "LF419 - Indoor Indoor Slides & Climbers (Page 60)",
    "slug": "lf419-play-equipment-page-60-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b93,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF419. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_60_full.png",
    "image": "/images/products/page_60_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-61-1",
    "code": "LF418",
    "name": "LF418 - Indoor Indoor Slides & Climbers (Page 61)",
    "slug": "lf418-play-equipment-page-61-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF418. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_61_full.png",
    "image": "/images/products/page_61_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-61-2",
    "code": "LF928B",
    "name": "LF928B - Indoor Indoor Slides & Climbers (Page 61)",
    "slug": "lf928b-play-equipment-page-61-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,690",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF928B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_61_full.png",
    "image": "/images/products/page_61_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-61-3",
    "code": "LF926A",
    "name": "LF926A - Indoor Indoor Slides & Climbers (Page 61)",
    "slug": "lf926a-play-equipment-page-61-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,690",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF926A. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_61_full.png",
    "image": "/images/products/page_61_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-61-4",
    "code": "LF830",
    "name": "LF830 - Indoor Indoor Slides & Climbers (Page 61)",
    "slug": "lf830-play-equipment-page-61-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF830. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_61_full.png",
    "image": "/images/products/page_61_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-61-5",
    "code": "LF440",
    "name": "LF440 - Indoor Indoor Slides & Climbers (Page 61)",
    "slug": "lf440-play-equipment-page-61-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF440. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_61_full.png",
    "image": "/images/products/page_61_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-62-1",
    "code": "LF929A",
    "name": "LF929A - Indoor Indoor Slides & Climbers (Page 62)",
    "slug": "lf929a-play-equipment-page-62-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b93,190",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF929A. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_62_full.png",
    "image": "/images/products/page_62_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-62-2",
    "code": "LF927C",
    "name": "LF927C - Indoor Indoor Slides & Climbers (Page 62)",
    "slug": "lf927c-play-equipment-page-62-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,290",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF927C. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_62_full.png",
    "image": "/images/products/page_62_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-62-3",
    "code": "LF927E",
    "name": "LF927E - Indoor Indoor Slides & Climbers (Page 62)",
    "slug": "lf927e-play-equipment-page-62-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,290",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF927E. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_62_full.png",
    "image": "/images/products/page_62_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-62-4",
    "code": "LF927F",
    "name": "LF927F - Indoor Indoor Slides & Climbers (Page 62)",
    "slug": "lf927f-play-equipment-page-62-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b91,790",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF927F. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_62_full.png",
    "image": "/images/products/page_62_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-62-5",
    "code": "LF927",
    "name": "LF927 - Indoor Indoor Slides & Climbers (Page 62)",
    "slug": "lf927-play-equipment-page-62-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b93,190",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF927. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_62_full.png",
    "image": "/images/products/page_62_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-62-6",
    "code": "LF929B",
    "name": "LF929B - Indoor Indoor Slides & Climbers (Page 62)",
    "slug": "lf929b-play-equipment-page-62-6",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,690",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF929B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_62_full.png",
    "image": "/images/products/page_62_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-62-7",
    "code": "LF929C",
    "name": "LF929C - Indoor Indoor Slides & Climbers (Page 62)",
    "slug": "lf929c-play-equipment-page-62-7",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,290",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF929C. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_62_full.png",
    "image": "/images/products/page_62_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-62-8",
    "code": "LF927B",
    "name": "LF927B - Indoor Indoor Slides & Climbers (Page 62)",
    "slug": "lf927b-play-equipment-page-62-8",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b91,790",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF927B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_62_full.png",
    "image": "/images/products/page_62_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-63-1",
    "code": "LF933",
    "name": "LF933 - Indoor Indoor Slides & Climbers (Page 63)",
    "slug": "lf933-play-equipment-page-63-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b92,299",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF933. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_63_full.png",
    "image": "/images/products/page_63_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-64-1",
    "code": "LF961A",
    "name": "LF961A - Indoor Indoor Slides & Climbers (Page 64)",
    "slug": "lf961a-play-equipment-page-64-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,490",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF961A. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_64_full.png",
    "image": "/images/products/page_64_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-64-2",
    "code": "LF101",
    "name": "LF101 - Indoor Indoor Slides & Climbers (Page 64)",
    "slug": "lf101-play-equipment-page-64-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF101. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_64_full.png",
    "image": "/images/products/page_64_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-64-3",
    "code": "LF962",
    "name": "LF962 - Indoor Indoor Slides & Climbers (Page 64)",
    "slug": "lf962-play-equipment-page-64-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF962. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_64_full.png",
    "image": "/images/products/page_64_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-64-4",
    "code": "LF964",
    "name": "LF964 - Indoor Indoor Slides & Climbers (Page 64)",
    "slug": "lf964-play-equipment-page-64-4",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b917,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF964. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_64_full.png",
    "image": "/images/products/page_64_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-64-5",
    "code": "LF963",
    "name": "LF963 - Indoor Indoor Slides & Climbers (Page 64)",
    "slug": "lf963-play-equipment-page-64-5",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b921,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF963. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_64_full.png",
    "image": "/images/products/page_64_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-65-1",
    "code": "LF135",
    "name": "LF135 - Indoor Indoor Slides & Climbers (Page 65)",
    "slug": "lf135-play-equipment-page-65-1",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF135. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_65_full.png",
    "image": "/images/products/page_65_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-65-2",
    "code": "LF135B",
    "name": "LF135B - Indoor Indoor Slides & Climbers (Page 65)",
    "slug": "lf135b-play-equipment-page-65-2",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF135B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_65_full.png",
    "image": "/images/products/page_65_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-65-3",
    "code": "LF135W",
    "name": "LF135W - Indoor Indoor Slides & Climbers (Page 65)",
    "slug": "lf135w-play-equipment-page-65-3",
    "categoryId": "cat-indoor-slides",
    "category": "Indoor Slides & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b99,990",
    "description": "Premium kindergarten indoor indoor slides & climbers engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF135W. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_65_full.png",
    "image": "/images/products/page_65_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-66-1",
    "code": "LF377",
    "name": "LF377 - Indoor Soft Play & Ball Pools (Page 66)",
    "slug": "lf377-play-equipment-page-66-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b98,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF377. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_66_full.png",
    "image": "/images/products/page_66_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-66-2",
    "code": "LF378",
    "name": "LF378 - Indoor Soft Play & Ball Pools (Page 66)",
    "slug": "lf378-play-equipment-page-66-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b97,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF378. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_66_full.png",
    "image": "/images/products/page_66_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-66-3",
    "code": "LF380",
    "name": "LF380 - Indoor Soft Play & Ball Pools (Page 66)",
    "slug": "lf380-play-equipment-page-66-3",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b97,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF380. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_66_full.png",
    "image": "/images/products/page_66_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-66-4",
    "code": "LF379",
    "name": "LF379 - Indoor Soft Play & Ball Pools (Page 66)",
    "slug": "lf379-play-equipment-page-66-4",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b96,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF379. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_66_full.png",
    "image": "/images/products/page_66_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-66-5",
    "code": "LF376",
    "name": "LF376 - Indoor Soft Play & Ball Pools (Page 66)",
    "slug": "lf376-play-equipment-page-66-5",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF376. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_66_full.png",
    "image": "/images/products/page_66_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-66-6",
    "code": "LF375",
    "name": "LF375 - Indoor Soft Play & Ball Pools (Page 66)",
    "slug": "lf375-play-equipment-page-66-6",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF375. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_66_full.png",
    "image": "/images/products/page_66_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-67-1",
    "code": "LF930C",
    "name": "LF930C - Indoor Soft Play & Ball Pools (Page 67)",
    "slug": "lf930c-play-equipment-page-67-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF930C. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_67_full.png",
    "image": "/images/products/page_67_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-67-2",
    "code": "LF930D",
    "name": "LF930D - Indoor Soft Play & Ball Pools (Page 67)",
    "slug": "lf930d-play-equipment-page-67-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF930D. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_67_full.png",
    "image": "/images/products/page_67_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-67-3",
    "code": "LF9126",
    "name": "LF9126 - Indoor Soft Play & Ball Pools (Page 67)",
    "slug": "lf9126-play-equipment-page-67-3",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b92,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF9126. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_67_full.png",
    "image": "/images/products/page_67_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-67-4",
    "code": "LF142",
    "name": "LF142 - Indoor Soft Play & Ball Pools (Page 67)",
    "slug": "lf142-play-equipment-page-67-4",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b92,690",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF142. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_67_full.png",
    "image": "/images/products/page_67_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-67-5",
    "code": "LF549",
    "name": "LF549 - Indoor Soft Play & Ball Pools (Page 67)",
    "slug": "lf549-play-equipment-page-67-5",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b99,126",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF549. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_67_full.png",
    "image": "/images/products/page_67_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-67-6",
    "code": "LF141",
    "name": "LF141 - Indoor Soft Play & Ball Pools (Page 67)",
    "slug": "lf141-play-equipment-page-67-6",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b95,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF141. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_67_full.png",
    "image": "/images/products/page_67_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-68-1",
    "code": "LF9177",
    "name": "LF9177 - Indoor Soft Play & Ball Pools (Page 68)",
    "slug": "lf9177-play-equipment-page-68-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b99,177",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF9177. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_68_full.png",
    "image": "/images/products/page_68_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-68-2",
    "code": "LF118",
    "name": "LF118 - Indoor Soft Play & Ball Pools (Page 68)",
    "slug": "lf118-play-equipment-page-68-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b97,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF118. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_68_full.png",
    "image": "/images/products/page_68_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-69-1",
    "code": "LF930",
    "name": "LF930 - Indoor Soft Play & Ball Pools (Page 69)",
    "slug": "lf930-play-equipment-page-69-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b93,190",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF930. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_69_full.png",
    "image": "/images/products/page_69_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-69-2",
    "code": "LF930B",
    "name": "LF930B - Indoor Soft Play & Ball Pools (Page 69)",
    "slug": "lf930b-play-equipment-page-69-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF930B. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_69_full.png",
    "image": "/images/products/page_69_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-69-3",
    "code": "LF931",
    "name": "LF931 - Indoor Soft Play & Ball Pools (Page 69)",
    "slug": "lf931-play-equipment-page-69-3",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF931. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_69_full.png",
    "image": "/images/products/page_69_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-69-4",
    "code": "LF13",
    "name": "LF13 - Indoor Soft Play & Ball Pools (Page 69)",
    "slug": "lf13-play-equipment-page-69-4",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,399",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF13. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_69_full.png",
    "image": "/images/products/page_69_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-69-5",
    "code": "LF13",
    "name": "LF13 - Indoor Soft Play & Ball Pools (Page 69)",
    "slug": "lf13-play-equipment-page-69-5",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b92,599",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF13. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_69_full.png",
    "image": "/images/products/page_69_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-70-1",
    "code": "LF536",
    "name": "LF536 - Indoor Soft Play & Ball Pools (Page 70)",
    "slug": "lf536-play-equipment-page-70-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b96,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF536. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_70_full.png",
    "image": "/images/products/page_70_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-70-2",
    "code": "LF545",
    "name": "LF545 - Indoor Soft Play & Ball Pools (Page 70)",
    "slug": "lf545-play-equipment-page-70-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF545. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_70_full.png",
    "image": "/images/products/page_70_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-70-3",
    "code": "LF55",
    "name": "LF55 - Indoor Soft Play & Ball Pools (Page 70)",
    "slug": "lf55-play-equipment-page-70-3",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF55. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_70_full.png",
    "image": "/images/products/page_70_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-70-4",
    "code": "LF72",
    "name": "LF72 - Indoor Soft Play & Ball Pools (Page 70)",
    "slug": "lf72-play-equipment-page-70-4",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b920,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF72. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_70_full.png",
    "image": "/images/products/page_70_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-70-5",
    "code": "LF96",
    "name": "LF96 - Indoor Soft Play & Ball Pools (Page 70)",
    "slug": "lf96-play-equipment-page-70-5",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b924,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF96. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_70_full.png",
    "image": "/images/products/page_70_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-70-6",
    "code": "LF120",
    "name": "LF120 - Indoor Soft Play & Ball Pools (Page 70)",
    "slug": "lf120-play-equipment-page-70-6",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b931,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF120. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_70_full.png",
    "image": "/images/products/page_70_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-70-7",
    "code": "LF144",
    "name": "LF144 - Indoor Soft Play & Ball Pools (Page 70)",
    "slug": "lf144-play-equipment-page-70-7",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b939,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF144. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_70_full.png",
    "image": "/images/products/page_70_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-70-8",
    "code": "LF168",
    "name": "LF168 - Indoor Soft Play & Ball Pools (Page 70)",
    "slug": "lf168-play-equipment-page-70-8",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b943,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF168. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_70_full.png",
    "image": "/images/products/page_70_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-71-1",
    "code": "LF605",
    "name": "LF605 - Indoor Soft Play & Ball Pools (Page 71)",
    "slug": "lf605-play-equipment-page-71-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b914,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF605. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_71_full.png",
    "image": "/images/products/page_71_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-71-2",
    "code": "LF604",
    "name": "LF604 - Indoor Soft Play & Ball Pools (Page 71)",
    "slug": "lf604-play-equipment-page-71-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF604. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_71_full.png",
    "image": "/images/products/page_71_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-71-3",
    "code": "LF606",
    "name": "LF606 - Indoor Soft Play & Ball Pools (Page 71)",
    "slug": "lf606-play-equipment-page-71-3",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF606. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_71_full.png",
    "image": "/images/products/page_71_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-71-4",
    "code": "LF601",
    "name": "LF601 - Indoor Soft Play & Ball Pools (Page 71)",
    "slug": "lf601-play-equipment-page-71-4",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b911,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF601. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_71_full.png",
    "image": "/images/products/page_71_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-71-5",
    "code": "LF602",
    "name": "LF602 - Indoor Soft Play & Ball Pools (Page 71)",
    "slug": "lf602-play-equipment-page-71-5",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b98,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF602. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_71_full.png",
    "image": "/images/products/page_71_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-71-6",
    "code": "LF603",
    "name": "LF603 - Indoor Soft Play & Ball Pools (Page 71)",
    "slug": "lf603-play-equipment-page-71-6",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b911,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF603. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_71_full.png",
    "image": "/images/products/page_71_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-72-1",
    "code": "LF935",
    "name": "LF935 - Indoor Soft Play & Ball Pools (Page 72)",
    "slug": "lf935-play-equipment-page-72-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b98,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF935. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_72_full.png",
    "image": "/images/products/page_72_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-72-2",
    "code": "LF936",
    "name": "LF936 - Indoor Soft Play & Ball Pools (Page 72)",
    "slug": "lf936-play-equipment-page-72-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b98,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF936. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_72_full.png",
    "image": "/images/products/page_72_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-72-3",
    "code": "LF937",
    "name": "LF937 - Indoor Soft Play & Ball Pools (Page 72)",
    "slug": "lf937-play-equipment-page-72-3",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b912,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF937. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_72_full.png",
    "image": "/images/products/page_72_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-73-1",
    "code": "LF5532",
    "name": "LF5532 - Indoor Soft Play & Ball Pools (Page 73)",
    "slug": "lf5532-play-equipment-page-73-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b95,532",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF5532. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_73_full.png",
    "image": "/images/products/page_73_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-73-2",
    "code": "LF5052",
    "name": "LF5052 - Indoor Soft Play & Ball Pools (Page 73)",
    "slug": "lf5052-play-equipment-page-73-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b92,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF5052. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_73_full.png",
    "image": "/images/products/page_73_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-73-3",
    "code": "LF5012",
    "name": "LF5012 - Indoor Soft Play & Ball Pools (Page 73)",
    "slug": "lf5012-play-equipment-page-73-3",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF5012. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_73_full.png",
    "image": "/images/products/page_73_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-73-4",
    "code": "LF1101C",
    "name": "LF1101C - Indoor Soft Play & Ball Pools (Page 73)",
    "slug": "lf1101c-play-equipment-page-73-4",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b95,052",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1101C. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_73_full.png",
    "image": "/images/products/page_73_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-73-5",
    "code": "LF1103C",
    "name": "LF1103C - Indoor Soft Play & Ball Pools (Page 73)",
    "slug": "lf1103c-play-equipment-page-73-5",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b92,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF1103C. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_73_full.png",
    "image": "/images/products/page_73_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-74-1",
    "code": "LF52",
    "name": "LF52 - Indoor Soft Play & Ball Pools (Page 74)",
    "slug": "lf52-play-equipment-page-74-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,190",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF52. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_74_full.png",
    "image": "/images/products/page_74_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-74-2",
    "code": "LF58",
    "name": "LF58 - Indoor Soft Play & Ball Pools (Page 74)",
    "slug": "lf58-play-equipment-page-74-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,790",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF58. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_74_full.png",
    "image": "/images/products/page_74_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-74-3",
    "code": "LF414A",
    "name": "LF414A - Indoor Soft Play & Ball Pools (Page 74)",
    "slug": "lf414a-play-equipment-page-74-3",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,190",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF414A. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_74_full.png",
    "image": "/images/products/page_74_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-74-4",
    "code": "LF56",
    "name": "LF56 - Indoor Soft Play & Ball Pools (Page 74)",
    "slug": "lf56-play-equipment-page-74-4",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,790",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF56. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_74_full.png",
    "image": "/images/products/page_74_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-74-5",
    "code": "LF57",
    "name": "LF57 - Indoor Soft Play & Ball Pools (Page 74)",
    "slug": "lf57-play-equipment-page-74-5",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,190",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF57. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_74_full.png",
    "image": "/images/products/page_74_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-74-6",
    "code": "LF53",
    "name": "LF53 - Indoor Soft Play & Ball Pools (Page 74)",
    "slug": "lf53-play-equipment-page-74-6",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,190",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF53. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_74_full.png",
    "image": "/images/products/page_74_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-74-7",
    "code": "LF51",
    "name": "LF51 - Indoor Soft Play & Ball Pools (Page 74)",
    "slug": "lf51-play-equipment-page-74-7",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b91,190",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF51. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_74_full.png",
    "image": "/images/products/page_74_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-75-1",
    "code": "LF144",
    "name": "LF144 - Indoor Soft Play & Ball Pools (Page 75)",
    "slug": "lf144-play-equipment-page-75-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF144. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_75_full.png",
    "image": "/images/products/page_75_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-75-2",
    "code": "LF143",
    "name": "LF143 - Indoor Soft Play & Ball Pools (Page 75)",
    "slug": "lf143-play-equipment-page-75-2",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF143. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_75_full.png",
    "image": "/images/products/page_75_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-76-1",
    "code": "LF145",
    "name": "LF145 - Indoor Soft Play & Ball Pools (Page 76)",
    "slug": "lf145-play-equipment-page-76-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF145. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_76_full.png",
    "image": "/images/products/page_76_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-77-1",
    "code": "LF147",
    "name": "LF147 - Indoor Soft Play & Ball Pools (Page 77)",
    "slug": "lf147-play-equipment-page-77-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b95,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF147. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_77_full.png",
    "image": "/images/products/page_77_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-78-1",
    "code": "LF148",
    "name": "LF148 - Indoor Soft Play & Ball Pools (Page 78)",
    "slug": "lf148-play-equipment-page-78-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b913,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF148. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_78_full.png",
    "image": "/images/products/page_78_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-79-1",
    "code": "LF149",
    "name": "LF149 - Indoor Soft Play & Ball Pools (Page 79)",
    "slug": "lf149-play-equipment-page-79-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b94,490",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF149. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_79_full.png",
    "image": "/images/products/page_79_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-80-1",
    "code": "LF150",
    "name": "LF150 - Indoor Soft Play & Ball Pools (Page 80)",
    "slug": "lf150-play-equipment-page-80-1",
    "categoryId": "cat-indoor-softplay",
    "category": "Soft Play & Ball Pools",
    "categoryColor": "#45B7D1",
    "price": "\u20b92,990",
    "description": "Premium kindergarten indoor soft play & ball pools engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF150. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_80_full.png",
    "image": "/images/products/page_80_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-81-1",
    "code": "LF151",
    "name": "LF151 - Indoor Educational & Roleplay Toys (Page 81)",
    "slug": "lf151-play-equipment-page-81-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b910,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF151. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_81_full.png",
    "image": "/images/products/page_81_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-82-1",
    "code": "LF152",
    "name": "LF152 - Indoor Educational & Roleplay Toys (Page 82)",
    "slug": "lf152-play-equipment-page-82-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b914,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF152. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_82_full.png",
    "image": "/images/products/page_82_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-83-1",
    "code": "LF153",
    "name": "LF153 - Indoor Educational & Roleplay Toys (Page 83)",
    "slug": "lf153-play-equipment-page-83-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b91,490",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF153. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_83_full.png",
    "image": "/images/products/page_83_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-84-1",
    "code": "LF161",
    "name": "LF161 - Indoor Educational & Roleplay Toys (Page 84)",
    "slug": "lf161-play-equipment-page-84-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b94,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF161. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_84_full.png",
    "image": "/images/products/page_84_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-84-2",
    "code": "LF162",
    "name": "LF162 - Indoor Educational & Roleplay Toys (Page 84)",
    "slug": "lf162-play-equipment-page-84-2",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b94,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF162. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_84_full.png",
    "image": "/images/products/page_84_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-85-1",
    "code": "LF164",
    "name": "LF164 - Indoor Educational & Roleplay Toys (Page 85)",
    "slug": "lf164-play-equipment-page-85-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b92,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF164. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_85_full.png",
    "image": "/images/products/page_85_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-86-1",
    "code": "LF165",
    "name": "LF165 - Indoor Educational & Roleplay Toys (Page 86)",
    "slug": "lf165-play-equipment-page-86-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b92,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF165. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_86_full.png",
    "image": "/images/products/page_86_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-87-1",
    "code": "LF169",
    "name": "LF169 - Indoor Educational & Roleplay Toys (Page 87)",
    "slug": "lf169-play-equipment-page-87-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b917,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF169. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_87_full.png",
    "image": "/images/products/page_87_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-87-2",
    "code": "LF167",
    "name": "LF167 - Indoor Educational & Roleplay Toys (Page 87)",
    "slug": "lf167-play-equipment-page-87-2",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b92,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF167. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_87_full.png",
    "image": "/images/products/page_87_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-87-3",
    "code": "LF170",
    "name": "LF170 - Indoor Educational & Roleplay Toys (Page 87)",
    "slug": "lf170-play-equipment-page-87-3",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b917,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF170. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_87_full.png",
    "image": "/images/products/page_87_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-88-1",
    "code": "LF62",
    "name": "LF62 - Indoor Educational & Roleplay Toys (Page 88)",
    "slug": "lf62-play-equipment-page-88-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b91,990",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF62. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_88_full.png",
    "image": "/images/products/page_88_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-88-2",
    "code": "LF62S",
    "name": "LF62S - Indoor Educational & Roleplay Toys (Page 88)",
    "slug": "lf62s-play-equipment-page-88-2",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b91,190",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF62S. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_88_full.png",
    "image": "/images/products/page_88_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-89-1",
    "code": "LF-IN-89",
    "name": "LF-IN-89 - Indoor Educational & Roleplay Toys (Page 89)",
    "slug": "lf-in-89-play-equipment-page-89-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-89. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_89_full.png",
    "image": "/images/products/page_89_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-90-1",
    "code": "LF-IN-90",
    "name": "LF-IN-90 - Indoor Educational & Roleplay Toys (Page 90)",
    "slug": "lf-in-90-play-equipment-page-90-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-90. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_90_full.png",
    "image": "/images/products/page_90_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-91-1",
    "code": "LF-IN-91",
    "name": "LF-IN-91 - Indoor Educational & Roleplay Toys (Page 91)",
    "slug": "lf-in-91-play-equipment-page-91-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b92,395",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-91. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_91_full.png",
    "image": "/images/products/page_91_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-92-1",
    "code": "LF-IN-92",
    "name": "LF-IN-92 - Indoor Educational & Roleplay Toys (Page 92)",
    "slug": "lf-in-92-play-equipment-page-92-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b91,213",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-92. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_92_full.png",
    "image": "/images/products/page_92_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-93-1",
    "code": "LF-IN-93",
    "name": "LF-IN-93 - Indoor Educational & Roleplay Toys (Page 93)",
    "slug": "lf-in-93-play-equipment-page-93-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b91,196",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-93. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_93_full.png",
    "image": "/images/products/page_93_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-94-1",
    "code": "LF-IN-94",
    "name": "LF-IN-94 - Indoor Educational & Roleplay Toys (Page 94)",
    "slug": "lf-in-94-play-equipment-page-94-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b91,251",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-94. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_94_full.png",
    "image": "/images/products/page_94_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-95-1",
    "code": "LF-IN-95",
    "name": "LF-IN-95 - Indoor Educational & Roleplay Toys (Page 95)",
    "slug": "lf-in-95-play-equipment-page-95-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b914,999",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-95. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_95_full.png",
    "image": "/images/products/page_95_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-96-1",
    "code": "LF-IN-96",
    "name": "LF-IN-96 - Indoor Educational & Roleplay Toys (Page 96)",
    "slug": "lf-in-96-play-equipment-page-96-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b91,201",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-96. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_96_full.png",
    "image": "/images/products/page_96_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-97-1",
    "code": "LF-IN-97",
    "name": "LF-IN-97 - Indoor Educational & Roleplay Toys (Page 97)",
    "slug": "lf-in-97-play-equipment-page-97-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b91,199",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-97. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_97_full.png",
    "image": "/images/products/page_97_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "in-98-1",
    "code": "LF-IN-98",
    "name": "LF-IN-98 - Indoor Educational & Roleplay Toys (Page 98)",
    "slug": "lf-in-98-play-equipment-page-98-1",
    "categoryId": "cat-indoor-toys",
    "category": "Educational & Roleplay Toys",
    "categoryColor": "#96CEB4",
    "price": "\u20b92,490",
    "description": "Premium kindergarten indoor educational & roleplay toys engineered for child safety, comfort, and active learning.",
    "longDescription": "Official Little Fingers / Play Solution Indoor Catalogue 2026 item LF-IN-98. Features food-grade non-toxic LLDPE plastic, rounded child-safe edges, anti-skid stability, and vibrant primary colors.",
    "imageUrl": "/images/products/page_98_full.png",
    "image": "/images/products/page_98_full.png",
    "specifications": {
      "material": "Food-Grade LLDPE Plastic & Heavy Metal Frame",
      "ageGroup": "2 - 8 Years",
      "dimensions": "Standard Preschool Size",
      "capacity": "Standard Classroom Capacity",
      "colorOptions": "Vibrant Primary Colors (Red, Yellow, Blue, Green)"
    },
    "features": [
      "CE Certified & ISI Approved",
      "100% Non-Toxic Child-Safe Plastic",
      "Smooth Rounded Edges for Ergonomic Safety",
      "Easy Clean & Stain Resistant Finish",
      "1 Year Manufacturing Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-4-1",
    "code": "LFO-MPS-01",
    "name": "LFO-MPS-01 - Outdoor Multiplay Stations (Page 4)",
    "slug": "lfo-mps-01-outdoor-multiplay-4-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9119,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_4_full.png",
    "image": "/images/products/outdoor_page_4_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-4-2",
    "code": "LFO-MPS-01A",
    "name": "LFO-MPS-01A - Outdoor Multiplay Stations (Page 4)",
    "slug": "lfo-mps-01a-outdoor-multiplay-4-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9164,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-01A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_4_full.png",
    "image": "/images/products/outdoor_page_4_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-5-1",
    "code": "LFO-MPS-02",
    "name": "LFO-MPS-02 - Outdoor Multiplay Stations (Page 5)",
    "slug": "lfo-mps-02-outdoor-multiplay-5-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9279,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_5_full.png",
    "image": "/images/products/outdoor_page_5_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-5-2",
    "code": "LFO-MPS-02A",
    "name": "LFO-MPS-02A - Outdoor Multiplay Stations (Page 5)",
    "slug": "lfo-mps-02a-outdoor-multiplay-5-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9529,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-02A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_5_full.png",
    "image": "/images/products/outdoor_page_5_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-6-1",
    "code": "LFO-MPS-03",
    "name": "LFO-MPS-03 - Outdoor Multiplay Stations (Page 6)",
    "slug": "lfo-mps-03-outdoor-multiplay-6-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9219,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_6_full.png",
    "image": "/images/products/outdoor_page_6_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-6-2",
    "code": "LFO-MPS-03B",
    "name": "LFO-MPS-03B - Outdoor Multiplay Stations (Page 6)",
    "slug": "lfo-mps-03b-outdoor-multiplay-6-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9229,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-03B. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_6_full.png",
    "image": "/images/products/outdoor_page_6_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-7-1",
    "code": "LFO-MPS-03C",
    "name": "LFO-MPS-03C - Outdoor Multiplay Stations (Page 7)",
    "slug": "lfo-mps-03c-outdoor-multiplay-7-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,460",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-03C. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_7_full.png",
    "image": "/images/products/outdoor_page_7_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-7-2",
    "code": "LFO-MPS-03D",
    "name": "LFO-MPS-03D - Outdoor Multiplay Stations (Page 7)",
    "slug": "lfo-mps-03d-outdoor-multiplay-7-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9239,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-03D. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_7_full.png",
    "image": "/images/products/outdoor_page_7_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-8-1",
    "code": "LFO-MPS-03E",
    "name": "LFO-MPS-03E - Outdoor Multiplay Stations (Page 8)",
    "slug": "lfo-mps-03e-outdoor-multiplay-8-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9159,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-03E. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_8_full.png",
    "image": "/images/products/outdoor_page_8_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-8-2",
    "code": "LFO-MPS-04",
    "name": "LFO-MPS-04 - Outdoor Multiplay Stations (Page 8)",
    "slug": "lfo-mps-04-outdoor-multiplay-8-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9359,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_8_full.png",
    "image": "/images/products/outdoor_page_8_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-9-1",
    "code": "LFO-MPS-04A",
    "name": "LFO-MPS-04A - Outdoor Multiplay Stations (Page 9)",
    "slug": "lfo-mps-04a-outdoor-multiplay-9-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9494,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-04A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_9_full.png",
    "image": "/images/products/outdoor_page_9_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-9-2",
    "code": "LFO-MPS-04B",
    "name": "LFO-MPS-04B - Outdoor Multiplay Stations (Page 9)",
    "slug": "lfo-mps-04b-outdoor-multiplay-9-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9649,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-04B. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_9_full.png",
    "image": "/images/products/outdoor_page_9_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-10-1",
    "code": "LFO-MPS-05",
    "name": "LFO-MPS-05 - Outdoor Multiplay Stations (Page 10)",
    "slug": "lfo-mps-05-outdoor-multiplay-10-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9349,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_10_full.png",
    "image": "/images/products/outdoor_page_10_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-10-2",
    "code": "LFO-MPS-06",
    "name": "LFO-MPS-06 - Outdoor Multiplay Stations (Page 10)",
    "slug": "lfo-mps-06-outdoor-multiplay-10-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9299,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_10_full.png",
    "image": "/images/products/outdoor_page_10_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-11-1",
    "code": "LFO-MPS-06A",
    "name": "LFO-MPS-06A - Outdoor Multiplay Stations (Page 11)",
    "slug": "lfo-mps-06a-outdoor-multiplay-11-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9329,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-06A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_11_full.png",
    "image": "/images/products/outdoor_page_11_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-11-2",
    "code": "LFO-MPS-07",
    "name": "LFO-MPS-07 - Outdoor Multiplay Stations (Page 11)",
    "slug": "lfo-mps-07-outdoor-multiplay-11-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9379,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-07. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_11_full.png",
    "image": "/images/products/outdoor_page_11_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-12-1",
    "code": "LFO-MPS-08",
    "name": "LFO-MPS-08 - Outdoor Multiplay Stations (Page 12)",
    "slug": "lfo-mps-08-outdoor-multiplay-12-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9469,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-08. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_12_full.png",
    "image": "/images/products/outdoor_page_12_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-12-2",
    "code": "LFO-MPS-08A",
    "name": "LFO-MPS-08A - Outdoor Multiplay Stations (Page 12)",
    "slug": "lfo-mps-08a-outdoor-multiplay-12-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9509,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-08A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_12_full.png",
    "image": "/images/products/outdoor_page_12_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-13-1",
    "code": "LFO-MPS-09",
    "name": "LFO-MPS-09 - Outdoor Multiplay Stations (Page 13)",
    "slug": "lfo-mps-09-outdoor-multiplay-13-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9414,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-09. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_13_full.png",
    "image": "/images/products/outdoor_page_13_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-13-2",
    "code": "LFO-MPS-09A",
    "name": "LFO-MPS-09A - Outdoor Multiplay Stations (Page 13)",
    "slug": "lfo-mps-09a-outdoor-multiplay-13-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9469,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-09A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_13_full.png",
    "image": "/images/products/outdoor_page_13_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-14-1",
    "code": "LFO-MPS-10",
    "name": "LFO-MPS-10 - Outdoor Multiplay Stations (Page 14)",
    "slug": "lfo-mps-10-outdoor-multiplay-14-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9539,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-10. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_14_full.png",
    "image": "/images/products/outdoor_page_14_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-14-2",
    "code": "LFO-MPS-11",
    "name": "LFO-MPS-11 - Outdoor Multiplay Stations (Page 14)",
    "slug": "lfo-mps-11-outdoor-multiplay-14-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9549,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-11. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_14_full.png",
    "image": "/images/products/outdoor_page_14_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-15-1",
    "code": "LFO-MPS-12",
    "name": "LFO-MPS-12 - Outdoor Multiplay Stations (Page 15)",
    "slug": "lfo-mps-12-outdoor-multiplay-15-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9499,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-12. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_15_full.png",
    "image": "/images/products/outdoor_page_15_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-15-2",
    "code": "LFO-MPS-13B",
    "name": "LFO-MPS-13B - Outdoor Multiplay Stations (Page 15)",
    "slug": "lfo-mps-13b-outdoor-multiplay-15-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9459,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-13B. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_15_full.png",
    "image": "/images/products/outdoor_page_15_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-16-1",
    "code": "LFO-MPS-14A",
    "name": "LFO-MPS-14A - Outdoor Multiplay Stations (Page 16)",
    "slug": "lfo-mps-14a-outdoor-multiplay-16-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9819,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-14A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_16_full.png",
    "image": "/images/products/outdoor_page_16_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-16-2",
    "code": "LFO-MPS-15",
    "name": "LFO-MPS-15 - Outdoor Multiplay Stations (Page 16)",
    "slug": "lfo-mps-15-outdoor-multiplay-16-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9389,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-15. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_16_full.png",
    "image": "/images/products/outdoor_page_16_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-17-1",
    "code": "LFO-MPS-16",
    "name": "LFO-MPS-16 - Outdoor Multiplay Stations (Page 17)",
    "slug": "lfo-mps-16-outdoor-multiplay-17-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9599,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-16. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_17_full.png",
    "image": "/images/products/outdoor_page_17_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-17-2",
    "code": "LFO-MPS-17",
    "name": "LFO-MPS-17 - Outdoor Multiplay Stations (Page 17)",
    "slug": "lfo-mps-17-outdoor-multiplay-17-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9409,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-17. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_17_full.png",
    "image": "/images/products/outdoor_page_17_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-18-1",
    "code": "LFO-MPS-18",
    "name": "LFO-MPS-18 - Outdoor Multiplay Stations (Page 18)",
    "slug": "lfo-mps-18-outdoor-multiplay-18-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9579,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-18. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_18_full.png",
    "image": "/images/products/outdoor_page_18_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-18-2",
    "code": "LFO-MPS-19A",
    "name": "LFO-MPS-19A - Outdoor Multiplay Stations (Page 18)",
    "slug": "lfo-mps-19a-outdoor-multiplay-18-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9439,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-19A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_18_full.png",
    "image": "/images/products/outdoor_page_18_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-19-1",
    "code": "LFO-MPS-20A",
    "name": "LFO-MPS-20A - Outdoor Multiplay Stations (Page 19)",
    "slug": "lfo-mps-20a-outdoor-multiplay-19-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9359,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-20A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_19_full.png",
    "image": "/images/products/outdoor_page_19_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-19-2",
    "code": "LFO-MPS-21A",
    "name": "LFO-MPS-21A - Outdoor Multiplay Stations (Page 19)",
    "slug": "lfo-mps-21a-outdoor-multiplay-19-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9549,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-21A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_19_full.png",
    "image": "/images/products/outdoor_page_19_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-20-1",
    "code": "LFO-MPS-22A",
    "name": "LFO-MPS-22A - Outdoor Multiplay Stations (Page 20)",
    "slug": "lfo-mps-22a-outdoor-multiplay-20-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9634,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-22A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_20_full.png",
    "image": "/images/products/outdoor_page_20_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-20-2",
    "code": "LFO-MPS-23",
    "name": "LFO-MPS-23 - Outdoor Multiplay Stations (Page 20)",
    "slug": "lfo-mps-23-outdoor-multiplay-20-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,079",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-23. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_20_full.png",
    "image": "/images/products/outdoor_page_20_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-21-1",
    "code": "LFO-MPS-24A",
    "name": "LFO-MPS-24A - Outdoor Multiplay Stations (Page 21)",
    "slug": "lfo-mps-24a-outdoor-multiplay-21-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9599,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-24A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_21_full.png",
    "image": "/images/products/outdoor_page_21_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-21-2",
    "code": "LFO-MPS-25A",
    "name": "LFO-MPS-25A - Outdoor Multiplay Stations (Page 21)",
    "slug": "lfo-mps-25a-outdoor-multiplay-21-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9819,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-25A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_21_full.png",
    "image": "/images/products/outdoor_page_21_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-22-1",
    "code": "LFO-MPS-26",
    "name": "LFO-MPS-26 - Outdoor Multiplay Stations (Page 22)",
    "slug": "lfo-mps-26-outdoor-multiplay-22-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,199",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-26. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_22_full.png",
    "image": "/images/products/outdoor_page_22_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-22-2",
    "code": "LFO-MPS-28",
    "name": "LFO-MPS-28 - Outdoor Multiplay Stations (Page 22)",
    "slug": "lfo-mps-28-outdoor-multiplay-22-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b91,319",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-28. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_22_full.png",
    "image": "/images/products/outdoor_page_22_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-23-1",
    "code": "LFO-MPS-29",
    "name": "LFO-MPS-29 - Outdoor Multiplay Stations (Page 23)",
    "slug": "lfo-mps-29-outdoor-multiplay-23-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b92,099",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-29. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_23_full.png",
    "image": "/images/products/outdoor_page_23_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-23-2",
    "code": "LFO-MPS-30",
    "name": "LFO-MPS-30 - Outdoor Multiplay Stations (Page 23)",
    "slug": "lfo-mps-30-outdoor-multiplay-23-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b92,499",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-30. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_23_full.png",
    "image": "/images/products/outdoor_page_23_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-24-1",
    "code": "LFO-MPS-31",
    "name": "LFO-MPS-31 - Outdoor Multiplay Stations (Page 24)",
    "slug": "lfo-mps-31-outdoor-multiplay-24-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9549,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-31. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_24_full.png",
    "image": "/images/products/outdoor_page_24_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-24-2",
    "code": "LFO-MPS-32",
    "name": "LFO-MPS-32 - Outdoor Multiplay Stations (Page 24)",
    "slug": "lfo-mps-32-outdoor-multiplay-24-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9689,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-32. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_24_full.png",
    "image": "/images/products/outdoor_page_24_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-25-1",
    "code": "LFO-MPS-33",
    "name": "LFO-MPS-33 - Outdoor Multiplay Stations (Page 25)",
    "slug": "lfo-mps-33-outdoor-multiplay-25-1",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9709,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-33. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_25_full.png",
    "image": "/images/products/outdoor_page_25_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-25-2",
    "code": "LFO-MPS-51",
    "name": "LFO-MPS-51 - Outdoor Multiplay Stations (Page 25)",
    "slug": "lfo-mps-51-outdoor-multiplay-25-2",
    "categoryId": "cat-outdoor-mps",
    "category": "Outdoor Multiplay Stations",
    "categoryColor": "#4ECDC4",
    "price": "\u20b9709,990",
    "description": "Heavy-duty commercial outdoor multiplay stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MPS-51. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_25_full.png",
    "image": "/images/products/outdoor_page_25_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-26-1",
    "code": "LFO-JPS-01",
    "name": "LFO-JPS-01 - Junior Play Stations (Page 26)",
    "slug": "lfo-jps-01-outdoor-junior-play-26-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_26_full.png",
    "image": "/images/products/outdoor_page_26_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.5 X W-11.2 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-26-2",
    "code": "LFO-JPS-02",
    "name": "LFO-JPS-02 - Junior Play Stations (Page 26)",
    "slug": "lfo-jps-02-outdoor-junior-play-26-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9139,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_26_full.png",
    "image": "/images/products/outdoor_page_26_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.5 X W-11.2 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-27-1",
    "code": "LFO-JPS-03",
    "name": "LFO-JPS-03 - Junior Play Stations (Page 27)",
    "slug": "lfo-jps-03-outdoor-junior-play-27-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9249,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_27_full.png",
    "image": "/images/products/outdoor_page_27_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-16.5 X W-10.5 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-27-2",
    "code": "LFO-JPS-04",
    "name": "LFO-JPS-04 - Junior Play Stations (Page 27)",
    "slug": "lfo-jps-04-outdoor-junior-play-27-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9269,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_27_full.png",
    "image": "/images/products/outdoor_page_27_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-16.5 X W-10.5 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-28-1",
    "code": "LFO-JPS-05",
    "name": "LFO-JPS-05 - Junior Play Stations (Page 28)",
    "slug": "lfo-jps-05-outdoor-junior-play-28-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9259,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_28_full.png",
    "image": "/images/products/outdoor_page_28_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-20 X W-18.5 X H-12 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-28-2",
    "code": "LFO-JPS-06",
    "name": "LFO-JPS-06 - Junior Play Stations (Page 28)",
    "slug": "lfo-jps-06-outdoor-junior-play-28-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9379,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_28_full.png",
    "image": "/images/products/outdoor_page_28_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-20 X W-18.5 X H-12 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-29-1",
    "code": "LFO-JPS-01A",
    "name": "LFO-JPS-01A - Junior Play Stations (Page 29)",
    "slug": "lfo-jps-01a-outdoor-junior-play-29-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9119,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-01A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_29_full.png",
    "image": "/images/products/outdoor_page_29_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-13.5 X W-11.5 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-29-2",
    "code": "LFO-JPS-02A",
    "name": "LFO-JPS-02A - Junior Play Stations (Page 29)",
    "slug": "lfo-jps-02a-outdoor-junior-play-29-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9179,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-02A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_29_full.png",
    "image": "/images/products/outdoor_page_29_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-13.5 X W-11.5 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-30-1",
    "code": "LFO-JPS-03A",
    "name": "LFO-JPS-03A - Junior Play Stations (Page 30)",
    "slug": "lfo-jps-03a-outdoor-junior-play-30-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9254,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-03A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_30_full.png",
    "image": "/images/products/outdoor_page_30_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-20.5 X W-15.5 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-30-2",
    "code": "LFO-JPS-04A",
    "name": "LFO-JPS-04A - Junior Play Stations (Page 30)",
    "slug": "lfo-jps-04a-outdoor-junior-play-30-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9359,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-04A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_30_full.png",
    "image": "/images/products/outdoor_page_30_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-20.5 X W-15.5 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-31-1",
    "code": "LFO-JPS-05A",
    "name": "LFO-JPS-05A - Junior Play Stations (Page 31)",
    "slug": "lfo-jps-05a-outdoor-junior-play-31-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9409,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-05A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_31_full.png",
    "image": "/images/products/outdoor_page_31_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-22.5 X W-17.5 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-31-2",
    "code": "LFO-JPS-06A",
    "name": "LFO-JPS-06A - Junior Play Stations (Page 31)",
    "slug": "lfo-jps-06a-outdoor-junior-play-31-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9439,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-06A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_31_full.png",
    "image": "/images/products/outdoor_page_31_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-22.5 X W-17.5 X H-14 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-32-1",
    "code": "LFO-JPS-07",
    "name": "LFO-JPS-07 - Junior Play Stations (Page 32)",
    "slug": "lfo-jps-07-outdoor-junior-play-32-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-07. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_32_full.png",
    "image": "/images/products/outdoor_page_32_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-4 X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-32-2",
    "code": "LFO-JPS-08",
    "name": "LFO-JPS-08 - Junior Play Stations (Page 32)",
    "slug": "lfo-jps-08-outdoor-junior-play-32-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9139,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-08. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_32_full.png",
    "image": "/images/products/outdoor_page_32_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-4 X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-33-1",
    "code": "LFO-JPS-09",
    "name": "LFO-JPS-09 - Junior Play Stations (Page 33)",
    "slug": "lfo-jps-09-outdoor-junior-play-33-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9149,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-09. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_33_full.png",
    "image": "/images/products/outdoor_page_33_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-16 X W-8.5 X H-8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-33-2",
    "code": "LFO-JPS-10",
    "name": "LFO-JPS-10 - Junior Play Stations (Page 33)",
    "slug": "lfo-jps-10-outdoor-junior-play-33-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9149,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-10. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_33_full.png",
    "image": "/images/products/outdoor_page_33_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-16 X W-8.5 X H-8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-34-1",
    "code": "LFO-JPS-11",
    "name": "LFO-JPS-11 - Junior Play Stations (Page 34)",
    "slug": "lfo-jps-11-outdoor-junior-play-34-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9139,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-11. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_34_full.png",
    "image": "/images/products/outdoor_page_34_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-14.5 X W-8.5 X H-12 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-34-2",
    "code": "LFO-JPS-12",
    "name": "LFO-JPS-12 - Junior Play Stations (Page 34)",
    "slug": "lfo-jps-12-outdoor-junior-play-34-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9149,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-12. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_34_full.png",
    "image": "/images/products/outdoor_page_34_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-14.5 X W-8.5 X H-12 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-35-1",
    "code": "LFO-JPS-13",
    "name": "LFO-JPS-13 - Junior Play Stations (Page 35)",
    "slug": "lfo-jps-13-outdoor-junior-play-35-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9179,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-13. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_35_full.png",
    "image": "/images/products/outdoor_page_35_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-10 X W-9.5 X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-35-2",
    "code": "LFO-JPS-14",
    "name": "LFO-JPS-14 - Junior Play Stations (Page 35)",
    "slug": "lfo-jps-14-outdoor-junior-play-35-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9244,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-14. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_35_full.png",
    "image": "/images/products/outdoor_page_35_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-10 X W-9.5 X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-36-1",
    "code": "LFO-JPS-15",
    "name": "LFO-JPS-15 - Junior Play Stations (Page 36)",
    "slug": "lfo-jps-15-outdoor-junior-play-36-1",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9259,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-15. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_36_full.png",
    "image": "/images/products/outdoor_page_36_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-22.5 X W-19.5 X H-12 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-36-2",
    "code": "LFO-JPS-16",
    "name": "LFO-JPS-16 - Junior Play Stations (Page 36)",
    "slug": "lfo-jps-16-outdoor-junior-play-36-2",
    "categoryId": "cat-outdoor-jps",
    "category": "Junior Play Stations",
    "categoryColor": "#FF6B9D",
    "price": "\u20b9299,990",
    "description": "Heavy-duty commercial junior play stations engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-JPS-16. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_36_full.png",
    "image": "/images/products/outdoor_page_36_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-22.5 X W-19.5 X H-12 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-37-1",
    "code": "LFO-WSC-01",
    "name": "LFO-WSC-01 - Web Scramblers & Climbers (Page 37)",
    "slug": "lfo-wsc-01-outdoor-scramblers-37-1",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9899,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_37_full.png",
    "image": "/images/products/outdoor_page_37_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-37-2",
    "code": "LFO-WSC-02",
    "name": "LFO-WSC-02 - Web Scramblers & Climbers (Page 37)",
    "slug": "lfo-wsc-02-outdoor-scramblers-37-2",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9459,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_37_full.png",
    "image": "/images/products/outdoor_page_37_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-38-1",
    "code": "LFO-WSC-03",
    "name": "LFO-WSC-03 - Web Scramblers & Climbers (Page 38)",
    "slug": "lfo-wsc-03-outdoor-scramblers-38-1",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9399,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_38_full.png",
    "image": "/images/products/outdoor_page_38_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-38-2",
    "code": "LFO-WSC-04",
    "name": "LFO-WSC-04 - Web Scramblers & Climbers (Page 38)",
    "slug": "lfo-wsc-04-outdoor-scramblers-38-2",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9459,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_38_full.png",
    "image": "/images/products/outdoor_page_38_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-39-1",
    "code": "LFO-WSC-05",
    "name": "LFO-WSC-05 - Web Scramblers & Climbers (Page 39)",
    "slug": "lfo-wsc-05-outdoor-scramblers-39-1",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9239,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_39_full.png",
    "image": "/images/products/outdoor_page_39_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-39-2",
    "code": "LFO-WSC-06",
    "name": "LFO-WSC-06 - Web Scramblers & Climbers (Page 39)",
    "slug": "lfo-wsc-06-outdoor-scramblers-39-2",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9239,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_39_full.png",
    "image": "/images/products/outdoor_page_39_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-40-1",
    "code": "LFO-WSC-07",
    "name": "LFO-WSC-07 - Web Scramblers & Climbers (Page 40)",
    "slug": "lfo-wsc-07-outdoor-scramblers-40-1",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9689,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-07. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_40_full.png",
    "image": "/images/products/outdoor_page_40_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-40-2",
    "code": "LFO-WSC-08",
    "name": "LFO-WSC-08 - Web Scramblers & Climbers (Page 40)",
    "slug": "lfo-wsc-08-outdoor-scramblers-40-2",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9569,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-08. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_40_full.png",
    "image": "/images/products/outdoor_page_40_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-41-1",
    "code": "LFO-WSC-09",
    "name": "LFO-WSC-09 - Web Scramblers & Climbers (Page 41)",
    "slug": "lfo-wsc-09-outdoor-scramblers-41-1",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9689,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-09. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_41_full.png",
    "image": "/images/products/outdoor_page_41_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-41-2",
    "code": "LFO-WSC-10",
    "name": "LFO-WSC-10 - Web Scramblers & Climbers (Page 41)",
    "slug": "lfo-wsc-10-outdoor-scramblers-41-2",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9289,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-10. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_41_full.png",
    "image": "/images/products/outdoor_page_41_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-42-1",
    "code": "LFO-WSC-11",
    "name": "LFO-WSC-11 - Web Scramblers & Climbers (Page 42)",
    "slug": "lfo-wsc-11-outdoor-scramblers-42-1",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9289,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-11. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_42_full.png",
    "image": "/images/products/outdoor_page_42_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-42-2",
    "code": "LFO-WSC-12",
    "name": "LFO-WSC-12 - Web Scramblers & Climbers (Page 42)",
    "slug": "lfo-wsc-12-outdoor-scramblers-42-2",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b9799,990",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-12. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_42_full.png",
    "image": "/images/products/outdoor_page_42_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-43-1",
    "code": "LFO-WSC-13",
    "name": "LFO-WSC-13 - Web Scramblers & Climbers (Page 43)",
    "slug": "lfo-wsc-13-outdoor-scramblers-43-1",
    "categoryId": "cat-outdoor-wsc",
    "category": "Web Scramblers & Climbers",
    "categoryColor": "#7B68EE",
    "price": "\u20b91,149",
    "description": "Heavy-duty commercial web scramblers & climbers engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-WSC-13. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_43_full.png",
    "image": "/images/products/outdoor_page_43_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-44-1",
    "code": "LFO-SW-01",
    "name": "LFO-SW-01 - Outdoor Swings (Page 44)",
    "slug": "lfo-sw-01-outdoor-swings-44-1",
    "categoryId": "cat-outdoor-sw",
    "category": "Outdoor Swings",
    "categoryColor": "#45B7D1",
    "price": "\u20b925,990",
    "description": "Heavy-duty commercial outdoor swings engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SW-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_44_full.png",
    "image": "/images/products/outdoor_page_44_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-4 X W-2 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-44-2",
    "code": "LFO-SW-03",
    "name": "LFO-SW-03 - Outdoor Swings (Page 44)",
    "slug": "lfo-sw-03-outdoor-swings-44-2",
    "categoryId": "cat-outdoor-sw",
    "category": "Outdoor Swings",
    "categoryColor": "#45B7D1",
    "price": "\u20b954,990",
    "description": "Heavy-duty commercial outdoor swings engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SW-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_44_full.png",
    "image": "/images/products/outdoor_page_44_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-4 X W-2 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-44-3",
    "code": "LFO-SW-05",
    "name": "LFO-SW-05 - Outdoor Swings (Page 44)",
    "slug": "lfo-sw-05-outdoor-swings-44-3",
    "categoryId": "cat-outdoor-sw",
    "category": "Outdoor Swings",
    "categoryColor": "#45B7D1",
    "price": "\u20b937,990",
    "description": "Heavy-duty commercial outdoor swings engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SW-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_44_full.png",
    "image": "/images/products/outdoor_page_44_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-4 X W-2 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-44-4",
    "code": "LFO-SW-02",
    "name": "LFO-SW-02 - Outdoor Swings (Page 44)",
    "slug": "lfo-sw-02-outdoor-swings-44-4",
    "categoryId": "cat-outdoor-sw",
    "category": "Outdoor Swings",
    "categoryColor": "#45B7D1",
    "price": "\u20b954,990",
    "description": "Heavy-duty commercial outdoor swings engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SW-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_44_full.png",
    "image": "/images/products/outdoor_page_44_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-4 X W-2 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-44-5",
    "code": "LFO-SW-04",
    "name": "LFO-SW-04 - Outdoor Swings (Page 44)",
    "slug": "lfo-sw-04-outdoor-swings-44-5",
    "categoryId": "cat-outdoor-sw",
    "category": "Outdoor Swings",
    "categoryColor": "#45B7D1",
    "price": "\u20b999,990",
    "description": "Heavy-duty commercial outdoor swings engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SW-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_44_full.png",
    "image": "/images/products/outdoor_page_44_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-4 X W-2 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-44-6",
    "code": "LFO-SW-06",
    "name": "LFO-SW-06 - Outdoor Swings (Page 44)",
    "slug": "lfo-sw-06-outdoor-swings-44-6",
    "categoryId": "cat-outdoor-sw",
    "category": "Outdoor Swings",
    "categoryColor": "#45B7D1",
    "price": "\u20b954,990",
    "description": "Heavy-duty commercial outdoor swings engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SW-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_44_full.png",
    "image": "/images/products/outdoor_page_44_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-4 X W-2 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-44-7",
    "code": "LFO-SW-02",
    "name": "LFO-SW-02 - Outdoor Swings (Page 44)",
    "slug": "lfo-sw-02-outdoor-swings-44-7",
    "categoryId": "cat-outdoor-sw",
    "category": "Outdoor Swings",
    "categoryColor": "#45B7D1",
    "price": "\u20b925,990",
    "description": "Heavy-duty commercial outdoor swings engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SW-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_44_full.png",
    "image": "/images/products/outdoor_page_44_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-4 X W-2 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-1",
    "code": "LFO-SDS-02",
    "name": "LFO-SDS-02 - Outdoor Slides (Page 45)",
    "slug": "lfo-sds-02-outdoor-slides-45-1",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b949,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SDS-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-2",
    "code": "LFO-SD-02",
    "name": "LFO-SD-02 - Outdoor Slides (Page 45)",
    "slug": "lfo-sd-02-outdoor-slides-45-2",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b964,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-3",
    "code": "LFO-SDB-02",
    "name": "LFO-SDB-02 - Outdoor Slides (Page 45)",
    "slug": "lfo-sdb-02-outdoor-slides-45-3",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b974,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SDB-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-4",
    "code": "LFO-SD-03",
    "name": "LFO-SD-03 - Outdoor Slides (Page 45)",
    "slug": "lfo-sd-03-outdoor-slides-45-4",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9119,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-5",
    "code": "LFO-SD",
    "name": "LFO-SD - Outdoor Slides (Page 45)",
    "slug": "lfo-sd-outdoor-slides-45-5",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b994,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-6",
    "code": "LFO-SD-06",
    "name": "LFO-SD-06 - Outdoor Slides (Page 45)",
    "slug": "lfo-sd-06-outdoor-slides-45-6",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9119,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-7",
    "code": "LFO-SDS-06",
    "name": "LFO-SDS-06 - Outdoor Slides (Page 45)",
    "slug": "lfo-sds-06-outdoor-slides-45-7",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b999,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SDS-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-8",
    "code": "LFO-SD-05",
    "name": "LFO-SD-05 - Outdoor Slides (Page 45)",
    "slug": "lfo-sd-05-outdoor-slides-45-8",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9239,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-45-9",
    "code": "LFO-SD-04",
    "name": "LFO-SD-04 - Outdoor Slides (Page 45)",
    "slug": "lfo-sd-04-outdoor-slides-45-9",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9199,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_45_full.png",
    "image": "/images/products/outdoor_page_45_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8.5 X W-2.3 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-46-1",
    "code": "LFO-SD-06A",
    "name": "LFO-SD-06A - Outdoor Slides (Page 46)",
    "slug": "lfo-sd-06a-outdoor-slides-46-1",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-06A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_46_full.png",
    "image": "/images/products/outdoor_page_46_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-13 X W-5 X H-6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-46-2",
    "code": "LFO-SD-06B",
    "name": "LFO-SD-06B - Outdoor Slides (Page 46)",
    "slug": "lfo-sd-06b-outdoor-slides-46-2",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9134,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-06B. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_46_full.png",
    "image": "/images/products/outdoor_page_46_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-13 X W-5 X H-6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-46-3",
    "code": "LFO-SD-06C",
    "name": "LFO-SD-06C - Outdoor Slides (Page 46)",
    "slug": "lfo-sd-06c-outdoor-slides-46-3",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9149,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-06C. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_46_full.png",
    "image": "/images/products/outdoor_page_46_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-13 X W-5 X H-6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-46-4",
    "code": "LFO-SD-06D",
    "name": "LFO-SD-06D - Outdoor Slides (Page 46)",
    "slug": "lfo-sd-06d-outdoor-slides-46-4",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9159,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-06D. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_46_full.png",
    "image": "/images/products/outdoor_page_46_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-13 X W-5 X H-6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-46-5",
    "code": "LFO-SD-07",
    "name": "LFO-SD-07 - Outdoor Slides (Page 46)",
    "slug": "lfo-sd-07-outdoor-slides-46-5",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9104,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-07. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_46_full.png",
    "image": "/images/products/outdoor_page_46_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-13 X W-5 X H-6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-46-6",
    "code": "LFO-SD-08",
    "name": "LFO-SD-08 - Outdoor Slides (Page 46)",
    "slug": "lfo-sd-08-outdoor-slides-46-6",
    "categoryId": "cat-outdoor-sd",
    "category": "Outdoor Slides",
    "categoryColor": "#96CEB4",
    "price": "\u20b9419,990",
    "description": "Heavy-duty commercial outdoor slides engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SD-08. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_46_full.png",
    "image": "/images/products/outdoor_page_46_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-13 X W-5 X H-6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-47-1",
    "code": "LFO-SS-01",
    "name": "LFO-SS-01 - See Saws (Page 47)",
    "slug": "lfo-ss-01-outdoor-seesaw-47-1",
    "categoryId": "cat-outdoor-ss",
    "category": "See Saws",
    "categoryColor": "#FFE66D",
    "price": "\u20b941,990",
    "description": "Heavy-duty commercial see saws engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SS-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_47_full.png",
    "image": "/images/products/outdoor_page_47_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.33 X W-1.33 X H-2.6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-47-2",
    "code": "LFO-SS-02",
    "name": "LFO-SS-02 - See Saws (Page 47)",
    "slug": "lfo-ss-02-outdoor-seesaw-47-2",
    "categoryId": "cat-outdoor-ss",
    "category": "See Saws",
    "categoryColor": "#FFE66D",
    "price": "\u20b924,990",
    "description": "Heavy-duty commercial see saws engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SS-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_47_full.png",
    "image": "/images/products/outdoor_page_47_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.33 X W-1.33 X H-2.6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-47-3",
    "code": "LFO-SS-03",
    "name": "LFO-SS-03 - See Saws (Page 47)",
    "slug": "lfo-ss-03-outdoor-seesaw-47-3",
    "categoryId": "cat-outdoor-ss",
    "category": "See Saws",
    "categoryColor": "#FFE66D",
    "price": "\u20b921,990",
    "description": "Heavy-duty commercial see saws engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SS-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_47_full.png",
    "image": "/images/products/outdoor_page_47_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.33 X W-1.33 X H-2.6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-47-4",
    "code": "LFO-SS-04",
    "name": "LFO-SS-04 - See Saws (Page 47)",
    "slug": "lfo-ss-04-outdoor-seesaw-47-4",
    "categoryId": "cat-outdoor-ss",
    "category": "See Saws",
    "categoryColor": "#FFE66D",
    "price": "\u20b942,990",
    "description": "Heavy-duty commercial see saws engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SS-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_47_full.png",
    "image": "/images/products/outdoor_page_47_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.33 X W-1.33 X H-2.6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-47-5",
    "code": "LFO-SS-05",
    "name": "LFO-SS-05 - See Saws (Page 47)",
    "slug": "lfo-ss-05-outdoor-seesaw-47-5",
    "categoryId": "cat-outdoor-ss",
    "category": "See Saws",
    "categoryColor": "#FFE66D",
    "price": "\u20b942,990",
    "description": "Heavy-duty commercial see saws engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SS-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_47_full.png",
    "image": "/images/products/outdoor_page_47_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.33 X W-1.33 X H-2.6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-47-6",
    "code": "LFO-SS-06",
    "name": "LFO-SS-06 - See Saws (Page 47)",
    "slug": "lfo-ss-06-outdoor-seesaw-47-6",
    "categoryId": "cat-outdoor-ss",
    "category": "See Saws",
    "categoryColor": "#FFE66D",
    "price": "\u20b942,990",
    "description": "Heavy-duty commercial see saws engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SS-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_47_full.png",
    "image": "/images/products/outdoor_page_47_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.33 X W-1.33 X H-2.6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-47-7",
    "code": "LFO-SS-07",
    "name": "LFO-SS-07 - See Saws (Page 47)",
    "slug": "lfo-ss-07-outdoor-seesaw-47-7",
    "categoryId": "cat-outdoor-ss",
    "category": "See Saws",
    "categoryColor": "#FFE66D",
    "price": "\u20b942,990",
    "description": "Heavy-duty commercial see saws engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SS-07. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_47_full.png",
    "image": "/images/products/outdoor_page_47_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.33 X W-1.33 X H-2.6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-47-8",
    "code": "LFO-SS-08",
    "name": "LFO-SS-08 - See Saws (Page 47)",
    "slug": "lfo-ss-08-outdoor-seesaw-47-8",
    "categoryId": "cat-outdoor-ss",
    "category": "See Saws",
    "categoryColor": "#FFE66D",
    "price": "\u20b942,990",
    "description": "Heavy-duty commercial see saws engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SS-08. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_47_full.png",
    "image": "/images/products/outdoor_page_47_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-9.33 X W-1.33 X H-2.6 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-48-1",
    "code": "LFO-MGR-01",
    "name": "LFO-MGR-01 - Merry Go Rounds (Page 48)",
    "slug": "lfo-mgr-01-outdoor-mgr-48-1",
    "categoryId": "cat-outdoor-mgr",
    "category": "Merry Go Rounds",
    "categoryColor": "#FF9F43",
    "price": "\u20b964,990",
    "description": "Heavy-duty commercial merry go rounds engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MGR-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_48_full.png",
    "image": "/images/products/outdoor_page_48_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "5ft Dia",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-48-2",
    "code": "LFO-MGR-02",
    "name": "LFO-MGR-02 - Merry Go Rounds (Page 48)",
    "slug": "lfo-mgr-02-outdoor-mgr-48-2",
    "categoryId": "cat-outdoor-mgr",
    "category": "Merry Go Rounds",
    "categoryColor": "#FF9F43",
    "price": "\u20b954,990",
    "description": "Heavy-duty commercial merry go rounds engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MGR-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_48_full.png",
    "image": "/images/products/outdoor_page_48_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "5ft Dia",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-48-3",
    "code": "LFO-MGR-03",
    "name": "LFO-MGR-03 - Merry Go Rounds (Page 48)",
    "slug": "lfo-mgr-03-outdoor-mgr-48-3",
    "categoryId": "cat-outdoor-mgr",
    "category": "Merry Go Rounds",
    "categoryColor": "#FF9F43",
    "price": "\u20b964,990",
    "description": "Heavy-duty commercial merry go rounds engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MGR-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_48_full.png",
    "image": "/images/products/outdoor_page_48_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "5ft Dia",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-48-4",
    "code": "LFO-MGR-04",
    "name": "LFO-MGR-04 - Merry Go Rounds (Page 48)",
    "slug": "lfo-mgr-04-outdoor-mgr-48-4",
    "categoryId": "cat-outdoor-mgr",
    "category": "Merry Go Rounds",
    "categoryColor": "#FF9F43",
    "price": "\u20b964,990",
    "description": "Heavy-duty commercial merry go rounds engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MGR-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_48_full.png",
    "image": "/images/products/outdoor_page_48_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "5ft Dia",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-48-5",
    "code": "LFO-MGR-05",
    "name": "LFO-MGR-05 - Merry Go Rounds (Page 48)",
    "slug": "lfo-mgr-05-outdoor-mgr-48-5",
    "categoryId": "cat-outdoor-mgr",
    "category": "Merry Go Rounds",
    "categoryColor": "#FF9F43",
    "price": "\u20b979,990",
    "description": "Heavy-duty commercial merry go rounds engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MGR-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_48_full.png",
    "image": "/images/products/outdoor_page_48_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "5ft Dia",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-48-6",
    "code": "LFO-MGR-06",
    "name": "LFO-MGR-06 - Merry Go Rounds (Page 48)",
    "slug": "lfo-mgr-06-outdoor-mgr-48-6",
    "categoryId": "cat-outdoor-mgr",
    "category": "Merry Go Rounds",
    "categoryColor": "#FF9F43",
    "price": "\u20b959,990",
    "description": "Heavy-duty commercial merry go rounds engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MGR-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_48_full.png",
    "image": "/images/products/outdoor_page_48_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "5ft Dia",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-48-7",
    "code": "LFO-MGR-07",
    "name": "LFO-MGR-07 - Merry Go Rounds (Page 48)",
    "slug": "lfo-mgr-07-outdoor-mgr-48-7",
    "categoryId": "cat-outdoor-mgr",
    "category": "Merry Go Rounds",
    "categoryColor": "#FF9F43",
    "price": "\u20b974,990",
    "description": "Heavy-duty commercial merry go rounds engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-MGR-07. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_48_full.png",
    "image": "/images/products/outdoor_page_48_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "5ft Dia",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-49-1",
    "code": "LFO-CL-01",
    "name": "LFO-CL-01 - Climbers & Trampolines (Page 49)",
    "slug": "lfo-cl-01-outdoor-climbers-49-1",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9164,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_49_full.png",
    "image": "/images/products/outdoor_page_49_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-8 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-49-2",
    "code": "LFO-CL-03",
    "name": "LFO-CL-03 - Climbers & Trampolines (Page 49)",
    "slug": "lfo-cl-03-outdoor-climbers-49-2",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9259,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_49_full.png",
    "image": "/images/products/outdoor_page_49_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-8 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-49-3",
    "code": "LFO-CL-04",
    "name": "LFO-CL-04 - Climbers & Trampolines (Page 49)",
    "slug": "lfo-cl-04-outdoor-climbers-49-3",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b987,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_49_full.png",
    "image": "/images/products/outdoor_page_49_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-8 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-49-4",
    "code": "LFO-CL-05",
    "name": "LFO-CL-05 - Climbers & Trampolines (Page 49)",
    "slug": "lfo-cl-05-outdoor-climbers-49-4",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b964,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_49_full.png",
    "image": "/images/products/outdoor_page_49_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-8 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-49-5",
    "code": "LFO-CL-06",
    "name": "LFO-CL-06 - Climbers & Trampolines (Page 49)",
    "slug": "lfo-cl-06-outdoor-climbers-49-5",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_49_full.png",
    "image": "/images/products/outdoor_page_49_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-8 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-49-6",
    "code": "LFO-CL-07",
    "name": "LFO-CL-07 - Climbers & Trampolines (Page 49)",
    "slug": "lfo-cl-07-outdoor-climbers-49-6",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b999,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-07. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_49_full.png",
    "image": "/images/products/outdoor_page_49_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-8 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-49-7",
    "code": "LFO-CL-08",
    "name": "LFO-CL-08 - Climbers & Trampolines (Page 49)",
    "slug": "lfo-cl-08-outdoor-climbers-49-7",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b989,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-08. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_49_full.png",
    "image": "/images/products/outdoor_page_49_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-8 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-49-8",
    "code": "LFO-CL-02",
    "name": "LFO-CL-02 - Climbers & Trampolines (Page 49)",
    "slug": "lfo-cl-02-outdoor-climbers-49-8",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b912,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_49_full.png",
    "image": "/images/products/outdoor_page_49_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-8 X W-8 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-50-1",
    "code": "LFO-CL-09",
    "name": "LFO-CL-09 - Climbers & Trampolines (Page 50)",
    "slug": "lfo-cl-09-outdoor-climbers-50-1",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b959,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-09. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_50_full.png",
    "image": "/images/products/outdoor_page_50_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-7 X W-4 X H-7.5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-50-2",
    "code": "LFO-CL-11",
    "name": "LFO-CL-11 - Climbers & Trampolines (Page 50)",
    "slug": "lfo-cl-11-outdoor-climbers-50-2",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9164,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-11. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_50_full.png",
    "image": "/images/products/outdoor_page_50_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-7 X W-4 X H-7.5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-50-3",
    "code": "LFO-CL-13",
    "name": "LFO-CL-13 - Climbers & Trampolines (Page 50)",
    "slug": "lfo-cl-13-outdoor-climbers-50-3",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9359,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-13. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_50_full.png",
    "image": "/images/products/outdoor_page_50_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-7 X W-4 X H-7.5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-50-4",
    "code": "LFO-CL-14",
    "name": "LFO-CL-14 - Climbers & Trampolines (Page 50)",
    "slug": "lfo-cl-14-outdoor-climbers-50-4",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b937,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-14. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_50_full.png",
    "image": "/images/products/outdoor_page_50_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-7 X W-4 X H-7.5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-50-5",
    "code": "LFO-CL-16",
    "name": "LFO-CL-16 - Climbers & Trampolines (Page 50)",
    "slug": "lfo-cl-16-outdoor-climbers-50-5",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b987,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-16. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_50_full.png",
    "image": "/images/products/outdoor_page_50_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-7 X W-4 X H-7.5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-50-6",
    "code": "LFO-CL-17",
    "name": "LFO-CL-17 - Climbers & Trampolines (Page 50)",
    "slug": "lfo-cl-17-outdoor-climbers-50-6",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b987,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-17. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_50_full.png",
    "image": "/images/products/outdoor_page_50_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-7 X W-4 X H-7.5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-50-7",
    "code": "LFO-CL-18",
    "name": "LFO-CL-18 - Climbers & Trampolines (Page 50)",
    "slug": "lfo-cl-18-outdoor-climbers-50-7",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9149,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-18. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_50_full.png",
    "image": "/images/products/outdoor_page_50_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-7 X W-4 X H-7.5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-50-8",
    "code": "LFO-CL-10",
    "name": "LFO-CL-10 - Climbers & Trampolines (Page 50)",
    "slug": "lfo-cl-10-outdoor-climbers-50-8",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b964,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-10. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_50_full.png",
    "image": "/images/products/outdoor_page_50_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-7 X W-4 X H-7.5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-51-1",
    "code": "LFO-CL-19",
    "name": "LFO-CL-19 - Climbers & Trampolines (Page 51)",
    "slug": "lfo-cl-19-outdoor-climbers-51-1",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-19. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_51_full.png",
    "image": "/images/products/outdoor_page_51_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "6ft Dia X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-51-2",
    "code": "LFO-CL-22",
    "name": "LFO-CL-22 - Climbers & Trampolines (Page 51)",
    "slug": "lfo-cl-22-outdoor-climbers-51-2",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b987,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-22. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_51_full.png",
    "image": "/images/products/outdoor_page_51_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "6ft Dia X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-51-3",
    "code": "LFO-CL-23",
    "name": "LFO-CL-23 - Climbers & Trampolines (Page 51)",
    "slug": "lfo-cl-23-outdoor-climbers-51-3",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9149,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-23. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_51_full.png",
    "image": "/images/products/outdoor_page_51_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "6ft Dia X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-51-4",
    "code": "LFO-CL-24",
    "name": "LFO-CL-24 - Climbers & Trampolines (Page 51)",
    "slug": "lfo-cl-24-outdoor-climbers-51-4",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9164,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-24. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_51_full.png",
    "image": "/images/products/outdoor_page_51_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "6ft Dia X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-51-5",
    "code": "LFO-CL-25",
    "name": "LFO-CL-25 - Climbers & Trampolines (Page 51)",
    "slug": "lfo-cl-25-outdoor-climbers-51-5",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9164,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-25. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_51_full.png",
    "image": "/images/products/outdoor_page_51_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "6ft Dia X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-51-6",
    "code": "LFO-CL-26",
    "name": "LFO-CL-26 - Climbers & Trampolines (Page 51)",
    "slug": "lfo-cl-26-outdoor-climbers-51-6",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b964,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-26. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_51_full.png",
    "image": "/images/products/outdoor_page_51_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "6ft Dia X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-51-7",
    "code": "LFO-CL-27",
    "name": "LFO-CL-27 - Climbers & Trampolines (Page 51)",
    "slug": "lfo-cl-27-outdoor-climbers-51-7",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9479,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-27. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_51_full.png",
    "image": "/images/products/outdoor_page_51_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "6ft Dia X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-51-8",
    "code": "LFO-CL-21",
    "name": "LFO-CL-21 - Climbers & Trampolines (Page 51)",
    "slug": "lfo-cl-21-outdoor-climbers-51-8",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b954,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-21. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_51_full.png",
    "image": "/images/products/outdoor_page_51_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "6ft Dia X H-10 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-52-1",
    "code": "LFO-CL-28",
    "name": "LFO-CL-28 - Climbers & Trampolines (Page 52)",
    "slug": "lfo-cl-28-outdoor-climbers-52-1",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9239,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-28. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_52_full.png",
    "image": "/images/products/outdoor_page_52_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-15 X W-4 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-52-2",
    "code": "LFO-CL-30",
    "name": "LFO-CL-30 - Climbers & Trampolines (Page 52)",
    "slug": "lfo-cl-30-outdoor-climbers-52-2",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-30. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_52_full.png",
    "image": "/images/products/outdoor_page_52_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-15 X W-4 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-52-3",
    "code": "LFO-CL-31",
    "name": "LFO-CL-31 - Climbers & Trampolines (Page 52)",
    "slug": "lfo-cl-31-outdoor-climbers-52-3",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b959,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-31. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_52_full.png",
    "image": "/images/products/outdoor_page_52_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-15 X W-4 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-52-4",
    "code": "LFO-CL-32",
    "name": "LFO-CL-32 - Climbers & Trampolines (Page 52)",
    "slug": "lfo-cl-32-outdoor-climbers-52-4",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b927,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-32. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_52_full.png",
    "image": "/images/products/outdoor_page_52_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-15 X W-4 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-52-5",
    "code": "LFO-CL-33",
    "name": "LFO-CL-33 - Climbers & Trampolines (Page 52)",
    "slug": "lfo-cl-33-outdoor-climbers-52-5",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b932,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-33. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_52_full.png",
    "image": "/images/products/outdoor_page_52_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-15 X W-4 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-52-6",
    "code": "LFO-CL-34",
    "name": "LFO-CL-34 - Climbers & Trampolines (Page 52)",
    "slug": "lfo-cl-34-outdoor-climbers-52-6",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9129,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-34. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_52_full.png",
    "image": "/images/products/outdoor_page_52_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-15 X W-4 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-52-7",
    "code": "LFO-CL-35",
    "name": "LFO-CL-35 - Climbers & Trampolines (Page 52)",
    "slug": "lfo-cl-35-outdoor-climbers-52-7",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9174,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-35. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_52_full.png",
    "image": "/images/products/outdoor_page_52_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-15 X W-4 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-52-8",
    "code": "LFO-CL-29",
    "name": "LFO-CL-29 - Climbers & Trampolines (Page 52)",
    "slug": "lfo-cl-29-outdoor-climbers-52-8",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-29. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_52_full.png",
    "image": "/images/products/outdoor_page_52_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-15 X W-4 X H-7 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-53-1",
    "code": "LFO-TR",
    "name": "LFO-TR - Climbers & Trampolines (Page 53)",
    "slug": "lfo-tr-outdoor-climbers-53-1",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-TR. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_53_full.png",
    "image": "/images/products/outdoor_page_53_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-14 X W-3.5 X H-9 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-53-2",
    "code": "LFO-CL-36",
    "name": "LFO-CL-36 - Climbers & Trampolines (Page 53)",
    "slug": "lfo-cl-36-outdoor-climbers-53-2",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b939,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-36. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_53_full.png",
    "image": "/images/products/outdoor_page_53_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-14 X W-3.5 X H-9 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-53-3",
    "code": "LFO-CL-38",
    "name": "LFO-CL-38 - Climbers & Trampolines (Page 53)",
    "slug": "lfo-cl-38-outdoor-climbers-53-3",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b931,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-38. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_53_full.png",
    "image": "/images/products/outdoor_page_53_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-14 X W-3.5 X H-9 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-53-4",
    "code": "LFO-CL-39",
    "name": "LFO-CL-39 - Climbers & Trampolines (Page 53)",
    "slug": "lfo-cl-39-outdoor-climbers-53-4",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b924,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-39. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_53_full.png",
    "image": "/images/products/outdoor_page_53_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-14 X W-3.5 X H-9 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-53-5",
    "code": "LFO-CL-37",
    "name": "LFO-CL-37 - Climbers & Trampolines (Page 53)",
    "slug": "lfo-cl-37-outdoor-climbers-53-5",
    "categoryId": "cat-outdoor-cl",
    "category": "Climbers & Trampolines",
    "categoryColor": "#6C5CE7",
    "price": "\u20b920,990",
    "description": "Heavy-duty commercial climbers & trampolines engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-CL-37. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_53_full.png",
    "image": "/images/products/outdoor_page_53_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-14 X W-3.5 X H-9 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-54-1",
    "code": "LFO-SR-01",
    "name": "LFO-SR-01 - Spring Riders (Page 54)",
    "slug": "lfo-sr-01-outdoor-spring-riders-54-1",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b916,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_54_full.png",
    "image": "/images/products/outdoor_page_54_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-3.6 X W-1.4 X H-3.3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-54-2",
    "code": "LFO-SR-02",
    "name": "LFO-SR-02 - Spring Riders (Page 54)",
    "slug": "lfo-sr-02-outdoor-spring-riders-54-2",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b916,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_54_full.png",
    "image": "/images/products/outdoor_page_54_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-3.6 X W-1.4 X H-3.3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-54-3",
    "code": "LFO-SR-03",
    "name": "LFO-SR-03 - Spring Riders (Page 54)",
    "slug": "lfo-sr-03-outdoor-spring-riders-54-3",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b927,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_54_full.png",
    "image": "/images/products/outdoor_page_54_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-3.6 X W-1.4 X H-3.3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-54-4",
    "code": "LFO-SR-04",
    "name": "LFO-SR-04 - Spring Riders (Page 54)",
    "slug": "lfo-sr-04-outdoor-spring-riders-54-4",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b916,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-04. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_54_full.png",
    "image": "/images/products/outdoor_page_54_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-3.6 X W-1.4 X H-3.3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-54-5",
    "code": "LFO-SR-05",
    "name": "LFO-SR-05 - Spring Riders (Page 54)",
    "slug": "lfo-sr-05-outdoor-spring-riders-54-5",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b927,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_54_full.png",
    "image": "/images/products/outdoor_page_54_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-3.6 X W-1.4 X H-3.3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-54-6",
    "code": "LFO-SR-06",
    "name": "LFO-SR-06 - Spring Riders (Page 54)",
    "slug": "lfo-sr-06-outdoor-spring-riders-54-6",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b916,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_54_full.png",
    "image": "/images/products/outdoor_page_54_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-3.6 X W-1.4 X H-3.3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-54-7",
    "code": "LFO-SR-10",
    "name": "LFO-SR-10 - Spring Riders (Page 54)",
    "slug": "lfo-sr-10-outdoor-spring-riders-54-7",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b918,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-10. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_54_full.png",
    "image": "/images/products/outdoor_page_54_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-3.6 X W-1.4 X H-3.3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-54-8",
    "code": "LFO-SR-11",
    "name": "LFO-SR-11 - Spring Riders (Page 54)",
    "slug": "lfo-sr-11-outdoor-spring-riders-54-8",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b918,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-11. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_54_full.png",
    "image": "/images/products/outdoor_page_54_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-3.6 X W-1.4 X H-3.3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-1",
    "code": "LFO-SR-12",
    "name": "LFO-SR-12 - Spring Riders (Page 55)",
    "slug": "lfo-sr-12-outdoor-spring-riders-55-1",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b914,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-12. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-2",
    "code": "LFO-SR-13",
    "name": "LFO-SR-13 - Spring Riders (Page 55)",
    "slug": "lfo-sr-13-outdoor-spring-riders-55-2",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b916,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-13. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-3",
    "code": "LFO-SR-15",
    "name": "LFO-SR-15 - Spring Riders (Page 55)",
    "slug": "lfo-sr-15-outdoor-spring-riders-55-3",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b916,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-15. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-4",
    "code": "LFO-SR-16",
    "name": "LFO-SR-16 - Spring Riders (Page 55)",
    "slug": "lfo-sr-16-outdoor-spring-riders-55-4",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b916,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-16. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-5",
    "code": "LFO-SR-18",
    "name": "LFO-SR-18 - Spring Riders (Page 55)",
    "slug": "lfo-sr-18-outdoor-spring-riders-55-5",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b927,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-18. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-6",
    "code": "LFO-SR-17",
    "name": "LFO-SR-17 - Spring Riders (Page 55)",
    "slug": "lfo-sr-17-outdoor-spring-riders-55-6",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b932,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-17. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-7",
    "code": "LFO-SR-19",
    "name": "LFO-SR-19 - Spring Riders (Page 55)",
    "slug": "lfo-sr-19-outdoor-spring-riders-55-7",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b927,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-19. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-8",
    "code": "LFO-SR-21",
    "name": "LFO-SR-21 - Spring Riders (Page 55)",
    "slug": "lfo-sr-21-outdoor-spring-riders-55-8",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b916,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-21. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-9",
    "code": "LFO-SR-20",
    "name": "LFO-SR-20 - Spring Riders (Page 55)",
    "slug": "lfo-sr-20-outdoor-spring-riders-55-9",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b921,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-20. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-55-10",
    "code": "LFO-SR-22",
    "name": "LFO-SR-22 - Spring Riders (Page 55)",
    "slug": "lfo-sr-22-outdoor-spring-riders-55-10",
    "categoryId": "cat-outdoor-sr",
    "category": "Spring Riders",
    "categoryColor": "#FF7675",
    "price": "\u20b918,990",
    "description": "Heavy-duty commercial spring riders engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-SR-22. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_55_full.png",
    "image": "/images/products/outdoor_page_55_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "L-2.4 X W-1.2 X H-3 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-56-1",
    "code": "LFO-FN-01",
    "name": "LFO-FN-01 - Outdoor Fitness Equipment (Page 56)",
    "slug": "lfo-fn-01-outdoor-fitness-56-1",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-01. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_56_full.png",
    "image": "/images/products/outdoor_page_56_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.2 X W-3.6 X H-2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-56-2",
    "code": "LFO-FN-01A",
    "name": "LFO-FN-01A - Outdoor Fitness Equipment (Page 56)",
    "slug": "lfo-fn-01a-outdoor-fitness-56-2",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b929,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-01A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_56_full.png",
    "image": "/images/products/outdoor_page_56_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.2 X W-3.6 X H-2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-56-3",
    "code": "LFO-FN-02",
    "name": "LFO-FN-02 - Outdoor Fitness Equipment (Page 56)",
    "slug": "lfo-fn-02-outdoor-fitness-56-3",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-02. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_56_full.png",
    "image": "/images/products/outdoor_page_56_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.2 X W-3.6 X H-2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-56-4",
    "code": "LFO-FN-02A",
    "name": "LFO-FN-02A - Outdoor Fitness Equipment (Page 56)",
    "slug": "lfo-fn-02a-outdoor-fitness-56-4",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b934,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-02A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_56_full.png",
    "image": "/images/products/outdoor_page_56_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.2 X W-3.6 X H-2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-56-5",
    "code": "LFO-FN-03",
    "name": "LFO-FN-03 - Outdoor Fitness Equipment (Page 56)",
    "slug": "lfo-fn-03-outdoor-fitness-56-5",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b992,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-03. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_56_full.png",
    "image": "/images/products/outdoor_page_56_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.2 X W-3.6 X H-2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-56-6",
    "code": "LFO-FN-03A",
    "name": "LFO-FN-03A - Outdoor Fitness Equipment (Page 56)",
    "slug": "lfo-fn-03a-outdoor-fitness-56-6",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b949,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-03A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_56_full.png",
    "image": "/images/products/outdoor_page_56_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.2 X W-3.6 X H-2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-56-7",
    "code": "LFO-FN-04A",
    "name": "LFO-FN-04A - Outdoor Fitness Equipment (Page 56)",
    "slug": "lfo-fn-04a-outdoor-fitness-56-7",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-04A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_56_full.png",
    "image": "/images/products/outdoor_page_56_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.2 X W-3.6 X H-2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-56-8",
    "code": "LFO-FN-05",
    "name": "LFO-FN-05 - Outdoor Fitness Equipment (Page 56)",
    "slug": "lfo-fn-05-outdoor-fitness-56-8",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b992,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-05. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_56_full.png",
    "image": "/images/products/outdoor_page_56_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.2 X W-3.6 X H-2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-57-1",
    "code": "LFO-FN-05A",
    "name": "LFO-FN-05A - Outdoor Fitness Equipment (Page 57)",
    "slug": "lfo-fn-05a-outdoor-fitness-57-1",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b949,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-05A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_57_full.png",
    "image": "/images/products/outdoor_page_57_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-2.6 X W-2.4 X H-6.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-57-2",
    "code": "LFO-FN-06",
    "name": "LFO-FN-06 - Outdoor Fitness Equipment (Page 57)",
    "slug": "lfo-fn-06-outdoor-fitness-57-2",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b941,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-06. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_57_full.png",
    "image": "/images/products/outdoor_page_57_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-2.6 X W-2.4 X H-6.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-57-3",
    "code": "LFO-FN-07",
    "name": "LFO-FN-07 - Outdoor Fitness Equipment (Page 57)",
    "slug": "lfo-fn-07-outdoor-fitness-57-3",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b954,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-07. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_57_full.png",
    "image": "/images/products/outdoor_page_57_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-2.6 X W-2.4 X H-6.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-57-4",
    "code": "LFO-FN-08",
    "name": "LFO-FN-08 - Outdoor Fitness Equipment (Page 57)",
    "slug": "lfo-fn-08-outdoor-fitness-57-4",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-08. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_57_full.png",
    "image": "/images/products/outdoor_page_57_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-2.6 X W-2.4 X H-6.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-57-5",
    "code": "LFO-FN-09",
    "name": "LFO-FN-09 - Outdoor Fitness Equipment (Page 57)",
    "slug": "lfo-fn-09-outdoor-fitness-57-5",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-09. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_57_full.png",
    "image": "/images/products/outdoor_page_57_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-2.6 X W-2.4 X H-6.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-57-6",
    "code": "LFO-FN-10",
    "name": "LFO-FN-10 - Outdoor Fitness Equipment (Page 57)",
    "slug": "lfo-fn-10-outdoor-fitness-57-6",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b982,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-10. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_57_full.png",
    "image": "/images/products/outdoor_page_57_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-2.6 X W-2.4 X H-6.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-57-7",
    "code": "LFO-FN-11",
    "name": "LFO-FN-11 - Outdoor Fitness Equipment (Page 57)",
    "slug": "lfo-fn-11-outdoor-fitness-57-7",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-11. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_57_full.png",
    "image": "/images/products/outdoor_page_57_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-2.6 X W-2.4 X H-6.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-57-8",
    "code": "LFO-FN-12",
    "name": "LFO-FN-12 - Outdoor Fitness Equipment (Page 57)",
    "slug": "lfo-fn-12-outdoor-fitness-57-8",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b959,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-12. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_57_full.png",
    "image": "/images/products/outdoor_page_57_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-2.6 X W-2.4 X H-6.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-58-1",
    "code": "LFO-FN-13",
    "name": "LFO-FN-13 - Outdoor Fitness Equipment (Page 58)",
    "slug": "lfo-fn-13-outdoor-fitness-58-1",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-13. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_58_full.png",
    "image": "/images/products/outdoor_page_58_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.66 X W-3.36 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-58-2",
    "code": "LFO-FN-13A",
    "name": "LFO-FN-13A - Outdoor Fitness Equipment (Page 58)",
    "slug": "lfo-fn-13a-outdoor-fitness-58-2",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b937,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-13A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_58_full.png",
    "image": "/images/products/outdoor_page_58_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.66 X W-3.36 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-58-3",
    "code": "LFO-FN-13B",
    "name": "LFO-FN-13B - Outdoor Fitness Equipment (Page 58)",
    "slug": "lfo-fn-13b-outdoor-fitness-58-3",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b929,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-13B. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_58_full.png",
    "image": "/images/products/outdoor_page_58_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.66 X W-3.36 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-58-4",
    "code": "LFO-FN-13C",
    "name": "LFO-FN-13C - Outdoor Fitness Equipment (Page 58)",
    "slug": "lfo-fn-13c-outdoor-fitness-58-4",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b932,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-13C. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_58_full.png",
    "image": "/images/products/outdoor_page_58_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.66 X W-3.36 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-58-5",
    "code": "LFO-FN-14",
    "name": "LFO-FN-14 - Outdoor Fitness Equipment (Page 58)",
    "slug": "lfo-fn-14-outdoor-fitness-58-5",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b937,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-14. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_58_full.png",
    "image": "/images/products/outdoor_page_58_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.66 X W-3.36 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-58-6",
    "code": "LFO-FN-15",
    "name": "LFO-FN-15 - Outdoor Fitness Equipment (Page 58)",
    "slug": "lfo-fn-15-outdoor-fitness-58-6",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-15. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_58_full.png",
    "image": "/images/products/outdoor_page_58_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.66 X W-3.36 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-58-7",
    "code": "LFO-FN-15A",
    "name": "LFO-FN-15A - Outdoor Fitness Equipment (Page 58)",
    "slug": "lfo-fn-15a-outdoor-fitness-58-7",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-15A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_58_full.png",
    "image": "/images/products/outdoor_page_58_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.66 X W-3.36 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-58-8",
    "code": "LFO-FN-16",
    "name": "LFO-FN-16 - Outdoor Fitness Equipment (Page 58)",
    "slug": "lfo-fn-16-outdoor-fitness-58-8",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b981,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-16. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_58_full.png",
    "image": "/images/products/outdoor_page_58_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.66 X W-3.36 X H-5 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-59-1",
    "code": "LFO-FN-17",
    "name": "LFO-FN-17 - Outdoor Fitness Equipment (Page 59)",
    "slug": "lfo-fn-17-outdoor-fitness-59-1",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b949,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-17. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_59_full.png",
    "image": "/images/products/outdoor_page_59_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.43 X W-1.83 X H-4.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-59-2",
    "code": "LFO-FN-17A",
    "name": "LFO-FN-17A - Outdoor Fitness Equipment (Page 59)",
    "slug": "lfo-fn-17a-outdoor-fitness-59-2",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b949,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-17A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_59_full.png",
    "image": "/images/products/outdoor_page_59_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.43 X W-1.83 X H-4.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-59-3",
    "code": "LFO-FN-18",
    "name": "LFO-FN-18 - Outdoor Fitness Equipment (Page 59)",
    "slug": "lfo-fn-18-outdoor-fitness-59-3",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b998,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-18. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_59_full.png",
    "image": "/images/products/outdoor_page_59_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.43 X W-1.83 X H-4.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-59-4",
    "code": "LFO-FN-19",
    "name": "LFO-FN-19 - Outdoor Fitness Equipment (Page 59)",
    "slug": "lfo-fn-19-outdoor-fitness-59-4",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-19. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_59_full.png",
    "image": "/images/products/outdoor_page_59_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.43 X W-1.83 X H-4.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-59-5",
    "code": "LFO-FN-20",
    "name": "LFO-FN-20 - Outdoor Fitness Equipment (Page 59)",
    "slug": "lfo-fn-20-outdoor-fitness-59-5",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b937,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-20. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_59_full.png",
    "image": "/images/products/outdoor_page_59_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.43 X W-1.83 X H-4.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-59-6",
    "code": "LFO-FN-20A",
    "name": "LFO-FN-20A - Outdoor Fitness Equipment (Page 59)",
    "slug": "lfo-fn-20a-outdoor-fitness-59-6",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b932,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-20A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_59_full.png",
    "image": "/images/products/outdoor_page_59_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.43 X W-1.83 X H-4.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-59-7",
    "code": "LFO-FN-20B",
    "name": "LFO-FN-20B - Outdoor Fitness Equipment (Page 59)",
    "slug": "lfo-fn-20b-outdoor-fitness-59-7",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b937,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-20B. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_59_full.png",
    "image": "/images/products/outdoor_page_59_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.43 X W-1.83 X H-4.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-59-8",
    "code": "LFO-FN-21",
    "name": "LFO-FN-21 - Outdoor Fitness Equipment (Page 59)",
    "slug": "lfo-fn-21-outdoor-fitness-59-8",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b949,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-21. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_59_full.png",
    "image": "/images/products/outdoor_page_59_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.43 X W-1.83 X H-4.8 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-60-1",
    "code": "LFO-FN-22",
    "name": "LFO-FN-22 - Outdoor Fitness Equipment (Page 60)",
    "slug": "lfo-fn-22-outdoor-fitness-60-1",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b932,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-22. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_60_full.png",
    "image": "/images/products/outdoor_page_60_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.9 X W-3.9 X H-4.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-60-2",
    "code": "LFO-FN-23",
    "name": "LFO-FN-23 - Outdoor Fitness Equipment (Page 60)",
    "slug": "lfo-fn-23-outdoor-fitness-60-2",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-23. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_60_full.png",
    "image": "/images/products/outdoor_page_60_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.9 X W-3.9 X H-4.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-60-3",
    "code": "LFO-FN-24",
    "name": "LFO-FN-24 - Outdoor Fitness Equipment (Page 60)",
    "slug": "lfo-fn-24-outdoor-fitness-60-3",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-24. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_60_full.png",
    "image": "/images/products/outdoor_page_60_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.9 X W-3.9 X H-4.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-60-4",
    "code": "LFO-FN-25",
    "name": "LFO-FN-25 - Outdoor Fitness Equipment (Page 60)",
    "slug": "lfo-fn-25-outdoor-fitness-60-4",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b949,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-25. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_60_full.png",
    "image": "/images/products/outdoor_page_60_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.9 X W-3.9 X H-4.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-60-5",
    "code": "LFO-FN-26A",
    "name": "LFO-FN-26A - Outdoor Fitness Equipment (Page 60)",
    "slug": "lfo-fn-26a-outdoor-fitness-60-5",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b943,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-26A. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_60_full.png",
    "image": "/images/products/outdoor_page_60_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.9 X W-3.9 X H-4.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-60-6",
    "code": "LFO-FN-26B",
    "name": "LFO-FN-26B - Outdoor Fitness Equipment (Page 60)",
    "slug": "lfo-fn-26b-outdoor-fitness-60-6",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b941,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-26B. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_60_full.png",
    "image": "/images/products/outdoor_page_60_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.9 X W-3.9 X H-4.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-60-7",
    "code": "LFO-FN-26C",
    "name": "LFO-FN-26C - Outdoor Fitness Equipment (Page 60)",
    "slug": "lfo-fn-26c-outdoor-fitness-60-7",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b946,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-26C. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_60_full.png",
    "image": "/images/products/outdoor_page_60_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.9 X W-3.9 X H-4.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-60-8",
    "code": "LFO-FN-27",
    "name": "LFO-FN-27 - Outdoor Fitness Equipment (Page 60)",
    "slug": "lfo-fn-27-outdoor-fitness-60-8",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b954,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-27. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_60_full.png",
    "image": "/images/products/outdoor_page_60_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-3.9 X W-3.9 X H-4.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-61-1",
    "code": "LFO-FN-28",
    "name": "LFO-FN-28 - Outdoor Fitness Equipment (Page 61)",
    "slug": "lfo-fn-28-outdoor-fitness-61-1",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b976,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-28. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_61_full.png",
    "image": "/images/products/outdoor_page_61_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.6 X W-4.1 X H-5.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-61-2",
    "code": "LFO-FN-35",
    "name": "LFO-FN-35 - Outdoor Fitness Equipment (Page 61)",
    "slug": "lfo-fn-35-outdoor-fitness-61-2",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-35. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_61_full.png",
    "image": "/images/products/outdoor_page_61_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.6 X W-4.1 X H-5.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-61-3",
    "code": "LFO-FN-36",
    "name": "LFO-FN-36 - Outdoor Fitness Equipment (Page 61)",
    "slug": "lfo-fn-36-outdoor-fitness-61-3",
    "categoryId": "cat-outdoor-fn",
    "category": "Outdoor Fitness Equipment",
    "categoryColor": "#00CEC9",
    "price": "\u20b9109,990",
    "description": "Heavy-duty commercial outdoor fitness equipment engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-FN-36. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_61_full.png",
    "image": "/images/products/outdoor_page_61_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "12+ Years & Adults",
      "dimensions": "L-4.6 X W-4.1 X H-5.2 ft",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-62-1",
    "code": "LFO-DB-60",
    "name": "LFO-DB-60 - Park Amenities & Dustbins (Page 62)",
    "slug": "lfo-db-60-outdoor-amenities-62-1",
    "categoryId": "cat-outdoor-db",
    "category": "Park Amenities & Dustbins",
    "categoryColor": "#636E72",
    "price": "\u20b96,080",
    "description": "Heavy-duty commercial park amenities & dustbins engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-DB-60. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_62_full.png",
    "image": "/images/products/outdoor_page_62_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "LF",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-62-2",
    "code": "LFO-DB-120",
    "name": "LFO-DB-120 - Park Amenities & Dustbins (Page 62)",
    "slug": "lfo-db-120-outdoor-amenities-62-2",
    "categoryId": "cat-outdoor-db",
    "category": "Park Amenities & Dustbins",
    "categoryColor": "#636E72",
    "price": "\u20b91,990",
    "description": "Heavy-duty commercial park amenities & dustbins engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-DB-120. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_62_full.png",
    "image": "/images/products/outdoor_page_62_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "LF",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  },
  {
    "id": "out-63-1",
    "code": "LFO-OUT-63",
    "name": "LFO-OUT-63 - Park Amenities & Dustbins (Page 63)",
    "slug": "lfo-out-63-outdoor-amenities-63-1",
    "categoryId": "cat-outdoor-db",
    "category": "Park Amenities & Dustbins",
    "categoryColor": "#636E72",
    "price": "\u20b989,990",
    "description": "Heavy-duty commercial park amenities & dustbins engineered for extreme outdoor durability, child safety, and weatherproof play.",
    "longDescription": "Official Little Fingers / Play Solution Outdoor Catalogue 2026 item LFO-OUT-63. Features galvanised powder-coated steel framework, food-grade UV-stabilized LLDPE components, anti-skid platforms, and child-safe smooth edges.",
    "imageUrl": "/images/products/outdoor_page_63_full.png",
    "image": "/images/products/outdoor_page_63_full.png",
    "specifications": {
      "material": "Galvanised Steel & UV-Stabilized LLDPE Plastic",
      "ageGroup": "3 - 14 Years",
      "dimensions": "Standard Commercial Size",
      "capacity": "Multi-child commercial capacity",
      "colorOptions": "Primary Colors / Custom Outdoor Finishes"
    },
    "features": [
      "CE Certified & ISI Compliant",
      "UV-Resistant Anti-Fade Coating",
      "Heavy-Duty Galvanised Steel Framework",
      "Smooth Rounded Child-Safe Edges",
      "5 Years Metallic Parts Warranty"
    ],
    "inStock": true
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(productOrSlug: Product | string, limit = 4): Product[] {
  const targetProduct = typeof productOrSlug === 'string' 
    ? getProductBySlug(productOrSlug) 
    : productOrSlug;

  if (!targetProduct) return products.slice(0, limit);

  return products
    .filter(p => p.id !== targetProduct.id && p.categoryId === targetProduct.categoryId)
    .slice(0, limit);
}
