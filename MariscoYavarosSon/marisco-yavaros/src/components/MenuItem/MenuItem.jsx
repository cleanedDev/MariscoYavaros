import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
// import { MenuItem as MenuItemType } from '../types';
import { MenuItem as MenuItemType } from '@/Types';
// import { useCart } from '../context/CartContext';
import { useCart } from '@/Context/CartContext';


const MenuItem = ({ item }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(
    item.sizes ? item.sizes[0] : null
  );

  const handleAddToCart = () => {
    const price = selectedSize ? selectedSize.price : item.price;
    const size = selectedSize ? selectedSize.label : null;

    addItem({
      ...item,
      price,
      quantity,
      size, // solo si aplica
    });

    setQuantity(1);
  };

  const displayPrice = selectedSize ? selectedSize.price : item.price;

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative bg-cyan-200">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`w-auto h-full object-cover transition-transform duration-500 mx-auto ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute bottom-0 left-0 bg-blue-900 text-white px-4 py-1 rounded-tr-lg">
          ${displayPrice}.00 MXN
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{item.name}</h3>
        <p className="text-gray-700 mb-4 h-12 overflow-hidden">{item.description}</p>

        {item.sizes && (
          <select
            className="w-full mb-3 border border-gray-300 rounded px-2 py-1"
            value={selectedSize?.label}
            onChange={(e) =>
              setSelectedSize(item.sizes.find(size => size.label === e.target.value))
            }
          >
            {item.sizes.map((size) => (
              <option key={size.label} value={size.label}>
                {size.label} - ${size.price}
              </option>
            ))}
          </select>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              className=" btn px-3 py-1 text-gray-700 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3 py-1">{quantity}</span>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className=" btn px-3 py-1 text-gray-700 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="btn bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center transition-colors"
          >
            <PlusCircle size={18} className="mr-1" />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

// const MenuItem = ({ item }) => {
//   const { addItem } = useCart();
//   const [quantity, setQuantity] = useState(1);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleAddToCart = () => {
//     addItem({ ...item, quantity });
//     setQuantity(1);
//   };

//   return (
//     <div
//       className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:translate-y-[-5px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="h-48 overflow-hidden relative">
//         <img
//           src={item.image}
//           alt={item.name}
//           className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
//         />
//         <div className="absolute bottom-0 left-0 bg-blue-900 text-white px-4 py-1 rounded-tr-lg">
//           ${item.price}.00 MXN
//         </div>
//       </div>

//       <div className="p-4">
//         <h3 className="text-xl font-bold text-blue-900 mb-2">{item.name}</h3>
//         <p className="text-gray-700 mb-4 h-12 overflow-hidden">{item.description}</p>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center border border-gray-300 rounded-md">
//             <button
//               onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//               className="px-3 py-1 text-gray-700 hover:bg-gray-100"
//             >
//               -
//             </button>
//             <span className="px-3 py-1">{quantity}</span>
//             <button
//               onClick={() => setQuantity(prev => prev + 1)}
//               className="px-3 py-1 text-gray-700 hover:bg-gray-100"
//             >
//               +
//             </button>
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center transition-colors"
//           >
//             <PlusCircle size={18} className="mr-1" />
//             Agregar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuItem;