import React, { useEffect } from 'react';

const UseEffect = () => {
    console.log("outside useeffect");
    
   

    useEffect(()=>{
        // mounting
        const interval=setInterval(()=>{
            console.log("data fetching")
        },2000)
        // unmounting phrase
        return() =>{
            console.log("clear");
            clearInterval(interval)

            


        }
    },[])
    return (
        <>
        <h1>HELLO WORLD</h1>
     
            
        </>
    );
};

export default UseEffect;