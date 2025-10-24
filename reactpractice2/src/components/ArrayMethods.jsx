import React from "react";
// import "./head.css"

const ArrayMethods = () => {
  const users = ["John", "Doe", "Alice", "Smith", "Adam", "Jack", "Shoe"]; //7

const Add = ()=>{
 let ind= users.push("rahin");
 console.log(ind);
  console.log("User added", users[users.length-1]);
  users.forEach((ele)=> console.log(ele));
  let index =users.indexOf("Sukin");
  console.log(index);
  if(index==-1){
    console.log("there is no such user");
    users.push("Sukin");
    users.forEach((ele)=> console.log(ele));
    
  }
}
const remove = ()=>{
  let removed=users.pop();

      users.forEach((ele)=> console.log(ele));

  
}
const slice = ()=>{
   let slice1=users.slice(1,3);
     console.log(slice1);
   console.log(users);

   
   

}
const Splice = ()=>{
   let splice=users.splice(1,3 ,"rahin","rahin","rahin");
   console.log(users);
   

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
      <button onClick={remove}>Remove </button>
      <button onClick={slice}>Slice</button>
      <button onClick={Splice}>Splice</button>
    </>
  );
};

export default ArrayMethods;