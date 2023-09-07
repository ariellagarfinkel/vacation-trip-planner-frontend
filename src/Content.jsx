import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PlacesCreate } from "../PlacesCreate";

export function Content() {
  const [trips, setTrips] = useState([]);
  const [placesCreate, setPlacesCreate] = useState([]);

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handlePlacesCreate = (params, successCallback) => {
    console.log("handlePlacesCreate", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setPlacesCreate([...placesCreate, response.data]);
      successCallback();
    });
  };

  // have use effect now need  a function to create

  useEffect(handleIndexTrips, []);
  useEffect(handlePlacesCreate, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <TripsIndex trips={trips} />
    </div>
  );
}
