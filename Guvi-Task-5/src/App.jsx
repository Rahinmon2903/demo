import React from 'react';
import Header from './Components/Header';
import Data from './Components/Data';
import Model from './Components/Model';
   

const App = () => {
   const [open, setOpen] = useState(false);
  return (
    <div>
      <Header setOpen={setOpen}/>
      <Data/>
         <Model open={open} setOpen={setOpen}/>
    
      
    </div>
  );
};

export default App;
