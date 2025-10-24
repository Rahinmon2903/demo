import React from 'react';
import Product from './components/Product';
import ArrayMethods from './components/ArrayMethods';
import CompA from './components/CompA';
import iphone13 from "../src/assests/13.jpg";
import iphone15 from "./assests/15.jpg";
import iphone16 from "./assests/iphone.webp";


const App = () => {
  return (
    <div>
      {/* <Product name="iphone" price="900" /> */}
      {/* <ArrayMethods/> */}
      <CompA phone="Iphone" image={iphone13} desc="iphone13"/>
      <CompA phone="Iphone15" image={iphone15} desc="iphone15"/>
      <CompA phone="Iphone16" image={iphone16} desc="iphone16"/>
    </div>
  );
};

export default App;