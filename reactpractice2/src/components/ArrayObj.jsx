import React from 'react';

const ArrayObj = ({arrObj}) => {
    return (
        <>
        {arrObj.map((ele,index) =>{
            return(
                <div key={index} className='cards' >
                    <p>{ele.name}</p>
                    <p>{ele.price}</p>
                    <p>{ele.des}</p>
                    <img src={ele.image}  />


                    </div>

            )

        })}
            
        </>
    );
};

export default ArrayObj;