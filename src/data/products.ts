export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets';
  metal: 'gold' | 'silver' | 'mixed';
  image: string;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: 'Diamond Solitaire Ring', price: 189, category: 'rings', metal: 'gold', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636649672_d3f9f127.webp', description: 'Elegant 14k gold ring with ethically sourced diamond' },
  { id: 2, name: 'Minimalist Band Ring', price: 129, category: 'rings', metal: 'gold', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636651378_39b8961f.webp', description: 'Simple yet sophisticated gold band' },
  { id: 3, name: 'Stacked Ring Set', price: 159, category: 'rings', metal: 'mixed', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636653104_c1a4e30c.webp', description: 'Set of three stackable rings in mixed metals' },
  { id: 4, name: 'Layered Chain Necklace', price: 219, category: 'necklaces', metal: 'gold', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636653858_06b8f99a.webp', description: 'Trendy layered necklace with delicate chains' },
  { id: 5, name: 'Pendant Necklace', price: 179, category: 'necklaces', metal: 'gold', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636655582_843d877e.webp', description: 'Classic pendant on 18-inch gold chain' },
  { id: 6, name: 'Choker Necklace', price: 149, category: 'necklaces', metal: 'silver', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636657313_77e3df91.webp', description: 'Modern silver choker with adjustable length' },
  { id: 7, name: 'Gold Hoop Earrings', price: 139, category: 'earrings', metal: 'gold', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636658048_6a73ed51.webp', description: 'Classic gold hoops in medium size' },
  { id: 8, name: 'Statement Hoops', price: 169, category: 'earrings', metal: 'gold', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636659780_87335470.webp', description: 'Bold oversized hoop earrings' },
  { id: 9, name: 'Dainty Studs', price: 99, category: 'earrings', metal: 'silver', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636661516_3360283d.webp', description: 'Delicate silver stud earrings' },
  { id: 10, name: 'Charm Bracelet', price: 199, category: 'bracelets', metal: 'silver', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636662261_8c22d2f8.webp', description: 'Silver chain bracelet with custom charms' },
  { id: 11, name: 'Tennis Bracelet', price: 249, category: 'bracelets', metal: 'gold', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636664045_3088ffef.webp', description: 'Elegant tennis bracelet with crystals' },
  { id: 12, name: 'Cuff Bracelet', price: 179, category: 'bracelets', metal: 'mixed', image: 'https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636665792_da44d60d.webp', description: 'Modern mixed metal cuff bracelet' },
];
