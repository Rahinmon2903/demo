import React from 'react';

import useApiCall from './UseApiCall';

const Example = () => {

    const value=useApiCall("https://fakestoreapi.com/products")
    return (
        <>
        {value && value.map((ele)=>{
            return(
                      <div
            key={ele.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm 
               dark:bg-gray-800 dark:border-gray-700 flex flex-col"
          >
            <img
              className="p-8 rounded-t-lg h-64 object-contain mx-auto"
              src={ele.image}
              alt={ele.title}
            />
            <div className="px-5 pb-5 flex flex-col flex-grow">
              <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                {ele.title}
              </h5>

              {/* Ratings */}
              <div className="flex items-center mt-2 mb-4">
                <span
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm 
                         dark:bg-blue-200 dark:text-blue-800"
                >
                  {ele.rating.rate} ★
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                {ele.description}
              </p>

              {/* Price + Add to cart */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${ele.price.toFixed(2)}
                </span>
               
              </div>
            </div>
          </div>
        
            )
        })}
            
        </>
    );
};

export default Example;