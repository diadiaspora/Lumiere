import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="font-serif text-lg text-stone-900 mb-2">{product.name}</h3>
        <p className="text-xl font-semibold text-amber-700 mb-3">${product.price}</p>
        <div className="flex gap-2">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 px-4 py-2 border border-stone-300 text-stone-700 text-sm hover:bg-stone-50 transition-colors"
          >
            Quick View
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 px-4 py-2 bg-amber-600 text-white text-sm hover:bg-amber-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
