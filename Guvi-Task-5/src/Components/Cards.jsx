import React from "react";

const Cards = ({ item, onRemove }) => {
  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm 
                 dark:bg-gray-800 dark:border-gray-700 flex flex-col mb-4"
    >
      <img
        className="p-8 rounded-t-lg h-64 object-contain mx-auto"
        src={item.image}
        alt={item.title}
      />
      <div className="px-5 pb-5 flex flex-col flex-grow">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {item.title}
        </h5>

        {/* Ratings */}
        <div className="flex items-center mt-2 mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm 
                           dark:bg-blue-200 dark:text-blue-800">
            {item.rating.rate} ★
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${item.price.toFixed(2)}
          </span>

          
            <button
              onClick={() => onRemove(item)}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 
                         focus:outline-none focus:ring-red-300 font-medium 
                         rounded-lg text-sm px-5 py-2.5 text-center 
                         dark:bg-red-600 dark:hover:bg-red-700 
                         dark:focus:ring-red-800"
            >
              Remove from cart
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default Cards;