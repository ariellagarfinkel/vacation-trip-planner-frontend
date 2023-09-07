import axios from "axios";
import { useState, useEffect } from "react";
import { TripsIndex } from "./TripsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [trips, setTrips] = useState([]);

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  useEffect(handleIndexTrips, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <TripsIndex trips={trips} />
    </div>
  );
}
