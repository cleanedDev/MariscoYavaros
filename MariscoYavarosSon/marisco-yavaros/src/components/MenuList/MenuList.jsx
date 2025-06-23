"use client"
import React, { useState } from 'react';
// import MenuItem from './MenuItem';
import MenuItem from '../MenuItem/MenuItem';
// import { MenuItem as MenuItemType } from '../types';
import { MenuItem as MenuItemType } from '@/Types';

function MenuList({items}){
  const [activeCategory, setActiveCategory] = useState('todos');
  
  const filteredItems = activeCategory === 'todos' 
    ? items 
    : items.filter(item => item.category === activeCategory);
  
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cocteles', label: 'Cocteles' },
    { id: 'ceviches', label: 'Ceviches' },
    { id: 'tostadas', label: 'Tostadas' },
    { id: 'calientes', label: 'Calientes' },
    { id: 'tostitos', label: 'Tostitos' },
    { id: 'molcajetes', label: 'Molcajetes' },
    { id: 'bebidas', label: 'Bebidas' },
  ];
  
  return (
    <div>
      {/* Categories filter */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={` btn px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Menu items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No hay productos en esta categoría.</p>
        </div>
      )}
    </div>
  );
};

export default MenuList;