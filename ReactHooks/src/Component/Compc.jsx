import React from 'react';

const Compc = () => {
    const datafetch= async() =>{
        try {
             const response =await axios.get("https://fakestoreapi.com/products")
            
        } catch (error) {
            
        }
       
    }
    return (
        <div>
            
        </div>
    );
};

export default Compc;