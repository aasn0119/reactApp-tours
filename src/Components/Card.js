import React, { useState } from "react";

function Card(props) {
  const [readmore, setReadmore] = useState(false);

  const discription = readmore ? props.info : `${props.info.slice(0, 200)}...`;

  const readmoreHandler = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="card">
      <img src={props.image} alt="images" className="image" />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹{props.price} </h4>
          <h4 className="tour-name">{props.name}</h4>
        </div>

        <div className="description">
          {discription}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>
      <button className="btn-rem" onClick={() => props.removeHandler(props.id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
