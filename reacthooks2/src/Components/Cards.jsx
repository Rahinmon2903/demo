import React, { useState } from 'react';

const Cards = () => {
    const[FormData,setFormData]=useState({
        username:"Rahin Mon",
        password:"",
        gender:"female"
    })

    // const handlechange=(e)=>{
    //     setFormData(e.target.value)
           
        

    // }
       const handlechange=(e)=>{
        const{name,value}=e.target;
        console.log(e.target.name);
        console.log(e.target.value);
         console.log(e.target);
        
        setFormData((prev=>{
            return{
            ...prev,
            [name]: value
        };
        }
    ))
        //   console.log("FormData",FormData);  
        

    }
    return (
        <>
            <div>
                <p>
                    <label>Username:</label>
                </p>
                <p>
                   <input type="text" onChange={handlechange}  value={FormData.username} name="username" placeholder="Enter your username" />
                </p>
            </div>
             <div>
                <p>
                    <label>Password</label>
                </p>
                <p>
                   <input type="text" onChange={handlechange} value={FormData.password} name="password" placeholder="Enter your password" />
                </p>
            </div>
            <select name='gender' onChange={handlechange} value={FormData.gender}>
                <option value="male" >Male</option>
                <option value="female" >Female</option>
                <option value="not to say" >Not to say</option>
            </select>
            
        </>
    );
};

export default Cards;