import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CompA from './components/parent to child/CompA';

const App = () => {
  let a=10;
  let b=100;
  return (
    <div>
      <h1> Hello my number is {a}</h1>
      {/* <Header/>
      <Home/>
      <Footer/> */}
      <CompA data={a}
      x={b}
      
      />
      
    </div>
  );
};

export default App;