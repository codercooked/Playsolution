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
    "description": "Fun indoor setups, activity tunnels & play stations",
    "count": 74
  },
  {
    "id": "classroom",
    "name": "Classroom Furniture",
    "slug": "classroom",
    "icon": "furniture",
    "color": "#7B68EE",
    "description": "Ergonomic dual/single desks, chairs, moon tables & storage",
    "count": 52
  },
  {
    "id": "slides-swings",
    "name": "Slides & Swings",
    "slug": "slides-swings",
    "icon": "shapes",
    "color": "#FF6B9D",
    "description": "Rabbit slides, elephant slides & multi-play swing sets",
    "count": 47
  },
  {
    "id": "ball-pools",
    "name": "Ball Pools & Play Mats",
    "slug": "ball-pools",
    "icon": "art",
    "color": "#45B7D1",
    "description": "Modular soft ball pools, EVA foam mats & rolling carpets",
    "count": 0
  },
  {
    "id": "rockers-riders",
    "name": "Rockers & Trampolines",
    "slug": "rockers-riders",
    "icon": "play",
    "color": "#4ECDC4",
    "description": "Hover spin seats, balance rockers, coupe cars & trampolines",
    "count": 81
  },
  {
    "id": "toys",
    "name": "Educational Toys & Learning",
    "slug": "toys",
    "icon": "toys",
    "color": "#96CEB4",
    "description": "Roleplay costumes, hand puppets, flash cards & puzzles",
    "count": 82
  }
];

export const products: Product[] = [
  {
    "id": "1",
    "slug": "lf-7021-play-equipment-lf-7021-1",
    "name": "LF 7021 - Play Equipment LF 7021",
    "price": "\u20b97,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 7021 - Play Equipment LF 7021 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 7021 - Play Equipment LF 7021 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 7021 - Play Equipment LF 7021 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 4). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_4_full.png",
    "imageUrl": "/images/products/page_4_full.png",
    "thumbnails": [
      "/images/products/page_4_full.png",
      "/images/products/page_4_full.png"
    ]
  },
  {
    "id": "2",
    "slug": "lf-7022-play-equipment-lf-7022-2",
    "name": "LF 7022 - Play Equipment LF 7022",
    "price": "\u20b99,490",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 7022 - Play Equipment LF 7022 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 7022 - Play Equipment LF 7022 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 7022 - Play Equipment LF 7022 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 5). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_5_full.png",
    "imageUrl": "/images/products/page_5_full.png",
    "thumbnails": [
      "/images/products/page_5_full.png",
      "/images/products/page_5_full.png"
    ]
  },
  {
    "id": "3",
    "slug": "lf-7023-play-equipment-lf-7023-3",
    "name": "LF 7023 - Play Equipment LF 7023",
    "price": "\u20b910,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 7023 - Play Equipment LF 7023 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 7023 - Play Equipment LF 7023 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 7023 - Play Equipment LF 7023 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 6). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_6_full.png",
    "imageUrl": "/images/products/page_6_full.png",
    "thumbnails": [
      "/images/products/page_6_full.png",
      "/images/products/page_6_full.png"
    ]
  },
  {
    "id": "4",
    "slug": "lf-0431-play-equipment-lf-0431-4",
    "name": "LF 0431 - Play Equipment LF 0431",
    "price": "\u20b913,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0431 - Play Equipment LF 0431 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0431 - Play Equipment LF 0431 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0431 - Play Equipment LF 0431 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 7). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_7_full.png",
    "imageUrl": "/images/products/page_7_full.png",
    "thumbnails": [
      "/images/products/page_7_full.png",
      "/images/products/page_7_full.png"
    ]
  },
  {
    "id": "5",
    "slug": "lf-0431p-use-code-middle-5",
    "name": "LF 0431P - - use code Middle",
    "price": "\u20b916,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0431P - - use code Middle from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0431P - - use code Middle is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0431P - - use code Middle from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 7). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_7_full.png",
    "imageUrl": "/images/products/page_7_full.png",
    "thumbnails": [
      "/images/products/page_7_full.png",
      "/images/products/page_7_full.png"
    ]
  },
  {
    "id": "6",
    "slug": "lf-0431m-use-code-primary-6",
    "name": "LF 0431M - - use code Primary",
    "price": "\u20b918,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0431M - - use code Primary from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0431M - - use code Primary is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0431M - - use code Primary from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 7). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_7_full.png",
    "imageUrl": "/images/products/page_7_full.png",
    "thumbnails": [
      "/images/products/page_7_full.png",
      "/images/products/page_7_full.png"
    ]
  },
  {
    "id": "7",
    "slug": "lf-0447-play-equipment-lf-0447-7",
    "name": "LF 0447 - Play Equipment LF 0447",
    "price": "\u20b96,490",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0447 - Play Equipment LF 0447 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0447 - Play Equipment LF 0447 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0447 - Play Equipment LF 0447 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 8). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_8_full.png",
    "imageUrl": "/images/products/page_8_full.png",
    "thumbnails": [
      "/images/products/page_8_full.png",
      "/images/products/page_8_full.png"
    ]
  },
  {
    "id": "8",
    "slug": "lf-0447p-play-equipment-lf-0447p-8",
    "name": "LF 0447P - Play Equipment LF 0447P",
    "price": "\u20b97,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0447P - Play Equipment LF 0447P from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0447P - Play Equipment LF 0447P is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0447P - Play Equipment LF 0447P from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 8). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_8_full.png",
    "imageUrl": "/images/products/page_8_full.png",
    "thumbnails": [
      "/images/products/page_8_full.png",
      "/images/products/page_8_full.png"
    ]
  },
  {
    "id": "9",
    "slug": "lf-0448-play-equipment-lf-0448-9",
    "name": "LF 0448 - Play Equipment LF 0448",
    "price": "\u20b99,490",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0448 - Play Equipment LF 0448 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0448 - Play Equipment LF 0448 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0448 - Play Equipment LF 0448 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 9). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_9_full.png",
    "imageUrl": "/images/products/page_9_full.png",
    "thumbnails": [
      "/images/products/page_9_full.png",
      "/images/products/page_9_full.png"
    ]
  },
  {
    "id": "10",
    "slug": "lf-0448p-play-equipment-lf-0448p-10",
    "name": "LF 0448P - Play Equipment LF 0448P",
    "price": "\u20b910,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0448P - Play Equipment LF 0448P from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0448P - Play Equipment LF 0448P is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0448P - Play Equipment LF 0448P from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 9). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_9_full.png",
    "imageUrl": "/images/products/page_9_full.png",
    "thumbnails": [
      "/images/products/page_9_full.png",
      "/images/products/page_9_full.png"
    ]
  },
  {
    "id": "11",
    "slug": "lf-0429-play-equipment-lf-0429-11",
    "name": "LF 0429 - Play Equipment LF 0429",
    "price": "\u20b913,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0429 - Play Equipment LF 0429 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0429 - Play Equipment LF 0429 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0429 - Play Equipment LF 0429 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 10). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_10_full.png",
    "imageUrl": "/images/products/page_10_full.png",
    "thumbnails": [
      "/images/products/page_10_full.png",
      "/images/products/page_10_full.png"
    ]
  },
  {
    "id": "12",
    "slug": "lf-0235-play-equipment-lf-0235-12",
    "name": "LF 0235 - Play Equipment LF 0235",
    "price": "\u20b916,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0235 - Play Equipment LF 0235 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0235 - Play Equipment LF 0235 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0235 - Play Equipment LF 0235 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 10). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_10_full.png",
    "imageUrl": "/images/products/page_10_full.png",
    "thumbnails": [
      "/images/products/page_10_full.png",
      "/images/products/page_10_full.png"
    ]
  },
  {
    "id": "13",
    "slug": "lf-0405-play-equipment-lf-0405-13",
    "name": "LF 0405 - Play Equipment LF 0405",
    "price": "\u20b918,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0405 - Play Equipment LF 0405 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0405 - Play Equipment LF 0405 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0405 - Play Equipment LF 0405 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 11). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_11_full.png",
    "imageUrl": "/images/products/page_11_full.png",
    "thumbnails": [
      "/images/products/page_11_full.png",
      "/images/products/page_11_full.png"
    ]
  },
  {
    "id": "14",
    "slug": "lf-0406-frame-heavy-duty-metal-structure-with-plastic-bushes-for-oor-protection-and-noise-reduction-14",
    "name": "LF 0406 - Frame Heavy-duty metal structure with Plastic bushes for oor protection and noise reduction",
    "price": "\u20b96,490",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0406 - Frame Heavy-duty metal structure with Plastic bushes for oor protection and noise reduction from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0406 - Frame Heavy-duty metal structure with Plastic bushes for oor protection and noise reduction is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0406 - Frame Heavy-duty metal structure with Plastic bushes for oor protection and noise reduction from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 11). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_11_full.png",
    "imageUrl": "/images/products/page_11_full.png",
    "thumbnails": [
      "/images/products/page_11_full.png",
      "/images/products/page_11_full.png"
    ]
  },
  {
    "id": "15",
    "slug": "lf-0407-dual-seating-desk-adjustable-15",
    "name": "LF 0407 - Dual Seating Desk (Adjustable)",
    "price": "\u20b97,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0407 - Dual Seating Desk (Adjustable) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0407 - Dual Seating Desk (Adjustable) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0407 - Dual Seating Desk (Adjustable) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 13). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_13_full.png",
    "imageUrl": "/images/products/page_13_full.png",
    "thumbnails": [
      "/images/products/page_13_full.png",
      "/images/products/page_13_full.png"
    ]
  },
  {
    "id": "16",
    "slug": "lf-081-play-equipment-lf-081-16",
    "name": "LF 081 - Play Equipment LF 081",
    "price": "\u20b99,490",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 081 - Play Equipment LF 081 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 081 - Play Equipment LF 081 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 081 - Play Equipment LF 081 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 14). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_14_full.png",
    "imageUrl": "/images/products/page_14_full.png",
    "thumbnails": [
      "/images/products/page_14_full.png",
      "/images/products/page_14_full.png"
    ]
  },
  {
    "id": "17",
    "slug": "lf-082-play-equipment-lf-082-17",
    "name": "LF 082 - Play Equipment LF 082",
    "price": "\u20b910,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 082 - Play Equipment LF 082 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 082 - Play Equipment LF 082 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 082 - Play Equipment LF 082 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 14). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_14_full.png",
    "imageUrl": "/images/products/page_14_full.png",
    "thumbnails": [
      "/images/products/page_14_full.png",
      "/images/products/page_14_full.png"
    ]
  },
  {
    "id": "18",
    "slug": "lf-029-play-equipment-lf-029-18",
    "name": "LF 029 - Play Equipment LF 029",
    "price": "\u20b913,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 029 - Play Equipment LF 029 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 029 - Play Equipment LF 029 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 029 - Play Equipment LF 029 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 15). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_15_full.png",
    "imageUrl": "/images/products/page_15_full.png",
    "thumbnails": [
      "/images/products/page_15_full.png",
      "/images/products/page_15_full.png"
    ]
  },
  {
    "id": "19",
    "slug": "lf-028-play-equipment-lf-028-19",
    "name": "LF 028 - Play Equipment LF 028",
    "price": "\u20b916,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 028 - Play Equipment LF 028 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 028 - Play Equipment LF 028 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 028 - Play Equipment LF 028 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 16). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_16_full.png",
    "imageUrl": "/images/products/page_16_full.png",
    "thumbnails": [
      "/images/products/page_16_full.png",
      "/images/products/page_16_full.png"
    ]
  },
  {
    "id": "20",
    "slug": "lf-0331-play-equipment-lf-0331-20",
    "name": "LF 0331 - Play Equipment LF 0331",
    "price": "\u20b918,990",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0331 - Play Equipment LF 0331 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0331 - Play Equipment LF 0331 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0331 - Play Equipment LF 0331 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 17). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_17_full.png",
    "imageUrl": "/images/products/page_17_full.png",
    "thumbnails": [
      "/images/products/page_17_full.png",
      "/images/products/page_17_full.png"
    ]
  },
  {
    "id": "21",
    "slug": "lf-035-play-equipment-lf-035-21",
    "name": "LF 035 - Play Equipment LF 035",
    "price": "\u20b96,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 035 - Play Equipment LF 035 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 035 - Play Equipment LF 035 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 035 - Play Equipment LF 035 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 18). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_18_full.png",
    "imageUrl": "/images/products/page_18_full.png",
    "thumbnails": [
      "/images/products/page_18_full.png",
      "/images/products/page_18_full.png"
    ]
  },
  {
    "id": "22",
    "slug": "lf-025-play-equipment-lf-025-22",
    "name": "LF 025 - Play Equipment LF 025",
    "price": "\u20b97,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 025 - Play Equipment LF 025 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 025 - Play Equipment LF 025 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 025 - Play Equipment LF 025 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 19). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_19_full.png",
    "imageUrl": "/images/products/page_19_full.png",
    "thumbnails": [
      "/images/products/page_19_full.png",
      "/images/products/page_19_full.png"
    ]
  },
  {
    "id": "23",
    "slug": "lf-155-play-equipment-lf-155-23",
    "name": "LF 155 - Play Equipment LF 155",
    "price": "\u20b99,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 155 - Play Equipment LF 155 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 155 - Play Equipment LF 155 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 155 - Play Equipment LF 155 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 20). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_20_full.png",
    "imageUrl": "/images/products/page_20_full.png",
    "thumbnails": [
      "/images/products/page_20_full.png",
      "/images/products/page_20_full.png"
    ]
  },
  {
    "id": "24",
    "slug": "lf-157-play-equipment-lf-157-24",
    "name": "LF 157 - Play Equipment LF 157",
    "price": "\u20b910,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 157 - Play Equipment LF 157 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 157 - Play Equipment LF 157 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 157 - Play Equipment LF 157 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 21). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_21_full.png",
    "imageUrl": "/images/products/page_21_full.png",
    "thumbnails": [
      "/images/products/page_21_full.png",
      "/images/products/page_21_full.png"
    ]
  },
  {
    "id": "25",
    "slug": "lf-158-play-equipment-lf-158-25",
    "name": "LF 158 - Play Equipment LF 158",
    "price": "\u20b913,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 158 - Play Equipment LF 158 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 158 - Play Equipment LF 158 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 158 - Play Equipment LF 158 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 21). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_21_full.png",
    "imageUrl": "/images/products/page_21_full.png",
    "thumbnails": [
      "/images/products/page_21_full.png",
      "/images/products/page_21_full.png"
    ]
  },
  {
    "id": "26",
    "slug": "lf-159-play-equipment-lf-159-26",
    "name": "LF 159 - Play Equipment LF 159",
    "price": "\u20b916,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 159 - Play Equipment LF 159 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 159 - Play Equipment LF 159 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 159 - Play Equipment LF 159 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 22). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_22_full.png",
    "imageUrl": "/images/products/page_22_full.png",
    "thumbnails": [
      "/images/products/page_22_full.png",
      "/images/products/page_22_full.png"
    ]
  },
  {
    "id": "27",
    "slug": "lf-0504-play-equipment-lf-0504-27",
    "name": "LF 0504 - Play Equipment LF 0504",
    "price": "\u20b918,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0504 - Play Equipment LF 0504 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0504 - Play Equipment LF 0504 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0504 - Play Equipment LF 0504 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 23). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_23_full.png",
    "imageUrl": "/images/products/page_23_full.png",
    "thumbnails": [
      "/images/products/page_23_full.png",
      "/images/products/page_23_full.png"
    ]
  },
  {
    "id": "28",
    "slug": "lf-0512-play-equipment-lf-0512-28",
    "name": "LF 0512 - Play Equipment LF 0512",
    "price": "\u20b96,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0512 - Play Equipment LF 0512 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0512 - Play Equipment LF 0512 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0512 - Play Equipment LF 0512 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 24). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_24_full.png",
    "imageUrl": "/images/products/page_24_full.png",
    "thumbnails": [
      "/images/products/page_24_full.png",
      "/images/products/page_24_full.png"
    ]
  },
  {
    "id": "29",
    "slug": "lf-0513-play-equipment-lf-0513-29",
    "name": "LF 0513 - Play Equipment LF 0513",
    "price": "\u20b97,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0513 - Play Equipment LF 0513 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0513 - Play Equipment LF 0513 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0513 - Play Equipment LF 0513 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 25). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_25_full.png",
    "imageUrl": "/images/products/page_25_full.png",
    "thumbnails": [
      "/images/products/page_25_full.png",
      "/images/products/page_25_full.png"
    ]
  },
  {
    "id": "30",
    "slug": "lf-311-play-equipment-lf-311-30",
    "name": "LF 311 - Play Equipment LF 311",
    "price": "\u20b99,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 311 - Play Equipment LF 311 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 311 - Play Equipment LF 311 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 311 - Play Equipment LF 311 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 26). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_26_full.png",
    "imageUrl": "/images/products/page_26_full.png",
    "thumbnails": [
      "/images/products/page_26_full.png",
      "/images/products/page_26_full.png"
    ]
  },
  {
    "id": "31",
    "slug": "lf-314-round-table-adjustable-31",
    "name": "LF 314 - Round Table (Adjustable)",
    "price": "\u20b910,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 314 - Round Table (Adjustable) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 314 - Round Table (Adjustable) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 314 - Round Table (Adjustable) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 26). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_26_full.png",
    "imageUrl": "/images/products/page_26_full.png",
    "thumbnails": [
      "/images/products/page_26_full.png",
      "/images/products/page_26_full.png"
    ]
  },
  {
    "id": "32",
    "slug": "lf-315-play-equipment-lf-315-32",
    "name": "LF 315 - Play Equipment LF 315",
    "price": "\u20b913,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 315 - Play Equipment LF 315 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 315 - Play Equipment LF 315 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 315 - Play Equipment LF 315 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 27). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_27_full.png",
    "imageUrl": "/images/products/page_27_full.png",
    "thumbnails": [
      "/images/products/page_27_full.png",
      "/images/products/page_27_full.png"
    ]
  },
  {
    "id": "33",
    "slug": "lf-211-moon-table-adjustable-33",
    "name": "LF 211 - Moon Table (Adjustable)",
    "price": "\u20b916,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 211 - Moon Table (Adjustable) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 211 - Moon Table (Adjustable) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 211 - Moon Table (Adjustable) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 28). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_28_full.png",
    "imageUrl": "/images/products/page_28_full.png",
    "thumbnails": [
      "/images/products/page_28_full.png",
      "/images/products/page_28_full.png"
    ]
  },
  {
    "id": "34",
    "slug": "lf-214-play-equipment-lf-214-34",
    "name": "LF 214 - Play Equipment LF 214",
    "price": "\u20b918,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 214 - Play Equipment LF 214 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 214 - Play Equipment LF 214 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 214 - Play Equipment LF 214 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 29). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_29_full.png",
    "imageUrl": "/images/products/page_29_full.png",
    "thumbnails": [
      "/images/products/page_29_full.png",
      "/images/products/page_29_full.png"
    ]
  },
  {
    "id": "35",
    "slug": "lf-215-rectangle-table-adjustable-35",
    "name": "LF 215 - Rectangle Table (Adjustable)",
    "price": "\u20b96,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 215 - Rectangle Table (Adjustable) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 215 - Rectangle Table (Adjustable) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 215 - Rectangle Table (Adjustable) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 29). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_29_full.png",
    "imageUrl": "/images/products/page_29_full.png",
    "thumbnails": [
      "/images/products/page_29_full.png",
      "/images/products/page_29_full.png"
    ]
  },
  {
    "id": "36",
    "slug": "lf-110-play-equipment-lf-110-36",
    "name": "LF 110 - Play Equipment LF 110",
    "price": "\u20b97,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 110 - Play Equipment LF 110 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 110 - Play Equipment LF 110 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 110 - Play Equipment LF 110 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 30). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_30_full.png",
    "imageUrl": "/images/products/page_30_full.png",
    "thumbnails": [
      "/images/products/page_30_full.png",
      "/images/products/page_30_full.png"
    ]
  },
  {
    "id": "37",
    "slug": "lf-111-play-equipment-lf-111-37",
    "name": "LF 111 - Play Equipment LF 111",
    "price": "\u20b99,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 111 - Play Equipment LF 111 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 111 - Play Equipment LF 111 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 111 - Play Equipment LF 111 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 31). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_31_full.png",
    "imageUrl": "/images/products/page_31_full.png",
    "thumbnails": [
      "/images/products/page_31_full.png",
      "/images/products/page_31_full.png"
    ]
  },
  {
    "id": "38",
    "slug": "lf-113-square-table-38",
    "name": "LF 113 - Square Table",
    "price": "\u20b910,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 113 - Square Table from the official Play Solution Indoor Catalogue.",
    "description": "The LF 113 - Square Table is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 113 - Square Table from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 31). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_31_full.png",
    "imageUrl": "/images/products/page_31_full.png",
    "thumbnails": [
      "/images/products/page_31_full.png",
      "/images/products/page_31_full.png"
    ]
  },
  {
    "id": "39",
    "slug": "lf-114-round-table-39",
    "name": "LF 114 - Round Table",
    "price": "\u20b913,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 114 - Round Table from the official Play Solution Indoor Catalogue.",
    "description": "The LF 114 - Round Table is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 114 - Round Table from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 32). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_32_full.png",
    "imageUrl": "/images/products/page_32_full.png",
    "thumbnails": [
      "/images/products/page_32_full.png",
      "/images/products/page_32_full.png"
    ]
  },
  {
    "id": "40",
    "slug": "lf-114s-round-table-40",
    "name": "LF 114S - Round Table",
    "price": "\u20b916,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 114S - Round Table from the official Play Solution Indoor Catalogue.",
    "description": "The LF 114S - Round Table is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 114S - Round Table from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 32). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_32_full.png",
    "imageUrl": "/images/products/page_32_full.png",
    "thumbnails": [
      "/images/products/page_32_full.png",
      "/images/products/page_32_full.png"
    ]
  },
  {
    "id": "41",
    "slug": "lf-115-play-equipment-lf-115-41",
    "name": "LF 115 - Play Equipment LF 115",
    "price": "\u20b918,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 115 - Play Equipment LF 115 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 115 - Play Equipment LF 115 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 115 - Play Equipment LF 115 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 33). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_33_full.png",
    "imageUrl": "/images/products/page_33_full.png",
    "thumbnails": [
      "/images/products/page_33_full.png",
      "/images/products/page_33_full.png"
    ]
  },
  {
    "id": "42",
    "slug": "lf-115s-play-equipment-lf-115s-42",
    "name": "LF 115S - Play Equipment LF 115S",
    "price": "\u20b96,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 115S - Play Equipment LF 115S from the official Play Solution Indoor Catalogue.",
    "description": "The LF 115S - Play Equipment LF 115S is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 115S - Play Equipment LF 115S from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 33). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_33_full.png",
    "imageUrl": "/images/products/page_33_full.png",
    "thumbnails": [
      "/images/products/page_33_full.png",
      "/images/products/page_33_full.png"
    ]
  },
  {
    "id": "43",
    "slug": "lf-207-size-l120xw105xh50-cm-43",
    "name": "LF 207 - Size L120xW105xH50 CM",
    "price": "\u20b97,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 207 - Size L120xW105xH50 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 207 - Size L120xW105xH50 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 207 - Size L120xW105xH50 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 34). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L120xW105xH50 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_34_full.png",
    "imageUrl": "/images/products/page_34_full.png",
    "thumbnails": [
      "/images/products/page_34_full.png",
      "/images/products/page_34_full.png"
    ]
  },
  {
    "id": "44",
    "slug": "lf-202-play-equipment-lf-202-44",
    "name": "LF 202 - Play Equipment LF 202",
    "price": "\u20b99,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 202 - Play Equipment LF 202 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 202 - Play Equipment LF 202 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 202 - Play Equipment LF 202 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 34). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L120xW105xH50 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_34_full.png",
    "imageUrl": "/images/products/page_34_full.png",
    "thumbnails": [
      "/images/products/page_34_full.png",
      "/images/products/page_34_full.png"
    ]
  },
  {
    "id": "45",
    "slug": "lf-206-size-diaxh53-cm-45",
    "name": "LF 206 - Size DiaxH53 CM",
    "price": "\u20b910,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 206 - Size DiaxH53 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 206 - Size DiaxH53 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 206 - Size DiaxH53 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 34). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : DiaxH53 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_34_full.png",
    "imageUrl": "/images/products/page_34_full.png",
    "thumbnails": [
      "/images/products/page_34_full.png",
      "/images/products/page_34_full.png"
    ]
  },
  {
    "id": "46",
    "slug": "lf-205-size-l120xw60xh53-cm-46",
    "name": "LF 205 - Size L120xW60xH53 CM",
    "price": "\u20b913,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 205 - Size L120xW60xH53 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 205 - Size L120xW60xH53 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 205 - Size L120xW60xH53 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 34). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L120xW60xH53 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_34_full.png",
    "imageUrl": "/images/products/page_34_full.png",
    "thumbnails": [
      "/images/products/page_34_full.png",
      "/images/products/page_34_full.png"
    ]
  },
  {
    "id": "47",
    "slug": "lf-201-play-equipment-lf-201-47",
    "name": "LF 201 - Play Equipment LF 201",
    "price": "\u20b916,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 201 - Play Equipment LF 201 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 201 - Play Equipment LF 201 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 201 - Play Equipment LF 201 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 34). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L120xW60xH53 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_34_full.png",
    "imageUrl": "/images/products/page_34_full.png",
    "thumbnails": [
      "/images/products/page_34_full.png",
      "/images/products/page_34_full.png"
    ]
  },
  {
    "id": "48",
    "slug": "lf-1421-size-l44xw35xh50-cm-48",
    "name": "LF 1421 - Size L44xW35xH50 CM",
    "price": "\u20b918,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1421 - Size L44xW35xH50 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1421 - Size L44xW35xH50 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1421 - Size L44xW35xH50 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 35). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L44xW35xH50 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_35_full.png",
    "imageUrl": "/images/products/page_35_full.png",
    "thumbnails": [
      "/images/products/page_35_full.png",
      "/images/products/page_35_full.png"
    ]
  },
  {
    "id": "49",
    "slug": "lf-1422-play-equipment-lf-1422-49",
    "name": "LF 1422 - Play Equipment LF 1422",
    "price": "\u20b96,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1422 - Play Equipment LF 1422 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1422 - Play Equipment LF 1422 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1422 - Play Equipment LF 1422 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 35). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L44xW35xH50 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_35_full.png",
    "imageUrl": "/images/products/page_35_full.png",
    "thumbnails": [
      "/images/products/page_35_full.png",
      "/images/products/page_35_full.png"
    ]
  },
  {
    "id": "50",
    "slug": "lf-1423-play-equipment-lf-1423-50",
    "name": "LF 1423 - Play Equipment LF 1423",
    "price": "\u20b97,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1423 - Play Equipment LF 1423 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1423 - Play Equipment LF 1423 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1423 - Play Equipment LF 1423 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 35). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L44xW35xH50 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_35_full.png",
    "imageUrl": "/images/products/page_35_full.png",
    "thumbnails": [
      "/images/products/page_35_full.png",
      "/images/products/page_35_full.png"
    ]
  },
  {
    "id": "51",
    "slug": "lf-1424-size-l36xw27-8xh25-cm-51",
    "name": "LF 1424 - Size L36xW27 8xH25 CM",
    "price": "\u20b99,490",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1424 - Size L36xW27 8xH25 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1424 - Size L36xW27 8xH25 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1424 - Size L36xW27 8xH25 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 35). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L36xW27.8xH25 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_35_full.png",
    "imageUrl": "/images/products/page_35_full.png",
    "thumbnails": [
      "/images/products/page_35_full.png",
      "/images/products/page_35_full.png"
    ]
  },
  {
    "id": "52",
    "slug": "lf-1425-size-l44xw35xh82-cm-52",
    "name": "LF 1425 - Size L44xW35xH82 CM",
    "price": "\u20b910,990",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1425 - Size L44xW35xH82 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1425 - Size L44xW35xH82 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1425 - Size L44xW35xH82 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 35). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L44xW35xH82 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_35_full.png",
    "imageUrl": "/images/products/page_35_full.png",
    "thumbnails": [
      "/images/products/page_35_full.png",
      "/images/products/page_35_full.png"
    ]
  },
  {
    "id": "53",
    "slug": "lf-1426-size-l120xw29-5xh98-cm-53",
    "name": "LF 1426 - Size L120xW29 5xH98 CM",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1426 - Size L120xW29 5xH98 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1426 - Size L120xW29 5xH98 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1426 - Size L120xW29 5xH98 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 36). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L120xW29.5xH98 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_36_full.png",
    "imageUrl": "/images/products/page_36_full.png",
    "thumbnails": [
      "/images/products/page_36_full.png",
      "/images/products/page_36_full.png"
    ]
  },
  {
    "id": "54",
    "slug": "lf-1428-size-l68xw30xh88-cm-54",
    "name": "LF 1428 - Size L68xW30xH88 CM",
    "price": "\u20b98,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1428 - Size L68xW30xH88 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1428 - Size L68xW30xH88 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1428 - Size L68xW30xH88 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 36). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L68xW30xH88 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_36_full.png",
    "imageUrl": "/images/products/page_36_full.png",
    "thumbnails": [
      "/images/products/page_36_full.png",
      "/images/products/page_36_full.png"
    ]
  },
  {
    "id": "55",
    "slug": "lf-1427-size-l122xw30xh109-5-cm-55",
    "name": "LF 1427 - Size L122xW30xH109 5 CM",
    "price": "\u20b911,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1427 - Size L122xW30xH109 5 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1427 - Size L122xW30xH109 5 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1427 - Size L122xW30xH109 5 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 36). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L122xW30xH109.5 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_36_full.png",
    "imageUrl": "/images/products/page_36_full.png",
    "thumbnails": [
      "/images/products/page_36_full.png",
      "/images/products/page_36_full.png"
    ]
  },
  {
    "id": "56",
    "slug": "lf-1451-size-l120xw30xh80-cm-56",
    "name": "LF 1451 - Size L120xW30xH80 CM",
    "price": "\u20b914,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1451 - Size L120xW30xH80 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1451 - Size L120xW30xH80 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1451 - Size L120xW30xH80 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 37). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L120xW30xH80 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_37_full.png",
    "imageUrl": "/images/products/page_37_full.png",
    "thumbnails": [
      "/images/products/page_37_full.png",
      "/images/products/page_37_full.png"
    ]
  },
  {
    "id": "57",
    "slug": "lf-1452-size-l120xw30xh80-cm-57",
    "name": "LF 1452 - Size L120xW30xH80 CM",
    "price": "\u20b919,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1452 - Size L120xW30xH80 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1452 - Size L120xW30xH80 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1452 - Size L120xW30xH80 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 37). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L120xW30xH80 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_37_full.png",
    "imageUrl": "/images/products/page_37_full.png",
    "thumbnails": [
      "/images/products/page_37_full.png",
      "/images/products/page_37_full.png"
    ]
  },
  {
    "id": "58",
    "slug": "lf-1453-size-l80xw40xh67-cm-58",
    "name": "LF 1453 - Size L80xW40xH67 CM",
    "price": "\u20b924,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1453 - Size L80xW40xH67 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1453 - Size L80xW40xH67 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1453 - Size L80xW40xH67 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 37). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L80xW40xH67 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_37_full.png",
    "imageUrl": "/images/products/page_37_full.png",
    "thumbnails": [
      "/images/products/page_37_full.png",
      "/images/products/page_37_full.png"
    ]
  },
  {
    "id": "59",
    "slug": "lf-1454-size-l80xw40xh67-cm-59",
    "name": "LF 1454 - Size L80xW40xH67 CM",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1454 - Size L80xW40xH67 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1454 - Size L80xW40xH67 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1454 - Size L80xW40xH67 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 37). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L80xW40xH67 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_37_full.png",
    "imageUrl": "/images/products/page_37_full.png",
    "thumbnails": [
      "/images/products/page_37_full.png",
      "/images/products/page_37_full.png"
    ]
  },
  {
    "id": "60",
    "slug": "lf-1455-size-l104xw30xh80-cm-60",
    "name": "LF 1455 - Size L104xW30xH80 CM",
    "price": "\u20b98,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1455 - Size L104xW30xH80 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1455 - Size L104xW30xH80 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1455 - Size L104xW30xH80 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 37). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L104xW30xH80 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_37_full.png",
    "imageUrl": "/images/products/page_37_full.png",
    "thumbnails": [
      "/images/products/page_37_full.png",
      "/images/products/page_37_full.png"
    ]
  },
  {
    "id": "61",
    "slug": "lf-1456-size-l84xw30xh80-cm-61",
    "name": "LF 1456 - Size L84xW30xH80 CM",
    "price": "\u20b911,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1456 - Size L84xW30xH80 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1456 - Size L84xW30xH80 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1456 - Size L84xW30xH80 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 37). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L84xW30xH80 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_37_full.png",
    "imageUrl": "/images/products/page_37_full.png",
    "thumbnails": [
      "/images/products/page_37_full.png",
      "/images/products/page_37_full.png"
    ]
  },
  {
    "id": "62",
    "slug": "lf-1501-size-l90xw20xh58-cm-62",
    "name": "LF 1501 - Size L90xW20xH58 CM",
    "price": "\u20b914,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1501 - Size L90xW20xH58 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1501 - Size L90xW20xH58 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1501 - Size L90xW20xH58 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 38). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L90xW20xH58 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_38_full.png",
    "imageUrl": "/images/products/page_38_full.png",
    "thumbnails": [
      "/images/products/page_38_full.png",
      "/images/products/page_38_full.png"
    ]
  },
  {
    "id": "63",
    "slug": "lf-1503-size-l90xw20xh58-cm-63",
    "name": "LF 1503 - Size L90xW20xH58 CM",
    "price": "\u20b919,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1503 - Size L90xW20xH58 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1503 - Size L90xW20xH58 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1503 - Size L90xW20xH58 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 38). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L90xW20xH58 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_38_full.png",
    "imageUrl": "/images/products/page_38_full.png",
    "thumbnails": [
      "/images/products/page_38_full.png",
      "/images/products/page_38_full.png"
    ]
  },
  {
    "id": "64",
    "slug": "lf-1502-size-l90xw20xh58-cm-64",
    "name": "LF 1502 - Size L90xW20xH58 CM",
    "price": "\u20b924,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1502 - Size L90xW20xH58 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1502 - Size L90xW20xH58 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1502 - Size L90xW20xH58 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 38). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L90xW20xH58 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_38_full.png",
    "imageUrl": "/images/products/page_38_full.png",
    "thumbnails": [
      "/images/products/page_38_full.png",
      "/images/products/page_38_full.png"
    ]
  },
  {
    "id": "65",
    "slug": "lf-1504-size-l90xw20xh92-cm-65",
    "name": "LF 1504 - Size L90xW20xH92 CM",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1504 - Size L90xW20xH92 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1504 - Size L90xW20xH92 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1504 - Size L90xW20xH92 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 38). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L90xW20xH92 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_38_full.png",
    "imageUrl": "/images/products/page_38_full.png",
    "thumbnails": [
      "/images/products/page_38_full.png",
      "/images/products/page_38_full.png"
    ]
  },
  {
    "id": "66",
    "slug": "lf-1458-size-l124xw40xh50-cm-66",
    "name": "LF 1458 - Size L124xW40xH50 CM",
    "price": "\u20b98,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1458 - Size L124xW40xH50 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1458 - Size L124xW40xH50 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1458 - Size L124xW40xH50 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 38). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L124xW40xH50 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_38_full.png",
    "imageUrl": "/images/products/page_38_full.png",
    "thumbnails": [
      "/images/products/page_38_full.png",
      "/images/products/page_38_full.png"
    ]
  },
  {
    "id": "67",
    "slug": "lf-1459-size-l298xw30xh116-cm-67",
    "name": "LF 1459 - Size L298xW30xH116 CM",
    "price": "\u20b911,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1459 - Size L298xW30xH116 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1459 - Size L298xW30xH116 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1459 - Size L298xW30xH116 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 38). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L298xW30xH116 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_38_full.png",
    "imageUrl": "/images/products/page_38_full.png",
    "thumbnails": [
      "/images/products/page_38_full.png",
      "/images/products/page_38_full.png"
    ]
  },
  {
    "id": "68",
    "slug": "lf-1457-size-l124xw30xh80-cm-68",
    "name": "LF 1457 - Size L124xW30xH80 CM",
    "price": "\u20b914,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1457 - Size L124xW30xH80 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1457 - Size L124xW30xH80 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1457 - Size L124xW30xH80 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 38). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L124xW30xH80 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_38_full.png",
    "imageUrl": "/images/products/page_38_full.png",
    "thumbnails": [
      "/images/products/page_38_full.png",
      "/images/products/page_38_full.png"
    ]
  },
  {
    "id": "69",
    "slug": "lf-0701-play-equipment-lf-0701-69",
    "name": "LF 0701 - Play Equipment LF 0701",
    "price": "\u20b919,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0701 - Play Equipment LF 0701 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0701 - Play Equipment LF 0701 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0701 - Play Equipment LF 0701 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 39). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_39_full.png",
    "imageUrl": "/images/products/page_39_full.png",
    "thumbnails": [
      "/images/products/page_39_full.png",
      "/images/products/page_39_full.png"
    ]
  },
  {
    "id": "70",
    "slug": "lf-0702-play-equipment-lf-0702-70",
    "name": "LF 0702 - Play Equipment LF 0702",
    "price": "\u20b924,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0702 - Play Equipment LF 0702 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0702 - Play Equipment LF 0702 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0702 - Play Equipment LF 0702 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 39). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_39_full.png",
    "imageUrl": "/images/products/page_39_full.png",
    "thumbnails": [
      "/images/products/page_39_full.png",
      "/images/products/page_39_full.png"
    ]
  },
  {
    "id": "71",
    "slug": "lf-0703-play-equipment-lf-0703-71",
    "name": "LF 0703 - Play Equipment LF 0703",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0703 - Play Equipment LF 0703 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0703 - Play Equipment LF 0703 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0703 - Play Equipment LF 0703 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 39). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_39_full.png",
    "imageUrl": "/images/products/page_39_full.png",
    "thumbnails": [
      "/images/products/page_39_full.png",
      "/images/products/page_39_full.png"
    ]
  },
  {
    "id": "72",
    "slug": "lf-0704-play-equipment-lf-0704-72",
    "name": "LF 0704 - Play Equipment LF 0704",
    "price": "\u20b98,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0704 - Play Equipment LF 0704 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0704 - Play Equipment LF 0704 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0704 - Play Equipment LF 0704 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 39). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_39_full.png",
    "imageUrl": "/images/products/page_39_full.png",
    "thumbnails": [
      "/images/products/page_39_full.png",
      "/images/products/page_39_full.png"
    ]
  },
  {
    "id": "73",
    "slug": "lf-0705-shapes-activity-carpets-73",
    "name": "LF 0705 - Shapes Activity Carpets",
    "price": "\u20b911,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0705 - Shapes Activity Carpets from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0705 - Shapes Activity Carpets is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0705 - Shapes Activity Carpets from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 39). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_39_full.png",
    "imageUrl": "/images/products/page_39_full.png",
    "thumbnails": [
      "/images/products/page_39_full.png",
      "/images/products/page_39_full.png"
    ]
  },
  {
    "id": "74",
    "slug": "lf-401-play-equipment-lf-401-74",
    "name": "LF 401 - Play Equipment LF 401",
    "price": "\u20b914,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 401 - Play Equipment LF 401 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 401 - Play Equipment LF 401 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 401 - Play Equipment LF 401 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 40). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_40_full.png",
    "imageUrl": "/images/products/page_40_full.png",
    "thumbnails": [
      "/images/products/page_40_full.png",
      "/images/products/page_40_full.png"
    ]
  },
  {
    "id": "75",
    "slug": "lf-402-single-seater-giraffe-desk-75",
    "name": "LF 402 - Single Seater Giraffe Desk",
    "price": "\u20b919,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 402 - Single Seater Giraffe Desk from the official Play Solution Indoor Catalogue.",
    "description": "The LF 402 - Single Seater Giraffe Desk is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 402 - Single Seater Giraffe Desk from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 40). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_40_full.png",
    "imageUrl": "/images/products/page_40_full.png",
    "thumbnails": [
      "/images/products/page_40_full.png",
      "/images/products/page_40_full.png"
    ]
  },
  {
    "id": "76",
    "slug": "lf-411-play-equipment-lf-411-76",
    "name": "LF 411 - Play Equipment LF 411",
    "price": "\u20b924,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 411 - Play Equipment LF 411 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 411 - Play Equipment LF 411 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 411 - Play Equipment LF 411 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 41). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_41_full.png",
    "imageUrl": "/images/products/page_41_full.png",
    "thumbnails": [
      "/images/products/page_41_full.png",
      "/images/products/page_41_full.png"
    ]
  },
  {
    "id": "77",
    "slug": "lf-412-double-seater-giraffe-desk-77",
    "name": "LF 412 - Double Seater Giraffe Desk",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 412 - Double Seater Giraffe Desk from the official Play Solution Indoor Catalogue.",
    "description": "The LF 412 - Double Seater Giraffe Desk is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 412 - Double Seater Giraffe Desk from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 41). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_41_full.png",
    "imageUrl": "/images/products/page_41_full.png",
    "thumbnails": [
      "/images/products/page_41_full.png",
      "/images/products/page_41_full.png"
    ]
  },
  {
    "id": "78",
    "slug": "lf-1481-play-equipment-lf-1481-78",
    "name": "LF 1481 - Play Equipment LF 1481",
    "price": "\u20b98,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1481 - Play Equipment LF 1481 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1481 - Play Equipment LF 1481 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1481 - Play Equipment LF 1481 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 42). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "L120 \u00d7 W60 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_42_full.png",
    "imageUrl": "/images/products/page_42_full.png",
    "thumbnails": [
      "/images/products/page_42_full.png",
      "/images/products/page_42_full.png"
    ]
  },
  {
    "id": "79",
    "slug": "lf-1482-play-equipment-lf-1482-79",
    "name": "LF 1482 - Play Equipment LF 1482",
    "price": "\u20b911,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1482 - Play Equipment LF 1482 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1482 - Play Equipment LF 1482 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1482 - Play Equipment LF 1482 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 42). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "L120 \u00d7 W60 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_42_full.png",
    "imageUrl": "/images/products/page_42_full.png",
    "thumbnails": [
      "/images/products/page_42_full.png",
      "/images/products/page_42_full.png"
    ]
  },
  {
    "id": "80",
    "slug": "lf-1483-play-equipment-lf-1483-80",
    "name": "LF 1483 - Play Equipment LF 1483",
    "price": "\u20b914,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1483 - Play Equipment LF 1483 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1483 - Play Equipment LF 1483 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1483 - Play Equipment LF 1483 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 42). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "L120 \u00d7 W60 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_42_full.png",
    "imageUrl": "/images/products/page_42_full.png",
    "thumbnails": [
      "/images/products/page_42_full.png",
      "/images/products/page_42_full.png"
    ]
  },
  {
    "id": "81",
    "slug": "lf-1484-play-equipment-lf-1484-81",
    "name": "LF 1484 - Play Equipment LF 1484",
    "price": "\u20b919,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1484 - Play Equipment LF 1484 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1484 - Play Equipment LF 1484 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1484 - Play Equipment LF 1484 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 42). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "L60 \u00d7 W60 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_42_full.png",
    "imageUrl": "/images/products/page_42_full.png",
    "thumbnails": [
      "/images/products/page_42_full.png",
      "/images/products/page_42_full.png"
    ]
  },
  {
    "id": "82",
    "slug": "lf-1485-play-equipment-lf-1485-82",
    "name": "LF 1485 - Play Equipment LF 1485",
    "price": "\u20b924,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1485 - Play Equipment LF 1485 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1485 - Play Equipment LF 1485 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1485 - Play Equipment LF 1485 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 42). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "L60 \u00d7 W60 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_42_full.png",
    "imageUrl": "/images/products/page_42_full.png",
    "thumbnails": [
      "/images/products/page_42_full.png",
      "/images/products/page_42_full.png"
    ]
  },
  {
    "id": "83",
    "slug": "lf-1486-play-equipment-lf-1486-83",
    "name": "LF 1486 - Play Equipment LF 1486",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1486 - Play Equipment LF 1486 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1486 - Play Equipment LF 1486 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1486 - Play Equipment LF 1486 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 42). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "L60 \u00d7 W60 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_42_full.png",
    "imageUrl": "/images/products/page_42_full.png",
    "thumbnails": [
      "/images/products/page_42_full.png",
      "/images/products/page_42_full.png"
    ]
  },
  {
    "id": "84",
    "slug": "lf-0421-play-animal-seating-84",
    "name": "LF 0421 - Play Animal Seating",
    "price": "\u20b98,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0421 - Play Animal Seating from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0421 - Play Animal Seating is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0421 - Play Animal Seating from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 43). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L242xW44xH50 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_43_full.png",
    "imageUrl": "/images/products/page_43_full.png",
    "thumbnails": [
      "/images/products/page_43_full.png",
      "/images/products/page_43_full.png"
    ]
  },
  {
    "id": "85",
    "slug": "lf-0422-play-crocodile-seating-85",
    "name": "LF 0422 - Play Crocodile Seating",
    "price": "\u20b911,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0422 - Play Crocodile Seating from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0422 - Play Crocodile Seating is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0422 - Play Crocodile Seating from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 43). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_43_full.png",
    "imageUrl": "/images/products/page_43_full.png",
    "thumbnails": [
      "/images/products/page_43_full.png",
      "/images/products/page_43_full.png"
    ]
  },
  {
    "id": "86",
    "slug": "lf-0423-play-slark-seating-86",
    "name": "LF 0423 - Play Slark Seating",
    "price": "\u20b914,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0423 - Play Slark Seating from the official Play Solution Indoor Catalogue.",
    "description": "The LF 0423 - Play Slark Seating is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 0423 - Play Slark Seating from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 43). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_43_full.png",
    "imageUrl": "/images/products/page_43_full.png",
    "thumbnails": [
      "/images/products/page_43_full.png",
      "/images/products/page_43_full.png"
    ]
  },
  {
    "id": "87",
    "slug": "lf-960-play-equipment-lf-960-87",
    "name": "LF 960 - Play Equipment LF 960",
    "price": "\u20b919,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 960 - Play Equipment LF 960 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 960 - Play Equipment LF 960 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 960 - Play Equipment LF 960 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 44). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_44_full.png",
    "imageUrl": "/images/products/page_44_full.png",
    "thumbnails": [
      "/images/products/page_44_full.png",
      "/images/products/page_44_full.png"
    ]
  },
  {
    "id": "88",
    "slug": "lf-136-play-equipment-lf-136-88",
    "name": "LF 136 - Play Equipment LF 136",
    "price": "\u20b924,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 136 - Play Equipment LF 136 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 136 - Play Equipment LF 136 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 136 - Play Equipment LF 136 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 45). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_45_full.png",
    "imageUrl": "/images/products/page_45_full.png",
    "thumbnails": [
      "/images/products/page_45_full.png",
      "/images/products/page_45_full.png"
    ]
  },
  {
    "id": "89",
    "slug": "lf-507-children-bed-89",
    "name": "LF 507 - Children Bed",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 507 - Children Bed from the official Play Solution Indoor Catalogue.",
    "description": "The LF 507 - Children Bed is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 507 - Children Bed from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 45). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_45_full.png",
    "imageUrl": "/images/products/page_45_full.png",
    "thumbnails": [
      "/images/products/page_45_full.png",
      "/images/products/page_45_full.png"
    ]
  },
  {
    "id": "90",
    "slug": "lf-106-plastic-chair-90",
    "name": "LF 106 - Plastic Chair",
    "price": "\u20b9390.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 106 - Plastic Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 106 - Plastic Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 106 - Plastic Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "24 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "91",
    "slug": "lf-116-plastic-chair-91",
    "name": "LF 116 - Plastic Chair",
    "price": "\u20b9590.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 116 - Plastic Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 116 - Plastic Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 116 - Plastic Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "26 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "92",
    "slug": "lf-186-play-equipment-lf-186-92",
    "name": "LF 186 - Play Equipment LF 186",
    "price": "\u20b914,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 186 - Play Equipment LF 186 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 186 - Play Equipment LF 186 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 186 - Play Equipment LF 186 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "93",
    "slug": "lf-146-play-equipment-lf-146-93",
    "name": "LF 146 - Play Equipment LF 146",
    "price": "\u20b919,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 146 - Play Equipment LF 146 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 146 - Play Equipment LF 146 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 146 - Play Equipment LF 146 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "94",
    "slug": "lf-176-metal-chair-94",
    "name": "LF 176 - Metal Chair",
    "price": "\u20b91,790.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 176 - Metal Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 176 - Metal Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 176 - Metal Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "30 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "95",
    "slug": "lf-126-plastic-chair-95",
    "name": "LF 126 - Plastic Chair",
    "price": "\u20b9690.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 126 - Plastic Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 126 - Plastic Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 126 - Plastic Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "31 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "96",
    "slug": "lf-127-plastic-chair-96",
    "name": "LF 127 - Plastic Chair",
    "price": "\u20b9890.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 127 - Plastic Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 127 - Plastic Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 127 - Plastic Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "35 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "97",
    "slug": "lf-156-metal-handle-chair-97",
    "name": "LF 156 - Metal Handle Chair",
    "price": "\u20b91,890.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 156 - Metal Handle Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 156 - Metal Handle Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 156 - Metal Handle Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "35 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "98",
    "slug": "lf-166-metal-handle-chair-98",
    "name": "LF 166 - Metal Handle Chair",
    "price": "\u20b92,090.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 166 - Metal Handle Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 166 - Metal Handle Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 166 - Metal Handle Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "36 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "99",
    "slug": "lf-129-plastic-chair-99",
    "name": "LF 129 - Plastic Chair",
    "price": "\u20b91,590.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 129 - Plastic Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 129 - Plastic Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 129 - Plastic Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "45 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "100",
    "slug": "lf-128-plastic-chair-100",
    "name": "LF 128 - Plastic Chair",
    "price": "\u20b91,290.00",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 128 - Plastic Chair from the official Play Solution Indoor Catalogue.",
    "description": "The LF 128 - Plastic Chair is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 128 - Plastic Chair from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 46). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "40 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_46_full.png",
    "imageUrl": "/images/products/page_46_full.png",
    "thumbnails": [
      "/images/products/page_46_full.png",
      "/images/products/page_46_full.png"
    ]
  },
  {
    "id": "101",
    "slug": "lf-801-mini-home-kitchen-playhouse-101",
    "name": "LF 801 - Mini Home & Kitchen Playhouse",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 801 - Mini Home & Kitchen Playhouse from the official Play Solution Indoor Catalogue.",
    "description": "The LF 801 - Mini Home & Kitchen Playhouse is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 801 - Mini Home & Kitchen Playhouse from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 47). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_47_full.png",
    "imageUrl": "/images/products/page_47_full.png",
    "thumbnails": [
      "/images/products/page_47_full.png",
      "/images/products/page_47_full.png"
    ]
  },
  {
    "id": "102",
    "slug": "lf-802-junior-living-house-102",
    "name": "LF 802 - Junior Living House",
    "price": "\u20b98,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 802 - Junior Living House from the official Play Solution Indoor Catalogue.",
    "description": "The LF 802 - Junior Living House is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 802 - Junior Living House from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 47). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size :L124 x W172.5 x H163 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_47_full.png",
    "imageUrl": "/images/products/page_47_full.png",
    "thumbnails": [
      "/images/products/page_47_full.png",
      "/images/products/page_47_full.png"
    ]
  },
  {
    "id": "103",
    "slug": "lf-901-play-equipment-lf-901-103",
    "name": "LF 901 - Play Equipment LF 901",
    "price": "\u20b911,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 901 - Play Equipment LF 901 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 901 - Play Equipment LF 901 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 901 - Play Equipment LF 901 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 48). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_48_full.png",
    "imageUrl": "/images/products/page_48_full.png",
    "thumbnails": [
      "/images/products/page_48_full.png",
      "/images/products/page_48_full.png"
    ]
  },
  {
    "id": "104",
    "slug": "lf-902-size-l103xw109xh131-cm-104",
    "name": "LF 902 - Size L103xW109xH131 CM",
    "price": "\u20b914,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 902 - Size L103xW109xH131 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 902 - Size L103xW109xH131 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 902 - Size L103xW109xH131 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 48). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L103xW109xH131 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_48_full.png",
    "imageUrl": "/images/products/page_48_full.png",
    "thumbnails": [
      "/images/products/page_48_full.png",
      "/images/products/page_48_full.png"
    ]
  },
  {
    "id": "105",
    "slug": "lf-903-royal-cottage-105",
    "name": "LF 903 - Royal Cottage",
    "price": "\u20b919,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 903 - Royal Cottage from the official Play Solution Indoor Catalogue.",
    "description": "The LF 903 - Royal Cottage is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 903 - Royal Cottage from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 49). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size :L134.6xW81.3xH124.5 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_49_full.png",
    "imageUrl": "/images/products/page_49_full.png",
    "thumbnails": [
      "/images/products/page_49_full.png",
      "/images/products/page_49_full.png"
    ]
  },
  {
    "id": "106",
    "slug": "lf-904-classic-cottage-106",
    "name": "LF 904 - Classic Cottage",
    "price": "\u20b924,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 904 - Classic Cottage from the official Play Solution Indoor Catalogue.",
    "description": "The LF 904 - Classic Cottage is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 904 - Classic Cottage from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 49). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L97.5xW64.3xH94.4 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_49_full.png",
    "imageUrl": "/images/products/page_49_full.png",
    "thumbnails": [
      "/images/products/page_49_full.png",
      "/images/products/page_49_full.png"
    ]
  },
  {
    "id": "107",
    "slug": "lf-102-size-l204xw220xh180-cm-107",
    "name": "LF 102 - Size L204xW220xH180 CM",
    "price": "\u20b929,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 102 - Size L204xW220xH180 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 102 - Size L204xW220xH180 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 102 - Size L204xW220xH180 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 50). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size :L204xW220xH180 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_50_full.png",
    "imageUrl": "/images/products/page_50_full.png",
    "thumbnails": [
      "/images/products/page_50_full.png",
      "/images/products/page_50_full.png"
    ]
  },
  {
    "id": "108",
    "slug": "lf-103-size-l274xw116xh134-cm-108",
    "name": "LF 103 - Size L274xW116xH134 CM",
    "price": "\u20b98,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 103 - Size L274xW116xH134 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 103 - Size L274xW116xH134 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 103 - Size L274xW116xH134 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 50). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L274xW116xH134 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_50_full.png",
    "imageUrl": "/images/products/page_50_full.png",
    "thumbnails": [
      "/images/products/page_50_full.png",
      "/images/products/page_50_full.png"
    ]
  },
  {
    "id": "109",
    "slug": "lf-105-size-l274xw213xh152-cm-109",
    "name": "LF 105 - Size L274xW213xH152 CM",
    "price": "\u20b911,990",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 105 - Size L274xW213xH152 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 105 - Size L274xW213xH152 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 105 - Size L274xW213xH152 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 50). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L274xW213xH152 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_50_full.png",
    "imageUrl": "/images/products/page_50_full.png",
    "thumbnails": [
      "/images/products/page_50_full.png",
      "/images/products/page_50_full.png"
    ]
  },
  {
    "id": "110",
    "slug": "lf-101-play-equipment-lf-101-110",
    "name": "LF 101 - Play Equipment LF 101",
    "price": "\u20b96,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 101 - Play Equipment LF 101 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 101 - Play Equipment LF 101 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 101 - Play Equipment LF 101 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 51). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_51_full.png",
    "imageUrl": "/images/products/page_51_full.png",
    "thumbnails": [
      "/images/products/page_51_full.png",
      "/images/products/page_51_full.png"
    ]
  },
  {
    "id": "111",
    "slug": "lf-912-rabbit-slide-111",
    "name": "LF 912 - Rabbit Slide",
    "price": "\u20b98,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 912 - Rabbit Slide from the official Play Solution Indoor Catalogue.",
    "description": "The LF 912 - Rabbit Slide is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 912 - Rabbit Slide from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 52). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L176xW74xH84 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_52_full.png",
    "imageUrl": "/images/products/page_52_full.png",
    "thumbnails": [
      "/images/products/page_52_full.png",
      "/images/products/page_52_full.png"
    ]
  },
  {
    "id": "112",
    "slug": "lf-911-junior-slide-112",
    "name": "LF 911 - Junior Slide",
    "price": "\u20b99,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 911 - Junior Slide from the official Play Solution Indoor Catalogue.",
    "description": "The LF 911 - Junior Slide is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 911 - Junior Slide from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 52). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L110xW50xH70 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_52_full.png",
    "imageUrl": "/images/products/page_52_full.png",
    "thumbnails": [
      "/images/products/page_52_full.png",
      "/images/products/page_52_full.png"
    ]
  },
  {
    "id": "113",
    "slug": "lf-915-play-equipment-lf-915-113",
    "name": "LF 915 - Play Equipment LF 915",
    "price": "\u20b912,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 915 - Play Equipment LF 915 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 915 - Play Equipment LF 915 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 915 - Play Equipment LF 915 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 53). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_53_full.png",
    "imageUrl": "/images/products/page_53_full.png",
    "thumbnails": [
      "/images/products/page_53_full.png",
      "/images/products/page_53_full.png"
    ]
  },
  {
    "id": "114",
    "slug": "lf-917-play-equipment-lf-917-114",
    "name": "LF 917 - Play Equipment LF 917",
    "price": "\u20b92,790",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 917 - Play Equipment LF 917 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 917 - Play Equipment LF 917 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 917 - Play Equipment LF 917 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 53). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_53_full.png",
    "imageUrl": "/images/products/page_53_full.png",
    "thumbnails": [
      "/images/products/page_53_full.png",
      "/images/products/page_53_full.png"
    ]
  },
  {
    "id": "115",
    "slug": "lf-916-play-equipment-lf-916-115",
    "name": "LF 916 - Play Equipment LF 916",
    "price": "\u20b94,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 916 - Play Equipment LF 916 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 916 - Play Equipment LF 916 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 916 - Play Equipment LF 916 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 53). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_53_full.png",
    "imageUrl": "/images/products/page_53_full.png",
    "thumbnails": [
      "/images/products/page_53_full.png",
      "/images/products/page_53_full.png"
    ]
  },
  {
    "id": "116",
    "slug": "lf-924-play-equipment-lf-924-116",
    "name": "LF 924 - Play Equipment LF 924",
    "price": "\u20b96,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 924 - Play Equipment LF 924 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 924 - Play Equipment LF 924 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 924 - Play Equipment LF 924 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 54). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_54_full.png",
    "imageUrl": "/images/products/page_54_full.png",
    "thumbnails": [
      "/images/products/page_54_full.png",
      "/images/products/page_54_full.png"
    ]
  },
  {
    "id": "117",
    "slug": "lf-922-play-equipment-lf-922-117",
    "name": "LF 922 - Play Equipment LF 922",
    "price": "\u20b98,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 922 - Play Equipment LF 922 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 922 - Play Equipment LF 922 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 922 - Play Equipment LF 922 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 54). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_54_full.png",
    "imageUrl": "/images/products/page_54_full.png",
    "thumbnails": [
      "/images/products/page_54_full.png",
      "/images/products/page_54_full.png"
    ]
  },
  {
    "id": "118",
    "slug": "lf-921-size-l78xw94xh113-cm-118",
    "name": "LF 921 - Size L78xW94xH113 CM",
    "price": "\u20b99,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 921 - Size L78xW94xH113 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 921 - Size L78xW94xH113 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 921 - Size L78xW94xH113 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 54). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L78xW94xH113 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_54_full.png",
    "imageUrl": "/images/products/page_54_full.png",
    "thumbnails": [
      "/images/products/page_54_full.png",
      "/images/products/page_54_full.png"
    ]
  },
  {
    "id": "119",
    "slug": "lf-919-size-l78xw94xh113-cm-119",
    "name": "LF 919 - Size L78xW94xH113 CM",
    "price": "\u20b912,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 919 - Size L78xW94xH113 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 919 - Size L78xW94xH113 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 919 - Size L78xW94xH113 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 54). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L78xW94xH113 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_54_full.png",
    "imageUrl": "/images/products/page_54_full.png",
    "thumbnails": [
      "/images/products/page_54_full.png",
      "/images/products/page_54_full.png"
    ]
  },
  {
    "id": "120",
    "slug": "lf-920-dolphin-slide-with-swing-120",
    "name": "LF 920 - Dolphin Slide with Swing",
    "price": "\u20b92,790",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 920 - Dolphin Slide with Swing from the official Play Solution Indoor Catalogue.",
    "description": "The LF 920 - Dolphin Slide with Swing is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 920 - Dolphin Slide with Swing from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 54). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_54_full.png",
    "imageUrl": "/images/products/page_54_full.png",
    "thumbnails": [
      "/images/products/page_54_full.png",
      "/images/products/page_54_full.png"
    ]
  },
  {
    "id": "121",
    "slug": "lf-923-dolphin-swing-121",
    "name": "LF 923 - Dolphin Swing",
    "price": "\u20b94,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 923 - Dolphin Swing from the official Play Solution Indoor Catalogue.",
    "description": "The LF 923 - Dolphin Swing is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 923 - Dolphin Swing from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 54). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_54_full.png",
    "imageUrl": "/images/products/page_54_full.png",
    "thumbnails": [
      "/images/products/page_54_full.png",
      "/images/products/page_54_full.png"
    ]
  },
  {
    "id": "122",
    "slug": "lf-990-size-l162xw73xh96-cm-122",
    "name": "LF 990 - Size L162xW73xH96 CM",
    "price": "\u20b96,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 990 - Size L162xW73xH96 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 990 - Size L162xW73xH96 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 990 - Size L162xW73xH96 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 55). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L162xW73xH96 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_55_full.png",
    "imageUrl": "/images/products/page_55_full.png",
    "thumbnails": [
      "/images/products/page_55_full.png",
      "/images/products/page_55_full.png"
    ]
  },
  {
    "id": "123",
    "slug": "lf-972-size-l160xw85xh110-cm-123",
    "name": "LF 972 - Size L160xW85xH110 CM",
    "price": "\u20b98,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 972 - Size L160xW85xH110 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 972 - Size L160xW85xH110 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 972 - Size L160xW85xH110 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 55). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L160xW85xH110 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_55_full.png",
    "imageUrl": "/images/products/page_55_full.png",
    "thumbnails": [
      "/images/products/page_55_full.png",
      "/images/products/page_55_full.png"
    ]
  },
  {
    "id": "124",
    "slug": "lf-971-size-l168xw86xh114-cm-124",
    "name": "LF 971 - Size L168xW86xH114 CM",
    "price": "\u20b99,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 971 - Size L168xW86xH114 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 971 - Size L168xW86xH114 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 971 - Size L168xW86xH114 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 55). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L168xW86xH114 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_55_full.png",
    "imageUrl": "/images/products/page_55_full.png",
    "thumbnails": [
      "/images/products/page_55_full.png",
      "/images/products/page_55_full.png"
    ]
  },
  {
    "id": "125",
    "slug": "lf-970-size-l168xw86xh108-cm-125",
    "name": "LF 970 - Size L168xW86xH108 CM",
    "price": "\u20b912,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 970 - Size L168xW86xH108 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 970 - Size L168xW86xH108 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 970 - Size L168xW86xH108 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 55). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L168xW86xH108 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_55_full.png",
    "imageUrl": "/images/products/page_55_full.png",
    "thumbnails": [
      "/images/products/page_55_full.png",
      "/images/products/page_55_full.png"
    ]
  },
  {
    "id": "126",
    "slug": "lf-976-play-equipment-lf-976-126",
    "name": "LF 976 - Play Equipment LF 976",
    "price": "\u20b92,790",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 976 - Play Equipment LF 976 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 976 - Play Equipment LF 976 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 976 - Play Equipment LF 976 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 56). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_56_full.png",
    "imageUrl": "/images/products/page_56_full.png",
    "thumbnails": [
      "/images/products/page_56_full.png",
      "/images/products/page_56_full.png"
    ]
  },
  {
    "id": "127",
    "slug": "lf-973-size-l160xw170xh114-cm-127",
    "name": "LF 973 - Size L160XW170xH114 CM",
    "price": "\u20b94,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 973 - Size L160XW170xH114 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 973 - Size L160XW170xH114 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 973 - Size L160XW170xH114 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 56). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L160XW170xH114 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_56_full.png",
    "imageUrl": "/images/products/page_56_full.png",
    "thumbnails": [
      "/images/products/page_56_full.png",
      "/images/products/page_56_full.png"
    ]
  },
  {
    "id": "128",
    "slug": "lf-975-multicolour-slide-with-swing-128",
    "name": "LF 975 - Multicolour Slide with Swing",
    "price": "\u20b96,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 975 - Multicolour Slide with Swing from the official Play Solution Indoor Catalogue.",
    "description": "The LF 975 - Multicolour Slide with Swing is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 975 - Multicolour Slide with Swing from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 56). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_56_full.png",
    "imageUrl": "/images/products/page_56_full.png",
    "thumbnails": [
      "/images/products/page_56_full.png",
      "/images/products/page_56_full.png"
    ]
  },
  {
    "id": "129",
    "slug": "lf-978-multicolour-swing-129",
    "name": "LF 978 - Multicolour Swing",
    "price": "\u20b98,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 978 - Multicolour Swing from the official Play Solution Indoor Catalogue.",
    "description": "The LF 978 - Multicolour Swing is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 978 - Multicolour Swing from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 56). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_56_full.png",
    "imageUrl": "/images/products/page_56_full.png",
    "thumbnails": [
      "/images/products/page_56_full.png",
      "/images/products/page_56_full.png"
    ]
  },
  {
    "id": "130",
    "slug": "lf-977-play-equipment-lf-977-130",
    "name": "LF 977 - Play Equipment LF 977",
    "price": "\u20b99,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 977 - Play Equipment LF 977 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 977 - Play Equipment LF 977 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 977 - Play Equipment LF 977 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 56). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_56_full.png",
    "imageUrl": "/images/products/page_56_full.png",
    "thumbnails": [
      "/images/products/page_56_full.png",
      "/images/products/page_56_full.png"
    ]
  },
  {
    "id": "131",
    "slug": "lf-974-size-l160xw170xh114-cm-131",
    "name": "LF 974 - Size L160XW170xH114 CM",
    "price": "\u20b912,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 974 - Size L160XW170xH114 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 974 - Size L160XW170xH114 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 974 - Size L160XW170xH114 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 56). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L160XW170xH114 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_56_full.png",
    "imageUrl": "/images/products/page_56_full.png",
    "thumbnails": [
      "/images/products/page_56_full.png",
      "/images/products/page_56_full.png"
    ]
  },
  {
    "id": "132",
    "slug": "lf-934-a-size-l91xw43xh81-cm-132",
    "name": "LF 934-A - Size L91xW43xH81 CM",
    "price": "\u20b92,790",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 934-A - Size L91xW43xH81 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 934-A - Size L91xW43xH81 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 934-A - Size L91xW43xH81 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 57). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L91xW43xH81 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_57_full.png",
    "imageUrl": "/images/products/page_57_full.png",
    "thumbnails": [
      "/images/products/page_57_full.png",
      "/images/products/page_57_full.png"
    ]
  },
  {
    "id": "133",
    "slug": "lf-9053-2-toy-shelf-133",
    "name": "LF 9053-2 - Toy Shelf",
    "price": "\u20b94,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9053-2 - Toy Shelf from the official Play Solution Indoor Catalogue.",
    "description": "The LF 9053-2 - Toy Shelf is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 9053-2 - Toy Shelf from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 57). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L91xW43xH81 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_57_full.png",
    "imageUrl": "/images/products/page_57_full.png",
    "thumbnails": [
      "/images/products/page_57_full.png",
      "/images/products/page_57_full.png"
    ]
  },
  {
    "id": "134",
    "slug": "lf-9130-5-play-equipment-lf-9130-5-134",
    "name": "LF 9130-5 - Play Equipment LF 9130-5",
    "price": "\u20b96,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9130-5 - Play Equipment LF 9130-5 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 9130-5 - Play Equipment LF 9130-5 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 9130-5 - Play Equipment LF 9130-5 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 57). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_57_full.png",
    "imageUrl": "/images/products/page_57_full.png",
    "thumbnails": [
      "/images/products/page_57_full.png",
      "/images/products/page_57_full.png"
    ]
  },
  {
    "id": "135",
    "slug": "lf-998-size-l52xw66xh87-cm-135",
    "name": "LF 998 - Size L52xW66xH87 CM",
    "price": "\u20b98,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 998 - Size L52xW66xH87 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 998 - Size L52xW66xH87 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 998 - Size L52xW66xH87 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 57). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L52xW66xH87 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_57_full.png",
    "imageUrl": "/images/products/page_57_full.png",
    "thumbnails": [
      "/images/products/page_57_full.png",
      "/images/products/page_57_full.png"
    ]
  },
  {
    "id": "136",
    "slug": "lf-999-size-l33xw33xh73-cm-136",
    "name": "LF 999 - Size L33xW33xH73 CM",
    "price": "\u20b99,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 999 - Size L33xW33xH73 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 999 - Size L33xW33xH73 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 999 - Size L33xW33xH73 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 57). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L33xW33xH73 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_57_full.png",
    "imageUrl": "/images/products/page_57_full.png",
    "thumbnails": [
      "/images/products/page_57_full.png",
      "/images/products/page_57_full.png"
    ]
  },
  {
    "id": "137",
    "slug": "lf-999b-size-l30xw30xh101-cm-137",
    "name": "LF 999B - Size L30xW30xH101 CM",
    "price": "\u20b912,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 999B - Size L30xW30xH101 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 999B - Size L30xW30xH101 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 999B - Size L30xW30xH101 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 57). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L30xW30xH101 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_57_full.png",
    "imageUrl": "/images/products/page_57_full.png",
    "thumbnails": [
      "/images/products/page_57_full.png",
      "/images/products/page_57_full.png"
    ]
  },
  {
    "id": "138",
    "slug": "lf-932a-multicolor-tunnel-138",
    "name": "LF 932A - Multicolor Tunnel",
    "price": "\u20b92,790",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 932A - Multicolor Tunnel from the official Play Solution Indoor Catalogue.",
    "description": "The LF 932A - Multicolor Tunnel is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 932A - Multicolor Tunnel from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 58). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L215xW100xH103 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_58_full.png",
    "imageUrl": "/images/products/page_58_full.png",
    "thumbnails": [
      "/images/products/page_58_full.png",
      "/images/products/page_58_full.png"
    ]
  },
  {
    "id": "139",
    "slug": "lf-932b-caterpillar-tunnel-139",
    "name": "LF 932B - Caterpillar Tunnel",
    "price": "\u20b94,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 932B - Caterpillar Tunnel from the official Play Solution Indoor Catalogue.",
    "description": "The LF 932B - Caterpillar Tunnel is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 932B - Caterpillar Tunnel from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 58). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L190xW110xH122 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_58_full.png",
    "imageUrl": "/images/products/page_58_full.png",
    "thumbnails": [
      "/images/products/page_58_full.png",
      "/images/products/page_58_full.png"
    ]
  },
  {
    "id": "140",
    "slug": "lf-450-roller-coaster-rideon-140",
    "name": "LF 450 - Roller Coaster Rideon",
    "price": "\u20b96,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 450 - Roller Coaster Rideon from the official Play Solution Indoor Catalogue.",
    "description": "The LF 450 - Roller Coaster Rideon is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 450 - Roller Coaster Rideon from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 58). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_58_full.png",
    "imageUrl": "/images/products/page_58_full.png",
    "thumbnails": [
      "/images/products/page_58_full.png",
      "/images/products/page_58_full.png"
    ]
  },
  {
    "id": "141",
    "slug": "lf-9126-play-equipment-lf-9126-141",
    "name": "LF 9126 - Play Equipment LF 9126",
    "price": "\u20b98,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9126 - Play Equipment LF 9126 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 9126 - Play Equipment LF 9126 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 9126 - Play Equipment LF 9126 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 58). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_58_full.png",
    "imageUrl": "/images/products/page_58_full.png",
    "thumbnails": [
      "/images/products/page_58_full.png",
      "/images/products/page_58_full.png"
    ]
  },
  {
    "id": "142",
    "slug": "lf-9052-a-quarter-round-142",
    "name": "LF 9052-A - Quarter Round",
    "price": "\u20b99,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9052-A - Quarter Round from the official Play Solution Indoor Catalogue.",
    "description": "The LF 9052-A - Quarter Round is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 9052-A - Quarter Round from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 58). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : 133x42 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_58_full.png",
    "imageUrl": "/images/products/page_58_full.png",
    "thumbnails": [
      "/images/products/page_58_full.png",
      "/images/products/page_58_full.png"
    ]
  },
  {
    "id": "143",
    "slug": "lf-925d-play-equipment-lf-925d-143",
    "name": "LF 925D - Play Equipment LF 925D",
    "price": "\u20b912,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 925D - Play Equipment LF 925D from the official Play Solution Indoor Catalogue.",
    "description": "The LF 925D - Play Equipment LF 925D is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 925D - Play Equipment LF 925D from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "144",
    "slug": "lf-629-play-equipment-lf-629-144",
    "name": "LF 629 - Play Equipment LF 629",
    "price": "\u20b92,790",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 629 - Play Equipment LF 629 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 629 - Play Equipment LF 629 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 629 - Play Equipment LF 629 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "145",
    "slug": "lf-925b-elephant-rocker-145",
    "name": "LF 925B - Elephant Rocker",
    "price": "\u20b94,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 925B - Elephant Rocker from the official Play Solution Indoor Catalogue.",
    "description": "The LF 925B - Elephant Rocker is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 925B - Elephant Rocker from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "146",
    "slug": "lf-925c-fish-rocker-146",
    "name": "LF 925C - Fish Rocker",
    "price": "\u20b96,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 925C - Fish Rocker from the official Play Solution Indoor Catalogue.",
    "description": "The LF 925C - Fish Rocker is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 925C - Fish Rocker from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "147",
    "slug": "lf-925a-play-equipment-lf-925a-147",
    "name": "LF 925A - Play Equipment LF 925A",
    "price": "\u20b98,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 925A - Play Equipment LF 925A from the official Play Solution Indoor Catalogue.",
    "description": "The LF 925A - Play Equipment LF 925A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 925A - Play Equipment LF 925A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "148",
    "slug": "lf-628-play-equipment-lf-628-148",
    "name": "LF 628 - Play Equipment LF 628",
    "price": "\u20b99,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 628 - Play Equipment LF 628 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 628 - Play Equipment LF 628 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 628 - Play Equipment LF 628 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "149",
    "slug": "lf-627-rideon-rocker-149",
    "name": "LF 627 - Rideon Rocker",
    "price": "\u20b912,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 627 - Rideon Rocker from the official Play Solution Indoor Catalogue.",
    "description": "The LF 627 - Rideon Rocker is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 627 - Rideon Rocker from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "150",
    "slug": "lf-627a-rocker-with-handle-150",
    "name": "LF 627A - Rocker with Handle",
    "price": "\u20b92,790",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 627A - Rocker with Handle from the official Play Solution Indoor Catalogue.",
    "description": "The LF 627A - Rocker with Handle is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 627A - Rocker with Handle from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "151",
    "slug": "lf-624-play-equipment-lf-624-151",
    "name": "LF 624 - Play Equipment LF 624",
    "price": "\u20b94,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 624 - Play Equipment LF 624 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 624 - Play Equipment LF 624 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 624 - Play Equipment LF 624 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 59). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_59_full.png",
    "imageUrl": "/images/products/page_59_full.png",
    "thumbnails": [
      "/images/products/page_59_full.png",
      "/images/products/page_59_full.png"
    ]
  },
  {
    "id": "152",
    "slug": "lf-108b-size-l110xw39xh45-cm-152",
    "name": "LF 108B - Size L110xW39xH45 CM",
    "price": "\u20b96,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 108B - Size L110xW39xH45 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 108B - Size L110xW39xH45 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 108B - Size L110xW39xH45 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 60). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L110xW39xH45 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_60_full.png",
    "imageUrl": "/images/products/page_60_full.png",
    "thumbnails": [
      "/images/products/page_60_full.png",
      "/images/products/page_60_full.png"
    ]
  },
  {
    "id": "153",
    "slug": "lf-9122-3-size-l91xw27xh89-cm-153",
    "name": "LF 9122-3 - Size L91xW27xH89 CM",
    "price": "\u20b98,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9122-3 - Size L91xW27xH89 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 9122-3 - Size L91xW27xH89 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 9122-3 - Size L91xW27xH89 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 60). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L91xW27xH89 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_60_full.png",
    "imageUrl": "/images/products/page_60_full.png",
    "thumbnails": [
      "/images/products/page_60_full.png",
      "/images/products/page_60_full.png"
    ]
  },
  {
    "id": "154",
    "slug": "lf-417-play-equipment-lf-417-154",
    "name": "LF 417 - Play Equipment LF 417",
    "price": "\u20b99,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 417 - Play Equipment LF 417 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 417 - Play Equipment LF 417 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 417 - Play Equipment LF 417 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 60). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_60_full.png",
    "imageUrl": "/images/products/page_60_full.png",
    "thumbnails": [
      "/images/products/page_60_full.png",
      "/images/products/page_60_full.png"
    ]
  },
  {
    "id": "155",
    "slug": "lf-416-play-equipment-lf-416-155",
    "name": "LF 416 - Play Equipment LF 416",
    "price": "\u20b912,990",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 416 - Play Equipment LF 416 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 416 - Play Equipment LF 416 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 416 - Play Equipment LF 416 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 60). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_60_full.png",
    "imageUrl": "/images/products/page_60_full.png",
    "thumbnails": [
      "/images/products/page_60_full.png",
      "/images/products/page_60_full.png"
    ]
  },
  {
    "id": "156",
    "slug": "lf-419-size-l150xw32xh60-cm-156",
    "name": "LF 419 - Size L150xW32xH60 CM",
    "price": "\u20b92,790",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 419 - Size L150xW32xH60 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 419 - Size L150xW32xH60 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 419 - Size L150xW32xH60 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 60). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L150xW32xH60 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_60_full.png",
    "imageUrl": "/images/products/page_60_full.png",
    "thumbnails": [
      "/images/products/page_60_full.png",
      "/images/products/page_60_full.png"
    ]
  },
  {
    "id": "157",
    "slug": "lf-418-size-l76xw48xh89-cm-157",
    "name": "LF 418 - Size L76xW48xH89 CM",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 418 - Size L76xW48xH89 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 418 - Size L76xW48xH89 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 418 - Size L76xW48xH89 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 61). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L76xW48xH89 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_61_full.png",
    "imageUrl": "/images/products/page_61_full.png",
    "thumbnails": [
      "/images/products/page_61_full.png",
      "/images/products/page_61_full.png"
    ]
  },
  {
    "id": "158",
    "slug": "lf-928b-motorcycle-158",
    "name": "LF 928B - Motorcycle",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 928B - Motorcycle from the official Play Solution Indoor Catalogue.",
    "description": "The LF 928B - Motorcycle is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 928B - Motorcycle from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 61). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_61_full.png",
    "imageUrl": "/images/products/page_61_full.png",
    "thumbnails": [
      "/images/products/page_61_full.png",
      "/images/products/page_61_full.png"
    ]
  },
  {
    "id": "159",
    "slug": "lf-926a-swing-car-159",
    "name": "LF 926A - Swing Car",
    "price": "\u20b92,690.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 926A - Swing Car from the official Play Solution Indoor Catalogue.",
    "description": "The LF 926A - Swing Car is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 926A - Swing Car from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 61). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_61_full.png",
    "imageUrl": "/images/products/page_61_full.png",
    "thumbnails": [
      "/images/products/page_61_full.png",
      "/images/products/page_61_full.png"
    ]
  },
  {
    "id": "160",
    "slug": "lf-830-size-l90xw50xh95-cm-160",
    "name": "LF 830 - Size L90xW50xH95 CM",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 830 - Size L90xW50xH95 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 830 - Size L90xW50xH95 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 830 - Size L90xW50xH95 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 61). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L90xW50xH95 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_61_full.png",
    "imageUrl": "/images/products/page_61_full.png",
    "thumbnails": [
      "/images/products/page_61_full.png",
      "/images/products/page_61_full.png"
    ]
  },
  {
    "id": "161",
    "slug": "lf-440-size-l86xw50xh50-cm-161",
    "name": "LF 440 - Size L86xW50xH50 CM",
    "price": "\u20b91,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 440 - Size L86xW50xH50 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 440 - Size L86xW50xH50 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 440 - Size L86xW50xH50 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 61). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L86xW50xH50 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_61_full.png",
    "imageUrl": "/images/products/page_61_full.png",
    "thumbnails": [
      "/images/products/page_61_full.png",
      "/images/products/page_61_full.png"
    ]
  },
  {
    "id": "162",
    "slug": "lf-929a-play-equipment-lf-929a-162",
    "name": "LF 929A - Play Equipment LF 929A",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 929A - Play Equipment LF 929A from the official Play Solution Indoor Catalogue.",
    "description": "The LF 929A - Play Equipment LF 929A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 929A - Play Equipment LF 929A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 62). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_62_full.png",
    "imageUrl": "/images/products/page_62_full.png",
    "thumbnails": [
      "/images/products/page_62_full.png",
      "/images/products/page_62_full.png"
    ]
  },
  {
    "id": "163",
    "slug": "lf-927c-play-equipment-lf-927c-163",
    "name": "LF 927C - Play Equipment LF 927C",
    "price": "\u20b93,790",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927C - Play Equipment LF 927C from the official Play Solution Indoor Catalogue.",
    "description": "The LF 927C - Play Equipment LF 927C is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 927C - Play Equipment LF 927C from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 62). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_62_full.png",
    "imageUrl": "/images/products/page_62_full.png",
    "thumbnails": [
      "/images/products/page_62_full.png",
      "/images/products/page_62_full.png"
    ]
  },
  {
    "id": "164",
    "slug": "lf-927e-smiley-wagon-rideon-164",
    "name": "LF 927E - Smiley wagon Rideon",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927E - Smiley wagon Rideon from the official Play Solution Indoor Catalogue.",
    "description": "The LF 927E - Smiley wagon Rideon is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 927E - Smiley wagon Rideon from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 62). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_62_full.png",
    "imageUrl": "/images/products/page_62_full.png",
    "thumbnails": [
      "/images/products/page_62_full.png",
      "/images/products/page_62_full.png"
    ]
  },
  {
    "id": "165",
    "slug": "lf-927f-horse-rideon-165",
    "name": "LF 927F - Horse Rideon",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927F - Horse Rideon from the official Play Solution Indoor Catalogue.",
    "description": "The LF 927F - Horse Rideon is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 927F - Horse Rideon from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 62). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_62_full.png",
    "imageUrl": "/images/products/page_62_full.png",
    "thumbnails": [
      "/images/products/page_62_full.png",
      "/images/products/page_62_full.png"
    ]
  },
  {
    "id": "166",
    "slug": "lf-927-d-play-equipment-lf-927-d-166",
    "name": "LF 927-D - Play Equipment LF 927-D",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927-D - Play Equipment LF 927-D from the official Play Solution Indoor Catalogue.",
    "description": "The LF 927-D - Play Equipment LF 927-D is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 927-D - Play Equipment LF 927-D from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 62). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_62_full.png",
    "imageUrl": "/images/products/page_62_full.png",
    "thumbnails": [
      "/images/products/page_62_full.png",
      "/images/products/page_62_full.png"
    ]
  },
  {
    "id": "167",
    "slug": "lf-929b-tricycle-167",
    "name": "LF 929B - Tricycle",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 929B - Tricycle from the official Play Solution Indoor Catalogue.",
    "description": "The LF 929B - Tricycle is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 929B - Tricycle from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 62). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_62_full.png",
    "imageUrl": "/images/products/page_62_full.png",
    "thumbnails": [
      "/images/products/page_62_full.png",
      "/images/products/page_62_full.png"
    ]
  },
  {
    "id": "168",
    "slug": "lf-929c-tricycle-168",
    "name": "LF 929C - Tricycle",
    "price": "\u20b91,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 929C - Tricycle from the official Play Solution Indoor Catalogue.",
    "description": "The LF 929C - Tricycle is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 929C - Tricycle from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 62). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_62_full.png",
    "imageUrl": "/images/products/page_62_full.png",
    "thumbnails": [
      "/images/products/page_62_full.png",
      "/images/products/page_62_full.png"
    ]
  },
  {
    "id": "169",
    "slug": "lf-927b-size-l55xw32xh45-cm-169",
    "name": "LF 927B - Size L55xW32xH45 CM",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927B - Size L55xW32xH45 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 927B - Size L55xW32xH45 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 927B - Size L55xW32xH45 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 62). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L55xW32xH45 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_62_full.png",
    "imageUrl": "/images/products/page_62_full.png",
    "thumbnails": [
      "/images/products/page_62_full.png",
      "/images/products/page_62_full.png"
    ]
  },
  {
    "id": "170",
    "slug": "lft-200p-plastic-balls-170",
    "name": "LFT 200P - Plastic Balls",
    "price": "\u20b93,790",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 200P - Plastic Balls from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 200P - Plastic Balls is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 200P - Plastic Balls from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 63). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_63_full.png",
    "imageUrl": "/images/products/page_63_full.png",
    "thumbnails": [
      "/images/products/page_63_full.png",
      "/images/products/page_63_full.png"
    ]
  },
  {
    "id": "171",
    "slug": "lft-100-plastic-balls-171",
    "name": "LFT 100 - Plastic Balls",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 100 - Plastic Balls from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 100 - Plastic Balls is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 100 - Plastic Balls from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 63). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_63_full.png",
    "imageUrl": "/images/products/page_63_full.png",
    "thumbnails": [
      "/images/products/page_63_full.png",
      "/images/products/page_63_full.png"
    ]
  },
  {
    "id": "172",
    "slug": "lft-444-elephant-rideon-172",
    "name": "LFT 444 - Elephant Rideon",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 444 - Elephant Rideon from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 444 - Elephant Rideon is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 444 - Elephant Rideon from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 63). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_63_full.png",
    "imageUrl": "/images/products/page_63_full.png",
    "thumbnails": [
      "/images/products/page_63_full.png",
      "/images/products/page_63_full.png"
    ]
  },
  {
    "id": "173",
    "slug": "lft-344-horse-rideon-173",
    "name": "LFT 344 - Horse Rideon",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 344 - Horse Rideon from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 344 - Horse Rideon is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 344 - Horse Rideon from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 63). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_63_full.png",
    "imageUrl": "/images/products/page_63_full.png",
    "thumbnails": [
      "/images/products/page_63_full.png",
      "/images/products/page_63_full.png"
    ]
  },
  {
    "id": "174",
    "slug": "lft-333-horse-rideon-174",
    "name": "LFT 333 - Horse Rideon",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 333 - Horse Rideon from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 333 - Horse Rideon is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 333 - Horse Rideon from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 63). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_63_full.png",
    "imageUrl": "/images/products/page_63_full.png",
    "thumbnails": [
      "/images/products/page_63_full.png",
      "/images/products/page_63_full.png"
    ]
  },
  {
    "id": "175",
    "slug": "lf-933-size-l67xw38xh53-cm-175",
    "name": "LF 933 - Size L67xW38xH53 CM",
    "price": "\u20b91,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 933 - Size L67xW38xH53 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 933 - Size L67xW38xH53 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 933 - Size L67xW38xH53 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 63). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L67xW38xH53 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_63_full.png",
    "imageUrl": "/images/products/page_63_full.png",
    "thumbnails": [
      "/images/products/page_63_full.png",
      "/images/products/page_63_full.png"
    ]
  },
  {
    "id": "176",
    "slug": "lf-961a-without-ball-5-pcs-176",
    "name": "LF 961A - (Without Ball) 5 pcs",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 961A - (Without Ball) 5 pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LF 961A - (Without Ball) 5 pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 961A - (Without Ball) 5 pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 64). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : 128x128x78 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_64_full.png",
    "imageUrl": "/images/products/page_64_full.png",
    "thumbnails": [
      "/images/products/page_64_full.png",
      "/images/products/page_64_full.png"
    ]
  },
  {
    "id": "177",
    "slug": "lf-101-5-without-ball-6-pcs-set-177",
    "name": "LF 101-5 - (Without Ball) 6 pcs set",
    "price": "\u20b93,790",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 101-5 - (Without Ball) 6 pcs set from the official Play Solution Indoor Catalogue.",
    "description": "The LF 101-5 - (Without Ball) 6 pcs set is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 101-5 - (Without Ball) 6 pcs set from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 64). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_64_full.png",
    "imageUrl": "/images/products/page_64_full.png",
    "thumbnails": [
      "/images/products/page_64_full.png",
      "/images/products/page_64_full.png"
    ]
  },
  {
    "id": "178",
    "slug": "lf-962-without-ball-6-pcs-178",
    "name": "LF 962 - (Without Ball) 6 pcs",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 962 - (Without Ball) 6 pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LF 962 - (Without Ball) 6 pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 962 - (Without Ball) 6 pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 64). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_64_full.png",
    "imageUrl": "/images/products/page_64_full.png",
    "thumbnails": [
      "/images/products/page_64_full.png",
      "/images/products/page_64_full.png"
    ]
  },
  {
    "id": "179",
    "slug": "lf-964-ball-pool-2-7m2-179",
    "name": "LF 964 - Ball Pool 2 7m2",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 964 - Ball Pool 2 7m2 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 964 - Ball Pool 2 7m2 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 964 - Ball Pool 2 7m2 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 64). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_64_full.png",
    "imageUrl": "/images/products/page_64_full.png",
    "thumbnails": [
      "/images/products/page_64_full.png",
      "/images/products/page_64_full.png"
    ]
  },
  {
    "id": "180",
    "slug": "lf-963-ball-pool-4-64m2-180",
    "name": "LF 963 - Ball Pool 4 64m2",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 963 - Ball Pool 4 64m2 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 963 - Ball Pool 4 64m2 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 963 - Ball Pool 4 64m2 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 64). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_64_full.png",
    "imageUrl": "/images/products/page_64_full.png",
    "thumbnails": [
      "/images/products/page_64_full.png",
      "/images/products/page_64_full.png"
    ]
  },
  {
    "id": "181",
    "slug": "lf-135-size-105x75-cm-set-of-4-pcs-181",
    "name": "LF 135 - Size 105x75 CM (set of 4 pcs)",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 135 - Size 105x75 CM (set of 4 pcs) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 135 - Size 105x75 CM (set of 4 pcs) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 135 - Size 105x75 CM (set of 4 pcs) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 65). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : 105x75 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_65_full.png",
    "imageUrl": "/images/products/page_65_full.png",
    "thumbnails": [
      "/images/products/page_65_full.png",
      "/images/products/page_65_full.png"
    ]
  },
  {
    "id": "182",
    "slug": "lf-135b-size-105x75-cm-set-of-4-pcs-182",
    "name": "LF 135B - Size 105x75 CM (set of 4 pcs)",
    "price": "\u20b91,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 135B - Size 105x75 CM (set of 4 pcs) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 135B - Size 105x75 CM (set of 4 pcs) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 135B - Size 105x75 CM (set of 4 pcs) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 65). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : 105x75 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_65_full.png",
    "imageUrl": "/images/products/page_65_full.png",
    "thumbnails": [
      "/images/products/page_65_full.png",
      "/images/products/page_65_full.png"
    ]
  },
  {
    "id": "183",
    "slug": "lf-135w-size-105x75-cm-set-of-4-pcs-183",
    "name": "LF 135W - Size 105x75 CM (set of 4 pcs)",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 135W - Size 105x75 CM (set of 4 pcs) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 135W - Size 105x75 CM (set of 4 pcs) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 135W - Size 105x75 CM (set of 4 pcs) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 65). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : 105x75 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_65_full.png",
    "imageUrl": "/images/products/page_65_full.png",
    "thumbnails": [
      "/images/products/page_65_full.png",
      "/images/products/page_65_full.png"
    ]
  },
  {
    "id": "184",
    "slug": "lf-377-size-l81xw94xh30-cm-184",
    "name": "LF 377 - Size L81xW94xH30 CM",
    "price": "\u20b93,790",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 377 - Size L81xW94xH30 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 377 - Size L81xW94xH30 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 377 - Size L81xW94xH30 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 66). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L81xW94xH30 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_66_full.png",
    "imageUrl": "/images/products/page_66_full.png",
    "thumbnails": [
      "/images/products/page_66_full.png",
      "/images/products/page_66_full.png"
    ]
  },
  {
    "id": "185",
    "slug": "lf-378-size-l96xw96xh30-cm-185",
    "name": "LF 378 - Size L96xW96xH30 CM",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 378 - Size L96xW96xH30 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 378 - Size L96xW96xH30 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 378 - Size L96xW96xH30 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 66). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L96xW96xH30 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_66_full.png",
    "imageUrl": "/images/products/page_66_full.png",
    "thumbnails": [
      "/images/products/page_66_full.png",
      "/images/products/page_66_full.png"
    ]
  },
  {
    "id": "186",
    "slug": "lf-380-size-l104xw110xh35-cm-186",
    "name": "LF 380 - Size L104xW110xH35 CM",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 380 - Size L104xW110xH35 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 380 - Size L104xW110xH35 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 380 - Size L104xW110xH35 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 66). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L104xW110xH35 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_66_full.png",
    "imageUrl": "/images/products/page_66_full.png",
    "thumbnails": [
      "/images/products/page_66_full.png",
      "/images/products/page_66_full.png"
    ]
  },
  {
    "id": "187",
    "slug": "lf-379-size-l101xw101xh30-cm-187",
    "name": "LF 379 - Size L101xW101xH30 CM",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 379 - Size L101xW101xH30 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 379 - Size L101xW101xH30 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 379 - Size L101xW101xH30 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 66). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L101xW101xH30 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_66_full.png",
    "imageUrl": "/images/products/page_66_full.png",
    "thumbnails": [
      "/images/products/page_66_full.png",
      "/images/products/page_66_full.png"
    ]
  },
  {
    "id": "188",
    "slug": "lf-376-size-l92xw70xh17-cm-188",
    "name": "LF 376 - Size L92xW70xH17 CM",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 376 - Size L92xW70xH17 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 376 - Size L92xW70xH17 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 376 - Size L92xW70xH17 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 66). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L92xW70xH17 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_66_full.png",
    "imageUrl": "/images/products/page_66_full.png",
    "thumbnails": [
      "/images/products/page_66_full.png",
      "/images/products/page_66_full.png"
    ]
  },
  {
    "id": "189",
    "slug": "lf-375-turtle-sandpit-189",
    "name": "LF 375 - Turtle Sandpit",
    "price": "\u20b91,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 375 - Turtle Sandpit from the official Play Solution Indoor Catalogue.",
    "description": "The LF 375 - Turtle Sandpit is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 375 - Turtle Sandpit from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 66). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L92xW70xH17 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_66_full.png",
    "imageUrl": "/images/products/page_66_full.png",
    "thumbnails": [
      "/images/products/page_66_full.png",
      "/images/products/page_66_full.png"
    ]
  },
  {
    "id": "190",
    "slug": "lf-930c-play-equipment-lf-930c-190",
    "name": "LF 930C - Play Equipment LF 930C",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 930C - Play Equipment LF 930C from the official Play Solution Indoor Catalogue.",
    "description": "The LF 930C - Play Equipment LF 930C is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 930C - Play Equipment LF 930C from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 67). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_67_full.png",
    "imageUrl": "/images/products/page_67_full.png",
    "thumbnails": [
      "/images/products/page_67_full.png",
      "/images/products/page_67_full.png"
    ]
  },
  {
    "id": "191",
    "slug": "lf-930d-play-equipment-lf-930d-191",
    "name": "LF 930D - Play Equipment LF 930D",
    "price": "\u20b92,490.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 930D - Play Equipment LF 930D from the official Play Solution Indoor Catalogue.",
    "description": "The LF 930D - Play Equipment LF 930D is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 930D - Play Equipment LF 930D from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 67). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_67_full.png",
    "imageUrl": "/images/products/page_67_full.png",
    "thumbnails": [
      "/images/products/page_67_full.png",
      "/images/products/page_67_full.png"
    ]
  },
  {
    "id": "192",
    "slug": "lf-9126-6-size-l90xw34xh40-cm-192",
    "name": "LF 9126-6 - Size L90xW34xH40 CM",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 9126-6 - Size L90xW34xH40 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 9126-6 - Size L90xW34xH40 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 9126-6 - Size L90xW34xH40 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 67). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L90xW34xH40 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_67_full.png",
    "imageUrl": "/images/products/page_67_full.png",
    "thumbnails": [
      "/images/products/page_67_full.png",
      "/images/products/page_67_full.png"
    ]
  },
  {
    "id": "193",
    "slug": "lf-142-play-equipment-lf-142-193",
    "name": "LF 142 - Play Equipment LF 142",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 142 - Play Equipment LF 142 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 142 - Play Equipment LF 142 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 142 - Play Equipment LF 142 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 67). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_67_full.png",
    "imageUrl": "/images/products/page_67_full.png",
    "thumbnails": [
      "/images/products/page_67_full.png",
      "/images/products/page_67_full.png"
    ]
  },
  {
    "id": "194",
    "slug": "lf-549-elephant-ring-toss-194",
    "name": "LF 549 - Elephant Ring Toss",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 549 - Elephant Ring Toss from the official Play Solution Indoor Catalogue.",
    "description": "The LF 549 - Elephant Ring Toss is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 549 - Elephant Ring Toss from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 67). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_67_full.png",
    "imageUrl": "/images/products/page_67_full.png",
    "thumbnails": [
      "/images/products/page_67_full.png",
      "/images/products/page_67_full.png"
    ]
  },
  {
    "id": "195",
    "slug": "lf-141-play-equipment-lf-141-195",
    "name": "LF 141 - Play Equipment LF 141",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 141 - Play Equipment LF 141 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 141 - Play Equipment LF 141 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 141 - Play Equipment LF 141 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 67). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_67_full.png",
    "imageUrl": "/images/products/page_67_full.png",
    "thumbnails": [
      "/images/products/page_67_full.png",
      "/images/products/page_67_full.png"
    ]
  },
  {
    "id": "196",
    "slug": "lf-9177-2-plastic-building-blocks-196",
    "name": "LF 9177-2 - Plastic Building Blocks",
    "price": "\u20b91,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 9177-2 - Plastic Building Blocks from the official Play Solution Indoor Catalogue.",
    "description": "The LF 9177-2 - Plastic Building Blocks is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 9177-2 - Plastic Building Blocks from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 68). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_68_full.png",
    "imageUrl": "/images/products/page_68_full.png",
    "thumbnails": [
      "/images/products/page_68_full.png",
      "/images/products/page_68_full.png"
    ]
  },
  {
    "id": "197",
    "slug": "lf-118-2-plastic-blocks-197",
    "name": "LF 118-2 - Plastic Blocks",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 118-2 - Plastic Blocks from the official Play Solution Indoor Catalogue.",
    "description": "The LF 118-2 - Plastic Blocks is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 118-2 - Plastic Blocks from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 68). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_68_full.png",
    "imageUrl": "/images/products/page_68_full.png",
    "thumbnails": [
      "/images/products/page_68_full.png",
      "/images/products/page_68_full.png"
    ]
  },
  {
    "id": "198",
    "slug": "lf-930-basketball-198",
    "name": "LF 930 - Basketball",
    "price": "\u20b93,790",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 930 - Basketball from the official Play Solution Indoor Catalogue.",
    "description": "The LF 930 - Basketball is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 930 - Basketball from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 69). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size: D20 x W10 x H70H cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_69_full.png",
    "imageUrl": "/images/products/page_69_full.png",
    "thumbnails": [
      "/images/products/page_69_full.png",
      "/images/products/page_69_full.png"
    ]
  },
  {
    "id": "199",
    "slug": "lf-930b-big-basketball-199",
    "name": "LF 930B - Big Basketball",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 930B - Big Basketball from the official Play Solution Indoor Catalogue.",
    "description": "The LF 930B - Big Basketball is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 930B - Big Basketball from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 69). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size: L70 \u00d7 W58 \u00d7 H159-215cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_69_full.png",
    "imageUrl": "/images/products/page_69_full.png",
    "thumbnails": [
      "/images/products/page_69_full.png",
      "/images/products/page_69_full.png"
    ]
  },
  {
    "id": "200",
    "slug": "lf-931-3-in-1-magnetic-easel-200",
    "name": "LF 931 - 3-in-1 Magnetic Easel",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 931 - 3-in-1 Magnetic Easel from the official Play Solution Indoor Catalogue.",
    "description": "The LF 931 - 3-in-1 Magnetic Easel is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 931 - 3-in-1 Magnetic Easel from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 69). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L55xW68xH107 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_69_full.png",
    "imageUrl": "/images/products/page_69_full.png",
    "thumbnails": [
      "/images/products/page_69_full.png",
      "/images/products/page_69_full.png"
    ]
  },
  {
    "id": "201",
    "slug": "lf-13-6-tray-201",
    "name": "LF 13-6 - Tray",
    "price": "\u20b9299.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 13-6 - Tray from the official Play Solution Indoor Catalogue.",
    "description": "The LF 13-6 - Tray is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 13-6 - Tray from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 69). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L26xW35xH11 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_69_full.png",
    "imageUrl": "/images/products/page_69_full.png",
    "thumbnails": [
      "/images/products/page_69_full.png",
      "/images/products/page_69_full.png"
    ]
  },
  {
    "id": "202",
    "slug": "lf-13-5-tray-202",
    "name": "LF 13-5 - Tray",
    "price": "\u20b9299.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 13-5 - Tray from the official Play Solution Indoor Catalogue.",
    "description": "The LF 13-5 - Tray is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 13-5 - Tray from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 69). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L26xW35xH11 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_69_full.png",
    "imageUrl": "/images/products/page_69_full.png",
    "thumbnails": [
      "/images/products/page_69_full.png",
      "/images/products/page_69_full.png"
    ]
  },
  {
    "id": "203",
    "slug": "lft-3992d-blocks-16-pcs-203",
    "name": "LFT 3992D - Blocks 16 Pcs",
    "price": "\u20b91,399.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 3992D - Blocks 16 Pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 3992D - Blocks 16 Pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 3992D - Blocks 16 Pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 69). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_69_full.png",
    "imageUrl": "/images/products/page_69_full.png",
    "thumbnails": [
      "/images/products/page_69_full.png",
      "/images/products/page_69_full.png"
    ]
  },
  {
    "id": "204",
    "slug": "lft-3994p-blocks-32-pcs-204",
    "name": "LFT 3994P - Blocks 32 Pcs",
    "price": "\u20b92,599.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 3994P - Blocks 32 Pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 3994P - Blocks 32 Pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 3994P - Blocks 32 Pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 69). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_69_full.png",
    "imageUrl": "/images/products/page_69_full.png",
    "thumbnails": [
      "/images/products/page_69_full.png",
      "/images/products/page_69_full.png"
    ]
  },
  {
    "id": "205",
    "slug": "lf-536-play-equipment-lf-536-205",
    "name": "LF 536 - Play Equipment LF 536",
    "price": "\u20b96,490.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 536 - Play Equipment LF 536 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 536 - Play Equipment LF 536 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 536 - Play Equipment LF 536 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 70). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_70_full.png",
    "imageUrl": "/images/products/page_70_full.png",
    "thumbnails": [
      "/images/products/page_70_full.png",
      "/images/products/page_70_full.png"
    ]
  },
  {
    "id": "206",
    "slug": "lf-545-d-36-206",
    "name": "LF 545 - D 36",
    "price": "\u20b96,490.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 545 - D 36 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 545 - D 36 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 545 - D 36 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 70). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_70_full.png",
    "imageUrl": "/images/products/page_70_full.png",
    "thumbnails": [
      "/images/products/page_70_full.png",
      "/images/products/page_70_full.png"
    ]
  },
  {
    "id": "207",
    "slug": "lf-55-d-55-207",
    "name": "LF 55 - D 55",
    "price": "\u20b94,990.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 55 - D 55 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 55 - D 55 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 55 - D 55 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 70). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_70_full.png",
    "imageUrl": "/images/products/page_70_full.png",
    "thumbnails": [
      "/images/products/page_70_full.png",
      "/images/products/page_70_full.png"
    ]
  },
  {
    "id": "208",
    "slug": "lf-72-lfo-tr-208",
    "name": "LF 72 - LFO-TR",
    "price": "\u20b920,990.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 72 - LFO-TR from the official Play Solution Indoor Catalogue.",
    "description": "The LF 72 - LFO-TR is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 72 - LFO-TR from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 70). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_70_full.png",
    "imageUrl": "/images/products/page_70_full.png",
    "thumbnails": [
      "/images/products/page_70_full.png",
      "/images/products/page_70_full.png"
    ]
  },
  {
    "id": "209",
    "slug": "lf-96-lfo-tr-209",
    "name": "LF 96 - LFO-TR",
    "price": "\u20b920,990.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 96 - LFO-TR from the official Play Solution Indoor Catalogue.",
    "description": "The LF 96 - LFO-TR is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 96 - LFO-TR from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 70). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_70_full.png",
    "imageUrl": "/images/products/page_70_full.png",
    "thumbnails": [
      "/images/products/page_70_full.png",
      "/images/products/page_70_full.png"
    ]
  },
  {
    "id": "210",
    "slug": "lf-120-d-120-210",
    "name": "LF 120 - D 120",
    "price": "\u20b931,990.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 120 - D 120 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 120 - D 120 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 120 - D 120 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 70). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_70_full.png",
    "imageUrl": "/images/products/page_70_full.png",
    "thumbnails": [
      "/images/products/page_70_full.png",
      "/images/products/page_70_full.png"
    ]
  },
  {
    "id": "211",
    "slug": "lf-144-d-144-211",
    "name": "LF 144 - D 144",
    "price": "\u20b939,990.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 144 - D 144 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 144 - D 144 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 144 - D 144 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 70). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_70_full.png",
    "imageUrl": "/images/products/page_70_full.png",
    "thumbnails": [
      "/images/products/page_70_full.png",
      "/images/products/page_70_full.png"
    ]
  },
  {
    "id": "212",
    "slug": "lf-168-play-equipment-lf-168-212",
    "name": "LF 168 - Play Equipment LF 168",
    "price": "\u20b939,990.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 168 - Play Equipment LF 168 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 168 - Play Equipment LF 168 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 168 - Play Equipment LF 168 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 70). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_70_full.png",
    "imageUrl": "/images/products/page_70_full.png",
    "thumbnails": [
      "/images/products/page_70_full.png",
      "/images/products/page_70_full.png"
    ]
  },
  {
    "id": "213",
    "slug": "lf-605-size-l43xw30xh99-cm-213",
    "name": "LF 605 - Size L43xW30xH99 CM",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 605 - Size L43xW30xH99 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 605 - Size L43xW30xH99 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 605 - Size L43xW30xH99 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 71). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L43xW30xH99 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_71_full.png",
    "imageUrl": "/images/products/page_71_full.png",
    "thumbnails": [
      "/images/products/page_71_full.png",
      "/images/products/page_71_full.png"
    ]
  },
  {
    "id": "214",
    "slug": "lf-604-size-l86xw35xh99-cm-214",
    "name": "LF 604 - Size L86xW35xH99 CM",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 604 - Size L86xW35xH99 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 604 - Size L86xW35xH99 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 604 - Size L86xW35xH99 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 71). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L86xW35xH99 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_71_full.png",
    "imageUrl": "/images/products/page_71_full.png",
    "thumbnails": [
      "/images/products/page_71_full.png",
      "/images/products/page_71_full.png"
    ]
  },
  {
    "id": "215",
    "slug": "lf-606-size-l48xw35xh71-cm-215",
    "name": "LF 606 - Size L48xW35xH71 CM",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 606 - Size L48xW35xH71 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 606 - Size L48xW35xH71 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 606 - Size L48xW35xH71 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 71). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L48xW35xH71 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_71_full.png",
    "imageUrl": "/images/products/page_71_full.png",
    "thumbnails": [
      "/images/products/page_71_full.png",
      "/images/products/page_71_full.png"
    ]
  },
  {
    "id": "216",
    "slug": "lf-601-size-l66xw43xh86-cm-216",
    "name": "LF 601 - Size L66xW43xH86 CM",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 601 - Size L66xW43xH86 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 601 - Size L66xW43xH86 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 601 - Size L66xW43xH86 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 71). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L66xW43xH86 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_71_full.png",
    "imageUrl": "/images/products/page_71_full.png",
    "thumbnails": [
      "/images/products/page_71_full.png",
      "/images/products/page_71_full.png"
    ]
  },
  {
    "id": "217",
    "slug": "lf-602-size-l78xw38xh99-cm-217",
    "name": "LF 602 - Size L78xW38xH99 CM",
    "price": "\u20b91,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 602 - Size L78xW38xH99 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 602 - Size L78xW38xH99 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 602 - Size L78xW38xH99 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 71). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L78xW38xH99 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_71_full.png",
    "imageUrl": "/images/products/page_71_full.png",
    "thumbnails": [
      "/images/products/page_71_full.png",
      "/images/products/page_71_full.png"
    ]
  },
  {
    "id": "218",
    "slug": "lf-603-size-l86xw33xh45-cm-218",
    "name": "LF 603 - Size L86xW33xH45 CM",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 603 - Size L86xW33xH45 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 603 - Size L86xW33xH45 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 603 - Size L86xW33xH45 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 71). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L86xW33xH45 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_71_full.png",
    "imageUrl": "/images/products/page_71_full.png",
    "thumbnails": [
      "/images/products/page_71_full.png",
      "/images/products/page_71_full.png"
    ]
  },
  {
    "id": "219",
    "slug": "lf-935-size-l119xw43xh81-cm-219",
    "name": "LF 935 - Size L119xW43xH81 CM",
    "price": "\u20b93,790",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 935 - Size L119xW43xH81 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 935 - Size L119xW43xH81 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 935 - Size L119xW43xH81 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 72). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L119xW43xH81 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_72_full.png",
    "imageUrl": "/images/products/page_72_full.png",
    "thumbnails": [
      "/images/products/page_72_full.png",
      "/images/products/page_72_full.png"
    ]
  },
  {
    "id": "220",
    "slug": "lf-936-size-l98xw35xh81-cm-220",
    "name": "LF 936 - Size L98xW35xH81 CM",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 936 - Size L98xW35xH81 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 936 - Size L98xW35xH81 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 936 - Size L98xW35xH81 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 72). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L98xW35xH81 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_72_full.png",
    "imageUrl": "/images/products/page_72_full.png",
    "thumbnails": [
      "/images/products/page_72_full.png",
      "/images/products/page_72_full.png"
    ]
  },
  {
    "id": "221",
    "slug": "lf-937-size-l142xw35xh81-cm-221",
    "name": "LF 937 - Size L142xW35xH81 CM",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 937 - Size L142xW35xH81 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 937 - Size L142xW35xH81 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 937 - Size L142xW35xH81 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 72). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L142xW35xH81 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_72_full.png",
    "imageUrl": "/images/products/page_72_full.png",
    "thumbnails": [
      "/images/products/page_72_full.png",
      "/images/products/page_72_full.png"
    ]
  },
  {
    "id": "222",
    "slug": "lf-5532-play-equipment-lf-5532-222",
    "name": "LF 5532 - Play Equipment LF 5532",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 5532 - Play Equipment LF 5532 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 5532 - Play Equipment LF 5532 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 5532 - Play Equipment LF 5532 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 73). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_73_full.png",
    "imageUrl": "/images/products/page_73_full.png",
    "thumbnails": [
      "/images/products/page_73_full.png",
      "/images/products/page_73_full.png"
    ]
  },
  {
    "id": "223",
    "slug": "lft-1102c-play-equipment-lft-1102c-223",
    "name": "LFT 1102C - Play Equipment LFT 1102C",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 1102C - Play Equipment LFT 1102C from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1102C - Play Equipment LFT 1102C is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1102C - Play Equipment LFT 1102C from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 73). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_73_full.png",
    "imageUrl": "/images/products/page_73_full.png",
    "thumbnails": [
      "/images/products/page_73_full.png",
      "/images/products/page_73_full.png"
    ]
  },
  {
    "id": "224",
    "slug": "lft-1104c-size-l-248-92-x-w-72-39-x-h-90-17-cm-224",
    "name": "LFT 1104C - Size L 248 92 X W 72 39 X H 90 17 CM",
    "price": "\u20b95,990.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 1104C - Size L 248 92 X W 72 39 X H 90 17 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1104C - Size L 248 92 X W 72 39 X H 90 17 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1104C - Size L 248 92 X W 72 39 X H 90 17 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 73). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L 248.92 X W 72.39 X H 90.17 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_73_full.png",
    "imageUrl": "/images/products/page_73_full.png",
    "thumbnails": [
      "/images/products/page_73_full.png",
      "/images/products/page_73_full.png"
    ]
  },
  {
    "id": "225",
    "slug": "lf-5052-size-l176xw89xh89-cm-225",
    "name": "LF 5052 - Size L176xW89xH89 CM",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 5052 - Size L176xW89xH89 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 5052 - Size L176xW89xH89 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 5052 - Size L176xW89xH89 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 73). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L176xW89xH89 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_73_full.png",
    "imageUrl": "/images/products/page_73_full.png",
    "thumbnails": [
      "/images/products/page_73_full.png",
      "/images/products/page_73_full.png"
    ]
  },
  {
    "id": "226",
    "slug": "lf-5012-size-l45xw45xh105-cm-226",
    "name": "LF 5012 - Size L45xW45xH105 CM",
    "price": "\u20b93,790",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 5012 - Size L45xW45xH105 CM from the official Play Solution Indoor Catalogue.",
    "description": "The LF 5012 - Size L45xW45xH105 CM is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 5012 - Size L45xW45xH105 CM from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 73). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L45xW45xH105 C",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_73_full.png",
    "imageUrl": "/images/products/page_73_full.png",
    "thumbnails": [
      "/images/products/page_73_full.png",
      "/images/products/page_73_full.png"
    ]
  },
  {
    "id": "227",
    "slug": "lf-1101c-size-l-142-x-dia-45-cm-227",
    "name": "LF 1101C - Size L 142 X Dia 45 cm",
    "price": "\u20b91,490.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 1101C - Size L 142 X Dia 45 cm from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1101C - Size L 142 X Dia 45 cm is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1101C - Size L 142 X Dia 45 cm from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 73). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Size : L 142 X Dia 45 cm",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_73_full.png",
    "imageUrl": "/images/products/page_73_full.png",
    "thumbnails": [
      "/images/products/page_73_full.png",
      "/images/products/page_73_full.png"
    ]
  },
  {
    "id": "228",
    "slug": "lf-1103c-play-equipment-lf-1103c-228",
    "name": "LF 1103C - Play Equipment LF 1103C",
    "price": "\u20b96,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 1103C - Play Equipment LF 1103C from the official Play Solution Indoor Catalogue.",
    "description": "The LF 1103C - Play Equipment LF 1103C is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 1103C - Play Equipment LF 1103C from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 73). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_73_full.png",
    "imageUrl": "/images/products/page_73_full.png",
    "thumbnails": [
      "/images/products/page_73_full.png",
      "/images/products/page_73_full.png"
    ]
  },
  {
    "id": "229",
    "slug": "lf-52-divider-10-pcs-229",
    "name": "LF 52 - Divider 10 pcs",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 52 - Divider 10 pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LF 52 - Divider 10 pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 52 - Divider 10 pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 74). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_74_full.png",
    "imageUrl": "/images/products/page_74_full.png",
    "thumbnails": [
      "/images/products/page_74_full.png",
      "/images/products/page_74_full.png"
    ]
  },
  {
    "id": "230",
    "slug": "lf-58-swing-230",
    "name": "LF 58 - Swing",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 58 - Swing from the official Play Solution Indoor Catalogue.",
    "description": "The LF 58 - Swing is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 58 - Swing from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 74). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_74_full.png",
    "imageUrl": "/images/products/page_74_full.png",
    "thumbnails": [
      "/images/products/page_74_full.png",
      "/images/products/page_74_full.png"
    ]
  },
  {
    "id": "231",
    "slug": "lf414a-agility-ladde-231",
    "name": "LF414A - Agility Ladde",
    "price": "\u20b91,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF414A - Agility Ladde from the official Play Solution Indoor Catalogue.",
    "description": "The LF414A - Agility Ladde is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF414A - Agility Ladde from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 74). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_74_full.png",
    "imageUrl": "/images/products/page_74_full.png",
    "thumbnails": [
      "/images/products/page_74_full.png",
      "/images/products/page_74_full.png"
    ]
  },
  {
    "id": "232",
    "slug": "lf-56-ring-50-dia-232",
    "name": "LF 56 - Ring (50 dia)",
    "price": "\u20b92,690",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 56 - Ring (50 dia) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 56 - Ring (50 dia) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 56 - Ring (50 dia) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 74). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_74_full.png",
    "imageUrl": "/images/products/page_74_full.png",
    "thumbnails": [
      "/images/products/page_74_full.png",
      "/images/products/page_74_full.png"
    ]
  },
  {
    "id": "233",
    "slug": "lf-57-ring-40-dia-233",
    "name": "LF 57 - Ring (40 dia)",
    "price": "\u20b93,790",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 57 - Ring (40 dia) from the official Play Solution Indoor Catalogue.",
    "description": "The LF 57 - Ring (40 dia) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 57 - Ring (40 dia) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 74). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_74_full.png",
    "imageUrl": "/images/products/page_74_full.png",
    "thumbnails": [
      "/images/products/page_74_full.png",
      "/images/products/page_74_full.png"
    ]
  },
  {
    "id": "234",
    "slug": "lf-53-play-equipment-lf-53-234",
    "name": "LF 53 - Play Equipment LF 53",
    "price": "\u20b94,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 53 - Play Equipment LF 53 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 53 - Play Equipment LF 53 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 53 - Play Equipment LF 53 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 74). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_74_full.png",
    "imageUrl": "/images/products/page_74_full.png",
    "thumbnails": [
      "/images/products/page_74_full.png",
      "/images/products/page_74_full.png"
    ]
  },
  {
    "id": "235",
    "slug": "lf-51-play-equipment-lf-51-235",
    "name": "LF 51 - Play Equipment LF 51",
    "price": "\u20b9290.00",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 51 - Play Equipment LF 51 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 51 - Play Equipment LF 51 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 51 - Play Equipment LF 51 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 74). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_74_full.png",
    "imageUrl": "/images/products/page_74_full.png",
    "thumbnails": [
      "/images/products/page_74_full.png",
      "/images/products/page_74_full.png"
    ]
  },
  {
    "id": "236",
    "slug": "lf-144-balancer-6-pcs-236",
    "name": "LF 144 - Balancer 6 pcs",
    "price": "\u20b99,490",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 144 - Balancer 6 pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LF 144 - Balancer 6 pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 144 - Balancer 6 pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 75). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_75_full.png",
    "imageUrl": "/images/products/page_75_full.png",
    "thumbnails": [
      "/images/products/page_75_full.png",
      "/images/products/page_75_full.png"
    ]
  },
  {
    "id": "237",
    "slug": "lf-143-balancer-8-pcs-237",
    "name": "LF 143 - Balancer 8 Pcs",
    "price": "\u20b911,990",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 143 - Balancer 8 Pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LF 143 - Balancer 8 Pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 143 - Balancer 8 Pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 75). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_75_full.png",
    "imageUrl": "/images/products/page_75_full.png",
    "thumbnails": [
      "/images/products/page_75_full.png",
      "/images/products/page_75_full.png"
    ]
  },
  {
    "id": "238",
    "slug": "lf-145-play-equipment-lf-145-238",
    "name": "LF 145 - Play Equipment LF 145",
    "price": "\u20b924,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 145 - Play Equipment LF 145 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 145 - Play Equipment LF 145 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 145 - Play Equipment LF 145 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 76). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_76_full.png",
    "imageUrl": "/images/products/page_76_full.png",
    "thumbnails": [
      "/images/products/page_76_full.png",
      "/images/products/page_76_full.png"
    ]
  },
  {
    "id": "239",
    "slug": "lf-147-play-equipment-lf-147-239",
    "name": "LF 147 - Play Equipment LF 147",
    "price": "\u20b929,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 147 - Play Equipment LF 147 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 147 - Play Equipment LF 147 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 147 - Play Equipment LF 147 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 77). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_77_full.png",
    "imageUrl": "/images/products/page_77_full.png",
    "thumbnails": [
      "/images/products/page_77_full.png",
      "/images/products/page_77_full.png"
    ]
  },
  {
    "id": "240",
    "slug": "lf-148-play-equipment-lf-148-240",
    "name": "LF 148 - Play Equipment LF 148",
    "price": "\u20b98,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 148 - Play Equipment LF 148 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 148 - Play Equipment LF 148 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 148 - Play Equipment LF 148 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 78). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_78_full.png",
    "imageUrl": "/images/products/page_78_full.png",
    "thumbnails": [
      "/images/products/page_78_full.png",
      "/images/products/page_78_full.png"
    ]
  },
  {
    "id": "241",
    "slug": "lf-149-play-equipment-lf-149-241",
    "name": "LF 149 - Play Equipment LF 149",
    "price": "\u20b911,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 149 - Play Equipment LF 149 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 149 - Play Equipment LF 149 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 149 - Play Equipment LF 149 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 79). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_79_full.png",
    "imageUrl": "/images/products/page_79_full.png",
    "thumbnails": [
      "/images/products/page_79_full.png",
      "/images/products/page_79_full.png"
    ]
  },
  {
    "id": "242",
    "slug": "lf-150-play-equipment-lf-150-242",
    "name": "LF 150 - Play Equipment LF 150",
    "price": "\u20b914,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 150 - Play Equipment LF 150 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 150 - Play Equipment LF 150 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 150 - Play Equipment LF 150 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 80). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_80_full.png",
    "imageUrl": "/images/products/page_80_full.png",
    "thumbnails": [
      "/images/products/page_80_full.png",
      "/images/products/page_80_full.png"
    ]
  },
  {
    "id": "243",
    "slug": "lf-151-play-equipment-lf-151-243",
    "name": "LF 151 - Play Equipment LF 151",
    "price": "\u20b919,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 151 - Play Equipment LF 151 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 151 - Play Equipment LF 151 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 151 - Play Equipment LF 151 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 81). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_81_full.png",
    "imageUrl": "/images/products/page_81_full.png",
    "thumbnails": [
      "/images/products/page_81_full.png",
      "/images/products/page_81_full.png"
    ]
  },
  {
    "id": "244",
    "slug": "lf-152-play-equipment-lf-152-244",
    "name": "LF 152 - Play Equipment LF 152",
    "price": "\u20b924,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 152 - Play Equipment LF 152 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 152 - Play Equipment LF 152 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 152 - Play Equipment LF 152 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 82). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_82_full.png",
    "imageUrl": "/images/products/page_82_full.png",
    "thumbnails": [
      "/images/products/page_82_full.png",
      "/images/products/page_82_full.png"
    ]
  },
  {
    "id": "245",
    "slug": "lf-153-play-equipment-lf-153-245",
    "name": "LF 153 - Play Equipment LF 153",
    "price": "\u20b929,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 153 - Play Equipment LF 153 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 153 - Play Equipment LF 153 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 153 - Play Equipment LF 153 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 83). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_83_full.png",
    "imageUrl": "/images/products/page_83_full.png",
    "thumbnails": [
      "/images/products/page_83_full.png",
      "/images/products/page_83_full.png"
    ]
  },
  {
    "id": "246",
    "slug": "lf-161-play-equipment-lf-161-246",
    "name": "LF 161 - Play Equipment LF 161",
    "price": "\u20b98,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 161 - Play Equipment LF 161 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 161 - Play Equipment LF 161 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 161 - Play Equipment LF 161 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 84). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_84_full.png",
    "imageUrl": "/images/products/page_84_full.png",
    "thumbnails": [
      "/images/products/page_84_full.png",
      "/images/products/page_84_full.png"
    ]
  },
  {
    "id": "247",
    "slug": "lf-162-play-equipment-lf-162-247",
    "name": "LF 162 - Play Equipment LF 162",
    "price": "\u20b911,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 162 - Play Equipment LF 162 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 162 - Play Equipment LF 162 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 162 - Play Equipment LF 162 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 84). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_84_full.png",
    "imageUrl": "/images/products/page_84_full.png",
    "thumbnails": [
      "/images/products/page_84_full.png",
      "/images/products/page_84_full.png"
    ]
  },
  {
    "id": "248",
    "slug": "lf-164-play-equipment-lf-164-248",
    "name": "LF 164 - Play Equipment LF 164",
    "price": "\u20b914,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 164 - Play Equipment LF 164 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 164 - Play Equipment LF 164 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 164 - Play Equipment LF 164 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 85). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_85_full.png",
    "imageUrl": "/images/products/page_85_full.png",
    "thumbnails": [
      "/images/products/page_85_full.png",
      "/images/products/page_85_full.png"
    ]
  },
  {
    "id": "249",
    "slug": "lf-165-play-equipment-lf-165-249",
    "name": "LF 165 - Play Equipment LF 165",
    "price": "\u20b919,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 165 - Play Equipment LF 165 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 165 - Play Equipment LF 165 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 165 - Play Equipment LF 165 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 86). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_86_full.png",
    "imageUrl": "/images/products/page_86_full.png",
    "thumbnails": [
      "/images/products/page_86_full.png",
      "/images/products/page_86_full.png"
    ]
  },
  {
    "id": "250",
    "slug": "lf-169-play-equipment-lf-169-250",
    "name": "LF 169 - Play Equipment LF 169",
    "price": "\u20b924,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 169 - Play Equipment LF 169 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 169 - Play Equipment LF 169 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 169 - Play Equipment LF 169 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 87). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_87_full.png",
    "imageUrl": "/images/products/page_87_full.png",
    "thumbnails": [
      "/images/products/page_87_full.png",
      "/images/products/page_87_full.png"
    ]
  },
  {
    "id": "251",
    "slug": "lf-167-play-equipment-lf-167-251",
    "name": "LF 167 - Play Equipment LF 167",
    "price": "\u20b929,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 167 - Play Equipment LF 167 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 167 - Play Equipment LF 167 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 167 - Play Equipment LF 167 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 87). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Natural Beech Wood Finish with Pastel Accent Edges",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_87_full.png",
    "imageUrl": "/images/products/page_87_full.png",
    "thumbnails": [
      "/images/products/page_87_full.png",
      "/images/products/page_87_full.png"
    ]
  },
  {
    "id": "252",
    "slug": "lf-170-play-equipment-lf-170-252",
    "name": "LF 170 - Play Equipment LF 170",
    "price": "\u20b98,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 170 - Play Equipment LF 170 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 170 - Play Equipment LF 170 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 170 - Play Equipment LF 170 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 87). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_87_full.png",
    "imageUrl": "/images/products/page_87_full.png",
    "thumbnails": [
      "/images/products/page_87_full.png",
      "/images/products/page_87_full.png"
    ]
  },
  {
    "id": "253",
    "slug": "lf-62-play-equipment-lf-62-253",
    "name": "LF 62 - Play Equipment LF 62",
    "price": "\u20b911,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 62 - Play Equipment LF 62 from the official Play Solution Indoor Catalogue.",
    "description": "The LF 62 - Play Equipment LF 62 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 62 - Play Equipment LF 62 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 88). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_88_full.png",
    "imageUrl": "/images/products/page_88_full.png",
    "thumbnails": [
      "/images/products/page_88_full.png",
      "/images/products/page_88_full.png"
    ]
  },
  {
    "id": "254",
    "slug": "lf-62s-play-equipment-lf-62s-254",
    "name": "LF 62S - Play Equipment LF 62S",
    "price": "\u20b914,990",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 62S - Play Equipment LF 62S from the official Play Solution Indoor Catalogue.",
    "description": "The LF 62S - Play Equipment LF 62S is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LF 62S - Play Equipment LF 62S from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 88). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_88_full.png",
    "imageUrl": "/images/products/page_88_full.png",
    "thumbnails": [
      "/images/products/page_88_full.png",
      "/images/products/page_88_full.png"
    ]
  },
  {
    "id": "255",
    "slug": "lft-21a-play-equipment-lft-21a-255",
    "name": "LFT 21A - Play Equipment LFT 21A",
    "price": "\u20b91,199",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 21A - Play Equipment LFT 21A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 21A - Play Equipment LFT 21A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 21A - Play Equipment LFT 21A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "256",
    "slug": "lft-22a-play-equipment-lft-22a-256",
    "name": "LFT 22A - Play Equipment LFT 22A",
    "price": "\u20b91,990",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 22A - Play Equipment LFT 22A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 22A - Play Equipment LFT 22A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 22A - Play Equipment LFT 22A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "257",
    "slug": "lft-23a-play-equipment-lft-23a-257",
    "name": "LFT 23A - Play Equipment LFT 23A",
    "price": "\u20b92,395",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 23A - Play Equipment LFT 23A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 23A - Play Equipment LFT 23A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 23A - Play Equipment LFT 23A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "258",
    "slug": "lft-29a-play-equipment-lft-29a-258",
    "name": "LFT 29A - Play Equipment LFT 29A",
    "price": "\u20b92,795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 29A - Play Equipment LFT 29A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 29A - Play Equipment LFT 29A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 29A - Play Equipment LFT 29A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "259",
    "slug": "lft-24a-play-equipment-lft-24a-259",
    "name": "LFT 24A - Play Equipment LFT 24A",
    "price": "\u20b93,995",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 24A - Play Equipment LFT 24A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 24A - Play Equipment LFT 24A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 24A - Play Equipment LFT 24A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "260",
    "slug": "lft-25a-play-equipment-lft-25a-260",
    "name": "LFT 25A - Play Equipment LFT 25A",
    "price": "\u20b9299",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 25A - Play Equipment LFT 25A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 25A - Play Equipment LFT 25A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 25A - Play Equipment LFT 25A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "261",
    "slug": "lft-26a-play-equipment-lft-26a-261",
    "name": "LFT 26A - Play Equipment LFT 26A",
    "price": "\u20b9450",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 26A - Play Equipment LFT 26A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 26A - Play Equipment LFT 26A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 26A - Play Equipment LFT 26A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "262",
    "slug": "lft-27a-play-equipment-lft-27a-262",
    "name": "LFT 27A - Play Equipment LFT 27A",
    "price": "\u20b9599",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 27A - Play Equipment LFT 27A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 27A - Play Equipment LFT 27A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 27A - Play Equipment LFT 27A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "263",
    "slug": "lft-28a-play-equipment-lft-28a-263",
    "name": "LFT 28A - Play Equipment LFT 28A",
    "price": "\u20b9795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 28A - Play Equipment LFT 28A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 28A - Play Equipment LFT 28A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 28A - Play Equipment LFT 28A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 89). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_89_full.png",
    "imageUrl": "/images/products/page_89_full.png",
    "thumbnails": [
      "/images/products/page_89_full.png",
      "/images/products/page_89_full.png"
    ]
  },
  {
    "id": "264",
    "slug": "lft-34a-play-equipment-lft-34a-264",
    "name": "LFT 34A - Play Equipment LFT 34A",
    "price": "\u20b9450.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 34A - Play Equipment LFT 34A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 34A - Play Equipment LFT 34A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 34A - Play Equipment LFT 34A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "265",
    "slug": "lft-35a-play-equipment-lft-35a-265",
    "name": "LFT 35A - Play Equipment LFT 35A",
    "price": "\u20b9450.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 35A - Play Equipment LFT 35A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 35A - Play Equipment LFT 35A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 35A - Play Equipment LFT 35A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "266",
    "slug": "lft-36a-play-equipment-lft-36a-266",
    "name": "LFT 36A - Play Equipment LFT 36A",
    "price": "\u20b9450.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 36A - Play Equipment LFT 36A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 36A - Play Equipment LFT 36A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 36A - Play Equipment LFT 36A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "267",
    "slug": "lft-37a-play-equipment-lft-37a-267",
    "name": "LFT 37A - Play Equipment LFT 37A",
    "price": "\u20b92,395",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 37A - Play Equipment LFT 37A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 37A - Play Equipment LFT 37A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 37A - Play Equipment LFT 37A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "268",
    "slug": "lft-38a-play-equipment-lft-38a-268",
    "name": "LFT 38A - Play Equipment LFT 38A",
    "price": "\u20b9290.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 38A - Play Equipment LFT 38A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 38A - Play Equipment LFT 38A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 38A - Play Equipment LFT 38A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "269",
    "slug": "lft-39a-play-equipment-lft-39a-269",
    "name": "LFT 39A - Play Equipment LFT 39A",
    "price": "\u20b9290.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 39A - Play Equipment LFT 39A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 39A - Play Equipment LFT 39A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 39A - Play Equipment LFT 39A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "270",
    "slug": "lft-40a-play-equipment-lft-40a-270",
    "name": "LFT 40A - Play Equipment LFT 40A",
    "price": "\u20b9290.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 40A - Play Equipment LFT 40A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 40A - Play Equipment LFT 40A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 40A - Play Equipment LFT 40A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "271",
    "slug": "lft-32a-play-equipment-lft-32a-271",
    "name": "LFT 32A - Play Equipment LFT 32A",
    "price": "\u20b9450.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 32A - Play Equipment LFT 32A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 32A - Play Equipment LFT 32A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 32A - Play Equipment LFT 32A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "272",
    "slug": "lft-33a-play-equipment-lft-33a-272",
    "name": "LFT 33A - Play Equipment LFT 33A",
    "price": "\u20b9450.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 33A - Play Equipment LFT 33A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 33A - Play Equipment LFT 33A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 33A - Play Equipment LFT 33A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "273",
    "slug": "lft-31a-play-equipment-lft-31a-273",
    "name": "LFT 31A - Play Equipment LFT 31A",
    "price": "\u20b9450.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 31A - Play Equipment LFT 31A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 31A - Play Equipment LFT 31A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 31A - Play Equipment LFT 31A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "274",
    "slug": "lft-30a-play-equipment-lft-30a-274",
    "name": "LFT 30A - Play Equipment LFT 30A",
    "price": "\u20b9450.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 30A - Play Equipment LFT 30A from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 30A - Play Equipment LFT 30A is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 30A - Play Equipment LFT 30A from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 90). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_90_full.png",
    "imageUrl": "/images/products/page_90_full.png",
    "thumbnails": [
      "/images/products/page_90_full.png",
      "/images/products/page_90_full.png"
    ]
  },
  {
    "id": "275",
    "slug": "lfp-10-insect-puppet-275",
    "name": "LFP 10 - Insect Puppet",
    "price": "\u20b91,199",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 10 - Insect Puppet from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 10 - Insect Puppet is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 10 - Insect Puppet from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "276",
    "slug": "lfp-11-family-puppet-276",
    "name": "LFP 11 - Family Puppet",
    "price": "\u20b91,990",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 11 - Family Puppet from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 11 - Family Puppet is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 11 - Family Puppet from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "277",
    "slug": "lfp-12-community-helpers-277",
    "name": "LFP 12 - Community Helpers",
    "price": "\u20b92,395",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 12 - Community Helpers from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 12 - Community Helpers is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 12 - Community Helpers from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "278",
    "slug": "lfp-9-birds-puppet-278",
    "name": "LFP 9 - Birds Puppet",
    "price": "\u20b92,795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 9 - Birds Puppet from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 9 - Birds Puppet is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 9 - Birds Puppet from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "279",
    "slug": "lfp-7-play-equipment-lfp-7-279",
    "name": "LFP 7 - Play Equipment LFP 7",
    "price": "\u20b93,995",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 7 - Play Equipment LFP 7 from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 7 - Play Equipment LFP 7 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 7 - Play Equipment LFP 7 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "280",
    "slug": "lfp-4-play-equipment-lfp-4-280",
    "name": "LFP 4 - Play Equipment LFP 4",
    "price": "\u20b9299",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 4 - Play Equipment LFP 4 from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 4 - Play Equipment LFP 4 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 4 - Play Equipment LFP 4 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "281",
    "slug": "lfp-5-play-equipment-lfp-5-281",
    "name": "LFP 5 - Play Equipment LFP 5",
    "price": "\u20b9450",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 5 - Play Equipment LFP 5 from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 5 - Play Equipment LFP 5 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 5 - Play Equipment LFP 5 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "282",
    "slug": "lfp-6-set-of-10-282",
    "name": "LFP 6 - (Set of 10)",
    "price": "\u20b9599",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 6 - (Set of 10) from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 6 - (Set of 10) is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 6 - (Set of 10) from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "283",
    "slug": "lfp-8-water-animals-283",
    "name": "LFP 8 - Water Animals",
    "price": "\u20b9795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 8 - Water Animals from the official Play Solution Indoor Catalogue.",
    "description": "The LFP 8 - Water Animals is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFP 8 - Water Animals from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 91). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_91_full.png",
    "imageUrl": "/images/products/page_91_full.png",
    "thumbnails": [
      "/images/products/page_91_full.png",
      "/images/products/page_91_full.png"
    ]
  },
  {
    "id": "284",
    "slug": "lft-1213-play-equipment-lft-1213-284",
    "name": "LFT 1213 - Play Equipment LFT 1213",
    "price": "\u20b9899",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1213 - Play Equipment LFT 1213 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1213 - Play Equipment LFT 1213 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1213 - Play Equipment LFT 1213 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "285",
    "slug": "lft-1212-pilot-285",
    "name": "LFT 1212 - Pilot",
    "price": "\u20b91,199",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1212 - Pilot from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1212 - Pilot is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1212 - Pilot from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "286",
    "slug": "lft-1211-military-forces-286",
    "name": "LFT 1211 - Military Forces",
    "price": "\u20b91,990",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1211 - Military Forces from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1211 - Military Forces is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1211 - Military Forces from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "287",
    "slug": "lft-1214-play-equipment-lft-1214-287",
    "name": "LFT 1214 - Play Equipment LFT 1214",
    "price": "\u20b92,395",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1214 - Play Equipment LFT 1214 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1214 - Play Equipment LFT 1214 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1214 - Play Equipment LFT 1214 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "288",
    "slug": "lft-1215-play-equipment-lft-1215-288",
    "name": "LFT 1215 - Play Equipment LFT 1215",
    "price": "\u20b92,795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1215 - Play Equipment LFT 1215 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1215 - Play Equipment LFT 1215 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1215 - Play Equipment LFT 1215 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "289",
    "slug": "lft-1216-lady-doctor-289",
    "name": "LFT 1216 - Lady Doctor",
    "price": "\u20b91,990.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1216 - Lady Doctor from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1216 - Lady Doctor is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1216 - Lady Doctor from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "290",
    "slug": "lft-1217-play-equipment-lft-1217-290",
    "name": "LFT 1217 - Play Equipment LFT 1217",
    "price": "\u20b9299",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1217 - Play Equipment LFT 1217 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1217 - Play Equipment LFT 1217 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1217 - Play Equipment LFT 1217 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "291",
    "slug": "lft-1218-play-equipment-lft-1218-291",
    "name": "LFT 1218 - Play Equipment LFT 1218",
    "price": "\u20b9450",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1218 - Play Equipment LFT 1218 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1218 - Play Equipment LFT 1218 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1218 - Play Equipment LFT 1218 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "292",
    "slug": "lft-1219-fire-ghter-292",
    "name": "LFT 1219 - Fire ghter",
    "price": "\u20b91,990.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1219 - Fire ghter from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1219 - Fire ghter is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1219 - Fire ghter from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 92). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_92_full.png",
    "imageUrl": "/images/products/page_92_full.png",
    "thumbnails": [
      "/images/products/page_92_full.png",
      "/images/products/page_92_full.png"
    ]
  },
  {
    "id": "293",
    "slug": "lft-011-shape-sorter-293",
    "name": "LFT 011 - Shape Sorter",
    "price": "\u20b9795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 011 - Shape Sorter from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 011 - Shape Sorter is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 011 - Shape Sorter from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 93). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_93_full.png",
    "imageUrl": "/images/products/page_93_full.png",
    "thumbnails": [
      "/images/products/page_93_full.png",
      "/images/products/page_93_full.png"
    ]
  },
  {
    "id": "294",
    "slug": "lft-013-roll-ball-294",
    "name": "LFT 013 - Roll Ball",
    "price": "\u20b9899",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 013 - Roll Ball from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 013 - Roll Ball is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 013 - Roll Ball from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 93). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_93_full.png",
    "imageUrl": "/images/products/page_93_full.png",
    "thumbnails": [
      "/images/products/page_93_full.png",
      "/images/products/page_93_full.png"
    ]
  },
  {
    "id": "295",
    "slug": "lft-012-play-equipment-lft-012-295",
    "name": "LFT 012 - Play Equipment LFT 012",
    "price": "\u20b91,199",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 012 - Play Equipment LFT 012 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 012 - Play Equipment LFT 012 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 012 - Play Equipment LFT 012 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 93). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_93_full.png",
    "imageUrl": "/images/products/page_93_full.png",
    "thumbnails": [
      "/images/products/page_93_full.png",
      "/images/products/page_93_full.png"
    ]
  },
  {
    "id": "296",
    "slug": "lft-014-shape-sorting-baby-toy-296",
    "name": "LFT 014 - Shape Sorting Baby Toy",
    "price": "\u20b91,990",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 014 - Shape Sorting Baby Toy from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 014 - Shape Sorting Baby Toy is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 014 - Shape Sorting Baby Toy from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 93). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_93_full.png",
    "imageUrl": "/images/products/page_93_full.png",
    "thumbnails": [
      "/images/products/page_93_full.png",
      "/images/products/page_93_full.png"
    ]
  },
  {
    "id": "297",
    "slug": "lft-016-set-of-4-pcs-297",
    "name": "LFT 016 - Set of 4 Pcs",
    "price": "\u20b91,196.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 016 - Set of 4 Pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 016 - Set of 4 Pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 016 - Set of 4 Pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 93). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_93_full.png",
    "imageUrl": "/images/products/page_93_full.png",
    "thumbnails": [
      "/images/products/page_93_full.png",
      "/images/products/page_93_full.png"
    ]
  },
  {
    "id": "298",
    "slug": "lft-015-set-of-4-pcs-298",
    "name": "LFT 015 - Set of 4 Pcs",
    "price": "\u20b91,196.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 015 - Set of 4 Pcs from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 015 - Set of 4 Pcs is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 015 - Set of 4 Pcs from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 93). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_93_full.png",
    "imageUrl": "/images/products/page_93_full.png",
    "thumbnails": [
      "/images/products/page_93_full.png",
      "/images/products/page_93_full.png"
    ]
  },
  {
    "id": "299",
    "slug": "lft-1251-alphabet-299",
    "name": "LFT 1251 - Alphabet",
    "price": "\u20b9299.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1251 - Alphabet from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1251 - Alphabet is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1251 - Alphabet from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "300",
    "slug": "lft-1252-numbers-300",
    "name": "LFT 1252 - Numbers",
    "price": "\u20b9299",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1252 - Numbers from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1252 - Numbers is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1252 - Numbers from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "301",
    "slug": "lft-1254-vegetables-301",
    "name": "LFT 1254 - Vegetables",
    "price": "\u20b9299.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1254 - Vegetables from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1254 - Vegetables is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1254 - Vegetables from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "302",
    "slug": "lft-1253-play-equipment-lft-1253-302",
    "name": "LFT 1253 - Play Equipment LFT 1253",
    "price": "\u20b9299.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1253 - Play Equipment LFT 1253 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1253 - Play Equipment LFT 1253 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1253 - Play Equipment LFT 1253 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "303",
    "slug": "lft-1255-play-equipment-lft-1255-303",
    "name": "LFT 1255 - Play Equipment LFT 1255",
    "price": "\u20b9795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1255 - Play Equipment LFT 1255 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1255 - Play Equipment LFT 1255 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1255 - Play Equipment LFT 1255 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "304",
    "slug": "lft-1256-play-equipment-lft-1256-304",
    "name": "LFT 1256 - Play Equipment LFT 1256",
    "price": "\u20b9899",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1256 - Play Equipment LFT 1256 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1256 - Play Equipment LFT 1256 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1256 - Play Equipment LFT 1256 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "305",
    "slug": "lft-1258-parts-of-the-body-305",
    "name": "LFT 1258 - Parts Of The Body",
    "price": "\u20b9299.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1258 - Parts Of The Body from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1258 - Parts Of The Body is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1258 - Parts Of The Body from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "306",
    "slug": "lft-1257-play-equipment-lft-1257-306",
    "name": "LFT 1257 - Play Equipment LFT 1257",
    "price": "\u20b9299.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1257 - Play Equipment LFT 1257 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1257 - Play Equipment LFT 1257 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1257 - Play Equipment LFT 1257 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "307",
    "slug": "lft-1259-vechicles-307",
    "name": "LFT 1259 - Vechicles",
    "price": "\u20b9299.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1259 - Vechicles from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1259 - Vechicles is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1259 - Vechicles from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "308",
    "slug": "lft-1260-community-helpers-308",
    "name": "LFT 1260 - Community Helpers",
    "price": "\u20b92,795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1260 - Community Helpers from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1260 - Community Helpers is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1260 - Community Helpers from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "309",
    "slug": "lft-1261-opposites-309",
    "name": "LFT 1261 - Opposites",
    "price": "\u20b9299.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1261 - Opposites from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1261 - Opposites is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1261 - Opposites from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 94). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_94_full.png",
    "imageUrl": "/images/products/page_94_full.png",
    "thumbnails": [
      "/images/products/page_94_full.png",
      "/images/products/page_94_full.png"
    ]
  },
  {
    "id": "310",
    "slug": "lft-92-play-equipment-lft-92-310",
    "name": "LFT 92 - Play Equipment LFT 92",
    "price": "\u20b9299",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 92 - Play Equipment LFT 92 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 92 - Play Equipment LFT 92 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 92 - Play Equipment LFT 92 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "311",
    "slug": "lft-1201-fruits-cutting-311",
    "name": "LFT 1201 - Fruits Cutting",
    "price": "\u20b9450",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1201 - Fruits Cutting from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1201 - Fruits Cutting is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1201 - Fruits Cutting from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "312",
    "slug": "lft-1202-vegetables-cutting-312",
    "name": "LFT 1202 - Vegetables Cutting",
    "price": "\u20b9599",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1202 - Vegetables Cutting from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1202 - Vegetables Cutting is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1202 - Vegetables Cutting from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "313",
    "slug": "lft-1209-play-equipment-lft-1209-313",
    "name": "LFT 1209 - Play Equipment LFT 1209",
    "price": "\u20b9795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1209 - Play Equipment LFT 1209 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1209 - Play Equipment LFT 1209 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1209 - Play Equipment LFT 1209 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "314",
    "slug": "lft-1210-vegetables-314",
    "name": "LFT 1210 - Vegetables",
    "price": "\u20b9899",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1210 - Vegetables from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1210 - Vegetables is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1210 - Vegetables from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "315",
    "slug": "lft-98-play-equipment-lft-98-315",
    "name": "LFT 98 - Play Equipment LFT 98",
    "price": "\u20b91,199",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 98 - Play Equipment LFT 98 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 98 - Play Equipment LFT 98 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 98 - Play Equipment LFT 98 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "316",
    "slug": "lft-99-play-equipment-lft-99-316",
    "name": "LFT 99 - Play Equipment LFT 99",
    "price": "\u20b91,990",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 99 - Play Equipment LFT 99 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 99 - Play Equipment LFT 99 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 99 - Play Equipment LFT 99 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "317",
    "slug": "lft-1204-vegetables-cutting-317",
    "name": "LFT 1204 - Vegetables Cutting",
    "price": "\u20b92,395",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1204 - Vegetables Cutting from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1204 - Vegetables Cutting is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1204 - Vegetables Cutting from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "318",
    "slug": "lft-1203-fruitscutting-318",
    "name": "LFT 1203 - FruitsCutting",
    "price": "\u20b92,795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1203 - FruitsCutting from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1203 - FruitsCutting is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1203 - FruitsCutting from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "319",
    "slug": "lft-051-stack-o-barrel-319",
    "name": "LFT 051 - Stack-o-Barrel",
    "price": "\u20b93,995",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 051 - Stack-o-Barrel from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 051 - Stack-o-Barrel is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 051 - Stack-o-Barrel from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "320",
    "slug": "lft-053-stack-o-cups-320",
    "name": "LFT 053 - Stack-o-Cups",
    "price": "\u20b9299",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 053 - Stack-o-Cups from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 053 - Stack-o-Cups is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 053 - Stack-o-Cups from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "321",
    "slug": "lft-052-play-equipment-lft-052-321",
    "name": "LFT 052 - Play Equipment LFT 052",
    "price": "\u20b9450",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 052 - Play Equipment LFT 052 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 052 - Play Equipment LFT 052 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 052 - Play Equipment LFT 052 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "322",
    "slug": "lft-97c-toddler-ring-322",
    "name": "LFT 97C - Toddler Ring",
    "price": "\u20b9599",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 97C - Toddler Ring from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 97C - Toddler Ring is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 97C - Toddler Ring from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "323",
    "slug": "lft-054-stack-o-cubes-323",
    "name": "LFT 054 - Stack-o-Cubes",
    "price": "\u20b9795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 054 - Stack-o-Cubes from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 054 - Stack-o-Cubes is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 054 - Stack-o-Cubes from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 96). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_96_full.png",
    "imageUrl": "/images/products/page_96_full.png",
    "thumbnails": [
      "/images/products/page_96_full.png",
      "/images/products/page_96_full.png"
    ]
  },
  {
    "id": "324",
    "slug": "lft-90d-hopscotch-324",
    "name": "LFT 90D - Hopscotch",
    "price": "\u20b91,199",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 90D - Hopscotch from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 90D - Hopscotch is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 90D - Hopscotch from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "325",
    "slug": "lft-1241-play-equipment-lft-1241-325",
    "name": "LFT 1241 - Play Equipment LFT 1241",
    "price": "\u20b91,199",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1241 - Play Equipment LFT 1241 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1241 - Play Equipment LFT 1241 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1241 - Play Equipment LFT 1241 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "326",
    "slug": "lft-1221-wild-animal-set-326",
    "name": "LFT 1221 - Wild Animal Set",
    "price": "\u20b91,990",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1221 - Wild Animal Set from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1221 - Wild Animal Set is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1221 - Wild Animal Set from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "327",
    "slug": "lft-1222-farm-set-327",
    "name": "LFT 1222 - Farm Set",
    "price": "\u20b9499.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1222 - Farm Set from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1222 - Farm Set is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1222 - Farm Set from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "328",
    "slug": "lft-1223-play-equipment-lft-1223-328",
    "name": "LFT 1223 - Play Equipment LFT 1223",
    "price": "\u20b92,795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1223 - Play Equipment LFT 1223 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1223 - Play Equipment LFT 1223 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1223 - Play Equipment LFT 1223 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "329",
    "slug": "lft-1224-insects-set-329",
    "name": "LFT 1224 - Insects Set",
    "price": "\u20b9499.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1224 - Insects Set from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1224 - Insects Set is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1224 - Insects Set from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "330",
    "slug": "lft-1152-xylophone-big-330",
    "name": "LFT 1152 - Xylophone Big",
    "price": "\u20b9299",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1152 - Xylophone Big from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1152 - Xylophone Big is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1152 - Xylophone Big from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "331",
    "slug": "lft-1151-xylophone-331",
    "name": "LFT 1151 - Xylophone",
    "price": "\u20b9450",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1151 - Xylophone from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1151 - Xylophone is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1151 - Xylophone from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "332",
    "slug": "lft-1243-bin-buddy-332",
    "name": "LFT 1243 - Bin Buddy",
    "price": "\u20b9599",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1243 - Bin Buddy from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1243 - Bin Buddy is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1243 - Bin Buddy from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "333",
    "slug": "lft-1231-doctor-set-333",
    "name": "LFT 1231 - Doctor set",
    "price": "\u20b9795",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1231 - Doctor set from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1231 - Doctor set is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1231 - Doctor set from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "334",
    "slug": "lft-1232-kitchen-set-334",
    "name": "LFT 1232 - Kitchen set",
    "price": "\u20b9899.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1232 - Kitchen set from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1232 - Kitchen set is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1232 - Kitchen set from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "335",
    "slug": "lft-1233-play-equipment-lft-1233-335",
    "name": "LFT 1233 - Play Equipment LFT 1233",
    "price": "\u20b91,199",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1233 - Play Equipment LFT 1233 from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1233 - Play Equipment LFT 1233 is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1233 - Play Equipment LFT 1233 from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  },
  {
    "id": "336",
    "slug": "lft-1234-beauty-set-336",
    "name": "LFT 1234 - Beauty set",
    "price": "\u20b9899.00",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1234 - Beauty set from the official Play Solution Indoor Catalogue.",
    "description": "The LFT 1234 - Beauty set is engineered for safety, durability, and high active engagement in preschools and kindergartens. Certified CE & ISI standard equipment.",
    "longDescription": "LFT 1234 - Beauty set from Little Fingers India Pvt. Ltd. (Indoor Catalogue Page 97). Built from non-toxic, child-safe food-grade plastic and heavy-duty steel frame.",
    "features": [
      "Official Play Solution Indoor Catalogue Page Image View",
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard Kindergarten Size",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/page_97_full.png",
    "imageUrl": "/images/products/page_97_full.png",
    "thumbnails": [
      "/images/products/page_97_full.png",
      "/images/products/page_97_full.png"
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getRelatedProducts = (productOrSlug: Product | string, limit = 4): Product[] => {
  const slug = typeof productOrSlug === 'string' ? productOrSlug : productOrSlug.slug;
  const categoryId = typeof productOrSlug === 'object' ? productOrSlug.categoryId : '';
  return products
    .filter((p) => p.slug !== slug && (!categoryId || p.categoryId === categoryId))
    .slice(0, limit);
};
