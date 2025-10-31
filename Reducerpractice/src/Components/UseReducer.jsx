import React, { useReducer } from "react";
import { ReducerFunction } from "./UseReducerFunction";

const UseReducer = () => {
  const [value, dispatch] = useReducer(ReducerFunction, 0);

  return (
    <>
      <h1>useReducer Example</h1>

      <button
        onClick={() => dispatch({ type: "ADD", payload: 20 })}
        
      >
        ADD
      </button>

      <span >{value}</span>

      <button
        onClick={() => dispatch({ type: "SUB", payload: 10 })}
       
      >
        SUB
      </button>
    </>
  );
};

export default UseReducer;