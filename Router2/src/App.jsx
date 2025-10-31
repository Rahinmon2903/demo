import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Create from "./Pages/Create";
import HomeNotFound from "./Pages/HomeNotFound";
import Home from "./Pages/Home";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="*" element={<HomeNotFound />}></Route>
          
          
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
