import React from "react";

const Cars = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <h2>{props.name}</h2>
          <img src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </>
  );
};

export default Cars;
