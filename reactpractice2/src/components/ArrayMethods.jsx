import React from "react";
// import "./head.css"

const ArrayMethods = () => {
  const users = ["John", "Doe", "Alice", "Smith", "Adam", "Jack", "Shoe"]; //7

const Add = ()=>{
 let ind= users.push("rahin");
 console.log(ind);
  console.log("User added", users[users.length-1]);
  users.forEach((ele)=> console.log(ele));
}


  return (
    <>
      <h1>Array Methods</h1>
      <ul>
        {users.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
            </div>
          );
        })}
      </ul>
      <button onClick={Add} >Add</button>
      <button >Remove</button>
      <button>Slice</button>
      <button>Splice</button>
    </>
  );
};

export default ArrayMethods;