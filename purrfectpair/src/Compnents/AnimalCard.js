import React from "react";
import "./AnimalCard.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import Map from "./Map";

export default function AnimalCard(props) {
  var animalImg = require("../imgs/" + props.id + ".jpg").default;
  // var animalImg = require("../imgs/" + props.id + ".jpg");

  return (
    <div className="animalCard">
      <Link to={"/viewPet/" + props.id} class="link">
        <img
          className="petImg"
          src={require("../imgs/" + props.id + ".jpg").default}
          alt=""
        />
      </Link>

      <div className="petInfoBox">
        <div className="bg-Text">
          <h4>{props.title}</h4>
          <p>About the pet:</p>
          <p className="petInfo">Type: {props.type.charAt(props.type.length-1) != 's' ? props.type.charAt(0).toUpperCase()+props.type.slice(1,props.type.length) : props.type.charAt(0).toUpperCase()+props.type.slice(1,props.type.length-1)}</p>
          <p className="petInfo">Gender: {props.gender}</p>     
          <p>Size: {props.size}</p>
          <p>Age: {props.age}</p>
          <p className="petInfo">{props.description}</p>
        </div>
      </div>
      {/* <div className="mapHolder">
        <Map lat={props.lat} long={props.long} className="map" />
      </div> */}
      {/* <Link to={"/viewPet/" + props.id} class="link">
        <div className="viewProjBtn">View More</div>
      </Link> */}
    </div>
  );
}
