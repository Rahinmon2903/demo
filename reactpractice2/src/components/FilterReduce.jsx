import React from 'react';

const FilterReduce = ({shopping}) => {
    const FilterReduce = (e) =>{
        const value =e.target.value;
        console.log(value);
         const filter1 =shopping.filter((el) =>el.category==value)
         console.log(filter1);
           const reduce1 =filter1.reduce((total,curr) =>total+curr.price,0);
         console.log(reduce1);
         

         }
        
         
        

    
    return (
        <>
        {shopping.map((ele) =>{
            return(
                <div className='cards' key={ele.id}>
                    <p>{ele.name}</p>
                     <p>{ele.price}</p>
                      <p>{ele.category}</p>
                    
                </div>
            )
        })}
        <button value="Electronics" onClick={(e)=>FilterReduce(e)}>Electronics</button>
         <button value="Grocery" onClick={(e)=>FilterReduce(e)}>Grocery</button>
            
        </>
    );
};

export default FilterReduce;