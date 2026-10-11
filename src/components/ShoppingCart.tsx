import React from 'react';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, isOpen, onClose, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end" onClick={onClose}>
      <div className="bg-white w-full max-w-md h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-serif text-2xl text-stone-900">Shopping Cart</h2>
            <button onClick={onClose} className="text-stone-400 hover:text-stone-600 text-2xl">&times;</button>
          </div>
          {items.length === 0 ? (
            <p className="text-stone-500 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-medium text-stone-900">{item.name}</h3>
                      <p className="text-amber-700 font-semibold">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 border">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 border">+</button>
                        <button onClick={() => onRemove(item.id)} className="ml-auto text-red-600 text-sm">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold text-amber-700">${total.toFixed(2)}</span>
                </div>
                <button className="w-full py-3 bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors">
                  Checkout with Shopify
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
