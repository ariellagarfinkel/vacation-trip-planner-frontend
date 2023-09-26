import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { Root } from "./Root";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TripsCreate } from "./TripsCreate";
import { PlacesCreate } from "./PlacesCreate";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [places, setPlacesCreate] = useState([]);

  const handleTripsIndex = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleTripsCreate = (params, successCallback) => {
      console.log("handleTripsCreate", params);
      axios.post("http://localhost:3000/trips.json", params).then((response) => {
        setTrips([...trips, response.data]);
        successCallback();
      });
    };


  const handlePlacesCreate = (params, successCallback, currentTrip) => {
    console.log("handlePlacesCreate", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      console.log(response.data);
      setTrips(
        trips.map((trip) => {
          if (trip.id === currentTrip.id) {
            trip.places = [...trip.places, response.data];
          }
          return trip;
        })
      );
      successCallback();
    });
  };

  useEffect(handleTripsIndex, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/mytrips" element={<TripsIndex trips={trips} handlePlacesCreate={handlePlacesCreate} />} />
        <Route path="/createtrips" element={<TripsCreate handleTripsCreate={handleTripsCreate}/>} />
      </Routes>
    </div>
  );
}
