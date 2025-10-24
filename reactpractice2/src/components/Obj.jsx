import React from 'react';

const Obj = (props) => {
    return (
        <div>
            <p>{props.obj.batch}</p>
            <p>{props.obj.mode}</p>
            <p>{props.obj.mentor}</p>
            <p></p>
            
        </div>
    );
};

export default Obj;