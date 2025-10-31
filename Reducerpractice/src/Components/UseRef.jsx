import React, { useEffect, useRef } from 'react';

const UseRef = () => {
    const iRef=useRef()
    // for finding length
    const iRef2=useRef(0) 

    useEffect(()=>{
        iRef.current.focus();

    },[])
    return (
        <div>
            <h1>Use Ref</h1>

            <input type="text"  placeholder='enter your name' ref={iRef}/>
             <input type="email"  placeholder='enter your email'/>

            
        </div>
    );
};

export default UseRef;