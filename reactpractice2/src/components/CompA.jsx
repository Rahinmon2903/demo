import React from 'react';

const CompA = (props) => {
    return (
        <>
        <div className='cards'>
            <h1>{props.phone}</h1>
            <img src={props.image}  />
            <p>{props.desc}</p>
            </div>
            
        </>
    );
};

export default CompA;