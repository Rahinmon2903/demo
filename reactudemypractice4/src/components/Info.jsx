import React from 'react';

const Info = (props) => {
    return (
        <>
             <p className="info">{props.extra}</p>
          <p className="info">{props.extra2}</p>
            
        </>
    );
};

export default Info;