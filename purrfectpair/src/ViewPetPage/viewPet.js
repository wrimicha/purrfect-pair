import React, { useState, useEffect } from "react";
import Map from "../Compnents/Map";
import "./viewPet.css";

export default function ViewPet(props) {
  const { id } = props.match.params;

  return (
    <div className="viewPetHolder">
      <h1>Welcome to the view pet page for pet with id: {id}</h1>
      <div className="mapHolder">
        <Map lat={44.5969} long={-79.4297} className="map" />
      </div>
    </div>
  );
}
