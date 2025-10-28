import React, {useState} from 'react';

const App = () => {
  const [value,setValue]=useState(10);
  const add =() =>{
    setValue(value+1);

  }
  const sub=()=>{
    setValue(value==0?0:value-1);

  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
      
    </div>
  );
};

export default App;