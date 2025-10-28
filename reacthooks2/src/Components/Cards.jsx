import React, { useState } from "react";

const Cards = () => {
    const[formdata,stFormData]=useState({
        username:"RAHIN",
        password:"",
        email:"",

    })
  return (
    <div>
      <h1>Register User</h1>
      <form>
        <div>
          <p>
            <label>username</label>
          </p>
          <p>
            <input
              type="text"
              value={formdata.username}
              name="username"
              placeholder="enter username"
            ></input>
          </p>
        </div>
        <div>
          <p>
            <label>password</label>
          </p>
          <p>
            <input
              type="text"
              name="password"
              value={formdata.password}
              placeholder="enter password"
            ></input>
          </p>
        </div>
        <div>
          <p>
            <label>email</label>
          </p>
          <p>
            <input type="text" name="email" placeholder="enter email"></input>
          </p>
        </div>
        <div>
          <p>
            <label>Gender</label>
          </p>
          <p>
            <select name="gender">
             <option value="male">Male</option>
             <option value="female">Female</option>
              <option value="other">Not to say</option>

            </select>
          </p>
        </div>
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Cards;
