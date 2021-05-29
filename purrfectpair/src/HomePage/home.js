import React, { useEffect, useState } from "react";
import AnimalCard from "../Compnents/AnimalCard";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import "../constants/colors";
import "./home.css";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ButtonTemplate from "../Compnents/ButtonTemplate/ButtonTemplate";
import colors from "../constants/colors";
import DropdownNew from "../Compnents/Dropdown/DropdownNew";
export default function Home() {
  const [nameFilter, setNameFilter] = useState("");
  const [type, setType] = useState("");
  const [catClicked, setCatClicked] = useState(false);
  const [dogClicked, setDogClicked] = useState(false);
  const [cards, setCards] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [genderToggle, setGenderToggle] = useState(false);
  const [gender, setGender] = useState("");
  const [hair,setHair] = useState("");
  useEffect(() => {
    fetch('https://purrfectpairapi.herokuapp.com/pets').then((res) => {
      res.json().then((resp) => {
        resp.map((item) => {
          setCards((card) => [
            ...card,
            <AnimalCard
              id={item.id}
              title={item.name}
              gender={item.gender}
              type={item.type}
              description=""
            //lat={item.lat}
            //long={item.long}
            />,
          ])
        }
        );
      })
    }).catch((err) => {
      throw (err);
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
            <DropdownNew items={["","Male","Female"]} property={gender} setProperty={setGender} blankValue="Gender"/>
            </div>
            <div className="dropdown">
            <DropdownNew items={["","Short","Medium","Long"]} property={hair} setProperty={setHair} blankValue="Hair"/>
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
            item.props.type.includes(type) && item.props.gender.includes(gender)
        )}
      </div>
    </div>
  );
}
