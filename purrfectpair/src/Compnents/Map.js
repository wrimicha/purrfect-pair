import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  LoadScript,
} from "@react-google-maps/api";

const MapContainer = ({ lat, long }) => {
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: lat,
    lng: long,
  };

  const locations = {
    name: "Location 1",
    desc: "This is the location where the dog is",
    location: {
      lat: lat,
      lng: long,
    },
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  return (
    <LoadScript googleMapsApiKey="AIzaSyCENuCtj3U6fU54kieuZMuesl3heIbzHZw">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        return (
        <Marker
          key={locations.name}
          position={locations.location}
          onClick={(item) =>
            onSelect({
              name: locations.name,
              location: locations.location,
              desc: locations.desc,
            })
          }
        />
        <Marker
          icon="https://www.robotwoods.com/dev/misc/bluecircle.png"
          position={currentPosition}
        />
        );
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <div>
              <h4>{selected.name}</h4>
              <p>{selected.desc}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
