import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
  const iRef = useRef();       // for focusing the first input
  const iRef2 = useRef(0);     // for counting changes

  const [data, setData] = useState("");

  useEffect(() => {
    // focus the first input on mount
    iRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setData(e.target.value);
    iRef2.current += 1; // increment counter
    console.log("Change count:", iRef2.current);
   
  };

  return (
    <div>
      <h1>UseRef Example</h1>

      <input
        type="text"
        placeholder="enter your name"
        ref={iRef}
      />
      <input
        type="email"
        placeholder="enter your email"
        onChange={handleChange}
      />

      <p>Typed value: {data}</p>
      <p>Changes counted with useRef: {iRef2.current}</p>
    </div>
  );
};

export default UseRef;