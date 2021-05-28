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
          <p className="petInfo">Type: {props.type}</p>
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