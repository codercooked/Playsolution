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
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 7021 - Play Equipment LF 7021 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 7021 - Play Equipment LF 7021 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 7021 - Play Equipment LF 7021 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p4_LF_7021_1.png",
    "imageUrl": "/images/products/prod_p4_LF_7021_1.png",
    "thumbnails": [
      "/images/products/prod_p4_LF_7021_1.png",
      "/images/products/prod_p4_LF_7021_1.png"
    ]
  },
  {
    "id": "2",
    "slug": "lf-7022-play-equipment-lf-7022-2",
    "name": "LF 7022 - Play Equipment LF 7022",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 7022 - Play Equipment LF 7022 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 7022 - Play Equipment LF 7022 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 7022 - Play Equipment LF 7022 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p5_LF_7022_2.png",
    "imageUrl": "/images/products/prod_p5_LF_7022_2.png",
    "thumbnails": [
      "/images/products/prod_p5_LF_7022_2.png",
      "/images/products/prod_p5_LF_7022_2.png"
    ]
  },
  {
    "id": "3",
    "slug": "lf-7023-play-equipment-lf-7023-3",
    "name": "LF 7023 - Play Equipment LF 7023",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 7023 - Play Equipment LF 7023 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 7023 - Play Equipment LF 7023 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 7023 - Play Equipment LF 7023 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p6_LF_7023_3.png",
    "imageUrl": "/images/products/prod_p6_LF_7023_3.png",
    "thumbnails": [
      "/images/products/prod_p6_LF_7023_3.png",
      "/images/products/prod_p6_LF_7023_3.png"
    ]
  },
  {
    "id": "4",
    "slug": "lf-0431-play-equipment-lf-0431-4",
    "name": "LF 0431 - Play Equipment LF 0431",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0431 - Play Equipment LF 0431 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0431 - Play Equipment LF 0431 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0431 - Play Equipment LF 0431 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p7_LF_0431_4.png",
    "imageUrl": "/images/products/prod_p7_LF_0431_4.png",
    "thumbnails": [
      "/images/products/prod_p7_LF_0431_4.png",
      "/images/products/prod_p7_LF_0431_4.png"
    ]
  },
  {
    "id": "5",
    "slug": "lf-0431p-use-code-middle-5",
    "name": "LF 0431P - - use code Middle",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0431P - - use code Middle is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0431P - - use code Middle features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0431P - - use code Middle is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p7_LF_0431P_5.png",
    "imageUrl": "/images/products/prod_p7_LF_0431P_5.png",
    "thumbnails": [
      "/images/products/prod_p7_LF_0431P_5.png",
      "/images/products/prod_p7_LF_0431P_5.png"
    ]
  },
  {
    "id": "6",
    "slug": "lf-0431m-use-code-primary-6",
    "name": "LF 0431M - - use code Primary",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0431M - - use code Primary is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0431M - - use code Primary features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0431M - - use code Primary is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p7_LF_0431M_6.png",
    "imageUrl": "/images/products/prod_p7_LF_0431M_6.png",
    "thumbnails": [
      "/images/products/prod_p7_LF_0431M_6.png",
      "/images/products/prod_p7_LF_0431M_6.png"
    ]
  },
  {
    "id": "7",
    "slug": "lf-0447-play-equipment-lf-0447-7",
    "name": "LF 0447 - Play Equipment LF 0447",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0447 - Play Equipment LF 0447 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0447 - Play Equipment LF 0447 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0447 - Play Equipment LF 0447 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p8_LF_0447_7.png",
    "imageUrl": "/images/products/prod_p8_LF_0447_7.png",
    "thumbnails": [
      "/images/products/prod_p8_LF_0447_7.png",
      "/images/products/prod_p8_LF_0447_7.png"
    ]
  },
  {
    "id": "8",
    "slug": "lf-0447p-play-equipment-lf-0447p-8",
    "name": "LF 0447P - Play Equipment LF 0447P",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0447P - Play Equipment LF 0447P is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0447P - Play Equipment LF 0447P features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0447P - Play Equipment LF 0447P is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p8_LF_0447P_8.png",
    "imageUrl": "/images/products/prod_p8_LF_0447P_8.png",
    "thumbnails": [
      "/images/products/prod_p8_LF_0447P_8.png",
      "/images/products/prod_p8_LF_0447P_8.png"
    ]
  },
  {
    "id": "9",
    "slug": "lf-0448-play-equipment-lf-0448-9",
    "name": "LF 0448 - Play Equipment LF 0448",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0448 - Play Equipment LF 0448 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0448 - Play Equipment LF 0448 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0448 - Play Equipment LF 0448 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p9_LF_0448_9.png",
    "imageUrl": "/images/products/prod_p9_LF_0448_9.png",
    "thumbnails": [
      "/images/products/prod_p9_LF_0448_9.png",
      "/images/products/prod_p9_LF_0448_9.png"
    ]
  },
  {
    "id": "10",
    "slug": "lf-0448p-play-equipment-lf-0448p-10",
    "name": "LF 0448P - Play Equipment LF 0448P",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0448P - Play Equipment LF 0448P is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0448P - Play Equipment LF 0448P features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0448P - Play Equipment LF 0448P is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p9_LF_0448P_10.png",
    "imageUrl": "/images/products/prod_p9_LF_0448P_10.png",
    "thumbnails": [
      "/images/products/prod_p9_LF_0448P_10.png",
      "/images/products/prod_p9_LF_0448P_10.png"
    ]
  },
  {
    "id": "11",
    "slug": "lf-0429-play-equipment-lf-0429-11",
    "name": "LF 0429 - Play Equipment LF 0429",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0429 - Play Equipment LF 0429 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0429 - Play Equipment LF 0429 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0429 - Play Equipment LF 0429 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p10_LF_0429_11.png",
    "imageUrl": "/images/products/prod_p10_LF_0429_11.png",
    "thumbnails": [
      "/images/products/prod_p10_LF_0429_11.png",
      "/images/products/prod_p10_LF_0429_11.png"
    ]
  },
  {
    "id": "12",
    "slug": "lf-0235-play-equipment-lf-0235-12",
    "name": "LF 0235 - Play Equipment LF 0235",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0235 - Play Equipment LF 0235 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0235 - Play Equipment LF 0235 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0235 - Play Equipment LF 0235 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p10_LF_0235_12.png",
    "imageUrl": "/images/products/prod_p10_LF_0235_12.png",
    "thumbnails": [
      "/images/products/prod_p10_LF_0235_12.png",
      "/images/products/prod_p10_LF_0235_12.png"
    ]
  },
  {
    "id": "13",
    "slug": "lf-0405-play-equipment-lf-0405-13",
    "name": "LF 0405 - Play Equipment LF 0405",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0405 - Play Equipment LF 0405 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0405 - Play Equipment LF 0405 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0405 - Play Equipment LF 0405 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p11_LF_0405_13.png",
    "imageUrl": "/images/products/prod_p11_LF_0405_13.png",
    "thumbnails": [
      "/images/products/prod_p11_LF_0405_13.png",
      "/images/products/prod_p11_LF_0405_13.png"
    ]
  },
  {
    "id": "14",
    "slug": "lf-0406-frame-heavy-duty-metal-structure-with-plastic-bushes-for-oor-protection-and-noise-reduction-14",
    "name": "LF 0406 - Frame Heavy-duty metal structure with Plastic bushes for oor protection and noise reduction",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0406 - Frame Heavy-duty metal structure with Plastic bushes for oor protection and noise reduction is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0406 - Frame Heavy-duty metal structure with Plastic bushes for oor protection and noise reduction features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0406 - Frame Heavy-duty metal structure with Plastic bushes for oor protection and noise reduction is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p11_LF_0406_14.png",
    "imageUrl": "/images/products/prod_p11_LF_0406_14.png",
    "thumbnails": [
      "/images/products/prod_p11_LF_0406_14.png",
      "/images/products/prod_p11_LF_0406_14.png"
    ]
  },
  {
    "id": "15",
    "slug": "lf-0407-dual-seating-desk-adjustable-15",
    "name": "LF 0407 - Dual Seating Desk (Adjustable)",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0407 - Dual Seating Desk (Adjustable) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0407 - Dual Seating Desk (Adjustable) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0407 - Dual Seating Desk (Adjustable) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p13_LF_0407_15.png",
    "imageUrl": "/images/products/prod_p13_LF_0407_15.png",
    "thumbnails": [
      "/images/products/prod_p13_LF_0407_15.png",
      "/images/products/prod_p13_LF_0407_15.png"
    ]
  },
  {
    "id": "16",
    "slug": "lf-081-play-equipment-lf-081-16",
    "name": "LF 081 - Play Equipment LF 081",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 081 - Play Equipment LF 081 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 081 - Play Equipment LF 081 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 081 - Play Equipment LF 081 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p14_LF_081_16.png",
    "imageUrl": "/images/products/prod_p14_LF_081_16.png",
    "thumbnails": [
      "/images/products/prod_p14_LF_081_16.png",
      "/images/products/prod_p14_LF_081_16.png"
    ]
  },
  {
    "id": "17",
    "slug": "lf-082-play-equipment-lf-082-17",
    "name": "LF 082 - Play Equipment LF 082",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 082 - Play Equipment LF 082 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 082 - Play Equipment LF 082 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 082 - Play Equipment LF 082 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p14_LF_082_17.png",
    "imageUrl": "/images/products/prod_p14_LF_082_17.png",
    "thumbnails": [
      "/images/products/prod_p14_LF_082_17.png",
      "/images/products/prod_p14_LF_082_17.png"
    ]
  },
  {
    "id": "18",
    "slug": "lf-029-play-equipment-lf-029-18",
    "name": "LF 029 - Play Equipment LF 029",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 029 - Play Equipment LF 029 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 029 - Play Equipment LF 029 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 029 - Play Equipment LF 029 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p15_LF_029_18.png",
    "imageUrl": "/images/products/prod_p15_LF_029_18.png",
    "thumbnails": [
      "/images/products/prod_p15_LF_029_18.png",
      "/images/products/prod_p15_LF_029_18.png"
    ]
  },
  {
    "id": "19",
    "slug": "lf-028-play-equipment-lf-028-19",
    "name": "LF 028 - Play Equipment LF 028",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 028 - Play Equipment LF 028 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 028 - Play Equipment LF 028 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 028 - Play Equipment LF 028 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p16_LF_028_19.png",
    "imageUrl": "/images/products/prod_p16_LF_028_19.png",
    "thumbnails": [
      "/images/products/prod_p16_LF_028_19.png",
      "/images/products/prod_p16_LF_028_19.png"
    ]
  },
  {
    "id": "20",
    "slug": "lf-0331-play-equipment-lf-0331-20",
    "name": "LF 0331 - Play Equipment LF 0331",
    "price": "Quote on Request",
    "category": "Classroom Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0331 - Play Equipment LF 0331 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0331 - Play Equipment LF 0331 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0331 - Play Equipment LF 0331 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p17_LF_0331_20.png",
    "imageUrl": "/images/products/prod_p17_LF_0331_20.png",
    "thumbnails": [
      "/images/products/prod_p17_LF_0331_20.png",
      "/images/products/prod_p17_LF_0331_20.png"
    ]
  },
  {
    "id": "21",
    "slug": "lf-035-play-equipment-lf-035-21",
    "name": "LF 035 - Play Equipment LF 035",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 035 - Play Equipment LF 035 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 035 - Play Equipment LF 035 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 035 - Play Equipment LF 035 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p18_LF_035_21.png",
    "imageUrl": "/images/products/prod_p18_LF_035_21.png",
    "thumbnails": [
      "/images/products/prod_p18_LF_035_21.png",
      "/images/products/prod_p18_LF_035_21.png"
    ]
  },
  {
    "id": "22",
    "slug": "lf-025-play-equipment-lf-025-22",
    "name": "LF 025 - Play Equipment LF 025",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 025 - Play Equipment LF 025 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 025 - Play Equipment LF 025 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 025 - Play Equipment LF 025 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p19_LF_025_22.png",
    "imageUrl": "/images/products/prod_p19_LF_025_22.png",
    "thumbnails": [
      "/images/products/prod_p19_LF_025_22.png",
      "/images/products/prod_p19_LF_025_22.png"
    ]
  },
  {
    "id": "23",
    "slug": "lf-155-play-equipment-lf-155-23",
    "name": "LF 155 - Play Equipment LF 155",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 155 - Play Equipment LF 155 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 155 - Play Equipment LF 155 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 155 - Play Equipment LF 155 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p20_LF_155_23.png",
    "imageUrl": "/images/products/prod_p20_LF_155_23.png",
    "thumbnails": [
      "/images/products/prod_p20_LF_155_23.png",
      "/images/products/prod_p20_LF_155_23.png"
    ]
  },
  {
    "id": "24",
    "slug": "lf-157-play-equipment-lf-157-24",
    "name": "LF 157 - Play Equipment LF 157",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 157 - Play Equipment LF 157 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 157 - Play Equipment LF 157 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 157 - Play Equipment LF 157 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p21_LF_157_24.png",
    "imageUrl": "/images/products/prod_p21_LF_157_24.png",
    "thumbnails": [
      "/images/products/prod_p21_LF_157_24.png",
      "/images/products/prod_p21_LF_157_24.png"
    ]
  },
  {
    "id": "25",
    "slug": "lf-158-play-equipment-lf-158-25",
    "name": "LF 158 - Play Equipment LF 158",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 158 - Play Equipment LF 158 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 158 - Play Equipment LF 158 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 158 - Play Equipment LF 158 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p21_LF_158_25.png",
    "imageUrl": "/images/products/prod_p21_LF_158_25.png",
    "thumbnails": [
      "/images/products/prod_p21_LF_158_25.png",
      "/images/products/prod_p21_LF_158_25.png"
    ]
  },
  {
    "id": "26",
    "slug": "lf-159-play-equipment-lf-159-26",
    "name": "LF 159 - Play Equipment LF 159",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 159 - Play Equipment LF 159 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 159 - Play Equipment LF 159 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 159 - Play Equipment LF 159 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p22_LF_159_26.png",
    "imageUrl": "/images/products/prod_p22_LF_159_26.png",
    "thumbnails": [
      "/images/products/prod_p22_LF_159_26.png",
      "/images/products/prod_p22_LF_159_26.png"
    ]
  },
  {
    "id": "27",
    "slug": "lf-0504-play-equipment-lf-0504-27",
    "name": "LF 0504 - Play Equipment LF 0504",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0504 - Play Equipment LF 0504 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0504 - Play Equipment LF 0504 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0504 - Play Equipment LF 0504 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p23_LF_0504_27.png",
    "imageUrl": "/images/products/prod_p23_LF_0504_27.png",
    "thumbnails": [
      "/images/products/prod_p23_LF_0504_27.png",
      "/images/products/prod_p23_LF_0504_27.png"
    ]
  },
  {
    "id": "28",
    "slug": "lf-0512-play-equipment-lf-0512-28",
    "name": "LF 0512 - Play Equipment LF 0512",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0512 - Play Equipment LF 0512 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0512 - Play Equipment LF 0512 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0512 - Play Equipment LF 0512 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p24_LF_0512_28.png",
    "imageUrl": "/images/products/prod_p24_LF_0512_28.png",
    "thumbnails": [
      "/images/products/prod_p24_LF_0512_28.png",
      "/images/products/prod_p24_LF_0512_28.png"
    ]
  },
  {
    "id": "29",
    "slug": "lf-0513-play-equipment-lf-0513-29",
    "name": "LF 0513 - Play Equipment LF 0513",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 0513 - Play Equipment LF 0513 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0513 - Play Equipment LF 0513 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0513 - Play Equipment LF 0513 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p25_LF_0513_29.png",
    "imageUrl": "/images/products/prod_p25_LF_0513_29.png",
    "thumbnails": [
      "/images/products/prod_p25_LF_0513_29.png",
      "/images/products/prod_p25_LF_0513_29.png"
    ]
  },
  {
    "id": "30",
    "slug": "lf-311-play-equipment-lf-311-30",
    "name": "LF 311 - Play Equipment LF 311",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 311 - Play Equipment LF 311 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 311 - Play Equipment LF 311 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 311 - Play Equipment LF 311 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p26_LF_311_30.png",
    "imageUrl": "/images/products/prod_p26_LF_311_30.png",
    "thumbnails": [
      "/images/products/prod_p26_LF_311_30.png",
      "/images/products/prod_p26_LF_311_30.png"
    ]
  },
  {
    "id": "31",
    "slug": "lf-314-round-table-adjustable-31",
    "name": "LF 314 - Round Table (Adjustable)",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 314 - Round Table (Adjustable) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 314 - Round Table (Adjustable) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 314 - Round Table (Adjustable) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p26_LF_314_31.png",
    "imageUrl": "/images/products/prod_p26_LF_314_31.png",
    "thumbnails": [
      "/images/products/prod_p26_LF_314_31.png",
      "/images/products/prod_p26_LF_314_31.png"
    ]
  },
  {
    "id": "32",
    "slug": "lf-315-play-equipment-lf-315-32",
    "name": "LF 315 - Play Equipment LF 315",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 315 - Play Equipment LF 315 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 315 - Play Equipment LF 315 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 315 - Play Equipment LF 315 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p27_LF_315_32.png",
    "imageUrl": "/images/products/prod_p27_LF_315_32.png",
    "thumbnails": [
      "/images/products/prod_p27_LF_315_32.png",
      "/images/products/prod_p27_LF_315_32.png"
    ]
  },
  {
    "id": "33",
    "slug": "lf-211-moon-table-adjustable-33",
    "name": "LF 211 - Moon Table (Adjustable)",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 211 - Moon Table (Adjustable) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 211 - Moon Table (Adjustable) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 211 - Moon Table (Adjustable) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p28_LF_211_33.png",
    "imageUrl": "/images/products/prod_p28_LF_211_33.png",
    "thumbnails": [
      "/images/products/prod_p28_LF_211_33.png",
      "/images/products/prod_p28_LF_211_33.png"
    ]
  },
  {
    "id": "34",
    "slug": "lf-214-play-equipment-lf-214-34",
    "name": "LF 214 - Play Equipment LF 214",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 214 - Play Equipment LF 214 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 214 - Play Equipment LF 214 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 214 - Play Equipment LF 214 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p29_LF_214_34.png",
    "imageUrl": "/images/products/prod_p29_LF_214_34.png",
    "thumbnails": [
      "/images/products/prod_p29_LF_214_34.png",
      "/images/products/prod_p29_LF_214_34.png"
    ]
  },
  {
    "id": "35",
    "slug": "lf-215-rectangle-table-adjustable-35",
    "name": "LF 215 - Rectangle Table (Adjustable)",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 215 - Rectangle Table (Adjustable) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 215 - Rectangle Table (Adjustable) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 215 - Rectangle Table (Adjustable) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p29_LF_215_35.png",
    "imageUrl": "/images/products/prod_p29_LF_215_35.png",
    "thumbnails": [
      "/images/products/prod_p29_LF_215_35.png",
      "/images/products/prod_p29_LF_215_35.png"
    ]
  },
  {
    "id": "36",
    "slug": "lf-110-play-equipment-lf-110-36",
    "name": "LF 110 - Play Equipment LF 110",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 110 - Play Equipment LF 110 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 110 - Play Equipment LF 110 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 110 - Play Equipment LF 110 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p30_LF_110_36.png",
    "imageUrl": "/images/products/prod_p30_LF_110_36.png",
    "thumbnails": [
      "/images/products/prod_p30_LF_110_36.png",
      "/images/products/prod_p30_LF_110_36.png"
    ]
  },
  {
    "id": "37",
    "slug": "lf-111-play-equipment-lf-111-37",
    "name": "LF 111 - Play Equipment LF 111",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 111 - Play Equipment LF 111 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 111 - Play Equipment LF 111 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 111 - Play Equipment LF 111 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p31_LF_111_37.png",
    "imageUrl": "/images/products/prod_p31_LF_111_37.png",
    "thumbnails": [
      "/images/products/prod_p31_LF_111_37.png",
      "/images/products/prod_p31_LF_111_37.png"
    ]
  },
  {
    "id": "38",
    "slug": "lf-113-square-table-38",
    "name": "LF 113 - Square Table",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 113 - Square Table is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 113 - Square Table features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 113 - Square Table is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p31_LF_113_38.png",
    "imageUrl": "/images/products/prod_p31_LF_113_38.png",
    "thumbnails": [
      "/images/products/prod_p31_LF_113_38.png",
      "/images/products/prod_p31_LF_113_38.png"
    ]
  },
  {
    "id": "39",
    "slug": "lf-114-round-table-39",
    "name": "LF 114 - Round Table",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 114 - Round Table is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 114 - Round Table features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 114 - Round Table is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p32_LF_114_39.png",
    "imageUrl": "/images/products/prod_p32_LF_114_39.png",
    "thumbnails": [
      "/images/products/prod_p32_LF_114_39.png",
      "/images/products/prod_p32_LF_114_39.png"
    ]
  },
  {
    "id": "40",
    "slug": "lf-114s-round-table-40",
    "name": "LF 114S - Round Table",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 114S - Round Table is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 114S - Round Table features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 114S - Round Table is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p32_LF_114S_40.png",
    "imageUrl": "/images/products/prod_p32_LF_114S_40.png",
    "thumbnails": [
      "/images/products/prod_p32_LF_114S_40.png",
      "/images/products/prod_p32_LF_114S_40.png"
    ]
  },
  {
    "id": "41",
    "slug": "lf-115-play-equipment-lf-115-41",
    "name": "LF 115 - Play Equipment LF 115",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 115 - Play Equipment LF 115 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 115 - Play Equipment LF 115 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 115 - Play Equipment LF 115 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p33_LF_115_41.png",
    "imageUrl": "/images/products/prod_p33_LF_115_41.png",
    "thumbnails": [
      "/images/products/prod_p33_LF_115_41.png",
      "/images/products/prod_p33_LF_115_41.png"
    ]
  },
  {
    "id": "42",
    "slug": "lf-115s-play-equipment-lf-115s-42",
    "name": "LF 115S - Play Equipment LF 115S",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 115S - Play Equipment LF 115S is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 115S - Play Equipment LF 115S features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 115S - Play Equipment LF 115S is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p33_LF_115S_42.png",
    "imageUrl": "/images/products/prod_p33_LF_115S_42.png",
    "thumbnails": [
      "/images/products/prod_p33_LF_115S_42.png",
      "/images/products/prod_p33_LF_115S_42.png"
    ]
  },
  {
    "id": "43",
    "slug": "lf-207-size-l120xw105xh50-cm-43",
    "name": "LF 207 - Size L120xW105xH50 CM",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 207 - Size L120xW105xH50 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 207 - Size L120xW105xH50 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 207 - Size L120xW105xH50 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p34_LF_207_43.png",
    "imageUrl": "/images/products/prod_p34_LF_207_43.png",
    "thumbnails": [
      "/images/products/prod_p34_LF_207_43.png",
      "/images/products/prod_p34_LF_207_43.png"
    ]
  },
  {
    "id": "44",
    "slug": "lf-202-play-equipment-lf-202-44",
    "name": "LF 202 - Play Equipment LF 202",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 202 - Play Equipment LF 202 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 202 - Play Equipment LF 202 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 202 - Play Equipment LF 202 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p34_LF_202_44.png",
    "imageUrl": "/images/products/prod_p34_LF_202_44.png",
    "thumbnails": [
      "/images/products/prod_p34_LF_202_44.png",
      "/images/products/prod_p34_LF_202_44.png"
    ]
  },
  {
    "id": "45",
    "slug": "lf-206-size-diaxh53-cm-45",
    "name": "LF 206 - Size DiaxH53 CM",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 206 - Size DiaxH53 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 206 - Size DiaxH53 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 206 - Size DiaxH53 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p34_LF_206_45.png",
    "imageUrl": "/images/products/prod_p34_LF_206_45.png",
    "thumbnails": [
      "/images/products/prod_p34_LF_206_45.png",
      "/images/products/prod_p34_LF_206_45.png"
    ]
  },
  {
    "id": "46",
    "slug": "lf-205-size-l120xw60xh53-cm-46",
    "name": "LF 205 - Size L120xW60xH53 CM",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 205 - Size L120xW60xH53 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 205 - Size L120xW60xH53 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 205 - Size L120xW60xH53 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p34_LF_205_46.png",
    "imageUrl": "/images/products/prod_p34_LF_205_46.png",
    "thumbnails": [
      "/images/products/prod_p34_LF_205_46.png",
      "/images/products/prod_p34_LF_205_46.png"
    ]
  },
  {
    "id": "47",
    "slug": "lf-201-play-equipment-lf-201-47",
    "name": "LF 201 - Play Equipment LF 201",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 201 - Play Equipment LF 201 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 201 - Play Equipment LF 201 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 201 - Play Equipment LF 201 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p34_LF_201_47.png",
    "imageUrl": "/images/products/prod_p34_LF_201_47.png",
    "thumbnails": [
      "/images/products/prod_p34_LF_201_47.png",
      "/images/products/prod_p34_LF_201_47.png"
    ]
  },
  {
    "id": "48",
    "slug": "lf-1421-size-l44xw35xh50-cm-48",
    "name": "LF 1421 - Size L44xW35xH50 CM",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1421 - Size L44xW35xH50 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1421 - Size L44xW35xH50 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1421 - Size L44xW35xH50 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p35_LF_1421_48.png",
    "imageUrl": "/images/products/prod_p35_LF_1421_48.png",
    "thumbnails": [
      "/images/products/prod_p35_LF_1421_48.png",
      "/images/products/prod_p35_LF_1421_48.png"
    ]
  },
  {
    "id": "49",
    "slug": "lf-1422-play-equipment-lf-1422-49",
    "name": "LF 1422 - Play Equipment LF 1422",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1422 - Play Equipment LF 1422 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1422 - Play Equipment LF 1422 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1422 - Play Equipment LF 1422 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p35_LF_1422_49.png",
    "imageUrl": "/images/products/prod_p35_LF_1422_49.png",
    "thumbnails": [
      "/images/products/prod_p35_LF_1422_49.png",
      "/images/products/prod_p35_LF_1422_49.png"
    ]
  },
  {
    "id": "50",
    "slug": "lf-1423-play-equipment-lf-1423-50",
    "name": "LF 1423 - Play Equipment LF 1423",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1423 - Play Equipment LF 1423 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1423 - Play Equipment LF 1423 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1423 - Play Equipment LF 1423 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p35_LF_1423_50.png",
    "imageUrl": "/images/products/prod_p35_LF_1423_50.png",
    "thumbnails": [
      "/images/products/prod_p35_LF_1423_50.png",
      "/images/products/prod_p35_LF_1423_50.png"
    ]
  },
  {
    "id": "51",
    "slug": "lf-1424-size-l36xw27-8xh25-cm-51",
    "name": "LF 1424 - Size L36xW27 8xH25 CM",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1424 - Size L36xW27 8xH25 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1424 - Size L36xW27 8xH25 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1424 - Size L36xW27 8xH25 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p35_LF_1424_51.png",
    "imageUrl": "/images/products/prod_p35_LF_1424_51.png",
    "thumbnails": [
      "/images/products/prod_p35_LF_1424_51.png",
      "/images/products/prod_p35_LF_1424_51.png"
    ]
  },
  {
    "id": "52",
    "slug": "lf-1425-size-l44xw35xh82-cm-52",
    "name": "LF 1425 - Size L44xW35xH82 CM",
    "price": "Quote on Request",
    "category": "Preschool Furniture",
    "categoryId": "classroom",
    "categoryColor": "#7B68EE",
    "shortDescription": "LF 1425 - Size L44xW35xH82 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1425 - Size L44xW35xH82 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1425 - Size L44xW35xH82 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p35_LF_1425_52.png",
    "imageUrl": "/images/products/prod_p35_LF_1425_52.png",
    "thumbnails": [
      "/images/products/prod_p35_LF_1425_52.png",
      "/images/products/prod_p35_LF_1425_52.png"
    ]
  },
  {
    "id": "53",
    "slug": "lf-1426-size-l120xw29-5xh98-cm-53",
    "name": "LF 1426 - Size L120xW29 5xH98 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1426 - Size L120xW29 5xH98 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1426 - Size L120xW29 5xH98 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1426 - Size L120xW29 5xH98 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p36_LF_1426_53.png",
    "imageUrl": "/images/products/prod_p36_LF_1426_53.png",
    "thumbnails": [
      "/images/products/prod_p36_LF_1426_53.png",
      "/images/products/prod_p36_LF_1426_53.png"
    ]
  },
  {
    "id": "54",
    "slug": "lf-1428-size-l68xw30xh88-cm-54",
    "name": "LF 1428 - Size L68xW30xH88 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1428 - Size L68xW30xH88 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1428 - Size L68xW30xH88 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1428 - Size L68xW30xH88 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p36_LF_1428_54.png",
    "imageUrl": "/images/products/prod_p36_LF_1428_54.png",
    "thumbnails": [
      "/images/products/prod_p36_LF_1428_54.png",
      "/images/products/prod_p36_LF_1428_54.png"
    ]
  },
  {
    "id": "55",
    "slug": "lf-1427-size-l122xw30xh109-5-cm-55",
    "name": "LF 1427 - Size L122xW30xH109 5 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1427 - Size L122xW30xH109 5 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1427 - Size L122xW30xH109 5 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1427 - Size L122xW30xH109 5 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p36_LF_1427_55.png",
    "imageUrl": "/images/products/prod_p36_LF_1427_55.png",
    "thumbnails": [
      "/images/products/prod_p36_LF_1427_55.png",
      "/images/products/prod_p36_LF_1427_55.png"
    ]
  },
  {
    "id": "56",
    "slug": "lf-1451-size-l120xw30xh80-cm-56",
    "name": "LF 1451 - Size L120xW30xH80 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1451 - Size L120xW30xH80 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1451 - Size L120xW30xH80 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1451 - Size L120xW30xH80 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p37_LF_1451_56.png",
    "imageUrl": "/images/products/prod_p37_LF_1451_56.png",
    "thumbnails": [
      "/images/products/prod_p37_LF_1451_56.png",
      "/images/products/prod_p37_LF_1451_56.png"
    ]
  },
  {
    "id": "57",
    "slug": "lf-1452-size-l120xw30xh80-cm-57",
    "name": "LF 1452 - Size L120xW30xH80 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1452 - Size L120xW30xH80 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1452 - Size L120xW30xH80 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1452 - Size L120xW30xH80 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p37_LF_1452_57.png",
    "imageUrl": "/images/products/prod_p37_LF_1452_57.png",
    "thumbnails": [
      "/images/products/prod_p37_LF_1452_57.png",
      "/images/products/prod_p37_LF_1452_57.png"
    ]
  },
  {
    "id": "58",
    "slug": "lf-1453-size-l80xw40xh67-cm-58",
    "name": "LF 1453 - Size L80xW40xH67 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1453 - Size L80xW40xH67 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1453 - Size L80xW40xH67 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1453 - Size L80xW40xH67 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p37_LF_1453_58.png",
    "imageUrl": "/images/products/prod_p37_LF_1453_58.png",
    "thumbnails": [
      "/images/products/prod_p37_LF_1453_58.png",
      "/images/products/prod_p37_LF_1453_58.png"
    ]
  },
  {
    "id": "59",
    "slug": "lf-1454-size-l80xw40xh67-cm-59",
    "name": "LF 1454 - Size L80xW40xH67 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1454 - Size L80xW40xH67 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1454 - Size L80xW40xH67 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1454 - Size L80xW40xH67 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p37_LF_1454_59.png",
    "imageUrl": "/images/products/prod_p37_LF_1454_59.png",
    "thumbnails": [
      "/images/products/prod_p37_LF_1454_59.png",
      "/images/products/prod_p37_LF_1454_59.png"
    ]
  },
  {
    "id": "60",
    "slug": "lf-1455-size-l104xw30xh80-cm-60",
    "name": "LF 1455 - Size L104xW30xH80 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1455 - Size L104xW30xH80 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1455 - Size L104xW30xH80 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1455 - Size L104xW30xH80 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p37_LF_1455_60.png",
    "imageUrl": "/images/products/prod_p37_LF_1455_60.png",
    "thumbnails": [
      "/images/products/prod_p37_LF_1455_60.png",
      "/images/products/prod_p37_LF_1455_60.png"
    ]
  },
  {
    "id": "61",
    "slug": "lf-1456-size-l84xw30xh80-cm-61",
    "name": "LF 1456 - Size L84xW30xH80 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1456 - Size L84xW30xH80 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1456 - Size L84xW30xH80 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1456 - Size L84xW30xH80 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p37_LF_1456_61.png",
    "imageUrl": "/images/products/prod_p37_LF_1456_61.png",
    "thumbnails": [
      "/images/products/prod_p37_LF_1456_61.png",
      "/images/products/prod_p37_LF_1456_61.png"
    ]
  },
  {
    "id": "62",
    "slug": "lf-1501-size-l90xw20xh58-cm-62",
    "name": "LF 1501 - Size L90xW20xH58 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1501 - Size L90xW20xH58 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1501 - Size L90xW20xH58 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1501 - Size L90xW20xH58 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p38_LF_1501_62.png",
    "imageUrl": "/images/products/prod_p38_LF_1501_62.png",
    "thumbnails": [
      "/images/products/prod_p38_LF_1501_62.png",
      "/images/products/prod_p38_LF_1501_62.png"
    ]
  },
  {
    "id": "63",
    "slug": "lf-1503-size-l90xw20xh58-cm-63",
    "name": "LF 1503 - Size L90xW20xH58 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1503 - Size L90xW20xH58 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1503 - Size L90xW20xH58 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1503 - Size L90xW20xH58 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p38_LF_1503_63.png",
    "imageUrl": "/images/products/prod_p38_LF_1503_63.png",
    "thumbnails": [
      "/images/products/prod_p38_LF_1503_63.png",
      "/images/products/prod_p38_LF_1503_63.png"
    ]
  },
  {
    "id": "64",
    "slug": "lf-1502-size-l90xw20xh58-cm-64",
    "name": "LF 1502 - Size L90xW20xH58 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1502 - Size L90xW20xH58 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1502 - Size L90xW20xH58 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1502 - Size L90xW20xH58 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p38_LF_1502_64.png",
    "imageUrl": "/images/products/prod_p38_LF_1502_64.png",
    "thumbnails": [
      "/images/products/prod_p38_LF_1502_64.png",
      "/images/products/prod_p38_LF_1502_64.png"
    ]
  },
  {
    "id": "65",
    "slug": "lf-1504-size-l90xw20xh92-cm-65",
    "name": "LF 1504 - Size L90xW20xH92 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1504 - Size L90xW20xH92 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1504 - Size L90xW20xH92 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1504 - Size L90xW20xH92 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p38_LF_1504_65.png",
    "imageUrl": "/images/products/prod_p38_LF_1504_65.png",
    "thumbnails": [
      "/images/products/prod_p38_LF_1504_65.png",
      "/images/products/prod_p38_LF_1504_65.png"
    ]
  },
  {
    "id": "66",
    "slug": "lf-1458-size-l124xw40xh50-cm-66",
    "name": "LF 1458 - Size L124xW40xH50 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1458 - Size L124xW40xH50 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1458 - Size L124xW40xH50 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1458 - Size L124xW40xH50 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p38_LF_1458_66.png",
    "imageUrl": "/images/products/prod_p38_LF_1458_66.png",
    "thumbnails": [
      "/images/products/prod_p38_LF_1458_66.png",
      "/images/products/prod_p38_LF_1458_66.png"
    ]
  },
  {
    "id": "67",
    "slug": "lf-1459-size-l298xw30xh116-cm-67",
    "name": "LF 1459 - Size L298xW30xH116 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1459 - Size L298xW30xH116 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1459 - Size L298xW30xH116 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1459 - Size L298xW30xH116 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p38_LF_1459_67.png",
    "imageUrl": "/images/products/prod_p38_LF_1459_67.png",
    "thumbnails": [
      "/images/products/prod_p38_LF_1459_67.png",
      "/images/products/prod_p38_LF_1459_67.png"
    ]
  },
  {
    "id": "68",
    "slug": "lf-1457-size-l124xw30xh80-cm-68",
    "name": "LF 1457 - Size L124xW30xH80 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1457 - Size L124xW30xH80 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1457 - Size L124xW30xH80 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1457 - Size L124xW30xH80 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p38_LF_1457_68.png",
    "imageUrl": "/images/products/prod_p38_LF_1457_68.png",
    "thumbnails": [
      "/images/products/prod_p38_LF_1457_68.png",
      "/images/products/prod_p38_LF_1457_68.png"
    ]
  },
  {
    "id": "69",
    "slug": "lf-0701-play-equipment-lf-0701-69",
    "name": "LF 0701 - Play Equipment LF 0701",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0701 - Play Equipment LF 0701 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0701 - Play Equipment LF 0701 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0701 - Play Equipment LF 0701 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p39_LF_0701_69.png",
    "imageUrl": "/images/products/prod_p39_LF_0701_69.png",
    "thumbnails": [
      "/images/products/prod_p39_LF_0701_69.png",
      "/images/products/prod_p39_LF_0701_69.png"
    ]
  },
  {
    "id": "70",
    "slug": "lf-0702-play-equipment-lf-0702-70",
    "name": "LF 0702 - Play Equipment LF 0702",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0702 - Play Equipment LF 0702 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0702 - Play Equipment LF 0702 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0702 - Play Equipment LF 0702 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p39_LF_0702_70.png",
    "imageUrl": "/images/products/prod_p39_LF_0702_70.png",
    "thumbnails": [
      "/images/products/prod_p39_LF_0702_70.png",
      "/images/products/prod_p39_LF_0702_70.png"
    ]
  },
  {
    "id": "71",
    "slug": "lf-0703-play-equipment-lf-0703-71",
    "name": "LF 0703 - Play Equipment LF 0703",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0703 - Play Equipment LF 0703 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0703 - Play Equipment LF 0703 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0703 - Play Equipment LF 0703 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p39_LF_0703_71.png",
    "imageUrl": "/images/products/prod_p39_LF_0703_71.png",
    "thumbnails": [
      "/images/products/prod_p39_LF_0703_71.png",
      "/images/products/prod_p39_LF_0703_71.png"
    ]
  },
  {
    "id": "72",
    "slug": "lf-0704-play-equipment-lf-0704-72",
    "name": "LF 0704 - Play Equipment LF 0704",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0704 - Play Equipment LF 0704 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0704 - Play Equipment LF 0704 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0704 - Play Equipment LF 0704 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p39_LF_0704_72.png",
    "imageUrl": "/images/products/prod_p39_LF_0704_72.png",
    "thumbnails": [
      "/images/products/prod_p39_LF_0704_72.png",
      "/images/products/prod_p39_LF_0704_72.png"
    ]
  },
  {
    "id": "73",
    "slug": "lf-0705-shapes-activity-carpets-73",
    "name": "LF 0705 - Shapes Activity Carpets",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0705 - Shapes Activity Carpets is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0705 - Shapes Activity Carpets features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0705 - Shapes Activity Carpets is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p39_LF_0705_73.png",
    "imageUrl": "/images/products/prod_p39_LF_0705_73.png",
    "thumbnails": [
      "/images/products/prod_p39_LF_0705_73.png",
      "/images/products/prod_p39_LF_0705_73.png"
    ]
  },
  {
    "id": "74",
    "slug": "lf-401-play-equipment-lf-401-74",
    "name": "LF 401 - Play Equipment LF 401",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 401 - Play Equipment LF 401 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 401 - Play Equipment LF 401 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 401 - Play Equipment LF 401 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p40_LF_401_74.png",
    "imageUrl": "/images/products/prod_p40_LF_401_74.png",
    "thumbnails": [
      "/images/products/prod_p40_LF_401_74.png",
      "/images/products/prod_p40_LF_401_74.png"
    ]
  },
  {
    "id": "75",
    "slug": "lf-402-single-seater-giraffe-desk-75",
    "name": "LF 402 - Single Seater Giraffe Desk",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 402 - Single Seater Giraffe Desk is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 402 - Single Seater Giraffe Desk features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 402 - Single Seater Giraffe Desk is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p40_LF_402_75.png",
    "imageUrl": "/images/products/prod_p40_LF_402_75.png",
    "thumbnails": [
      "/images/products/prod_p40_LF_402_75.png",
      "/images/products/prod_p40_LF_402_75.png"
    ]
  },
  {
    "id": "76",
    "slug": "lf-411-play-equipment-lf-411-76",
    "name": "LF 411 - Play Equipment LF 411",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 411 - Play Equipment LF 411 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 411 - Play Equipment LF 411 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 411 - Play Equipment LF 411 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p41_LF_411_76.png",
    "imageUrl": "/images/products/prod_p41_LF_411_76.png",
    "thumbnails": [
      "/images/products/prod_p41_LF_411_76.png",
      "/images/products/prod_p41_LF_411_76.png"
    ]
  },
  {
    "id": "77",
    "slug": "lf-412-double-seater-giraffe-desk-77",
    "name": "LF 412 - Double Seater Giraffe Desk",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 412 - Double Seater Giraffe Desk is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 412 - Double Seater Giraffe Desk features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 412 - Double Seater Giraffe Desk is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p41_LF_412_77.png",
    "imageUrl": "/images/products/prod_p41_LF_412_77.png",
    "thumbnails": [
      "/images/products/prod_p41_LF_412_77.png",
      "/images/products/prod_p41_LF_412_77.png"
    ]
  },
  {
    "id": "78",
    "slug": "lf-1481-play-equipment-lf-1481-78",
    "name": "LF 1481 - Play Equipment LF 1481",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1481 - Play Equipment LF 1481 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1481 - Play Equipment LF 1481 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1481 - Play Equipment LF 1481 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p42_LF_1481_78.png",
    "imageUrl": "/images/products/prod_p42_LF_1481_78.png",
    "thumbnails": [
      "/images/products/prod_p42_LF_1481_78.png",
      "/images/products/prod_p42_LF_1481_78.png"
    ]
  },
  {
    "id": "79",
    "slug": "lf-1482-play-equipment-lf-1482-79",
    "name": "LF 1482 - Play Equipment LF 1482",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1482 - Play Equipment LF 1482 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1482 - Play Equipment LF 1482 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1482 - Play Equipment LF 1482 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p42_LF_1482_79.png",
    "imageUrl": "/images/products/prod_p42_LF_1482_79.png",
    "thumbnails": [
      "/images/products/prod_p42_LF_1482_79.png",
      "/images/products/prod_p42_LF_1482_79.png"
    ]
  },
  {
    "id": "80",
    "slug": "lf-1483-play-equipment-lf-1483-80",
    "name": "LF 1483 - Play Equipment LF 1483",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1483 - Play Equipment LF 1483 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1483 - Play Equipment LF 1483 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1483 - Play Equipment LF 1483 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p42_LF_1483_80.png",
    "imageUrl": "/images/products/prod_p42_LF_1483_80.png",
    "thumbnails": [
      "/images/products/prod_p42_LF_1483_80.png",
      "/images/products/prod_p42_LF_1483_80.png"
    ]
  },
  {
    "id": "81",
    "slug": "lf-1484-play-equipment-lf-1484-81",
    "name": "LF 1484 - Play Equipment LF 1484",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1484 - Play Equipment LF 1484 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1484 - Play Equipment LF 1484 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1484 - Play Equipment LF 1484 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p42_LF_1484_81.png",
    "imageUrl": "/images/products/prod_p42_LF_1484_81.png",
    "thumbnails": [
      "/images/products/prod_p42_LF_1484_81.png",
      "/images/products/prod_p42_LF_1484_81.png"
    ]
  },
  {
    "id": "82",
    "slug": "lf-1485-play-equipment-lf-1485-82",
    "name": "LF 1485 - Play Equipment LF 1485",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1485 - Play Equipment LF 1485 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1485 - Play Equipment LF 1485 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1485 - Play Equipment LF 1485 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p42_LF_1485_82.png",
    "imageUrl": "/images/products/prod_p42_LF_1485_82.png",
    "thumbnails": [
      "/images/products/prod_p42_LF_1485_82.png",
      "/images/products/prod_p42_LF_1485_82.png"
    ]
  },
  {
    "id": "83",
    "slug": "lf-1486-play-equipment-lf-1486-83",
    "name": "LF 1486 - Play Equipment LF 1486",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 1486 - Play Equipment LF 1486 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1486 - Play Equipment LF 1486 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1486 - Play Equipment LF 1486 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p42_LF_1486_83.png",
    "imageUrl": "/images/products/prod_p42_LF_1486_83.png",
    "thumbnails": [
      "/images/products/prod_p42_LF_1486_83.png",
      "/images/products/prod_p42_LF_1486_83.png"
    ]
  },
  {
    "id": "84",
    "slug": "lf-0421-play-animal-seating-84",
    "name": "LF 0421 - Play Animal Seating",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0421 - Play Animal Seating is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0421 - Play Animal Seating features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0421 - Play Animal Seating is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p43_LF_0421_84.png",
    "imageUrl": "/images/products/prod_p43_LF_0421_84.png",
    "thumbnails": [
      "/images/products/prod_p43_LF_0421_84.png",
      "/images/products/prod_p43_LF_0421_84.png"
    ]
  },
  {
    "id": "85",
    "slug": "lf-0422-play-crocodile-seating-85",
    "name": "LF 0422 - Play Crocodile Seating",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0422 - Play Crocodile Seating is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0422 - Play Crocodile Seating features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0422 - Play Crocodile Seating is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p43_LF_0422_85.png",
    "imageUrl": "/images/products/prod_p43_LF_0422_85.png",
    "thumbnails": [
      "/images/products/prod_p43_LF_0422_85.png",
      "/images/products/prod_p43_LF_0422_85.png"
    ]
  },
  {
    "id": "86",
    "slug": "lf-0423-play-slark-seating-86",
    "name": "LF 0423 - Play Slark Seating",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 0423 - Play Slark Seating is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 0423 - Play Slark Seating features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 0423 - Play Slark Seating is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p43_LF_0423_86.png",
    "imageUrl": "/images/products/prod_p43_LF_0423_86.png",
    "thumbnails": [
      "/images/products/prod_p43_LF_0423_86.png",
      "/images/products/prod_p43_LF_0423_86.png"
    ]
  },
  {
    "id": "87",
    "slug": "lf-960-play-equipment-lf-960-87",
    "name": "LF 960 - Play Equipment LF 960",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 960 - Play Equipment LF 960 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 960 - Play Equipment LF 960 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 960 - Play Equipment LF 960 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p44_LF_960_87.png",
    "imageUrl": "/images/products/prod_p44_LF_960_87.png",
    "thumbnails": [
      "/images/products/prod_p44_LF_960_87.png",
      "/images/products/prod_p44_LF_960_87.png"
    ]
  },
  {
    "id": "88",
    "slug": "lf-136-play-equipment-lf-136-88",
    "name": "LF 136 - Play Equipment LF 136",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 136 - Play Equipment LF 136 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 136 - Play Equipment LF 136 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 136 - Play Equipment LF 136 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p45_LF_136_88.png",
    "imageUrl": "/images/products/prod_p45_LF_136_88.png",
    "thumbnails": [
      "/images/products/prod_p45_LF_136_88.png",
      "/images/products/prod_p45_LF_136_88.png"
    ]
  },
  {
    "id": "89",
    "slug": "lf-507-children-bed-89",
    "name": "LF 507 - Children Bed",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 507 - Children Bed is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 507 - Children Bed features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 507 - Children Bed is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p45_LF_507_89.png",
    "imageUrl": "/images/products/prod_p45_LF_507_89.png",
    "thumbnails": [
      "/images/products/prod_p45_LF_507_89.png",
      "/images/products/prod_p45_LF_507_89.png"
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
    "shortDescription": "LF 106 - Plastic Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 106 - Plastic Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 106 - Plastic Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_106_90.png",
    "imageUrl": "/images/products/prod_p46_LF_106_90.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_106_90.png",
      "/images/products/prod_p46_LF_106_90.png"
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
    "shortDescription": "LF 116 - Plastic Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 116 - Plastic Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 116 - Plastic Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_116_91.png",
    "imageUrl": "/images/products/prod_p46_LF_116_91.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_116_91.png",
      "/images/products/prod_p46_LF_116_91.png"
    ]
  },
  {
    "id": "92",
    "slug": "lf-186-play-equipment-lf-186-92",
    "name": "LF 186 - Play Equipment LF 186",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 186 - Play Equipment LF 186 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 186 - Play Equipment LF 186 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 186 - Play Equipment LF 186 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p46_LF_186_92.png",
    "imageUrl": "/images/products/prod_p46_LF_186_92.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_186_92.png",
      "/images/products/prod_p46_LF_186_92.png"
    ]
  },
  {
    "id": "93",
    "slug": "lf-146-play-equipment-lf-146-93",
    "name": "LF 146 - Play Equipment LF 146",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 146 - Play Equipment LF 146 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 146 - Play Equipment LF 146 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 146 - Play Equipment LF 146 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p46_LF_146_93.png",
    "imageUrl": "/images/products/prod_p46_LF_146_93.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_146_93.png",
      "/images/products/prod_p46_LF_146_93.png"
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
    "shortDescription": "LF 176 - Metal Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 176 - Metal Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 176 - Metal Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_176_94.png",
    "imageUrl": "/images/products/prod_p46_LF_176_94.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_176_94.png",
      "/images/products/prod_p46_LF_176_94.png"
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
    "shortDescription": "LF 126 - Plastic Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 126 - Plastic Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 126 - Plastic Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_126_95.png",
    "imageUrl": "/images/products/prod_p46_LF_126_95.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_126_95.png",
      "/images/products/prod_p46_LF_126_95.png"
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
    "shortDescription": "LF 127 - Plastic Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 127 - Plastic Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 127 - Plastic Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_127_96.png",
    "imageUrl": "/images/products/prod_p46_LF_127_96.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_127_96.png",
      "/images/products/prod_p46_LF_127_96.png"
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
    "shortDescription": "LF 156 - Metal Handle Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 156 - Metal Handle Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 156 - Metal Handle Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_156_97.png",
    "imageUrl": "/images/products/prod_p46_LF_156_97.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_156_97.png",
      "/images/products/prod_p46_LF_156_97.png"
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
    "shortDescription": "LF 166 - Metal Handle Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 166 - Metal Handle Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 166 - Metal Handle Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_166_98.png",
    "imageUrl": "/images/products/prod_p46_LF_166_98.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_166_98.png",
      "/images/products/prod_p46_LF_166_98.png"
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
    "shortDescription": "LF 129 - Plastic Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 129 - Plastic Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 129 - Plastic Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_129_99.png",
    "imageUrl": "/images/products/prod_p46_LF_129_99.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_129_99.png",
      "/images/products/prod_p46_LF_129_99.png"
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
    "shortDescription": "LF 128 - Plastic Chair is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 128 - Plastic Chair features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 128 - Plastic Chair is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p46_LF_128_100.png",
    "imageUrl": "/images/products/prod_p46_LF_128_100.png",
    "thumbnails": [
      "/images/products/prod_p46_LF_128_100.png",
      "/images/products/prod_p46_LF_128_100.png"
    ]
  },
  {
    "id": "101",
    "slug": "lf-801-mini-home-kitchen-playhouse-101",
    "name": "LF 801 - Mini Home & Kitchen Playhouse",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 801 - Mini Home & Kitchen Playhouse is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 801 - Mini Home & Kitchen Playhouse features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 801 - Mini Home & Kitchen Playhouse is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p47_LF_801_101.png",
    "imageUrl": "/images/products/prod_p47_LF_801_101.png",
    "thumbnails": [
      "/images/products/prod_p47_LF_801_101.png",
      "/images/products/prod_p47_LF_801_101.png"
    ]
  },
  {
    "id": "102",
    "slug": "lf-802-junior-living-house-102",
    "name": "LF 802 - Junior Living House",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 802 - Junior Living House is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 802 - Junior Living House features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 802 - Junior Living House is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p47_LF_802_102.png",
    "imageUrl": "/images/products/prod_p47_LF_802_102.png",
    "thumbnails": [
      "/images/products/prod_p47_LF_802_102.png",
      "/images/products/prod_p47_LF_802_102.png"
    ]
  },
  {
    "id": "103",
    "slug": "lf-901-play-equipment-lf-901-103",
    "name": "LF 901 - Play Equipment LF 901",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 901 - Play Equipment LF 901 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 901 - Play Equipment LF 901 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 901 - Play Equipment LF 901 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p48_LF_901_103.png",
    "imageUrl": "/images/products/prod_p48_LF_901_103.png",
    "thumbnails": [
      "/images/products/prod_p48_LF_901_103.png",
      "/images/products/prod_p48_LF_901_103.png"
    ]
  },
  {
    "id": "104",
    "slug": "lf-902-size-l103xw109xh131-cm-104",
    "name": "LF 902 - Size L103xW109xH131 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 902 - Size L103xW109xH131 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 902 - Size L103xW109xH131 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 902 - Size L103xW109xH131 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p48_LF_902_104.png",
    "imageUrl": "/images/products/prod_p48_LF_902_104.png",
    "thumbnails": [
      "/images/products/prod_p48_LF_902_104.png",
      "/images/products/prod_p48_LF_902_104.png"
    ]
  },
  {
    "id": "105",
    "slug": "lf-903-royal-cottage-105",
    "name": "LF 903 - Royal Cottage",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 903 - Royal Cottage is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 903 - Royal Cottage features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 903 - Royal Cottage is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p49_LF_903_105.png",
    "imageUrl": "/images/products/prod_p49_LF_903_105.png",
    "thumbnails": [
      "/images/products/prod_p49_LF_903_105.png",
      "/images/products/prod_p49_LF_903_105.png"
    ]
  },
  {
    "id": "106",
    "slug": "lf-904-classic-cottage-106",
    "name": "LF 904 - Classic Cottage",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 904 - Classic Cottage is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 904 - Classic Cottage features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 904 - Classic Cottage is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p49_LF_904_106.png",
    "imageUrl": "/images/products/prod_p49_LF_904_106.png",
    "thumbnails": [
      "/images/products/prod_p49_LF_904_106.png",
      "/images/products/prod_p49_LF_904_106.png"
    ]
  },
  {
    "id": "107",
    "slug": "lf-102-size-l204xw220xh180-cm-107",
    "name": "LF 102 - Size L204xW220xH180 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 102 - Size L204xW220xH180 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 102 - Size L204xW220xH180 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 102 - Size L204xW220xH180 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p50_LF_102_107.png",
    "imageUrl": "/images/products/prod_p50_LF_102_107.png",
    "thumbnails": [
      "/images/products/prod_p50_LF_102_107.png",
      "/images/products/prod_p50_LF_102_107.png"
    ]
  },
  {
    "id": "108",
    "slug": "lf-103-size-l274xw116xh134-cm-108",
    "name": "LF 103 - Size L274xW116xH134 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 103 - Size L274xW116xH134 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 103 - Size L274xW116xH134 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 103 - Size L274xW116xH134 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p50_LF_103_108.png",
    "imageUrl": "/images/products/prod_p50_LF_103_108.png",
    "thumbnails": [
      "/images/products/prod_p50_LF_103_108.png",
      "/images/products/prod_p50_LF_103_108.png"
    ]
  },
  {
    "id": "109",
    "slug": "lf-105-size-l274xw213xh152-cm-109",
    "name": "LF 105 - Size L274xW213xH152 CM",
    "price": "Quote on Request",
    "category": "Indoor Play Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 105 - Size L274xW213xH152 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 105 - Size L274xW213xH152 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 105 - Size L274xW213xH152 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p50_LF_105_109.png",
    "imageUrl": "/images/products/prod_p50_LF_105_109.png",
    "thumbnails": [
      "/images/products/prod_p50_LF_105_109.png",
      "/images/products/prod_p50_LF_105_109.png"
    ]
  },
  {
    "id": "110",
    "slug": "lf-101-play-equipment-lf-101-110",
    "name": "LF 101 - Play Equipment LF 101",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 101 - Play Equipment LF 101 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 101 - Play Equipment LF 101 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 101 - Play Equipment LF 101 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p51_LF_101_110.png",
    "imageUrl": "/images/products/prod_p51_LF_101_110.png",
    "thumbnails": [
      "/images/products/prod_p51_LF_101_110.png",
      "/images/products/prod_p51_LF_101_110.png"
    ]
  },
  {
    "id": "111",
    "slug": "lf-912-rabbit-slide-111",
    "name": "LF 912 - Rabbit Slide",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 912 - Rabbit Slide is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 912 - Rabbit Slide features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 912 - Rabbit Slide is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p52_LF_912_111.png",
    "imageUrl": "/images/products/prod_p52_LF_912_111.png",
    "thumbnails": [
      "/images/products/prod_p52_LF_912_111.png",
      "/images/products/prod_p52_LF_912_111.png"
    ]
  },
  {
    "id": "112",
    "slug": "lf-911-junior-slide-112",
    "name": "LF 911 - Junior Slide",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 911 - Junior Slide is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 911 - Junior Slide features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 911 - Junior Slide is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p52_LF_911_112.png",
    "imageUrl": "/images/products/prod_p52_LF_911_112.png",
    "thumbnails": [
      "/images/products/prod_p52_LF_911_112.png",
      "/images/products/prod_p52_LF_911_112.png"
    ]
  },
  {
    "id": "113",
    "slug": "lf-915-play-equipment-lf-915-113",
    "name": "LF 915 - Play Equipment LF 915",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 915 - Play Equipment LF 915 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 915 - Play Equipment LF 915 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 915 - Play Equipment LF 915 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p53_LF_915_113.png",
    "imageUrl": "/images/products/prod_p53_LF_915_113.png",
    "thumbnails": [
      "/images/products/prod_p53_LF_915_113.png",
      "/images/products/prod_p53_LF_915_113.png"
    ]
  },
  {
    "id": "114",
    "slug": "lf-917-play-equipment-lf-917-114",
    "name": "LF 917 - Play Equipment LF 917",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 917 - Play Equipment LF 917 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 917 - Play Equipment LF 917 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 917 - Play Equipment LF 917 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p53_LF_917_114.png",
    "imageUrl": "/images/products/prod_p53_LF_917_114.png",
    "thumbnails": [
      "/images/products/prod_p53_LF_917_114.png",
      "/images/products/prod_p53_LF_917_114.png"
    ]
  },
  {
    "id": "115",
    "slug": "lf-916-play-equipment-lf-916-115",
    "name": "LF 916 - Play Equipment LF 916",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 916 - Play Equipment LF 916 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 916 - Play Equipment LF 916 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 916 - Play Equipment LF 916 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p53_LF_916_115.png",
    "imageUrl": "/images/products/prod_p53_LF_916_115.png",
    "thumbnails": [
      "/images/products/prod_p53_LF_916_115.png",
      "/images/products/prod_p53_LF_916_115.png"
    ]
  },
  {
    "id": "116",
    "slug": "lf-924-play-equipment-lf-924-116",
    "name": "LF 924 - Play Equipment LF 924",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 924 - Play Equipment LF 924 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 924 - Play Equipment LF 924 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 924 - Play Equipment LF 924 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p54_LF_924_116.png",
    "imageUrl": "/images/products/prod_p54_LF_924_116.png",
    "thumbnails": [
      "/images/products/prod_p54_LF_924_116.png",
      "/images/products/prod_p54_LF_924_116.png"
    ]
  },
  {
    "id": "117",
    "slug": "lf-922-play-equipment-lf-922-117",
    "name": "LF 922 - Play Equipment LF 922",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 922 - Play Equipment LF 922 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 922 - Play Equipment LF 922 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 922 - Play Equipment LF 922 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p54_LF_922_117.png",
    "imageUrl": "/images/products/prod_p54_LF_922_117.png",
    "thumbnails": [
      "/images/products/prod_p54_LF_922_117.png",
      "/images/products/prod_p54_LF_922_117.png"
    ]
  },
  {
    "id": "118",
    "slug": "lf-921-size-l78xw94xh113-cm-118",
    "name": "LF 921 - Size L78xW94xH113 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 921 - Size L78xW94xH113 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 921 - Size L78xW94xH113 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 921 - Size L78xW94xH113 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p54_LF_921_118.png",
    "imageUrl": "/images/products/prod_p54_LF_921_118.png",
    "thumbnails": [
      "/images/products/prod_p54_LF_921_118.png",
      "/images/products/prod_p54_LF_921_118.png"
    ]
  },
  {
    "id": "119",
    "slug": "lf-919-size-l78xw94xh113-cm-119",
    "name": "LF 919 - Size L78xW94xH113 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 919 - Size L78xW94xH113 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 919 - Size L78xW94xH113 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 919 - Size L78xW94xH113 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p54_LF_919_119.png",
    "imageUrl": "/images/products/prod_p54_LF_919_119.png",
    "thumbnails": [
      "/images/products/prod_p54_LF_919_119.png",
      "/images/products/prod_p54_LF_919_119.png"
    ]
  },
  {
    "id": "120",
    "slug": "lf-920-dolphin-slide-with-swing-120",
    "name": "LF 920 - Dolphin Slide with Swing",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 920 - Dolphin Slide with Swing is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 920 - Dolphin Slide with Swing features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 920 - Dolphin Slide with Swing is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p54_LF_920_120.png",
    "imageUrl": "/images/products/prod_p54_LF_920_120.png",
    "thumbnails": [
      "/images/products/prod_p54_LF_920_120.png",
      "/images/products/prod_p54_LF_920_120.png"
    ]
  },
  {
    "id": "121",
    "slug": "lf-923-dolphin-swing-121",
    "name": "LF 923 - Dolphin Swing",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 923 - Dolphin Swing is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 923 - Dolphin Swing features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 923 - Dolphin Swing is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p54_LF_923_121.png",
    "imageUrl": "/images/products/prod_p54_LF_923_121.png",
    "thumbnails": [
      "/images/products/prod_p54_LF_923_121.png",
      "/images/products/prod_p54_LF_923_121.png"
    ]
  },
  {
    "id": "122",
    "slug": "lf-990-size-l162xw73xh96-cm-122",
    "name": "LF 990 - Size L162xW73xH96 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 990 - Size L162xW73xH96 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 990 - Size L162xW73xH96 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 990 - Size L162xW73xH96 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p55_LF_990_122.png",
    "imageUrl": "/images/products/prod_p55_LF_990_122.png",
    "thumbnails": [
      "/images/products/prod_p55_LF_990_122.png",
      "/images/products/prod_p55_LF_990_122.png"
    ]
  },
  {
    "id": "123",
    "slug": "lf-972-size-l160xw85xh110-cm-123",
    "name": "LF 972 - Size L160xW85xH110 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 972 - Size L160xW85xH110 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 972 - Size L160xW85xH110 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 972 - Size L160xW85xH110 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p55_LF_972_123.png",
    "imageUrl": "/images/products/prod_p55_LF_972_123.png",
    "thumbnails": [
      "/images/products/prod_p55_LF_972_123.png",
      "/images/products/prod_p55_LF_972_123.png"
    ]
  },
  {
    "id": "124",
    "slug": "lf-971-size-l168xw86xh114-cm-124",
    "name": "LF 971 - Size L168xW86xH114 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 971 - Size L168xW86xH114 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 971 - Size L168xW86xH114 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 971 - Size L168xW86xH114 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p55_LF_971_124.png",
    "imageUrl": "/images/products/prod_p55_LF_971_124.png",
    "thumbnails": [
      "/images/products/prod_p55_LF_971_124.png",
      "/images/products/prod_p55_LF_971_124.png"
    ]
  },
  {
    "id": "125",
    "slug": "lf-970-size-l168xw86xh108-cm-125",
    "name": "LF 970 - Size L168xW86xH108 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 970 - Size L168xW86xH108 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 970 - Size L168xW86xH108 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 970 - Size L168xW86xH108 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p55_LF_970_125.png",
    "imageUrl": "/images/products/prod_p55_LF_970_125.png",
    "thumbnails": [
      "/images/products/prod_p55_LF_970_125.png",
      "/images/products/prod_p55_LF_970_125.png"
    ]
  },
  {
    "id": "126",
    "slug": "lf-976-play-equipment-lf-976-126",
    "name": "LF 976 - Play Equipment LF 976",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 976 - Play Equipment LF 976 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 976 - Play Equipment LF 976 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 976 - Play Equipment LF 976 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p56_LF_976_126.png",
    "imageUrl": "/images/products/prod_p56_LF_976_126.png",
    "thumbnails": [
      "/images/products/prod_p56_LF_976_126.png",
      "/images/products/prod_p56_LF_976_126.png"
    ]
  },
  {
    "id": "127",
    "slug": "lf-973-size-l160xw170xh114-cm-127",
    "name": "LF 973 - Size L160XW170xH114 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 973 - Size L160XW170xH114 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 973 - Size L160XW170xH114 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 973 - Size L160XW170xH114 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p56_LF_973_127.png",
    "imageUrl": "/images/products/prod_p56_LF_973_127.png",
    "thumbnails": [
      "/images/products/prod_p56_LF_973_127.png",
      "/images/products/prod_p56_LF_973_127.png"
    ]
  },
  {
    "id": "128",
    "slug": "lf-975-multicolour-slide-with-swing-128",
    "name": "LF 975 - Multicolour Slide with Swing",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 975 - Multicolour Slide with Swing is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 975 - Multicolour Slide with Swing features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 975 - Multicolour Slide with Swing is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p56_LF_975_128.png",
    "imageUrl": "/images/products/prod_p56_LF_975_128.png",
    "thumbnails": [
      "/images/products/prod_p56_LF_975_128.png",
      "/images/products/prod_p56_LF_975_128.png"
    ]
  },
  {
    "id": "129",
    "slug": "lf-978-multicolour-swing-129",
    "name": "LF 978 - Multicolour Swing",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 978 - Multicolour Swing is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 978 - Multicolour Swing features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 978 - Multicolour Swing is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p56_LF_978_129.png",
    "imageUrl": "/images/products/prod_p56_LF_978_129.png",
    "thumbnails": [
      "/images/products/prod_p56_LF_978_129.png",
      "/images/products/prod_p56_LF_978_129.png"
    ]
  },
  {
    "id": "130",
    "slug": "lf-977-play-equipment-lf-977-130",
    "name": "LF 977 - Play Equipment LF 977",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 977 - Play Equipment LF 977 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 977 - Play Equipment LF 977 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 977 - Play Equipment LF 977 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p56_LF_977_130.png",
    "imageUrl": "/images/products/prod_p56_LF_977_130.png",
    "thumbnails": [
      "/images/products/prod_p56_LF_977_130.png",
      "/images/products/prod_p56_LF_977_130.png"
    ]
  },
  {
    "id": "131",
    "slug": "lf-974-size-l160xw170xh114-cm-131",
    "name": "LF 974 - Size L160XW170xH114 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 974 - Size L160XW170xH114 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 974 - Size L160XW170xH114 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 974 - Size L160XW170xH114 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p56_LF_974_131.png",
    "imageUrl": "/images/products/prod_p56_LF_974_131.png",
    "thumbnails": [
      "/images/products/prod_p56_LF_974_131.png",
      "/images/products/prod_p56_LF_974_131.png"
    ]
  },
  {
    "id": "132",
    "slug": "lf-934-a-size-l91xw43xh81-cm-132",
    "name": "LF 934-A - Size L91xW43xH81 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 934-A - Size L91xW43xH81 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 934-A - Size L91xW43xH81 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 934-A - Size L91xW43xH81 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p57_LF_934_A_132.png",
    "imageUrl": "/images/products/prod_p57_LF_934_A_132.png",
    "thumbnails": [
      "/images/products/prod_p57_LF_934_A_132.png",
      "/images/products/prod_p57_LF_934_A_132.png"
    ]
  },
  {
    "id": "133",
    "slug": "lf-9053-2-toy-shelf-133",
    "name": "LF 9053-2 - Toy Shelf",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9053-2 - Toy Shelf is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 9053-2 - Toy Shelf features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 9053-2 - Toy Shelf is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p57_LF_9053_2_133.png",
    "imageUrl": "/images/products/prod_p57_LF_9053_2_133.png",
    "thumbnails": [
      "/images/products/prod_p57_LF_9053_2_133.png",
      "/images/products/prod_p57_LF_9053_2_133.png"
    ]
  },
  {
    "id": "134",
    "slug": "lf-9130-5-play-equipment-lf-9130-5-134",
    "name": "LF 9130-5 - Play Equipment LF 9130-5",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9130-5 - Play Equipment LF 9130-5 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 9130-5 - Play Equipment LF 9130-5 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 9130-5 - Play Equipment LF 9130-5 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p57_LF_9130_5_134.png",
    "imageUrl": "/images/products/prod_p57_LF_9130_5_134.png",
    "thumbnails": [
      "/images/products/prod_p57_LF_9130_5_134.png",
      "/images/products/prod_p57_LF_9130_5_134.png"
    ]
  },
  {
    "id": "135",
    "slug": "lf-998-size-l52xw66xh87-cm-135",
    "name": "LF 998 - Size L52xW66xH87 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 998 - Size L52xW66xH87 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 998 - Size L52xW66xH87 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 998 - Size L52xW66xH87 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p57_LF_998_135.png",
    "imageUrl": "/images/products/prod_p57_LF_998_135.png",
    "thumbnails": [
      "/images/products/prod_p57_LF_998_135.png",
      "/images/products/prod_p57_LF_998_135.png"
    ]
  },
  {
    "id": "136",
    "slug": "lf-999-size-l33xw33xh73-cm-136",
    "name": "LF 999 - Size L33xW33xH73 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 999 - Size L33xW33xH73 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 999 - Size L33xW33xH73 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 999 - Size L33xW33xH73 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p57_LF_999_136.png",
    "imageUrl": "/images/products/prod_p57_LF_999_136.png",
    "thumbnails": [
      "/images/products/prod_p57_LF_999_136.png",
      "/images/products/prod_p57_LF_999_136.png"
    ]
  },
  {
    "id": "137",
    "slug": "lf-999b-size-l30xw30xh101-cm-137",
    "name": "LF 999B - Size L30xW30xH101 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 999B - Size L30xW30xH101 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 999B - Size L30xW30xH101 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 999B - Size L30xW30xH101 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p57_LF_999B_137.png",
    "imageUrl": "/images/products/prod_p57_LF_999B_137.png",
    "thumbnails": [
      "/images/products/prod_p57_LF_999B_137.png",
      "/images/products/prod_p57_LF_999B_137.png"
    ]
  },
  {
    "id": "138",
    "slug": "lf-932a-multicolor-tunnel-138",
    "name": "LF 932A - Multicolor Tunnel",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 932A - Multicolor Tunnel is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 932A - Multicolor Tunnel features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 932A - Multicolor Tunnel is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p58_LF_932A_138.png",
    "imageUrl": "/images/products/prod_p58_LF_932A_138.png",
    "thumbnails": [
      "/images/products/prod_p58_LF_932A_138.png",
      "/images/products/prod_p58_LF_932A_138.png"
    ]
  },
  {
    "id": "139",
    "slug": "lf-932b-caterpillar-tunnel-139",
    "name": "LF 932B - Caterpillar Tunnel",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 932B - Caterpillar Tunnel is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 932B - Caterpillar Tunnel features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 932B - Caterpillar Tunnel is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p58_LF_932B_139.png",
    "imageUrl": "/images/products/prod_p58_LF_932B_139.png",
    "thumbnails": [
      "/images/products/prod_p58_LF_932B_139.png",
      "/images/products/prod_p58_LF_932B_139.png"
    ]
  },
  {
    "id": "140",
    "slug": "lf-450-roller-coaster-rideon-140",
    "name": "LF 450 - Roller Coaster Rideon",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 450 - Roller Coaster Rideon is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 450 - Roller Coaster Rideon features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 450 - Roller Coaster Rideon is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p58_LF_450_140.png",
    "imageUrl": "/images/products/prod_p58_LF_450_140.png",
    "thumbnails": [
      "/images/products/prod_p58_LF_450_140.png",
      "/images/products/prod_p58_LF_450_140.png"
    ]
  },
  {
    "id": "141",
    "slug": "lf-9126-play-equipment-lf-9126-141",
    "name": "LF 9126 - Play Equipment LF 9126",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9126 - Play Equipment LF 9126 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 9126 - Play Equipment LF 9126 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 9126 - Play Equipment LF 9126 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p58_LF_9126_141.png",
    "imageUrl": "/images/products/prod_p58_LF_9126_141.png",
    "thumbnails": [
      "/images/products/prod_p58_LF_9126_141.png",
      "/images/products/prod_p58_LF_9126_141.png"
    ]
  },
  {
    "id": "142",
    "slug": "lf-9052-a-quarter-round-142",
    "name": "LF 9052-A - Quarter Round",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9052-A - Quarter Round is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 9052-A - Quarter Round features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 9052-A - Quarter Round is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p58_LF_9052_A_142.png",
    "imageUrl": "/images/products/prod_p58_LF_9052_A_142.png",
    "thumbnails": [
      "/images/products/prod_p58_LF_9052_A_142.png",
      "/images/products/prod_p58_LF_9052_A_142.png"
    ]
  },
  {
    "id": "143",
    "slug": "lf-925d-play-equipment-lf-925d-143",
    "name": "LF 925D - Play Equipment LF 925D",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 925D - Play Equipment LF 925D is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 925D - Play Equipment LF 925D features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 925D - Play Equipment LF 925D is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_925D_143.png",
    "imageUrl": "/images/products/prod_p59_LF_925D_143.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_925D_143.png",
      "/images/products/prod_p59_LF_925D_143.png"
    ]
  },
  {
    "id": "144",
    "slug": "lf-629-play-equipment-lf-629-144",
    "name": "LF 629 - Play Equipment LF 629",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 629 - Play Equipment LF 629 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 629 - Play Equipment LF 629 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 629 - Play Equipment LF 629 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_629_144.png",
    "imageUrl": "/images/products/prod_p59_LF_629_144.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_629_144.png",
      "/images/products/prod_p59_LF_629_144.png"
    ]
  },
  {
    "id": "145",
    "slug": "lf-925b-elephant-rocker-145",
    "name": "LF 925B - Elephant Rocker",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 925B - Elephant Rocker is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 925B - Elephant Rocker features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 925B - Elephant Rocker is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_925B_145.png",
    "imageUrl": "/images/products/prod_p59_LF_925B_145.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_925B_145.png",
      "/images/products/prod_p59_LF_925B_145.png"
    ]
  },
  {
    "id": "146",
    "slug": "lf-925c-fish-rocker-146",
    "name": "LF 925C - Fish Rocker",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 925C - Fish Rocker is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 925C - Fish Rocker features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 925C - Fish Rocker is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_925C_146.png",
    "imageUrl": "/images/products/prod_p59_LF_925C_146.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_925C_146.png",
      "/images/products/prod_p59_LF_925C_146.png"
    ]
  },
  {
    "id": "147",
    "slug": "lf-925a-play-equipment-lf-925a-147",
    "name": "LF 925A - Play Equipment LF 925A",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 925A - Play Equipment LF 925A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 925A - Play Equipment LF 925A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 925A - Play Equipment LF 925A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_925A_147.png",
    "imageUrl": "/images/products/prod_p59_LF_925A_147.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_925A_147.png",
      "/images/products/prod_p59_LF_925A_147.png"
    ]
  },
  {
    "id": "148",
    "slug": "lf-628-play-equipment-lf-628-148",
    "name": "LF 628 - Play Equipment LF 628",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 628 - Play Equipment LF 628 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 628 - Play Equipment LF 628 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 628 - Play Equipment LF 628 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_628_148.png",
    "imageUrl": "/images/products/prod_p59_LF_628_148.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_628_148.png",
      "/images/products/prod_p59_LF_628_148.png"
    ]
  },
  {
    "id": "149",
    "slug": "lf-627-rideon-rocker-149",
    "name": "LF 627 - Rideon Rocker",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 627 - Rideon Rocker is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 627 - Rideon Rocker features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 627 - Rideon Rocker is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_627_149.png",
    "imageUrl": "/images/products/prod_p59_LF_627_149.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_627_149.png",
      "/images/products/prod_p59_LF_627_149.png"
    ]
  },
  {
    "id": "150",
    "slug": "lf-627a-rocker-with-handle-150",
    "name": "LF 627A - Rocker with Handle",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 627A - Rocker with Handle is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 627A - Rocker with Handle features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 627A - Rocker with Handle is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_627A_150.png",
    "imageUrl": "/images/products/prod_p59_LF_627A_150.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_627A_150.png",
      "/images/products/prod_p59_LF_627A_150.png"
    ]
  },
  {
    "id": "151",
    "slug": "lf-624-play-equipment-lf-624-151",
    "name": "LF 624 - Play Equipment LF 624",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 624 - Play Equipment LF 624 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 624 - Play Equipment LF 624 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 624 - Play Equipment LF 624 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p59_LF_624_151.png",
    "imageUrl": "/images/products/prod_p59_LF_624_151.png",
    "thumbnails": [
      "/images/products/prod_p59_LF_624_151.png",
      "/images/products/prod_p59_LF_624_151.png"
    ]
  },
  {
    "id": "152",
    "slug": "lf-108b-size-l110xw39xh45-cm-152",
    "name": "LF 108B - Size L110xW39xH45 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 108B - Size L110xW39xH45 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 108B - Size L110xW39xH45 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 108B - Size L110xW39xH45 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p60_LF_108B_152.png",
    "imageUrl": "/images/products/prod_p60_LF_108B_152.png",
    "thumbnails": [
      "/images/products/prod_p60_LF_108B_152.png",
      "/images/products/prod_p60_LF_108B_152.png"
    ]
  },
  {
    "id": "153",
    "slug": "lf-9122-3-size-l91xw27xh89-cm-153",
    "name": "LF 9122-3 - Size L91xW27xH89 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 9122-3 - Size L91xW27xH89 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 9122-3 - Size L91xW27xH89 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 9122-3 - Size L91xW27xH89 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p60_LF_9122_3_153.png",
    "imageUrl": "/images/products/prod_p60_LF_9122_3_153.png",
    "thumbnails": [
      "/images/products/prod_p60_LF_9122_3_153.png",
      "/images/products/prod_p60_LF_9122_3_153.png"
    ]
  },
  {
    "id": "154",
    "slug": "lf-417-play-equipment-lf-417-154",
    "name": "LF 417 - Play Equipment LF 417",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 417 - Play Equipment LF 417 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 417 - Play Equipment LF 417 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 417 - Play Equipment LF 417 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p60_LF_417_154.png",
    "imageUrl": "/images/products/prod_p60_LF_417_154.png",
    "thumbnails": [
      "/images/products/prod_p60_LF_417_154.png",
      "/images/products/prod_p60_LF_417_154.png"
    ]
  },
  {
    "id": "155",
    "slug": "lf-416-play-equipment-lf-416-155",
    "name": "LF 416 - Play Equipment LF 416",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 416 - Play Equipment LF 416 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 416 - Play Equipment LF 416 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 416 - Play Equipment LF 416 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p60_LF_416_155.png",
    "imageUrl": "/images/products/prod_p60_LF_416_155.png",
    "thumbnails": [
      "/images/products/prod_p60_LF_416_155.png",
      "/images/products/prod_p60_LF_416_155.png"
    ]
  },
  {
    "id": "156",
    "slug": "lf-419-size-l150xw32xh60-cm-156",
    "name": "LF 419 - Size L150xW32xH60 CM",
    "price": "Quote on Request",
    "category": "Slides & Swings",
    "categoryId": "slides-swings",
    "categoryColor": "#FF6B9D",
    "shortDescription": "LF 419 - Size L150xW32xH60 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 419 - Size L150xW32xH60 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 419 - Size L150xW32xH60 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p60_LF_419_156.png",
    "imageUrl": "/images/products/prod_p60_LF_419_156.png",
    "thumbnails": [
      "/images/products/prod_p60_LF_419_156.png",
      "/images/products/prod_p60_LF_419_156.png"
    ]
  },
  {
    "id": "157",
    "slug": "lf-418-size-l76xw48xh89-cm-157",
    "name": "LF 418 - Size L76xW48xH89 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 418 - Size L76xW48xH89 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 418 - Size L76xW48xH89 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 418 - Size L76xW48xH89 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p61_LF_418_157.png",
    "imageUrl": "/images/products/prod_p61_LF_418_157.png",
    "thumbnails": [
      "/images/products/prod_p61_LF_418_157.png",
      "/images/products/prod_p61_LF_418_157.png"
    ]
  },
  {
    "id": "158",
    "slug": "lf-928b-motorcycle-158",
    "name": "LF 928B - Motorcycle",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 928B - Motorcycle is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 928B - Motorcycle features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 928B - Motorcycle is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p61_LF_928B_158.png",
    "imageUrl": "/images/products/prod_p61_LF_928B_158.png",
    "thumbnails": [
      "/images/products/prod_p61_LF_928B_158.png",
      "/images/products/prod_p61_LF_928B_158.png"
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
    "shortDescription": "LF 926A - Swing Car is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 926A - Swing Car features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 926A - Swing Car is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p61_LF_926A_159.png",
    "imageUrl": "/images/products/prod_p61_LF_926A_159.png",
    "thumbnails": [
      "/images/products/prod_p61_LF_926A_159.png",
      "/images/products/prod_p61_LF_926A_159.png"
    ]
  },
  {
    "id": "160",
    "slug": "lf-830-size-l90xw50xh95-cm-160",
    "name": "LF 830 - Size L90xW50xH95 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 830 - Size L90xW50xH95 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 830 - Size L90xW50xH95 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 830 - Size L90xW50xH95 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p61_LF_830_160.png",
    "imageUrl": "/images/products/prod_p61_LF_830_160.png",
    "thumbnails": [
      "/images/products/prod_p61_LF_830_160.png",
      "/images/products/prod_p61_LF_830_160.png"
    ]
  },
  {
    "id": "161",
    "slug": "lf-440-size-l86xw50xh50-cm-161",
    "name": "LF 440 - Size L86xW50xH50 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 440 - Size L86xW50xH50 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 440 - Size L86xW50xH50 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 440 - Size L86xW50xH50 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p61_LF_440_161.png",
    "imageUrl": "/images/products/prod_p61_LF_440_161.png",
    "thumbnails": [
      "/images/products/prod_p61_LF_440_161.png",
      "/images/products/prod_p61_LF_440_161.png"
    ]
  },
  {
    "id": "162",
    "slug": "lf-929a-play-equipment-lf-929a-162",
    "name": "LF 929A - Play Equipment LF 929A",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 929A - Play Equipment LF 929A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 929A - Play Equipment LF 929A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 929A - Play Equipment LF 929A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p62_LF_929A_162.png",
    "imageUrl": "/images/products/prod_p62_LF_929A_162.png",
    "thumbnails": [
      "/images/products/prod_p62_LF_929A_162.png",
      "/images/products/prod_p62_LF_929A_162.png"
    ]
  },
  {
    "id": "163",
    "slug": "lf-927c-play-equipment-lf-927c-163",
    "name": "LF 927C - Play Equipment LF 927C",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927C - Play Equipment LF 927C is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 927C - Play Equipment LF 927C features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 927C - Play Equipment LF 927C is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p62_LF_927C_163.png",
    "imageUrl": "/images/products/prod_p62_LF_927C_163.png",
    "thumbnails": [
      "/images/products/prod_p62_LF_927C_163.png",
      "/images/products/prod_p62_LF_927C_163.png"
    ]
  },
  {
    "id": "164",
    "slug": "lf-927e-smiley-wagon-rideon-164",
    "name": "LF 927E - Smiley wagon Rideon",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927E - Smiley wagon Rideon is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 927E - Smiley wagon Rideon features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 927E - Smiley wagon Rideon is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p62_LF_927E_164.png",
    "imageUrl": "/images/products/prod_p62_LF_927E_164.png",
    "thumbnails": [
      "/images/products/prod_p62_LF_927E_164.png",
      "/images/products/prod_p62_LF_927E_164.png"
    ]
  },
  {
    "id": "165",
    "slug": "lf-927f-horse-rideon-165",
    "name": "LF 927F - Horse Rideon",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927F - Horse Rideon is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 927F - Horse Rideon features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 927F - Horse Rideon is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p62_LF_927F_165.png",
    "imageUrl": "/images/products/prod_p62_LF_927F_165.png",
    "thumbnails": [
      "/images/products/prod_p62_LF_927F_165.png",
      "/images/products/prod_p62_LF_927F_165.png"
    ]
  },
  {
    "id": "166",
    "slug": "lf-927-d-play-equipment-lf-927-d-166",
    "name": "LF 927-D - Play Equipment LF 927-D",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927-D - Play Equipment LF 927-D is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 927-D - Play Equipment LF 927-D features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 927-D - Play Equipment LF 927-D is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p62_LF_927_D_166.png",
    "imageUrl": "/images/products/prod_p62_LF_927_D_166.png",
    "thumbnails": [
      "/images/products/prod_p62_LF_927_D_166.png",
      "/images/products/prod_p62_LF_927_D_166.png"
    ]
  },
  {
    "id": "167",
    "slug": "lf-929b-tricycle-167",
    "name": "LF 929B - Tricycle",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 929B - Tricycle is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 929B - Tricycle features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 929B - Tricycle is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p62_LF_929B_167.png",
    "imageUrl": "/images/products/prod_p62_LF_929B_167.png",
    "thumbnails": [
      "/images/products/prod_p62_LF_929B_167.png",
      "/images/products/prod_p62_LF_929B_167.png"
    ]
  },
  {
    "id": "168",
    "slug": "lf-929c-tricycle-168",
    "name": "LF 929C - Tricycle",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 929C - Tricycle is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 929C - Tricycle features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 929C - Tricycle is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p62_LF_929C_168.png",
    "imageUrl": "/images/products/prod_p62_LF_929C_168.png",
    "thumbnails": [
      "/images/products/prod_p62_LF_929C_168.png",
      "/images/products/prod_p62_LF_929C_168.png"
    ]
  },
  {
    "id": "169",
    "slug": "lf-927b-size-l55xw32xh45-cm-169",
    "name": "LF 927B - Size L55xW32xH45 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 927B - Size L55xW32xH45 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 927B - Size L55xW32xH45 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 927B - Size L55xW32xH45 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p62_LF_927B_169.png",
    "imageUrl": "/images/products/prod_p62_LF_927B_169.png",
    "thumbnails": [
      "/images/products/prod_p62_LF_927B_169.png",
      "/images/products/prod_p62_LF_927B_169.png"
    ]
  },
  {
    "id": "170",
    "slug": "lft-200p-plastic-balls-170",
    "name": "LFT 200P - Plastic Balls",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 200P - Plastic Balls is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 200P - Plastic Balls features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 200P - Plastic Balls is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p63_LFT_200P_170.png",
    "imageUrl": "/images/products/prod_p63_LFT_200P_170.png",
    "thumbnails": [
      "/images/products/prod_p63_LFT_200P_170.png",
      "/images/products/prod_p63_LFT_200P_170.png"
    ]
  },
  {
    "id": "171",
    "slug": "lft-100-plastic-balls-171",
    "name": "LFT 100 - Plastic Balls",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 100 - Plastic Balls is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 100 - Plastic Balls features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 100 - Plastic Balls is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p63_LFT_100_171.png",
    "imageUrl": "/images/products/prod_p63_LFT_100_171.png",
    "thumbnails": [
      "/images/products/prod_p63_LFT_100_171.png",
      "/images/products/prod_p63_LFT_100_171.png"
    ]
  },
  {
    "id": "172",
    "slug": "lft-444-elephant-rideon-172",
    "name": "LFT 444 - Elephant Rideon",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 444 - Elephant Rideon is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 444 - Elephant Rideon features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 444 - Elephant Rideon is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p63_LFT_444_172.png",
    "imageUrl": "/images/products/prod_p63_LFT_444_172.png",
    "thumbnails": [
      "/images/products/prod_p63_LFT_444_172.png",
      "/images/products/prod_p63_LFT_444_172.png"
    ]
  },
  {
    "id": "173",
    "slug": "lft-344-horse-rideon-173",
    "name": "LFT 344 - Horse Rideon",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 344 - Horse Rideon is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 344 - Horse Rideon features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 344 - Horse Rideon is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p63_LFT_344_173.png",
    "imageUrl": "/images/products/prod_p63_LFT_344_173.png",
    "thumbnails": [
      "/images/products/prod_p63_LFT_344_173.png",
      "/images/products/prod_p63_LFT_344_173.png"
    ]
  },
  {
    "id": "174",
    "slug": "lft-333-horse-rideon-174",
    "name": "LFT 333 - Horse Rideon",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 333 - Horse Rideon is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 333 - Horse Rideon features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 333 - Horse Rideon is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p63_LFT_333_174.png",
    "imageUrl": "/images/products/prod_p63_LFT_333_174.png",
    "thumbnails": [
      "/images/products/prod_p63_LFT_333_174.png",
      "/images/products/prod_p63_LFT_333_174.png"
    ]
  },
  {
    "id": "175",
    "slug": "lf-933-size-l67xw38xh53-cm-175",
    "name": "LF 933 - Size L67xW38xH53 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 933 - Size L67xW38xH53 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 933 - Size L67xW38xH53 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 933 - Size L67xW38xH53 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p63_LF_933_175.png",
    "imageUrl": "/images/products/prod_p63_LF_933_175.png",
    "thumbnails": [
      "/images/products/prod_p63_LF_933_175.png",
      "/images/products/prod_p63_LF_933_175.png"
    ]
  },
  {
    "id": "176",
    "slug": "lf-961a-without-ball-5-pcs-176",
    "name": "LF 961A - (Without Ball) 5 pcs",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 961A - (Without Ball) 5 pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 961A - (Without Ball) 5 pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 961A - (Without Ball) 5 pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p64_LF_961A_176.png",
    "imageUrl": "/images/products/prod_p64_LF_961A_176.png",
    "thumbnails": [
      "/images/products/prod_p64_LF_961A_176.png",
      "/images/products/prod_p64_LF_961A_176.png"
    ]
  },
  {
    "id": "177",
    "slug": "lf-101-5-without-ball-6-pcs-set-177",
    "name": "LF 101-5 - (Without Ball) 6 pcs set",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 101-5 - (Without Ball) 6 pcs set is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 101-5 - (Without Ball) 6 pcs set features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 101-5 - (Without Ball) 6 pcs set is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p64_LF_101_5_177.png",
    "imageUrl": "/images/products/prod_p64_LF_101_5_177.png",
    "thumbnails": [
      "/images/products/prod_p64_LF_101_5_177.png",
      "/images/products/prod_p64_LF_101_5_177.png"
    ]
  },
  {
    "id": "178",
    "slug": "lf-962-without-ball-6-pcs-178",
    "name": "LF 962 - (Without Ball) 6 pcs",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 962 - (Without Ball) 6 pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 962 - (Without Ball) 6 pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 962 - (Without Ball) 6 pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p64_LF_962_178.png",
    "imageUrl": "/images/products/prod_p64_LF_962_178.png",
    "thumbnails": [
      "/images/products/prod_p64_LF_962_178.png",
      "/images/products/prod_p64_LF_962_178.png"
    ]
  },
  {
    "id": "179",
    "slug": "lf-964-ball-pool-2-7m2-179",
    "name": "LF 964 - Ball Pool 2 7m2",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 964 - Ball Pool 2 7m2 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 964 - Ball Pool 2 7m2 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 964 - Ball Pool 2 7m2 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p64_LF_964_179.png",
    "imageUrl": "/images/products/prod_p64_LF_964_179.png",
    "thumbnails": [
      "/images/products/prod_p64_LF_964_179.png",
      "/images/products/prod_p64_LF_964_179.png"
    ]
  },
  {
    "id": "180",
    "slug": "lf-963-ball-pool-4-64m2-180",
    "name": "LF 963 - Ball Pool 4 64m2",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 963 - Ball Pool 4 64m2 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 963 - Ball Pool 4 64m2 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 963 - Ball Pool 4 64m2 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p64_LF_963_180.png",
    "imageUrl": "/images/products/prod_p64_LF_963_180.png",
    "thumbnails": [
      "/images/products/prod_p64_LF_963_180.png",
      "/images/products/prod_p64_LF_963_180.png"
    ]
  },
  {
    "id": "181",
    "slug": "lf-135-size-105x75-cm-set-of-4-pcs-181",
    "name": "LF 135 - Size 105x75 CM (set of 4 pcs)",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 135 - Size 105x75 CM (set of 4 pcs) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 135 - Size 105x75 CM (set of 4 pcs) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 135 - Size 105x75 CM (set of 4 pcs) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p65_LF_135_181.png",
    "imageUrl": "/images/products/prod_p65_LF_135_181.png",
    "thumbnails": [
      "/images/products/prod_p65_LF_135_181.png",
      "/images/products/prod_p65_LF_135_181.png"
    ]
  },
  {
    "id": "182",
    "slug": "lf-135b-size-105x75-cm-set-of-4-pcs-182",
    "name": "LF 135B - Size 105x75 CM (set of 4 pcs)",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 135B - Size 105x75 CM (set of 4 pcs) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 135B - Size 105x75 CM (set of 4 pcs) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 135B - Size 105x75 CM (set of 4 pcs) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p65_LF_135B_182.png",
    "imageUrl": "/images/products/prod_p65_LF_135B_182.png",
    "thumbnails": [
      "/images/products/prod_p65_LF_135B_182.png",
      "/images/products/prod_p65_LF_135B_182.png"
    ]
  },
  {
    "id": "183",
    "slug": "lf-135w-size-105x75-cm-set-of-4-pcs-183",
    "name": "LF 135W - Size 105x75 CM (set of 4 pcs)",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 135W - Size 105x75 CM (set of 4 pcs) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 135W - Size 105x75 CM (set of 4 pcs) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 135W - Size 105x75 CM (set of 4 pcs) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p65_LF_135W_183.png",
    "imageUrl": "/images/products/prod_p65_LF_135W_183.png",
    "thumbnails": [
      "/images/products/prod_p65_LF_135W_183.png",
      "/images/products/prod_p65_LF_135W_183.png"
    ]
  },
  {
    "id": "184",
    "slug": "lf-377-size-l81xw94xh30-cm-184",
    "name": "LF 377 - Size L81xW94xH30 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 377 - Size L81xW94xH30 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 377 - Size L81xW94xH30 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 377 - Size L81xW94xH30 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p66_LF_377_184.png",
    "imageUrl": "/images/products/prod_p66_LF_377_184.png",
    "thumbnails": [
      "/images/products/prod_p66_LF_377_184.png",
      "/images/products/prod_p66_LF_377_184.png"
    ]
  },
  {
    "id": "185",
    "slug": "lf-378-size-l96xw96xh30-cm-185",
    "name": "LF 378 - Size L96xW96xH30 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 378 - Size L96xW96xH30 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 378 - Size L96xW96xH30 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 378 - Size L96xW96xH30 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p66_LF_378_185.png",
    "imageUrl": "/images/products/prod_p66_LF_378_185.png",
    "thumbnails": [
      "/images/products/prod_p66_LF_378_185.png",
      "/images/products/prod_p66_LF_378_185.png"
    ]
  },
  {
    "id": "186",
    "slug": "lf-380-size-l104xw110xh35-cm-186",
    "name": "LF 380 - Size L104xW110xH35 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 380 - Size L104xW110xH35 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 380 - Size L104xW110xH35 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 380 - Size L104xW110xH35 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p66_LF_380_186.png",
    "imageUrl": "/images/products/prod_p66_LF_380_186.png",
    "thumbnails": [
      "/images/products/prod_p66_LF_380_186.png",
      "/images/products/prod_p66_LF_380_186.png"
    ]
  },
  {
    "id": "187",
    "slug": "lf-379-size-l101xw101xh30-cm-187",
    "name": "LF 379 - Size L101xW101xH30 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 379 - Size L101xW101xH30 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 379 - Size L101xW101xH30 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 379 - Size L101xW101xH30 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p66_LF_379_187.png",
    "imageUrl": "/images/products/prod_p66_LF_379_187.png",
    "thumbnails": [
      "/images/products/prod_p66_LF_379_187.png",
      "/images/products/prod_p66_LF_379_187.png"
    ]
  },
  {
    "id": "188",
    "slug": "lf-376-size-l92xw70xh17-cm-188",
    "name": "LF 376 - Size L92xW70xH17 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 376 - Size L92xW70xH17 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 376 - Size L92xW70xH17 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 376 - Size L92xW70xH17 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p66_LF_376_188.png",
    "imageUrl": "/images/products/prod_p66_LF_376_188.png",
    "thumbnails": [
      "/images/products/prod_p66_LF_376_188.png",
      "/images/products/prod_p66_LF_376_188.png"
    ]
  },
  {
    "id": "189",
    "slug": "lf-375-turtle-sandpit-189",
    "name": "LF 375 - Turtle Sandpit",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 375 - Turtle Sandpit is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 375 - Turtle Sandpit features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 375 - Turtle Sandpit is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p66_LF_375_189.png",
    "imageUrl": "/images/products/prod_p66_LF_375_189.png",
    "thumbnails": [
      "/images/products/prod_p66_LF_375_189.png",
      "/images/products/prod_p66_LF_375_189.png"
    ]
  },
  {
    "id": "190",
    "slug": "lf-930c-play-equipment-lf-930c-190",
    "name": "LF 930C - Play Equipment LF 930C",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 930C - Play Equipment LF 930C is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 930C - Play Equipment LF 930C features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 930C - Play Equipment LF 930C is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p67_LF_930C_190.png",
    "imageUrl": "/images/products/prod_p67_LF_930C_190.png",
    "thumbnails": [
      "/images/products/prod_p67_LF_930C_190.png",
      "/images/products/prod_p67_LF_930C_190.png"
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
    "shortDescription": "LF 930D - Play Equipment LF 930D is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 930D - Play Equipment LF 930D features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 930D - Play Equipment LF 930D is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p67_LF_930D_191.png",
    "imageUrl": "/images/products/prod_p67_LF_930D_191.png",
    "thumbnails": [
      "/images/products/prod_p67_LF_930D_191.png",
      "/images/products/prod_p67_LF_930D_191.png"
    ]
  },
  {
    "id": "192",
    "slug": "lf-9126-6-size-l90xw34xh40-cm-192",
    "name": "LF 9126-6 - Size L90xW34xH40 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 9126-6 - Size L90xW34xH40 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 9126-6 - Size L90xW34xH40 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 9126-6 - Size L90xW34xH40 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p67_LF_9126_6_192.png",
    "imageUrl": "/images/products/prod_p67_LF_9126_6_192.png",
    "thumbnails": [
      "/images/products/prod_p67_LF_9126_6_192.png",
      "/images/products/prod_p67_LF_9126_6_192.png"
    ]
  },
  {
    "id": "193",
    "slug": "lf-142-play-equipment-lf-142-193",
    "name": "LF 142 - Play Equipment LF 142",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 142 - Play Equipment LF 142 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 142 - Play Equipment LF 142 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 142 - Play Equipment LF 142 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p67_LF_142_193.png",
    "imageUrl": "/images/products/prod_p67_LF_142_193.png",
    "thumbnails": [
      "/images/products/prod_p67_LF_142_193.png",
      "/images/products/prod_p67_LF_142_193.png"
    ]
  },
  {
    "id": "194",
    "slug": "lf-549-elephant-ring-toss-194",
    "name": "LF 549 - Elephant Ring Toss",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 549 - Elephant Ring Toss is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 549 - Elephant Ring Toss features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 549 - Elephant Ring Toss is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p67_LF_549_194.png",
    "imageUrl": "/images/products/prod_p67_LF_549_194.png",
    "thumbnails": [
      "/images/products/prod_p67_LF_549_194.png",
      "/images/products/prod_p67_LF_549_194.png"
    ]
  },
  {
    "id": "195",
    "slug": "lf-141-play-equipment-lf-141-195",
    "name": "LF 141 - Play Equipment LF 141",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 141 - Play Equipment LF 141 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 141 - Play Equipment LF 141 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 141 - Play Equipment LF 141 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p67_LF_141_195.png",
    "imageUrl": "/images/products/prod_p67_LF_141_195.png",
    "thumbnails": [
      "/images/products/prod_p67_LF_141_195.png",
      "/images/products/prod_p67_LF_141_195.png"
    ]
  },
  {
    "id": "196",
    "slug": "lf-9177-2-plastic-building-blocks-196",
    "name": "LF 9177-2 - Plastic Building Blocks",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 9177-2 - Plastic Building Blocks is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 9177-2 - Plastic Building Blocks features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 9177-2 - Plastic Building Blocks is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p68_LF_9177_2_196.png",
    "imageUrl": "/images/products/prod_p68_LF_9177_2_196.png",
    "thumbnails": [
      "/images/products/prod_p68_LF_9177_2_196.png",
      "/images/products/prod_p68_LF_9177_2_196.png"
    ]
  },
  {
    "id": "197",
    "slug": "lf-118-2-plastic-blocks-197",
    "name": "LF 118-2 - Plastic Blocks",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 118-2 - Plastic Blocks is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 118-2 - Plastic Blocks features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 118-2 - Plastic Blocks is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p68_LF_118_2_197.png",
    "imageUrl": "/images/products/prod_p68_LF_118_2_197.png",
    "thumbnails": [
      "/images/products/prod_p68_LF_118_2_197.png",
      "/images/products/prod_p68_LF_118_2_197.png"
    ]
  },
  {
    "id": "198",
    "slug": "lf-930-basketball-198",
    "name": "LF 930 - Basketball",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 930 - Basketball is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 930 - Basketball features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 930 - Basketball is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p69_LF_930_198.png",
    "imageUrl": "/images/products/prod_p69_LF_930_198.png",
    "thumbnails": [
      "/images/products/prod_p69_LF_930_198.png",
      "/images/products/prod_p69_LF_930_198.png"
    ]
  },
  {
    "id": "199",
    "slug": "lf-930b-big-basketball-199",
    "name": "LF 930B - Big Basketball",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 930B - Big Basketball is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 930B - Big Basketball features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 930B - Big Basketball is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p69_LF_930B_199.png",
    "imageUrl": "/images/products/prod_p69_LF_930B_199.png",
    "thumbnails": [
      "/images/products/prod_p69_LF_930B_199.png",
      "/images/products/prod_p69_LF_930B_199.png"
    ]
  },
  {
    "id": "200",
    "slug": "lf-931-3-in-1-magnetic-easel-200",
    "name": "LF 931 - 3-in-1 Magnetic Easel",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 931 - 3-in-1 Magnetic Easel is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 931 - 3-in-1 Magnetic Easel features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 931 - 3-in-1 Magnetic Easel is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p69_LF_931_200.png",
    "imageUrl": "/images/products/prod_p69_LF_931_200.png",
    "thumbnails": [
      "/images/products/prod_p69_LF_931_200.png",
      "/images/products/prod_p69_LF_931_200.png"
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
    "shortDescription": "LF 13-6 - Tray is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 13-6 - Tray features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 13-6 - Tray is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p69_LF_13_6_201.png",
    "imageUrl": "/images/products/prod_p69_LF_13_6_201.png",
    "thumbnails": [
      "/images/products/prod_p69_LF_13_6_201.png",
      "/images/products/prod_p69_LF_13_6_201.png"
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
    "shortDescription": "LF 13-5 - Tray is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 13-5 - Tray features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 13-5 - Tray is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p69_LF_13_5_202.png",
    "imageUrl": "/images/products/prod_p69_LF_13_5_202.png",
    "thumbnails": [
      "/images/products/prod_p69_LF_13_5_202.png",
      "/images/products/prod_p69_LF_13_5_202.png"
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
    "shortDescription": "LFT 3992D - Blocks 16 Pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 3992D - Blocks 16 Pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 3992D - Blocks 16 Pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p69_LFT_3992D_203.png",
    "imageUrl": "/images/products/prod_p69_LFT_3992D_203.png",
    "thumbnails": [
      "/images/products/prod_p69_LFT_3992D_203.png",
      "/images/products/prod_p69_LFT_3992D_203.png"
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
    "shortDescription": "LFT 3994P - Blocks 32 Pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 3994P - Blocks 32 Pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 3994P - Blocks 32 Pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p69_LFT_3994P_204.png",
    "imageUrl": "/images/products/prod_p69_LFT_3994P_204.png",
    "thumbnails": [
      "/images/products/prod_p69_LFT_3994P_204.png",
      "/images/products/prod_p69_LFT_3994P_204.png"
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
    "shortDescription": "LF 536 - Play Equipment LF 536 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 536 - Play Equipment LF 536 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 536 - Play Equipment LF 536 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p70_LF_536_205.png",
    "imageUrl": "/images/products/prod_p70_LF_536_205.png",
    "thumbnails": [
      "/images/products/prod_p70_LF_536_205.png",
      "/images/products/prod_p70_LF_536_205.png"
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
    "shortDescription": "LF 545 - D 36 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 545 - D 36 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 545 - D 36 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p70_LF_545_206.png",
    "imageUrl": "/images/products/prod_p70_LF_545_206.png",
    "thumbnails": [
      "/images/products/prod_p70_LF_545_206.png",
      "/images/products/prod_p70_LF_545_206.png"
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
    "shortDescription": "LF 55 - D 55 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 55 - D 55 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 55 - D 55 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p70_LF_55_207.png",
    "imageUrl": "/images/products/prod_p70_LF_55_207.png",
    "thumbnails": [
      "/images/products/prod_p70_LF_55_207.png",
      "/images/products/prod_p70_LF_55_207.png"
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
    "shortDescription": "LF 72 - LFO-TR is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 72 - LFO-TR features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 72 - LFO-TR is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p70_LF_72_208.png",
    "imageUrl": "/images/products/prod_p70_LF_72_208.png",
    "thumbnails": [
      "/images/products/prod_p70_LF_72_208.png",
      "/images/products/prod_p70_LF_72_208.png"
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
    "shortDescription": "LF 96 - LFO-TR is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 96 - LFO-TR features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 96 - LFO-TR is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p70_LF_96_209.png",
    "imageUrl": "/images/products/prod_p70_LF_96_209.png",
    "thumbnails": [
      "/images/products/prod_p70_LF_96_209.png",
      "/images/products/prod_p70_LF_96_209.png"
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
    "shortDescription": "LF 120 - D 120 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 120 - D 120 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 120 - D 120 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p70_LF_120_210.png",
    "imageUrl": "/images/products/prod_p70_LF_120_210.png",
    "thumbnails": [
      "/images/products/prod_p70_LF_120_210.png",
      "/images/products/prod_p70_LF_120_210.png"
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
    "shortDescription": "LF 144 - D 144 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 144 - D 144 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 144 - D 144 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p70_LF_144_211.png",
    "imageUrl": "/images/products/prod_p70_LF_144_211.png",
    "thumbnails": [
      "/images/products/prod_p70_LF_144_211.png",
      "/images/products/prod_p70_LF_144_211.png"
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
    "shortDescription": "LF 168 - Play Equipment LF 168 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 168 - Play Equipment LF 168 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 168 - Play Equipment LF 168 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p70_LF_168_212.png",
    "imageUrl": "/images/products/prod_p70_LF_168_212.png",
    "thumbnails": [
      "/images/products/prod_p70_LF_168_212.png",
      "/images/products/prod_p70_LF_168_212.png"
    ]
  },
  {
    "id": "213",
    "slug": "lf-605-size-l43xw30xh99-cm-213",
    "name": "LF 605 - Size L43xW30xH99 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 605 - Size L43xW30xH99 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 605 - Size L43xW30xH99 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 605 - Size L43xW30xH99 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p71_LF_605_213.png",
    "imageUrl": "/images/products/prod_p71_LF_605_213.png",
    "thumbnails": [
      "/images/products/prod_p71_LF_605_213.png",
      "/images/products/prod_p71_LF_605_213.png"
    ]
  },
  {
    "id": "214",
    "slug": "lf-604-size-l86xw35xh99-cm-214",
    "name": "LF 604 - Size L86xW35xH99 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 604 - Size L86xW35xH99 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 604 - Size L86xW35xH99 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 604 - Size L86xW35xH99 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p71_LF_604_214.png",
    "imageUrl": "/images/products/prod_p71_LF_604_214.png",
    "thumbnails": [
      "/images/products/prod_p71_LF_604_214.png",
      "/images/products/prod_p71_LF_604_214.png"
    ]
  },
  {
    "id": "215",
    "slug": "lf-606-size-l48xw35xh71-cm-215",
    "name": "LF 606 - Size L48xW35xH71 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 606 - Size L48xW35xH71 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 606 - Size L48xW35xH71 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 606 - Size L48xW35xH71 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p71_LF_606_215.png",
    "imageUrl": "/images/products/prod_p71_LF_606_215.png",
    "thumbnails": [
      "/images/products/prod_p71_LF_606_215.png",
      "/images/products/prod_p71_LF_606_215.png"
    ]
  },
  {
    "id": "216",
    "slug": "lf-601-size-l66xw43xh86-cm-216",
    "name": "LF 601 - Size L66xW43xH86 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 601 - Size L66xW43xH86 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 601 - Size L66xW43xH86 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 601 - Size L66xW43xH86 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p71_LF_601_216.png",
    "imageUrl": "/images/products/prod_p71_LF_601_216.png",
    "thumbnails": [
      "/images/products/prod_p71_LF_601_216.png",
      "/images/products/prod_p71_LF_601_216.png"
    ]
  },
  {
    "id": "217",
    "slug": "lf-602-size-l78xw38xh99-cm-217",
    "name": "LF 602 - Size L78xW38xH99 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 602 - Size L78xW38xH99 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 602 - Size L78xW38xH99 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 602 - Size L78xW38xH99 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p71_LF_602_217.png",
    "imageUrl": "/images/products/prod_p71_LF_602_217.png",
    "thumbnails": [
      "/images/products/prod_p71_LF_602_217.png",
      "/images/products/prod_p71_LF_602_217.png"
    ]
  },
  {
    "id": "218",
    "slug": "lf-603-size-l86xw33xh45-cm-218",
    "name": "LF 603 - Size L86xW33xH45 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 603 - Size L86xW33xH45 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 603 - Size L86xW33xH45 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 603 - Size L86xW33xH45 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p71_LF_603_218.png",
    "imageUrl": "/images/products/prod_p71_LF_603_218.png",
    "thumbnails": [
      "/images/products/prod_p71_LF_603_218.png",
      "/images/products/prod_p71_LF_603_218.png"
    ]
  },
  {
    "id": "219",
    "slug": "lf-935-size-l119xw43xh81-cm-219",
    "name": "LF 935 - Size L119xW43xH81 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 935 - Size L119xW43xH81 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 935 - Size L119xW43xH81 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 935 - Size L119xW43xH81 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p72_LF_935_219.png",
    "imageUrl": "/images/products/prod_p72_LF_935_219.png",
    "thumbnails": [
      "/images/products/prod_p72_LF_935_219.png",
      "/images/products/prod_p72_LF_935_219.png"
    ]
  },
  {
    "id": "220",
    "slug": "lf-936-size-l98xw35xh81-cm-220",
    "name": "LF 936 - Size L98xW35xH81 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 936 - Size L98xW35xH81 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 936 - Size L98xW35xH81 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 936 - Size L98xW35xH81 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p72_LF_936_220.png",
    "imageUrl": "/images/products/prod_p72_LF_936_220.png",
    "thumbnails": [
      "/images/products/prod_p72_LF_936_220.png",
      "/images/products/prod_p72_LF_936_220.png"
    ]
  },
  {
    "id": "221",
    "slug": "lf-937-size-l142xw35xh81-cm-221",
    "name": "LF 937 - Size L142xW35xH81 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 937 - Size L142xW35xH81 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 937 - Size L142xW35xH81 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 937 - Size L142xW35xH81 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p72_LF_937_221.png",
    "imageUrl": "/images/products/prod_p72_LF_937_221.png",
    "thumbnails": [
      "/images/products/prod_p72_LF_937_221.png",
      "/images/products/prod_p72_LF_937_221.png"
    ]
  },
  {
    "id": "222",
    "slug": "lf-5532-play-equipment-lf-5532-222",
    "name": "LF 5532 - Play Equipment LF 5532",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 5532 - Play Equipment LF 5532 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 5532 - Play Equipment LF 5532 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 5532 - Play Equipment LF 5532 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p73_LF_5532_222.png",
    "imageUrl": "/images/products/prod_p73_LF_5532_222.png",
    "thumbnails": [
      "/images/products/prod_p73_LF_5532_222.png",
      "/images/products/prod_p73_LF_5532_222.png"
    ]
  },
  {
    "id": "223",
    "slug": "lft-1102c-play-equipment-lft-1102c-223",
    "name": "LFT 1102C - Play Equipment LFT 1102C",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LFT 1102C - Play Equipment LFT 1102C is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1102C - Play Equipment LFT 1102C features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1102C - Play Equipment LFT 1102C is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p73_LFT_1102C_223.png",
    "imageUrl": "/images/products/prod_p73_LFT_1102C_223.png",
    "thumbnails": [
      "/images/products/prod_p73_LFT_1102C_223.png",
      "/images/products/prod_p73_LFT_1102C_223.png"
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
    "shortDescription": "LFT 1104C - Size L 248 92 X W 72 39 X H 90 17 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1104C - Size L 248 92 X W 72 39 X H 90 17 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1104C - Size L 248 92 X W 72 39 X H 90 17 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p73_LFT_1104C_224.png",
    "imageUrl": "/images/products/prod_p73_LFT_1104C_224.png",
    "thumbnails": [
      "/images/products/prod_p73_LFT_1104C_224.png",
      "/images/products/prod_p73_LFT_1104C_224.png"
    ]
  },
  {
    "id": "225",
    "slug": "lf-5052-size-l176xw89xh89-cm-225",
    "name": "LF 5052 - Size L176xW89xH89 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 5052 - Size L176xW89xH89 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 5052 - Size L176xW89xH89 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 5052 - Size L176xW89xH89 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p73_LF_5052_225.png",
    "imageUrl": "/images/products/prod_p73_LF_5052_225.png",
    "thumbnails": [
      "/images/products/prod_p73_LF_5052_225.png",
      "/images/products/prod_p73_LF_5052_225.png"
    ]
  },
  {
    "id": "226",
    "slug": "lf-5012-size-l45xw45xh105-cm-226",
    "name": "LF 5012 - Size L45xW45xH105 CM",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 5012 - Size L45xW45xH105 CM is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 5012 - Size L45xW45xH105 CM features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 5012 - Size L45xW45xH105 CM is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p73_LF_5012_226.png",
    "imageUrl": "/images/products/prod_p73_LF_5012_226.png",
    "thumbnails": [
      "/images/products/prod_p73_LF_5012_226.png",
      "/images/products/prod_p73_LF_5012_226.png"
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
    "shortDescription": "LF 1101C - Size L 142 X Dia 45 cm is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1101C - Size L 142 X Dia 45 cm features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1101C - Size L 142 X Dia 45 cm is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
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
    "image": "/images/products/prod_p73_LF_1101C_227.png",
    "imageUrl": "/images/products/prod_p73_LF_1101C_227.png",
    "thumbnails": [
      "/images/products/prod_p73_LF_1101C_227.png",
      "/images/products/prod_p73_LF_1101C_227.png"
    ]
  },
  {
    "id": "228",
    "slug": "lf-1103c-play-equipment-lf-1103c-228",
    "name": "LF 1103C - Play Equipment LF 1103C",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 1103C - Play Equipment LF 1103C is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 1103C - Play Equipment LF 1103C features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 1103C - Play Equipment LF 1103C is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p73_LF_1103C_228.png",
    "imageUrl": "/images/products/prod_p73_LF_1103C_228.png",
    "thumbnails": [
      "/images/products/prod_p73_LF_1103C_228.png",
      "/images/products/prod_p73_LF_1103C_228.png"
    ]
  },
  {
    "id": "229",
    "slug": "lf-52-divider-10-pcs-229",
    "name": "LF 52 - Divider 10 pcs",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 52 - Divider 10 pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 52 - Divider 10 pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 52 - Divider 10 pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p74_LF_52_229.png",
    "imageUrl": "/images/products/prod_p74_LF_52_229.png",
    "thumbnails": [
      "/images/products/prod_p74_LF_52_229.png",
      "/images/products/prod_p74_LF_52_229.png"
    ]
  },
  {
    "id": "230",
    "slug": "lf-58-swing-230",
    "name": "LF 58 - Swing",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 58 - Swing is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 58 - Swing features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 58 - Swing is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p74_LF_58_230.png",
    "imageUrl": "/images/products/prod_p74_LF_58_230.png",
    "thumbnails": [
      "/images/products/prod_p74_LF_58_230.png",
      "/images/products/prod_p74_LF_58_230.png"
    ]
  },
  {
    "id": "231",
    "slug": "lf414a-agility-ladde-231",
    "name": "LF414A - Agility Ladde",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF414A - Agility Ladde is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF414A - Agility Ladde features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF414A - Agility Ladde is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p74_LF414A_231.png",
    "imageUrl": "/images/products/prod_p74_LF414A_231.png",
    "thumbnails": [
      "/images/products/prod_p74_LF414A_231.png",
      "/images/products/prod_p74_LF414A_231.png"
    ]
  },
  {
    "id": "232",
    "slug": "lf-56-ring-50-dia-232",
    "name": "LF 56 - Ring (50 dia)",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 56 - Ring (50 dia) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 56 - Ring (50 dia) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 56 - Ring (50 dia) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p74_LF_56_232.png",
    "imageUrl": "/images/products/prod_p74_LF_56_232.png",
    "thumbnails": [
      "/images/products/prod_p74_LF_56_232.png",
      "/images/products/prod_p74_LF_56_232.png"
    ]
  },
  {
    "id": "233",
    "slug": "lf-57-ring-40-dia-233",
    "name": "LF 57 - Ring (40 dia)",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 57 - Ring (40 dia) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 57 - Ring (40 dia) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 57 - Ring (40 dia) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p74_LF_57_233.png",
    "imageUrl": "/images/products/prod_p74_LF_57_233.png",
    "thumbnails": [
      "/images/products/prod_p74_LF_57_233.png",
      "/images/products/prod_p74_LF_57_233.png"
    ]
  },
  {
    "id": "234",
    "slug": "lf-53-play-equipment-lf-53-234",
    "name": "LF 53 - Play Equipment LF 53",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 53 - Play Equipment LF 53 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 53 - Play Equipment LF 53 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 53 - Play Equipment LF 53 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p74_LF_53_234.png",
    "imageUrl": "/images/products/prod_p74_LF_53_234.png",
    "thumbnails": [
      "/images/products/prod_p74_LF_53_234.png",
      "/images/products/prod_p74_LF_53_234.png"
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
    "shortDescription": "LF 51 - Play Equipment LF 51 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 51 - Play Equipment LF 51 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 51 - Play Equipment LF 51 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p74_LF_51_235.png",
    "imageUrl": "/images/products/prod_p74_LF_51_235.png",
    "thumbnails": [
      "/images/products/prod_p74_LF_51_235.png",
      "/images/products/prod_p74_LF_51_235.png"
    ]
  },
  {
    "id": "236",
    "slug": "lf-144-balancer-6-pcs-236",
    "name": "LF 144 - Balancer 6 pcs",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 144 - Balancer 6 pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 144 - Balancer 6 pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 144 - Balancer 6 pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p75_LF_144_236.png",
    "imageUrl": "/images/products/prod_p75_LF_144_236.png",
    "thumbnails": [
      "/images/products/prod_p75_LF_144_236.png",
      "/images/products/prod_p75_LF_144_236.png"
    ]
  },
  {
    "id": "237",
    "slug": "lf-143-balancer-8-pcs-237",
    "name": "LF 143 - Balancer 8 Pcs",
    "price": "Quote on Request",
    "category": "Rockers & Trampolines",
    "categoryId": "rockers-riders",
    "categoryColor": "#4ECDC4",
    "shortDescription": "LF 143 - Balancer 8 Pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 143 - Balancer 8 Pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 143 - Balancer 8 Pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p75_LF_143_237.png",
    "imageUrl": "/images/products/prod_p75_LF_143_237.png",
    "thumbnails": [
      "/images/products/prod_p75_LF_143_237.png",
      "/images/products/prod_p75_LF_143_237.png"
    ]
  },
  {
    "id": "238",
    "slug": "lf-145-play-equipment-lf-145-238",
    "name": "LF 145 - Play Equipment LF 145",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 145 - Play Equipment LF 145 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 145 - Play Equipment LF 145 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 145 - Play Equipment LF 145 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p76_LF_145_238.png",
    "imageUrl": "/images/products/prod_p76_LF_145_238.png",
    "thumbnails": [
      "/images/products/prod_p76_LF_145_238.png",
      "/images/products/prod_p76_LF_145_238.png"
    ]
  },
  {
    "id": "239",
    "slug": "lf-147-play-equipment-lf-147-239",
    "name": "LF 147 - Play Equipment LF 147",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 147 - Play Equipment LF 147 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 147 - Play Equipment LF 147 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 147 - Play Equipment LF 147 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p77_LF_147_239.png",
    "imageUrl": "/images/products/prod_p77_LF_147_239.png",
    "thumbnails": [
      "/images/products/prod_p77_LF_147_239.png",
      "/images/products/prod_p77_LF_147_239.png"
    ]
  },
  {
    "id": "240",
    "slug": "lf-148-play-equipment-lf-148-240",
    "name": "LF 148 - Play Equipment LF 148",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 148 - Play Equipment LF 148 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 148 - Play Equipment LF 148 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 148 - Play Equipment LF 148 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p78_LF_148_240.png",
    "imageUrl": "/images/products/prod_p78_LF_148_240.png",
    "thumbnails": [
      "/images/products/prod_p78_LF_148_240.png",
      "/images/products/prod_p78_LF_148_240.png"
    ]
  },
  {
    "id": "241",
    "slug": "lf-149-play-equipment-lf-149-241",
    "name": "LF 149 - Play Equipment LF 149",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 149 - Play Equipment LF 149 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 149 - Play Equipment LF 149 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 149 - Play Equipment LF 149 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p79_LF_149_241.png",
    "imageUrl": "/images/products/prod_p79_LF_149_241.png",
    "thumbnails": [
      "/images/products/prod_p79_LF_149_241.png",
      "/images/products/prod_p79_LF_149_241.png"
    ]
  },
  {
    "id": "242",
    "slug": "lf-150-play-equipment-lf-150-242",
    "name": "LF 150 - Play Equipment LF 150",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 150 - Play Equipment LF 150 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 150 - Play Equipment LF 150 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 150 - Play Equipment LF 150 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p80_LF_150_242.png",
    "imageUrl": "/images/products/prod_p80_LF_150_242.png",
    "thumbnails": [
      "/images/products/prod_p80_LF_150_242.png",
      "/images/products/prod_p80_LF_150_242.png"
    ]
  },
  {
    "id": "243",
    "slug": "lf-151-play-equipment-lf-151-243",
    "name": "LF 151 - Play Equipment LF 151",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 151 - Play Equipment LF 151 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 151 - Play Equipment LF 151 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 151 - Play Equipment LF 151 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p81_LF_151_243.png",
    "imageUrl": "/images/products/prod_p81_LF_151_243.png",
    "thumbnails": [
      "/images/products/prod_p81_LF_151_243.png",
      "/images/products/prod_p81_LF_151_243.png"
    ]
  },
  {
    "id": "244",
    "slug": "lf-152-play-equipment-lf-152-244",
    "name": "LF 152 - Play Equipment LF 152",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 152 - Play Equipment LF 152 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 152 - Play Equipment LF 152 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 152 - Play Equipment LF 152 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p82_LF_152_244.png",
    "imageUrl": "/images/products/prod_p82_LF_152_244.png",
    "thumbnails": [
      "/images/products/prod_p82_LF_152_244.png",
      "/images/products/prod_p82_LF_152_244.png"
    ]
  },
  {
    "id": "245",
    "slug": "lf-153-play-equipment-lf-153-245",
    "name": "LF 153 - Play Equipment LF 153",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 153 - Play Equipment LF 153 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 153 - Play Equipment LF 153 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 153 - Play Equipment LF 153 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p83_LF_153_245.png",
    "imageUrl": "/images/products/prod_p83_LF_153_245.png",
    "thumbnails": [
      "/images/products/prod_p83_LF_153_245.png",
      "/images/products/prod_p83_LF_153_245.png"
    ]
  },
  {
    "id": "246",
    "slug": "lf-161-play-equipment-lf-161-246",
    "name": "LF 161 - Play Equipment LF 161",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 161 - Play Equipment LF 161 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 161 - Play Equipment LF 161 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 161 - Play Equipment LF 161 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p84_LF_161_246.png",
    "imageUrl": "/images/products/prod_p84_LF_161_246.png",
    "thumbnails": [
      "/images/products/prod_p84_LF_161_246.png",
      "/images/products/prod_p84_LF_161_246.png"
    ]
  },
  {
    "id": "247",
    "slug": "lf-162-play-equipment-lf-162-247",
    "name": "LF 162 - Play Equipment LF 162",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 162 - Play Equipment LF 162 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 162 - Play Equipment LF 162 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 162 - Play Equipment LF 162 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p84_LF_162_247.png",
    "imageUrl": "/images/products/prod_p84_LF_162_247.png",
    "thumbnails": [
      "/images/products/prod_p84_LF_162_247.png",
      "/images/products/prod_p84_LF_162_247.png"
    ]
  },
  {
    "id": "248",
    "slug": "lf-164-play-equipment-lf-164-248",
    "name": "LF 164 - Play Equipment LF 164",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 164 - Play Equipment LF 164 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 164 - Play Equipment LF 164 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 164 - Play Equipment LF 164 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p85_LF_164_248.png",
    "imageUrl": "/images/products/prod_p85_LF_164_248.png",
    "thumbnails": [
      "/images/products/prod_p85_LF_164_248.png",
      "/images/products/prod_p85_LF_164_248.png"
    ]
  },
  {
    "id": "249",
    "slug": "lf-165-play-equipment-lf-165-249",
    "name": "LF 165 - Play Equipment LF 165",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 165 - Play Equipment LF 165 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 165 - Play Equipment LF 165 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 165 - Play Equipment LF 165 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p86_LF_165_249.png",
    "imageUrl": "/images/products/prod_p86_LF_165_249.png",
    "thumbnails": [
      "/images/products/prod_p86_LF_165_249.png",
      "/images/products/prod_p86_LF_165_249.png"
    ]
  },
  {
    "id": "250",
    "slug": "lf-169-play-equipment-lf-169-250",
    "name": "LF 169 - Play Equipment LF 169",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 169 - Play Equipment LF 169 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 169 - Play Equipment LF 169 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 169 - Play Equipment LF 169 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p87_LF_169_250.png",
    "imageUrl": "/images/products/prod_p87_LF_169_250.png",
    "thumbnails": [
      "/images/products/prod_p87_LF_169_250.png",
      "/images/products/prod_p87_LF_169_250.png"
    ]
  },
  {
    "id": "251",
    "slug": "lf-167-play-equipment-lf-167-251",
    "name": "LF 167 - Play Equipment LF 167",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 167 - Play Equipment LF 167 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 167 - Play Equipment LF 167 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 167 - Play Equipment LF 167 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Natural Beech Wood Finish with Pastel Accent Edges",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p87_LF_167_251.png",
    "imageUrl": "/images/products/prod_p87_LF_167_251.png",
    "thumbnails": [
      "/images/products/prod_p87_LF_167_251.png",
      "/images/products/prod_p87_LF_167_251.png"
    ]
  },
  {
    "id": "252",
    "slug": "lf-170-play-equipment-lf-170-252",
    "name": "LF 170 - Play Equipment LF 170",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 170 - Play Equipment LF 170 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 170 - Play Equipment LF 170 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 170 - Play Equipment LF 170 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p87_LF_170_252.png",
    "imageUrl": "/images/products/prod_p87_LF_170_252.png",
    "thumbnails": [
      "/images/products/prod_p87_LF_170_252.png",
      "/images/products/prod_p87_LF_170_252.png"
    ]
  },
  {
    "id": "253",
    "slug": "lf-62-play-equipment-lf-62-253",
    "name": "LF 62 - Play Equipment LF 62",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 62 - Play Equipment LF 62 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 62 - Play Equipment LF 62 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 62 - Play Equipment LF 62 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p88_LF_62_253.png",
    "imageUrl": "/images/products/prod_p88_LF_62_253.png",
    "thumbnails": [
      "/images/products/prod_p88_LF_62_253.png",
      "/images/products/prod_p88_LF_62_253.png"
    ]
  },
  {
    "id": "254",
    "slug": "lf-62s-play-equipment-lf-62s-254",
    "name": "LF 62S - Play Equipment LF 62S",
    "price": "Quote on Request",
    "category": "Physical Activity Equipment",
    "categoryId": "indoor",
    "categoryColor": "#FF6B35",
    "shortDescription": "LF 62S - Play Equipment LF 62S is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LF 62S - Play Equipment LF 62S features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LF 62S - Play Equipment LF 62S is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p88_LF_62S_254.png",
    "imageUrl": "/images/products/prod_p88_LF_62S_254.png",
    "thumbnails": [
      "/images/products/prod_p88_LF_62S_254.png",
      "/images/products/prod_p88_LF_62S_254.png"
    ]
  },
  {
    "id": "255",
    "slug": "lft-21a-play-equipment-lft-21a-255",
    "name": "LFT 21A - Play Equipment LFT 21A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 21A - Play Equipment LFT 21A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 21A - Play Equipment LFT 21A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 21A - Play Equipment LFT 21A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_21A_255.png",
    "imageUrl": "/images/products/prod_p89_LFT_21A_255.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_21A_255.png",
      "/images/products/prod_p89_LFT_21A_255.png"
    ]
  },
  {
    "id": "256",
    "slug": "lft-22a-play-equipment-lft-22a-256",
    "name": "LFT 22A - Play Equipment LFT 22A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 22A - Play Equipment LFT 22A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 22A - Play Equipment LFT 22A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 22A - Play Equipment LFT 22A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_22A_256.png",
    "imageUrl": "/images/products/prod_p89_LFT_22A_256.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_22A_256.png",
      "/images/products/prod_p89_LFT_22A_256.png"
    ]
  },
  {
    "id": "257",
    "slug": "lft-23a-play-equipment-lft-23a-257",
    "name": "LFT 23A - Play Equipment LFT 23A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 23A - Play Equipment LFT 23A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 23A - Play Equipment LFT 23A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 23A - Play Equipment LFT 23A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_23A_257.png",
    "imageUrl": "/images/products/prod_p89_LFT_23A_257.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_23A_257.png",
      "/images/products/prod_p89_LFT_23A_257.png"
    ]
  },
  {
    "id": "258",
    "slug": "lft-29a-play-equipment-lft-29a-258",
    "name": "LFT 29A - Play Equipment LFT 29A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 29A - Play Equipment LFT 29A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 29A - Play Equipment LFT 29A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 29A - Play Equipment LFT 29A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_29A_258.png",
    "imageUrl": "/images/products/prod_p89_LFT_29A_258.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_29A_258.png",
      "/images/products/prod_p89_LFT_29A_258.png"
    ]
  },
  {
    "id": "259",
    "slug": "lft-24a-play-equipment-lft-24a-259",
    "name": "LFT 24A - Play Equipment LFT 24A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 24A - Play Equipment LFT 24A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 24A - Play Equipment LFT 24A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 24A - Play Equipment LFT 24A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_24A_259.png",
    "imageUrl": "/images/products/prod_p89_LFT_24A_259.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_24A_259.png",
      "/images/products/prod_p89_LFT_24A_259.png"
    ]
  },
  {
    "id": "260",
    "slug": "lft-25a-play-equipment-lft-25a-260",
    "name": "LFT 25A - Play Equipment LFT 25A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 25A - Play Equipment LFT 25A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 25A - Play Equipment LFT 25A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 25A - Play Equipment LFT 25A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_25A_260.png",
    "imageUrl": "/images/products/prod_p89_LFT_25A_260.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_25A_260.png",
      "/images/products/prod_p89_LFT_25A_260.png"
    ]
  },
  {
    "id": "261",
    "slug": "lft-26a-play-equipment-lft-26a-261",
    "name": "LFT 26A - Play Equipment LFT 26A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 26A - Play Equipment LFT 26A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 26A - Play Equipment LFT 26A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 26A - Play Equipment LFT 26A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_26A_261.png",
    "imageUrl": "/images/products/prod_p89_LFT_26A_261.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_26A_261.png",
      "/images/products/prod_p89_LFT_26A_261.png"
    ]
  },
  {
    "id": "262",
    "slug": "lft-27a-play-equipment-lft-27a-262",
    "name": "LFT 27A - Play Equipment LFT 27A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 27A - Play Equipment LFT 27A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 27A - Play Equipment LFT 27A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 27A - Play Equipment LFT 27A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_27A_262.png",
    "imageUrl": "/images/products/prod_p89_LFT_27A_262.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_27A_262.png",
      "/images/products/prod_p89_LFT_27A_262.png"
    ]
  },
  {
    "id": "263",
    "slug": "lft-28a-play-equipment-lft-28a-263",
    "name": "LFT 28A - Play Equipment LFT 28A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 28A - Play Equipment LFT 28A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 28A - Play Equipment LFT 28A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 28A - Play Equipment LFT 28A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p89_LFT_28A_263.png",
    "imageUrl": "/images/products/prod_p89_LFT_28A_263.png",
    "thumbnails": [
      "/images/products/prod_p89_LFT_28A_263.png",
      "/images/products/prod_p89_LFT_28A_263.png"
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
    "shortDescription": "LFT 34A - Play Equipment LFT 34A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 34A - Play Equipment LFT 34A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 34A - Play Equipment LFT 34A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_34A_264.png",
    "imageUrl": "/images/products/prod_p90_LFT_34A_264.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_34A_264.png",
      "/images/products/prod_p90_LFT_34A_264.png"
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
    "shortDescription": "LFT 35A - Play Equipment LFT 35A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 35A - Play Equipment LFT 35A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 35A - Play Equipment LFT 35A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_35A_265.png",
    "imageUrl": "/images/products/prod_p90_LFT_35A_265.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_35A_265.png",
      "/images/products/prod_p90_LFT_35A_265.png"
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
    "shortDescription": "LFT 36A - Play Equipment LFT 36A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 36A - Play Equipment LFT 36A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 36A - Play Equipment LFT 36A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_36A_266.png",
    "imageUrl": "/images/products/prod_p90_LFT_36A_266.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_36A_266.png",
      "/images/products/prod_p90_LFT_36A_266.png"
    ]
  },
  {
    "id": "267",
    "slug": "lft-37a-play-equipment-lft-37a-267",
    "name": "LFT 37A - Play Equipment LFT 37A",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 37A - Play Equipment LFT 37A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 37A - Play Equipment LFT 37A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 37A - Play Equipment LFT 37A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_37A_267.png",
    "imageUrl": "/images/products/prod_p90_LFT_37A_267.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_37A_267.png",
      "/images/products/prod_p90_LFT_37A_267.png"
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
    "shortDescription": "LFT 38A - Play Equipment LFT 38A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 38A - Play Equipment LFT 38A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 38A - Play Equipment LFT 38A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_38A_268.png",
    "imageUrl": "/images/products/prod_p90_LFT_38A_268.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_38A_268.png",
      "/images/products/prod_p90_LFT_38A_268.png"
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
    "shortDescription": "LFT 39A - Play Equipment LFT 39A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 39A - Play Equipment LFT 39A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 39A - Play Equipment LFT 39A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_39A_269.png",
    "imageUrl": "/images/products/prod_p90_LFT_39A_269.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_39A_269.png",
      "/images/products/prod_p90_LFT_39A_269.png"
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
    "shortDescription": "LFT 40A - Play Equipment LFT 40A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 40A - Play Equipment LFT 40A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 40A - Play Equipment LFT 40A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_40A_270.png",
    "imageUrl": "/images/products/prod_p90_LFT_40A_270.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_40A_270.png",
      "/images/products/prod_p90_LFT_40A_270.png"
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
    "shortDescription": "LFT 32A - Play Equipment LFT 32A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 32A - Play Equipment LFT 32A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 32A - Play Equipment LFT 32A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_32A_271.png",
    "imageUrl": "/images/products/prod_p90_LFT_32A_271.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_32A_271.png",
      "/images/products/prod_p90_LFT_32A_271.png"
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
    "shortDescription": "LFT 33A - Play Equipment LFT 33A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 33A - Play Equipment LFT 33A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 33A - Play Equipment LFT 33A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_33A_272.png",
    "imageUrl": "/images/products/prod_p90_LFT_33A_272.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_33A_272.png",
      "/images/products/prod_p90_LFT_33A_272.png"
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
    "shortDescription": "LFT 31A - Play Equipment LFT 31A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 31A - Play Equipment LFT 31A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 31A - Play Equipment LFT 31A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_31A_273.png",
    "imageUrl": "/images/products/prod_p90_LFT_31A_273.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_31A_273.png",
      "/images/products/prod_p90_LFT_31A_273.png"
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
    "shortDescription": "LFT 30A - Play Equipment LFT 30A is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 30A - Play Equipment LFT 30A features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 30A - Play Equipment LFT 30A is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p90_LFT_30A_274.png",
    "imageUrl": "/images/products/prod_p90_LFT_30A_274.png",
    "thumbnails": [
      "/images/products/prod_p90_LFT_30A_274.png",
      "/images/products/prod_p90_LFT_30A_274.png"
    ]
  },
  {
    "id": "275",
    "slug": "lfp-10-insect-puppet-275",
    "name": "LFP 10 - Insect Puppet",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 10 - Insect Puppet is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 10 - Insect Puppet features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 10 - Insect Puppet is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_10_275.png",
    "imageUrl": "/images/products/prod_p91_LFP_10_275.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_10_275.png",
      "/images/products/prod_p91_LFP_10_275.png"
    ]
  },
  {
    "id": "276",
    "slug": "lfp-11-family-puppet-276",
    "name": "LFP 11 - Family Puppet",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 11 - Family Puppet is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 11 - Family Puppet features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 11 - Family Puppet is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_11_276.png",
    "imageUrl": "/images/products/prod_p91_LFP_11_276.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_11_276.png",
      "/images/products/prod_p91_LFP_11_276.png"
    ]
  },
  {
    "id": "277",
    "slug": "lfp-12-community-helpers-277",
    "name": "LFP 12 - Community Helpers",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 12 - Community Helpers is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 12 - Community Helpers features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 12 - Community Helpers is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_12_277.png",
    "imageUrl": "/images/products/prod_p91_LFP_12_277.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_12_277.png",
      "/images/products/prod_p91_LFP_12_277.png"
    ]
  },
  {
    "id": "278",
    "slug": "lfp-9-birds-puppet-278",
    "name": "LFP 9 - Birds Puppet",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 9 - Birds Puppet is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 9 - Birds Puppet features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 9 - Birds Puppet is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_9_278.png",
    "imageUrl": "/images/products/prod_p91_LFP_9_278.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_9_278.png",
      "/images/products/prod_p91_LFP_9_278.png"
    ]
  },
  {
    "id": "279",
    "slug": "lfp-7-play-equipment-lfp-7-279",
    "name": "LFP 7 - Play Equipment LFP 7",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 7 - Play Equipment LFP 7 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 7 - Play Equipment LFP 7 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 7 - Play Equipment LFP 7 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_7_279.png",
    "imageUrl": "/images/products/prod_p91_LFP_7_279.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_7_279.png",
      "/images/products/prod_p91_LFP_7_279.png"
    ]
  },
  {
    "id": "280",
    "slug": "lfp-4-play-equipment-lfp-4-280",
    "name": "LFP 4 - Play Equipment LFP 4",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 4 - Play Equipment LFP 4 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 4 - Play Equipment LFP 4 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 4 - Play Equipment LFP 4 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_4_280.png",
    "imageUrl": "/images/products/prod_p91_LFP_4_280.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_4_280.png",
      "/images/products/prod_p91_LFP_4_280.png"
    ]
  },
  {
    "id": "281",
    "slug": "lfp-5-play-equipment-lfp-5-281",
    "name": "LFP 5 - Play Equipment LFP 5",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 5 - Play Equipment LFP 5 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 5 - Play Equipment LFP 5 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 5 - Play Equipment LFP 5 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_5_281.png",
    "imageUrl": "/images/products/prod_p91_LFP_5_281.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_5_281.png",
      "/images/products/prod_p91_LFP_5_281.png"
    ]
  },
  {
    "id": "282",
    "slug": "lfp-6-set-of-10-282",
    "name": "LFP 6 - (Set of 10)",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 6 - (Set of 10) is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 6 - (Set of 10) features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 6 - (Set of 10) is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_6_282.png",
    "imageUrl": "/images/products/prod_p91_LFP_6_282.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_6_282.png",
      "/images/products/prod_p91_LFP_6_282.png"
    ]
  },
  {
    "id": "283",
    "slug": "lfp-8-water-animals-283",
    "name": "LFP 8 - Water Animals",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFP 8 - Water Animals is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFP 8 - Water Animals features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFP 8 - Water Animals is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p91_LFP_8_283.png",
    "imageUrl": "/images/products/prod_p91_LFP_8_283.png",
    "thumbnails": [
      "/images/products/prod_p91_LFP_8_283.png",
      "/images/products/prod_p91_LFP_8_283.png"
    ]
  },
  {
    "id": "284",
    "slug": "lft-1213-play-equipment-lft-1213-284",
    "name": "LFT 1213 - Play Equipment LFT 1213",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1213 - Play Equipment LFT 1213 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1213 - Play Equipment LFT 1213 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1213 - Play Equipment LFT 1213 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1213_284.png",
    "imageUrl": "/images/products/prod_p92_LFT_1213_284.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1213_284.png",
      "/images/products/prod_p92_LFT_1213_284.png"
    ]
  },
  {
    "id": "285",
    "slug": "lft-1212-pilot-285",
    "name": "LFT 1212 - Pilot",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1212 - Pilot is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1212 - Pilot features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1212 - Pilot is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1212_285.png",
    "imageUrl": "/images/products/prod_p92_LFT_1212_285.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1212_285.png",
      "/images/products/prod_p92_LFT_1212_285.png"
    ]
  },
  {
    "id": "286",
    "slug": "lft-1211-military-forces-286",
    "name": "LFT 1211 - Military Forces",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1211 - Military Forces is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1211 - Military Forces features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1211 - Military Forces is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1211_286.png",
    "imageUrl": "/images/products/prod_p92_LFT_1211_286.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1211_286.png",
      "/images/products/prod_p92_LFT_1211_286.png"
    ]
  },
  {
    "id": "287",
    "slug": "lft-1214-play-equipment-lft-1214-287",
    "name": "LFT 1214 - Play Equipment LFT 1214",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1214 - Play Equipment LFT 1214 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1214 - Play Equipment LFT 1214 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1214 - Play Equipment LFT 1214 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1214_287.png",
    "imageUrl": "/images/products/prod_p92_LFT_1214_287.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1214_287.png",
      "/images/products/prod_p92_LFT_1214_287.png"
    ]
  },
  {
    "id": "288",
    "slug": "lft-1215-play-equipment-lft-1215-288",
    "name": "LFT 1215 - Play Equipment LFT 1215",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1215 - Play Equipment LFT 1215 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1215 - Play Equipment LFT 1215 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1215 - Play Equipment LFT 1215 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1215_288.png",
    "imageUrl": "/images/products/prod_p92_LFT_1215_288.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1215_288.png",
      "/images/products/prod_p92_LFT_1215_288.png"
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
    "shortDescription": "LFT 1216 - Lady Doctor is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1216 - Lady Doctor features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1216 - Lady Doctor is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1216_289.png",
    "imageUrl": "/images/products/prod_p92_LFT_1216_289.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1216_289.png",
      "/images/products/prod_p92_LFT_1216_289.png"
    ]
  },
  {
    "id": "290",
    "slug": "lft-1217-play-equipment-lft-1217-290",
    "name": "LFT 1217 - Play Equipment LFT 1217",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1217 - Play Equipment LFT 1217 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1217 - Play Equipment LFT 1217 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1217 - Play Equipment LFT 1217 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1217_290.png",
    "imageUrl": "/images/products/prod_p92_LFT_1217_290.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1217_290.png",
      "/images/products/prod_p92_LFT_1217_290.png"
    ]
  },
  {
    "id": "291",
    "slug": "lft-1218-play-equipment-lft-1218-291",
    "name": "LFT 1218 - Play Equipment LFT 1218",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1218 - Play Equipment LFT 1218 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1218 - Play Equipment LFT 1218 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1218 - Play Equipment LFT 1218 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1218_291.png",
    "imageUrl": "/images/products/prod_p92_LFT_1218_291.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1218_291.png",
      "/images/products/prod_p92_LFT_1218_291.png"
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
    "shortDescription": "LFT 1219 - Fire ghter is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1219 - Fire ghter features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1219 - Fire ghter is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p92_LFT_1219_292.png",
    "imageUrl": "/images/products/prod_p92_LFT_1219_292.png",
    "thumbnails": [
      "/images/products/prod_p92_LFT_1219_292.png",
      "/images/products/prod_p92_LFT_1219_292.png"
    ]
  },
  {
    "id": "293",
    "slug": "lft-011-shape-sorter-293",
    "name": "LFT 011 - Shape Sorter",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 011 - Shape Sorter is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 011 - Shape Sorter features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 011 - Shape Sorter is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p93_LFT_011_293.png",
    "imageUrl": "/images/products/prod_p93_LFT_011_293.png",
    "thumbnails": [
      "/images/products/prod_p93_LFT_011_293.png",
      "/images/products/prod_p93_LFT_011_293.png"
    ]
  },
  {
    "id": "294",
    "slug": "lft-013-roll-ball-294",
    "name": "LFT 013 - Roll Ball",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 013 - Roll Ball is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 013 - Roll Ball features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 013 - Roll Ball is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p93_LFT_013_294.png",
    "imageUrl": "/images/products/prod_p93_LFT_013_294.png",
    "thumbnails": [
      "/images/products/prod_p93_LFT_013_294.png",
      "/images/products/prod_p93_LFT_013_294.png"
    ]
  },
  {
    "id": "295",
    "slug": "lft-012-play-equipment-lft-012-295",
    "name": "LFT 012 - Play Equipment LFT 012",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 012 - Play Equipment LFT 012 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 012 - Play Equipment LFT 012 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 012 - Play Equipment LFT 012 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p93_LFT_012_295.png",
    "imageUrl": "/images/products/prod_p93_LFT_012_295.png",
    "thumbnails": [
      "/images/products/prod_p93_LFT_012_295.png",
      "/images/products/prod_p93_LFT_012_295.png"
    ]
  },
  {
    "id": "296",
    "slug": "lft-014-shape-sorting-baby-toy-296",
    "name": "LFT 014 - Shape Sorting Baby Toy",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 014 - Shape Sorting Baby Toy is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 014 - Shape Sorting Baby Toy features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 014 - Shape Sorting Baby Toy is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p93_LFT_014_296.png",
    "imageUrl": "/images/products/prod_p93_LFT_014_296.png",
    "thumbnails": [
      "/images/products/prod_p93_LFT_014_296.png",
      "/images/products/prod_p93_LFT_014_296.png"
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
    "shortDescription": "LFT 016 - Set of 4 Pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 016 - Set of 4 Pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 016 - Set of 4 Pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p93_LFT_016_297.png",
    "imageUrl": "/images/products/prod_p93_LFT_016_297.png",
    "thumbnails": [
      "/images/products/prod_p93_LFT_016_297.png",
      "/images/products/prod_p93_LFT_016_297.png"
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
    "shortDescription": "LFT 015 - Set of 4 Pcs is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 015 - Set of 4 Pcs features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 015 - Set of 4 Pcs is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p93_LFT_015_298.png",
    "imageUrl": "/images/products/prod_p93_LFT_015_298.png",
    "thumbnails": [
      "/images/products/prod_p93_LFT_015_298.png",
      "/images/products/prod_p93_LFT_015_298.png"
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
    "shortDescription": "LFT 1251 - Alphabet is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1251 - Alphabet features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1251 - Alphabet is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1251_299.png",
    "imageUrl": "/images/products/prod_p94_LFT_1251_299.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1251_299.png",
      "/images/products/prod_p94_LFT_1251_299.png"
    ]
  },
  {
    "id": "300",
    "slug": "lft-1252-numbers-300",
    "name": "LFT 1252 - Numbers",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1252 - Numbers is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1252 - Numbers features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1252 - Numbers is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1252_300.png",
    "imageUrl": "/images/products/prod_p94_LFT_1252_300.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1252_300.png",
      "/images/products/prod_p94_LFT_1252_300.png"
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
    "shortDescription": "LFT 1254 - Vegetables is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1254 - Vegetables features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1254 - Vegetables is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1254_301.png",
    "imageUrl": "/images/products/prod_p94_LFT_1254_301.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1254_301.png",
      "/images/products/prod_p94_LFT_1254_301.png"
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
    "shortDescription": "LFT 1253 - Play Equipment LFT 1253 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1253 - Play Equipment LFT 1253 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1253 - Play Equipment LFT 1253 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1253_302.png",
    "imageUrl": "/images/products/prod_p94_LFT_1253_302.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1253_302.png",
      "/images/products/prod_p94_LFT_1253_302.png"
    ]
  },
  {
    "id": "303",
    "slug": "lft-1255-play-equipment-lft-1255-303",
    "name": "LFT 1255 - Play Equipment LFT 1255",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1255 - Play Equipment LFT 1255 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1255 - Play Equipment LFT 1255 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1255 - Play Equipment LFT 1255 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1255_303.png",
    "imageUrl": "/images/products/prod_p94_LFT_1255_303.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1255_303.png",
      "/images/products/prod_p94_LFT_1255_303.png"
    ]
  },
  {
    "id": "304",
    "slug": "lft-1256-play-equipment-lft-1256-304",
    "name": "LFT 1256 - Play Equipment LFT 1256",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1256 - Play Equipment LFT 1256 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1256 - Play Equipment LFT 1256 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1256 - Play Equipment LFT 1256 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1256_304.png",
    "imageUrl": "/images/products/prod_p94_LFT_1256_304.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1256_304.png",
      "/images/products/prod_p94_LFT_1256_304.png"
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
    "shortDescription": "LFT 1258 - Parts Of The Body is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1258 - Parts Of The Body features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1258 - Parts Of The Body is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1258_305.png",
    "imageUrl": "/images/products/prod_p94_LFT_1258_305.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1258_305.png",
      "/images/products/prod_p94_LFT_1258_305.png"
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
    "shortDescription": "LFT 1257 - Play Equipment LFT 1257 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1257 - Play Equipment LFT 1257 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1257 - Play Equipment LFT 1257 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1257_306.png",
    "imageUrl": "/images/products/prod_p94_LFT_1257_306.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1257_306.png",
      "/images/products/prod_p94_LFT_1257_306.png"
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
    "shortDescription": "LFT 1259 - Vechicles is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1259 - Vechicles features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1259 - Vechicles is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1259_307.png",
    "imageUrl": "/images/products/prod_p94_LFT_1259_307.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1259_307.png",
      "/images/products/prod_p94_LFT_1259_307.png"
    ]
  },
  {
    "id": "308",
    "slug": "lft-1260-community-helpers-308",
    "name": "LFT 1260 - Community Helpers",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1260 - Community Helpers is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1260 - Community Helpers features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1260 - Community Helpers is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1260_308.png",
    "imageUrl": "/images/products/prod_p94_LFT_1260_308.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1260_308.png",
      "/images/products/prod_p94_LFT_1260_308.png"
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
    "shortDescription": "LFT 1261 - Opposites is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1261 - Opposites features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1261 - Opposites is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p94_LFT_1261_309.png",
    "imageUrl": "/images/products/prod_p94_LFT_1261_309.png",
    "thumbnails": [
      "/images/products/prod_p94_LFT_1261_309.png",
      "/images/products/prod_p94_LFT_1261_309.png"
    ]
  },
  {
    "id": "310",
    "slug": "lft-92-play-equipment-lft-92-310",
    "name": "LFT 92 - Play Equipment LFT 92",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 92 - Play Equipment LFT 92 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 92 - Play Equipment LFT 92 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 92 - Play Equipment LFT 92 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_92_310.png",
    "imageUrl": "/images/products/prod_p96_LFT_92_310.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_92_310.png",
      "/images/products/prod_p96_LFT_92_310.png"
    ]
  },
  {
    "id": "311",
    "slug": "lft-1201-fruits-cutting-311",
    "name": "LFT 1201 - Fruits Cutting",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1201 - Fruits Cutting is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1201 - Fruits Cutting features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1201 - Fruits Cutting is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_1201_311.png",
    "imageUrl": "/images/products/prod_p96_LFT_1201_311.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_1201_311.png",
      "/images/products/prod_p96_LFT_1201_311.png"
    ]
  },
  {
    "id": "312",
    "slug": "lft-1202-vegetables-cutting-312",
    "name": "LFT 1202 - Vegetables Cutting",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1202 - Vegetables Cutting is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1202 - Vegetables Cutting features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1202 - Vegetables Cutting is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_1202_312.png",
    "imageUrl": "/images/products/prod_p96_LFT_1202_312.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_1202_312.png",
      "/images/products/prod_p96_LFT_1202_312.png"
    ]
  },
  {
    "id": "313",
    "slug": "lft-1209-play-equipment-lft-1209-313",
    "name": "LFT 1209 - Play Equipment LFT 1209",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1209 - Play Equipment LFT 1209 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1209 - Play Equipment LFT 1209 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1209 - Play Equipment LFT 1209 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_1209_313.png",
    "imageUrl": "/images/products/prod_p96_LFT_1209_313.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_1209_313.png",
      "/images/products/prod_p96_LFT_1209_313.png"
    ]
  },
  {
    "id": "314",
    "slug": "lft-1210-vegetables-314",
    "name": "LFT 1210 - Vegetables",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1210 - Vegetables is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1210 - Vegetables features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1210 - Vegetables is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_1210_314.png",
    "imageUrl": "/images/products/prod_p96_LFT_1210_314.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_1210_314.png",
      "/images/products/prod_p96_LFT_1210_314.png"
    ]
  },
  {
    "id": "315",
    "slug": "lft-98-play-equipment-lft-98-315",
    "name": "LFT 98 - Play Equipment LFT 98",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 98 - Play Equipment LFT 98 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 98 - Play Equipment LFT 98 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 98 - Play Equipment LFT 98 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_98_315.png",
    "imageUrl": "/images/products/prod_p96_LFT_98_315.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_98_315.png",
      "/images/products/prod_p96_LFT_98_315.png"
    ]
  },
  {
    "id": "316",
    "slug": "lft-99-play-equipment-lft-99-316",
    "name": "LFT 99 - Play Equipment LFT 99",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 99 - Play Equipment LFT 99 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 99 - Play Equipment LFT 99 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 99 - Play Equipment LFT 99 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_99_316.png",
    "imageUrl": "/images/products/prod_p96_LFT_99_316.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_99_316.png",
      "/images/products/prod_p96_LFT_99_316.png"
    ]
  },
  {
    "id": "317",
    "slug": "lft-1204-vegetables-cutting-317",
    "name": "LFT 1204 - Vegetables Cutting",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1204 - Vegetables Cutting is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1204 - Vegetables Cutting features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1204 - Vegetables Cutting is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_1204_317.png",
    "imageUrl": "/images/products/prod_p96_LFT_1204_317.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_1204_317.png",
      "/images/products/prod_p96_LFT_1204_317.png"
    ]
  },
  {
    "id": "318",
    "slug": "lft-1203-fruitscutting-318",
    "name": "LFT 1203 - FruitsCutting",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1203 - FruitsCutting is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1203 - FruitsCutting features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1203 - FruitsCutting is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_1203_318.png",
    "imageUrl": "/images/products/prod_p96_LFT_1203_318.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_1203_318.png",
      "/images/products/prod_p96_LFT_1203_318.png"
    ]
  },
  {
    "id": "319",
    "slug": "lft-051-stack-o-barrel-319",
    "name": "LFT 051 - Stack-o-Barrel",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 051 - Stack-o-Barrel is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 051 - Stack-o-Barrel features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 051 - Stack-o-Barrel is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_051_319.png",
    "imageUrl": "/images/products/prod_p96_LFT_051_319.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_051_319.png",
      "/images/products/prod_p96_LFT_051_319.png"
    ]
  },
  {
    "id": "320",
    "slug": "lft-053-stack-o-cups-320",
    "name": "LFT 053 - Stack-o-Cups",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 053 - Stack-o-Cups is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 053 - Stack-o-Cups features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 053 - Stack-o-Cups is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_053_320.png",
    "imageUrl": "/images/products/prod_p96_LFT_053_320.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_053_320.png",
      "/images/products/prod_p96_LFT_053_320.png"
    ]
  },
  {
    "id": "321",
    "slug": "lft-052-play-equipment-lft-052-321",
    "name": "LFT 052 - Play Equipment LFT 052",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 052 - Play Equipment LFT 052 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 052 - Play Equipment LFT 052 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 052 - Play Equipment LFT 052 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_052_321.png",
    "imageUrl": "/images/products/prod_p96_LFT_052_321.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_052_321.png",
      "/images/products/prod_p96_LFT_052_321.png"
    ]
  },
  {
    "id": "322",
    "slug": "lft-97c-toddler-ring-322",
    "name": "LFT 97C - Toddler Ring",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 97C - Toddler Ring is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 97C - Toddler Ring features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 97C - Toddler Ring is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_97C_322.png",
    "imageUrl": "/images/products/prod_p96_LFT_97C_322.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_97C_322.png",
      "/images/products/prod_p96_LFT_97C_322.png"
    ]
  },
  {
    "id": "323",
    "slug": "lft-054-stack-o-cubes-323",
    "name": "LFT 054 - Stack-o-Cubes",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 054 - Stack-o-Cubes is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 054 - Stack-o-Cubes features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 054 - Stack-o-Cubes is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p96_LFT_054_323.png",
    "imageUrl": "/images/products/prod_p96_LFT_054_323.png",
    "thumbnails": [
      "/images/products/prod_p96_LFT_054_323.png",
      "/images/products/prod_p96_LFT_054_323.png"
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
    "shortDescription": "LFT 90D - Hopscotch is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 90D - Hopscotch features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 90D - Hopscotch is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_90D_324.png",
    "imageUrl": "/images/products/prod_p97_LFT_90D_324.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_90D_324.png",
      "/images/products/prod_p97_LFT_90D_324.png"
    ]
  },
  {
    "id": "325",
    "slug": "lft-1241-play-equipment-lft-1241-325",
    "name": "LFT 1241 - Play Equipment LFT 1241",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1241 - Play Equipment LFT 1241 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1241 - Play Equipment LFT 1241 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1241 - Play Equipment LFT 1241 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1241_325.png",
    "imageUrl": "/images/products/prod_p97_LFT_1241_325.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1241_325.png",
      "/images/products/prod_p97_LFT_1241_325.png"
    ]
  },
  {
    "id": "326",
    "slug": "lft-1221-wild-animal-set-326",
    "name": "LFT 1221 - Wild Animal Set",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1221 - Wild Animal Set is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1221 - Wild Animal Set features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1221 - Wild Animal Set is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1221_326.png",
    "imageUrl": "/images/products/prod_p97_LFT_1221_326.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1221_326.png",
      "/images/products/prod_p97_LFT_1221_326.png"
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
    "shortDescription": "LFT 1222 - Farm Set is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1222 - Farm Set features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1222 - Farm Set is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1222_327.png",
    "imageUrl": "/images/products/prod_p97_LFT_1222_327.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1222_327.png",
      "/images/products/prod_p97_LFT_1222_327.png"
    ]
  },
  {
    "id": "328",
    "slug": "lft-1223-play-equipment-lft-1223-328",
    "name": "LFT 1223 - Play Equipment LFT 1223",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1223 - Play Equipment LFT 1223 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1223 - Play Equipment LFT 1223 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1223 - Play Equipment LFT 1223 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1223_328.png",
    "imageUrl": "/images/products/prod_p97_LFT_1223_328.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1223_328.png",
      "/images/products/prod_p97_LFT_1223_328.png"
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
    "shortDescription": "LFT 1224 - Insects Set is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1224 - Insects Set features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1224 - Insects Set is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1224_329.png",
    "imageUrl": "/images/products/prod_p97_LFT_1224_329.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1224_329.png",
      "/images/products/prod_p97_LFT_1224_329.png"
    ]
  },
  {
    "id": "330",
    "slug": "lft-1152-xylophone-big-330",
    "name": "LFT 1152 - Xylophone Big",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1152 - Xylophone Big is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1152 - Xylophone Big features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1152 - Xylophone Big is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1152_330.png",
    "imageUrl": "/images/products/prod_p97_LFT_1152_330.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1152_330.png",
      "/images/products/prod_p97_LFT_1152_330.png"
    ]
  },
  {
    "id": "331",
    "slug": "lft-1151-xylophone-331",
    "name": "LFT 1151 - Xylophone",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1151 - Xylophone is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1151 - Xylophone features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1151 - Xylophone is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1151_331.png",
    "imageUrl": "/images/products/prod_p97_LFT_1151_331.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1151_331.png",
      "/images/products/prod_p97_LFT_1151_331.png"
    ]
  },
  {
    "id": "332",
    "slug": "lft-1243-bin-buddy-332",
    "name": "LFT 1243 - Bin Buddy",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1243 - Bin Buddy is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1243 - Bin Buddy features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1243 - Bin Buddy is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1243_332.png",
    "imageUrl": "/images/products/prod_p97_LFT_1243_332.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1243_332.png",
      "/images/products/prod_p97_LFT_1243_332.png"
    ]
  },
  {
    "id": "333",
    "slug": "lft-1231-doctor-set-333",
    "name": "LFT 1231 - Doctor set",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1231 - Doctor set is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1231 - Doctor set features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1231 - Doctor set is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1231_333.png",
    "imageUrl": "/images/products/prod_p97_LFT_1231_333.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1231_333.png",
      "/images/products/prod_p97_LFT_1231_333.png"
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
    "shortDescription": "LFT 1232 - Kitchen set is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1232 - Kitchen set features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1232 - Kitchen set is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1232_334.png",
    "imageUrl": "/images/products/prod_p97_LFT_1232_334.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1232_334.png",
      "/images/products/prod_p97_LFT_1232_334.png"
    ]
  },
  {
    "id": "335",
    "slug": "lft-1233-play-equipment-lft-1233-335",
    "name": "LFT 1233 - Play Equipment LFT 1233",
    "price": "Quote on Request",
    "category": "Educational Toys & Roleplay",
    "categoryId": "toys",
    "categoryColor": "#96CEB4",
    "shortDescription": "LFT 1233 - Play Equipment LFT 1233 is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1233 - Play Equipment LFT 1233 features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1233 - Play Equipment LFT 1233 is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1233_335.png",
    "imageUrl": "/images/products/prod_p97_LFT_1233_335.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1233_335.png",
      "/images/products/prod_p97_LFT_1233_335.png"
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
    "shortDescription": "LFT 1234 - Beauty set is designed for durability, safety, and vibrant play in kindergarten and school environments.",
    "description": "The LFT 1234 - Beauty set features heavy-duty construction with child-safe non-toxic materials. Engineered to withstand active daily school use while fostering motor skills, balance, and cooperative play.",
    "longDescription": "LFT 1234 - Beauty set is manufactured by Little Fingers India Pvt. Ltd. under strict CE and ISI quality standards. Designed specifically for preschools, daycares, and play centers across India. Features smooth rounded edges, UV-resistant non-fade colors, and easy-clean surfaces.",
    "features": [
      "CE & ISI Certified Non-Toxic Child Safety Equipment",
      "High-grade virgin LLDPE / Heavy-duty powder-coated steel frame",
      "Ergonomic rounded contours with anti-slip stability",
      "UV-resistant, colorfast finish for indoor & semi-outdoor use",
      "Pan-India delivery, school setup & 1-year warranty"
    ],
    "specifications": {
      "material": "Food-Grade Non-Toxic LLDPE Plastic & Heavy Duty Steel Frame",
      "ageGroup": "2 - 12 Years",
      "dimensions": "Standard School Dimensions",
      "capacity": "Child Safe Heavy-Duty Load Capacity",
      "colorOptions": "Multi-Color (Red, Yellow, Blue, Green)",
      "warranty": "1 Year Manufacturer Warranty"
    },
    "image": "/images/products/prod_p97_LFT_1234_336.png",
    "imageUrl": "/images/products/prod_p97_LFT_1234_336.png",
    "thumbnails": [
      "/images/products/prod_p97_LFT_1234_336.png",
      "/images/products/prod_p97_LFT_1234_336.png"
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
