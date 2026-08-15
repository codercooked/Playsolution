export const getWhatsAppProductUrl = (product: {
  id?: string;
  name: string;
  price?: string;
  category?: string;
  specifications?: {
    dimensions?: string;
  };
  slug?: string;
}) => {
  const phone = "918927298217";
  
  let msg = `Hello Play Solution! 👋\n\nI am interested in inquiring about the following product:\n\n`;
  msg += `📌 *Product Name:* ${product.name}\n`;
  if (product.id) msg += `🔢 *Product ID/Code:* ${product.id}\n`;
  if (product.price) msg += `💰 *Price:* ${product.price}\n`;
  if (product.category) msg += `🏷️ *Category:* ${product.category}\n`;
  if (product.specifications?.dimensions) msg += `📐 *Dimensions:* ${product.specifications.dimensions}\n`;
  if (product.slug && typeof window !== 'undefined') {
    msg += `🔗 *Product Link:* ${window.location.origin}/products/${product.slug}\n`;
  }
  msg += `\nPlease share details regarding stock availability, bulk discounts, and delivery timeline to my location!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
};

export const getWhatsAppGeneralUrl = (customMessage?: string) => {
  const phone = "918927298217";
  const defaultMsg = "Hello Play Solution! 👋 I am interested in getting a free quote and consultation for kindergarten school equipment.";
  const text = customMessage || defaultMsg;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
