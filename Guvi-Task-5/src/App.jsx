import React, { useState } from "react";
import Header from "./Components/Header";
import Data from "./Components/Data";
import Model from "./Components/Model";

const App = () => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const productInCart = cart.find((ele) => ele.id === product.id);
    if (productInCart) {
      alert("Item already added");
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
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