import React from 'react';
import { Product } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <button onClick={onClose} className="float-right text-stone-400 hover:text-stone-600 text-2xl">&times;</button>
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-2">{product.category}</p>
            <h2 className="font-serif text-3xl text-stone-900 mb-4">{product.name}</h2>
            <p className="text-2xl font-semibold text-amber-700 mb-4">${product.price}</p>
            <p className="text-stone-600 mb-6">{product.description}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-stone-600">Metal:</span>
                <span className="text-sm font-medium text-stone-900 capitalize">{product.metal}</span>
              </div>
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full py-3 bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
