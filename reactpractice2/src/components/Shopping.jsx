import React from 'react';

const Shopping = ({shopping}) => {
    return (
        <>
       {shopping.map((ele) =>{
        return(
            <div key={ele.id} className='cards' >
                    <p>{ele.name}</p>
                    
                    <p>{ele.category}</p>
                    <p>{ele.price} </p> 
                    


                    </div>
        )

       })}

            
        </>
    );
};

export default Shopping;