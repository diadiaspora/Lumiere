import React, { useState } from 'react';
import { products, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';
import { ShoppingCart } from './ShoppingCart';
import { FilterBar } from './FilterBar';

interface CartItem extends Product {
  quantity: number;
}

const AppLayout: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMetal, setSelectedMetal] = useState('all');

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedMetal !== 'all' && product.metal !== selectedMetal) return false;
    return true;
  });

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="font-serif text-2xl text-stone-900">LUMIÈRE</h1>
            <div className="flex items-center gap-6">
              <a href="#shop" className="text-stone-700 hover:text-amber-600">Shop</a>
              <a href="#story" className="text-stone-700 hover:text-amber-600">Our Story</a>
              <button onClick={() => setCartOpen(true)} className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://d64gsuwffb70l.cloudfront.net/690fb33cbe2c27078bfbc975_1762636648886_f2df99ca.webp"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="font-serif text-5xl md:text-7xl mb-4">Timeless Elegance</h2>
            <p className="text-xl md:text-2xl mb-8">Handcrafted jewelry for the modern soul</p>
            <button onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-white text-stone-900 font-medium hover:bg-stone-100 transition-colors">
              Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-4xl text-center mb-12">Our Collection</h2>
        <FilterBar
          selectedCategory={selectedCategory}
          selectedMetal={selectedMetal}
          priceRange={[0, 300]}
          onCategoryChange={setSelectedCategory}
          onMetalChange={setSelectedMetal}
          onPriceRangeChange={() => {}}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setSelectedProduct}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="bg-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-6">Our Story</h2>
          <p className="text-lg text-stone-700 mb-4">
            Founded in 2020, LUMIÈRE brings together traditional craftsmanship and contemporary design. Each piece is thoughtfully created to celebrate your unique story.
          </p>
          <p className="text-lg text-stone-700">
            We believe in ethical sourcing, sustainable practices, and creating jewelry that lasts a lifetime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">LUMIÈRE</h3>
              <p className="text-stone-400 text-sm">Timeless jewelry for the modern soul</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white">Rings</a></li>
                <li><a href="#" className="hover:text-white">Necklaces</a></li>
                <li><a href="#" className="hover:text-white">Earrings</a></li>
                <li><a href="#" className="hover:text-white">Bracelets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">About</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white">Our Story</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Pinterest</a></li>
                <li><a href="#" className="hover:text-white">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-sm text-stone-400">
            <p>&copy; 2025 LUMIÈRE. All rights reserved. Shopify-ready.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <QuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart} />
      <ShoppingCart items={cartItems} isOpen={cartOpen} onClose={() => setCartOpen(false)} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
    </div>
  );
};

export default AppLayout;
