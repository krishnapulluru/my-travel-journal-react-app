import React from "react";

export default function Cards(props) {
  return (
    <div className="travel--card">
      <div className="travel--card--image-div">
        <img
          className="travel--card-image"
          src={"images/" + props.items.thumbnail}
          alt={props.items.title}
        />
      </div>
      <div className="travel--card--content">
        <div className="travel--card--location">
          <img src="./images/location.png" alt="location png image" />
          <h6>{props.items.location}</h6>
          <a href={void 0}>View on Google Maps</a>
        </div>
        <h2 className="travel--card--title">{props.items.title}</h2>
        <h5 className="travel--card--dates">
          <span>{props.items.dateStart}</span> -{" "}
          <span>{props.items.dateEnd}</span>
        </h5>
        <p className="travel--card--desc">{props.items.description}</p>
      </div>
    </div>
  );
}
