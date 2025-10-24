import React from 'react';

const Array = ({arr}) => {
    return (
        <div>
           {arr.map((ele)=>{
            return(
                <div>{ele}</div>
            )
           })}
            
        </div>
    );
};

export default Array;