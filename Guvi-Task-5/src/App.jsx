import React, { useState } from "react";
import Header from "./Components/Header";
import Data from "./Components/Data";
import Model from "./Components/Model";

const App = () => {
  // for opening and closing the model
  const [open, setOpen] = useState(false);
  //  Cart for storing cards inside the model
  const [cart, setCart] = useState([]); 
  
  

//  Function to add a cart if the cart is not added initially
  const handleAddToCart = (product) => {
    const productInCart = cart.find((ele) => ele.id === product.id);
    if (productInCart) {
      alert("Item already added");
    } else {
      setCart([...cart, product]);
    }
  };

  //  Function to remove the cart
  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      {/* passing all the necessary props needed for the component */}
      <Header setOpen={setOpen} value={cart.length} />
      <Data
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        cart={cart}
      />
      <Model
        open={open}
        setOpen={setOpen}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;