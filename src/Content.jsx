import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
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

  const handlePlacesCreate = (params, successCallback, currentTrip) => {
    console.log("handlePlacesCreate", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      // setPlacesCreate(...places, response.data);
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
  // useEffect(handlePlacesCreate, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/mytrips" element={<TripsIndex trips={trips} handlePlacesCreate={handlePlacesCreate} />} />
      </Routes>
    </div>
  );
}
