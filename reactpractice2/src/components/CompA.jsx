import React from 'react';
import load from "../assests/load.jpg"

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
CompA.defaultProps={
    phone:"dummy phone",
    image:load,
    desc:"dummy desc"

}

export default CompA;