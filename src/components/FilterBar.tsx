import React from 'react';

interface FilterBarProps {
  selectedCategory: string;
  selectedMetal: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onMetalChange: (metal: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  selectedMetal,
  onCategoryChange,
  onMetalChange,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="all">All Jewelry</option>
            <option value="rings">Rings</option>
            <option value="necklaces">Necklaces</option>
            <option value="earrings">Earrings</option>
            <option value="bracelets">Bracelets</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Metal Type</label>
          <select
            value={selectedMetal}
            onChange={(e) => onMetalChange(e.target.value)}
            className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="all">All Metals</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Sort By</label>
          <select className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};
