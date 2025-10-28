import React, {useState} from 'react';
import CompA from './Component/CompA';

const App = () => {
  const [value,setValue]=useState(0);
  const [status,useStatus]=useState(true);
  const add =() =>{
    useStatus(false);
    setValue(value+1);

  }
  const sub=()=>{
     useStatus(true);
    setValue(value==0?0:value-1);

  }
  return (
    <div>
      <h1>{value}</h1>
      {status ?  <button onClick={add}>Add to cart </button> : <button onClick={sub}>remove to cart</button> }
     
      
      <CompA status={status} useStatus={useStatus}/>
      
    </div>
  );
};

export default App;