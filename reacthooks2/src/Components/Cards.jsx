import React, { useState } from 'react';

const Cards = () => {
    const [data,setData]=useState({
        username:"Rahin Mon",
        password:"",
        gender:"not to say"
    })

    const handlechange =(e)=>{
        // console.log(e.target.value);
        const{name,value}=e.target;
        setData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
        

    }
   

    
    return (
        <>
            <div>
                <p>
                    <label>Username:</label>
                </p>
                <p>
                   <input type="text" value={data.username} onChange={handlechange}   name="username" placeholder="Enter your username" />
                </p>
            </div>
             <div>
                <p>
                    <label>Password</label>
                </p>
                <p>
                   <input type="text"  value={data.password} onChange={handlechange}   name="password" placeholder="Enter your password" />
                </p>
            </div>
            <select name='gender' value={data.gender} onChange={handlechange} >
                <option value="male" >Male</option>
                <option value="female" >Female</option>
                <option value="not to say" >Not to say</option>
            </select>
            
        </>
    );
};

export default Cards;