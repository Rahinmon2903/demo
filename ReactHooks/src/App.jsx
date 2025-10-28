import React, { useState } from 'react';
import Compc from './Component/Compc';
// import Counter from './Component/Counter';
// import UseEffect from './Component/UseEffect';

const App = () => {

  // const [stop,setStop] =useState(true)
  //  const StopInterval=() =>{
  //   setStop(!stop)
        
  //   }
  return (
    <div>
         {/* <button onClick={StopInterval}>     {stop ? "mounting" : "notmounting"}</button>
         {stop && <UseEffect/>}
     */}
     <Compc/>
      
    </div>
  );
};

export default App;