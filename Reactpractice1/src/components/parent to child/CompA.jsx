import React from 'react';

const CompA = (props) => {
    return (
        <div>
            <h1>getting a value from parent {props.data}</h1>
                        <h1>getting a value from parent {props.x}</h1>
            
        </div>
    );
};

export default CompA;