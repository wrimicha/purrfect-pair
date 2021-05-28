import React, { useEffect, useState } from "react";
import AnimalCard from "../Compnents/AnimalCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../constants/colors";
import "./home.css";
import ButtonTemplate from "../Compnents/ButtonTemplate/ButtonTemplate";
import colors from "../constants/colors";
export default function Home() {
  const [nameFilter, setNameFilter] = useState("");
  const [type, setType] = useState("");
  const [catClicked, setCatClicked] = useState(false);
  const [dogClicked, setDogClicked] = useState(false);
  const [cards, setCards] = useState([]);
  const [fetchedData,setFetchedData] = useState([]);
  const [gender,setGender] = useState("");
  useEffect( () => {
    fetch('https://petpracticeapi.herokuapp.com/pets').then((res)=>{
      res.json().then((resp)=>{
        console.log(resp)
        resp.map((item) =>{
        setCards((card) => [
          ...card,
          <AnimalCard
            id={item.id}
            title={item.name}
            type={item.type}
            description=""
            //lat={item.lat}
            //long={item.long}
          />,
        ])}
      );
      })
    }).catch((err)=>{
      throw(err);
    })
    

  }, []);

  return (
    <div className="animalCardHolder">
      <div className="filterGroup">
        <div id="firstFilterGroup">
        <div className="searchBar">
          <input
            className="searchInput"
            placeholder="Zip/Postal Code"
            type="text"
            onChange={(event) => setNameFilter(event.target.value)}
          />
        </div>
        <div
          className="radio-toolbar animalType"
          onChange={(e) => setType(e.target.value)}
        >
          <input
            type="radio"
            id="radio1"
            name="radios"
            value=""
            defaultChecked
          />
          <label for="radio1">All</label>

          <input type="radio" id="radio2" name="radios" value="Dog" />
          <label for="radio2">Dog</label>

          <input type="radio" id="radio3" name="radios" value="Cat" />
          <label for="radio3">Cat</label>
        </div>
        </div>
        <div id="secondFilterGroup">
        <div className="dropdown">
        <select className="dropdownselect" name="type" onChange={event=>setGender(event.target.value)}>
          <option value="" selected="selected">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          </select>
        </div>
      </div>
      </div>
      {/* <nav class="menuBar navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <label>Pet Name <input type="text" onChange={event=>setNameFilter(event.target.value)}/></label>
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={(e)=>setType(e.target.value)}>
            <input type="radio" class="btn-check" value="" name="type" id="all" defaultChecked/> <label class="btn btn-outline-warning" for="all">All</label>
            <input type="radio" class="btn-check" value="dog" name="type" id="dog"/> <label class="btn btn-outline-warning" for="dog">Dog</label>
            <input type="radio" class="btn-check" value="cat" name="type" id="cat"/> <label class="btn btn-outline-warning" for="cat">Cat</label>
          </div>
      </div>
      </nav> */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cards.filter(
          (item) =>
            item.props.title.includes(nameFilter) &&
            item.props.type.includes(type) 
        )}
      </div>
    </div>
  );
}
