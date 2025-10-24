import React from "react";
// import "./head.css"

const ArrayMethods = () => {
  const users = ["John", "Doe", "Alice", "Smith", "Adam", "Jack", "Shoe"]; //7

  const addUser = () => {
    const ind = users.push("Sparrow");
    console.log(ind);
    console.log("Add User", users[ind - 1]);
    users.forEach((ele) => console.log(ele));

    const userIndex = users.indexOf("Daniel");

    if (userIndex === -1) {
      console.log("User is not in the array");
      const lastEle = users.push("Daniel");
      console.log(lastEle);
      console.log("Add user", users[lastEle - 1]);
      users.forEach((ele) => console.log(ele));
    }
  };

  const removeUser = () =>{
     const remove = users.pop("Daniel");
     console.log(remove)
     users.ForEach((ele)=> console.log(ele));
   
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
      <button onClick={addUser}>Add</button>
      <button onClick={removeUser}>Remove</button>
      <button>Slice</button>
      <button>Splice</button>
    </>
  );
};

export default ArrayMethods;