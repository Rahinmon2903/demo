import React, {useState} from 'react';


const Counter = () => {
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
     
      
     
      
    </div>
  );
};

export default Counter;