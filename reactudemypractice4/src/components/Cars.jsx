import React from "react";
import Info from "./Info";

const Cars = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img  className="circle-img"src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
         <Info extra={props.phone}
         extra2={props.email}/>
        </div>
      </div>
    </>
  );
};

export default Cars;
