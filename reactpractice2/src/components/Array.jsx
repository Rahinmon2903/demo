import React from 'react';

const Array = ({arr}) => {
    return (
        <div>
           {arr.map((ele,index)=>{
            return(
                <div key={index}>
                <p>{ele}</p>
                </div>
            )
           })}
            
        </div>
    );
};

export default Array;