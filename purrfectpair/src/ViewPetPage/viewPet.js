import React, { useState, useEffect } from "react";
import Map from "../Compnents/Map";
import "./viewPet.css";
import { Link } from "react-router-dom";


export default function ViewPet(props) {
  const { id } = props.match.params;
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(`https://purrfectpairapi.herokuapp.com/pets`);
    const data = await response.json();
    setPet(data[id - 1]);
    setLoading(false);
    //console.log(data[id]);
  }, []);

  return (
    loading || !pet ?
      <h1>Loading...</h1>
      :
      <div className="viewPetHolder">
        <div class="rndBtn sm-btn"><Link style={{ color: "#fff" }} to="/home">Back</Link></div>
        <img
          className="animalImg"
          src={require("../imgs/" + id + ".jpg").default}
          alt=""
        />
        <div className="rowOne">
          <div className="split1 petTextBox">
            <h1 className="petTitle">Meet {pet.name}!</h1>
            <p className="paraText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid.
            <br /><br />
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
            minima nesciunt dolorem!</p>
            <div style={{ display: "flex", justifyContent: "flex-start", width: "100%", position: "relative" }}>
              <div class="rndBtn">Book a Visit!</div>
              <div class="rndBtn">Add to Favourites!</div>
            </div>
          </div>
          <div className="split1">
            <div className="mapHolder">
              <Map lat={44.5969} long={-79.4297} className="map" />
            </div>
          </div>
        </div>
      </div >
  );
}
