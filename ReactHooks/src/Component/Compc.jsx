import React, { useEffect, useState } from 'react';
import axios from "axios";

const Compc = () => {

    const[data,setData]=useState([])
    const datafetch= async() =>{
        try {
             const response =await axios.get("https://fakestoreapi.com/products")
             setData(response.data)
             console.log(response.data);
            
        } catch (error) {
            console.log("error");
            
            
        }
       
    }
    useEffect(()=>{
        datafetch();
    },[])
    return (
        <div>
            {data.map((ele)=>{
                return(
                    <div className='cards' key={ele.id}>
                        <p>{ele.title}</p>
                    <p>{ele.description}</p>
                    <p>{ele.price}</p>
                    <img src={ele.image} />
                    <button>add to cart</button>

                        </div>
                )
            })}
            
        </div>
    );
};

export default Compc;