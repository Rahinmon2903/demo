import React from "react";
import Cards from "./Cards";

const Model = ({ open, setOpen, cart, handleRemoveFromCart }) => {
  // calculate total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-center items-center 
                        bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 
                          rounded-lg shadow-lg flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b 
                            border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Shopping Cart ({cart.length})
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="./src/assets/empty-cart-yellow.png"
                    alt="Empty Cart"
                    className="w-48 h-48 object-contain mb-4"
                  />
                 
                </div>
              ) : (
                cart.map((item) => (
                  <Cards
                    key={item.id}
                    item={item}
                    onRemove={handleRemoveFromCart}
                  />
                ))
              )}
            </div>

            {/* Footer / Total */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex 
                              items-center justify-between">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  Total: ${total.toFixed(2)}
                </span>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium 
                             rounded-lg px-5 py-2.5"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Model;

