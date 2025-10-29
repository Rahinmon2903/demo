import React, { useEffect, useState } from "react";
import axios from "axios";
import Model from "./Model";

const Data = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", [...cart, product]); // Debugging
  };

  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 
                dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
      {data.map((ele) => (
        <div
          key={ele.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col"
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

            {/* Ratings placeholder */}
            <div className="flex items-center mt-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
                {ele.rating.rate} ★
              </span>
            </div>
            <div >
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                {ele.description}
              </p>
            </div>

            {/* Price + Button pinned to bottom */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${ele.price.toFixed(2)}
              </span>
              <button
                onClick={(ele) => handleAddToCart(ele)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                           focus:outline-none focus:ring-blue-300 font-medium 
                           rounded-lg text-sm px-5 py-2.5 text-center 
                           dark:bg-blue-600 dark:hover:bg-blue-700 
                           dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
 
    </div>
  );
};

export default Data;
