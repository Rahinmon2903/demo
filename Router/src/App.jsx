import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import PageNotFound from './Pages/PageNotFound';
import Help from './Pages/Help';
import Support from './Pages/Support';
import Productdetials from './Pages/Productdetials';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route  path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Products/>}></Route>
        <Route path='/productss/:id' element={<Productdetials/>}></Route>
         <Route path='*' element={<PageNotFound/>}></Route>
        <Route path='/help' element={<Help/>}>
         <Route path='support' element={<Support/>}></Route>
        </Route>


      </Routes>
      <div>
        <Footer/>
      </div>
      
      
      </BrowserRouter>
   
      
    </>
  );
};

export default App;