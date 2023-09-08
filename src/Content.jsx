import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PlacesCreate } from "./PlacesCreate";

export function Content() {
  const [trips, setTrips] = useState([]);

  const handleTripsIndex = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handlePlacesCreate = (params, successCallback) => {
    console.log("handlePlacesCreate", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      // setPlacesCreate([...places, response.data]);
      console.log(response.data);
      successCallback();
    });
  };

  // trips.places = )
  // so dont needa refresh

  useEffect(handleTripsIndex, []);
  useEffect(handlePlacesCreate, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <TripsIndex trips={trips} handlePlacesCreate={handlePlacesCreate} />
    </div>
  );
}
