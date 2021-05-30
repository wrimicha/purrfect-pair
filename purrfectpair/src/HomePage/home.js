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
import DropdownConditional from "../Compnents/Dropdown/DropdownConditional";
export default function Home() {
  const [nameFilter, setNameFilter] = useState("");
  const [type, setType] = useState("");
  const [catClicked, setCatClicked] = useState(false);
  const [dogClicked, setDogClicked] = useState(false);
  const [cards, setCards] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [genderToggle, setGenderToggle] = useState(false);
  const [gender, setGender] = useState("");
  const [hair, setHair] = useState("");
  const [size, setSize] = useState("");
  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);
  const [age,setAge] = useState("");

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
              size={item.size}
              age={item.age}
              hair={item.hair}
              breed={item.breed}
              description=""
              lat={item.latitude}
              long={item.longitude}
            />,
          ])
        }
        );
        setLoading(false);
      })
    }).catch((err) => {
      throw (err);
    })
  }, []);
  return (
    loading ?
      <h1>Loading...</h1>
      :
      <div className="animalCardHolder">
        <div className="filterGroup">
          <div id="firstFilterGroup">
            <div className="searchBar">
              <input
                className="searchInput"
                placeholder="Search By Name"
                type="text"
                onChange={(event) => setNameFilter(event.target.value)}
              />
            </div>
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

            <input type="radio" id="radio2" name="radios" value="dogs" />
            <label for="radio2">Dogs</label>

            <input type="radio" id="radio3" name="radios" value="cats" />
            <label for="radio3">Cats</label>

            <div className="dropdown">
              <DropdownNew items={["", "rabbits", "birds", "frogs", "fishs", "frogs", "geckos", "iguanas", "lizards", "scorpions", "snakes", "tarantulas", "toads", "tortoises", "turtles", "hamsters"]} property={type} setProperty={setType} blankValue="Other" />
            </div>

            <div className="dropdown">
              <DropdownNew items={["", "Male", "Female"]} property={gender} setProperty={setGender} blankValue="Gender" />
            </div>
            <div className="dropdown">
              <DropdownNew items={["", "white", "brown", "grey","black","green","golden"]} property={hair} setProperty={setHair} blankValue="Hair" />
            </div>
            <div className="dropdown">
            <DropdownNew items={["", "large", "medium", "small"]} property={size} setProperty={setSize} blankValue="Size" />
            </div>
            <div className="dropdown">
              <DropdownNew items={["","young","adult","senior"]} property={age} setProperty={setAge} blankValue="Age"/>
            </div>
            <div className="dropdown">
              <DropdownConditional selectedPet={type}
                items={{
                  "": [], "cats": ["","Abyssinian", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Balinese", "Bengal", "Birman", "Bombay", "British Shorthair", "Burmese", "Calico", "Chartreux", "Colorpoint Shorthair", "Cornish Rex", "Cymric", "Devon Rex", "Domestic Longhair", "Domestic Mediumhair", "Domestic Shorthair", "Egyptian Mau", "European Burmese", "Exotic", "Havana Brown", "Hemingway/Polydactyl", "Himalayan", "Japanese Bobtail", "Japanese", "Korat", "LaPerm", " Maine Coon", "Manx", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Oriental", "Persian", "Polydactyl/Hemingway", "RagaMuffin", "Ragdoll", "Russian Blue", "Scottish Fold", "Selkirk Rex", "Siamese", "Siberian", "Singapura", "Snowshoe", "Somali", "Sphynx", "Tonkinese", "Turkish Angora", "Turkish Van"], "dogs": ["young", "adult", "senior", "puppy"], "rabbits": ["young", "adult", "senior"], "birds": ["Small", "Medium", "Large"], "hamsters": ["young", "adult", "senior"], "others": ["Small", "Medium", "Large"], 
                  "dogs": ["",
                    "affenpinscher",
                    "Afghan hound",
                    "Airedale terrier",
                    "Akita",
                    "Alaskan Malamute",
                    "American Staffordshire terrier",
                    "American water spaniel",
                    "Australian cattle dog",
                    "Australian shepherd",
                    "Australian terrier",
                    "basenji",
                    "basset hound",
                    "beagle",
                    "bearded collie",
                    "Bedlington terrier",
                    "Bernese mountain dog",
                    "bichon frise",
                    "black and tan coonhound",
                    "bloodhound",
                    "border collie",
                    "border terrier",
                    "borzoi",
                    "Boston terrier",
                    "bouvier des Flandres",
                    "boxer",
                    "briard",
                    "Brittany",
                    "Brussels griffon",
                    "bull terrier",
                    "bulldog",
                    "bullmastiff",
                    "cairn terrier",
                    "Canaan dog",
                    "Chesapeake Bay retriever",
                    "Chihuahua",
                    "Chinese crested",
                    "Chinese shar-pei",
                    "chow chow",
                    "Clumber spaniel",
                    "cocker spaniel",
                    "collie",
                    "curly-coated retriever",
                    "dachshund",
                    "Dalmatian",
                    "Doberman pinscher",
                    "English cocker spaniel",
                    "English setter",
                    "English springer spaniel",
                    "English toy spaniel",
                    "Eskimo dog",
                    "Finnish spitz",
                    "flat-coated retriever",
                    "fox terrier",
                    "foxhound",
                    "French bulldog",
                    "german shepherd",
                    "german shorthaired pointer",
                    "german wirehaired pointer",
                    "golden retriever",
                    "Gordon setter",
                    "Great Dane",
                    "greyhound",
                    "Irish setter",
                    "Irish water spaniel",
                    "Irish wolfhound",
                    "Jack Russell terrier",
                    "Japanese spaniel",
                    "keeshond",
                    "Kerry blue terrier",
                    "komondor",
                    "kuvasz",
                    "Labrador retriever",
                    "Lakeland terrier",
                    "Lhasa apso",
                    "Maltese",
                    "Manchester terrier",
                    "mastiff",
                    "Mexican hairless",
                    "Newfoundland",
                    "Norwegian elkhound",
                    "Norwich terrier",
                    "otterhound",
                    "papillon",
                    "Pekingese",
                    "pointer",
                    "Pomeranian",
                    "poodle",
                    "pug",
                    "puli",
                    "Rhodesian ridgeback",
                    "Rottweiler",
                    "Saint Bernard",
                    "saluki",
                    "Samoyed",
                    "schipperke",
                    "schnauzer",
                    "Scottish deerhound",
                    "Scottish terrier",
                    "Sealyham terrier",
                    "Shetland sheepdog",
                    "shih tzu",
                    "Siberian husky",
                    "silky terrier",
                    "Skye terrier",
                    "Staffordshire bull terrier",
                    "soft-coated wheaten terrier",
                    "Sussex spaniel",
                    "spitz",
                    "Tibetan terrier",
                    "vizsla",
                    "Weimaraner",
                    "Welsh terrier",
                    "West Highland white terrier",
                    "whippet",
                    "Yorkshire terrier"
                  ]
                }} property={breed} setProperty={setBreed} blankValue="Breed" />
            </div>

          </div>

          {/* <div id="secondFilterGroup">
          
        </div> */}
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
              && item.props.gender.includes(gender)
               && item.props.breed.includes(breed) 
              && item.props.size.includes(size) && item.props.hair.includes(hair) && item.props.age.includes(age)
          )}
        </div>
      </div>
  );
}
