import React from 'react';
import Obj from './components/Obj';
// import Product from './components/Product';
// import ArrayMethods from './components/ArrayMethods';
// import CompA from './components/CompA';
// import iphone13 from "../src/assests/13.jpg";
// import iphone15 from "./assests/15.jpg";
// import iphone16 from "./assests/iphone.webp";
// import Singlevalue from './components/Singlevalue';
import Array from './components/Array';


const App = () => {
  //  let a = 10;
  let arr = [1, 2, 3, 4, 5];
  // let obj = { batch: "FSD-WD-B-33", mode: "Weekday", mentor: "Rupan" };
  // let arrObj = [
  //   {
  //     name: "Iphone",
  //     price: "$899",
  //     desc: "This is Iphone 13 pro",
  //     image: phone,
  //   },
  //   {
  //     name: "Laptop",
  //     price: "$1000",
  //     desc: "This is Azsus Laptop",
  //     image: lap,
  //   },
  //   {
  //     name: "Tab",
  //     price: "$499",
  //     desc: "This is Ipad Pro",
  //     image: tab,
  //   }
  // ];
  // const shopping = [
  //    {
  //     id:1,
  //     name:"Printer",
  //     price:5000,
  //     category:"Electronics"
  //   },
  //    {
  //     id:2,
  //     name:"Scanner",
  //     price:5000,
  //     category:"Electronics"
  //   },
  //    {
  //     id:3,
  //     name:"Carrot",
  //     price:50,
  //     category:"Grocery"
  //   },
  //    {
  //     id:4,
  //     name:"Apple",
  //     price:250,
  //     category:"Grocery"
  //   },
  // ]
  return (
    <div>
      {/* <Product name="iphone" price="900" /> */}
      {/* <ArrayMethods/> */}
      {/* <CompA phone="Iphone" image={iphone13} desc="iphone13"/>
      <CompA phone="Iphone15" image={iphone15} desc="iphone15"/>
      <CompA phone="Iphone16" /> */}
      {/* <Singlevalue a={a}/> */}
      <Array arr={arr}/>
      {/* <Obj obj={obj}/> */}

    </div>
  );
};

export default App;