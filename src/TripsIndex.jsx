import { Modal } from "./Modal";
import { PlacesCreate } from "./PlacesCreate";
import { useState } from "react";
import { Link } from "react-router-dom";

export function TripsIndex(props) {
  const [isShowPlaceVisible, setIsShowPlaceVisible] = useState(false);

  const [currentTrip, setCurrentTrip] = useState({});

  // const YourComponent = ({ trip }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const onShowPlace = (trip) => {
    console.log("ShowPlace", trip);
    setIsShowPlaceVisible(true);
    setCurrentTrip(trip);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsShowPlaceVisible(false);
  };

  return (
    <>
      <div>
        <h1>{localStorage.name}'s Trips</h1>
        {props.trips.map((trip) => (
          <div key={trip.id}>
            <div className="card">
              <img src={trip.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{trip.title}</h5>
                <p className="card-text">{trip.start_time}</p>
                <p className="card-text">{trip.end_time}</p>
              </div>
              <div className="card-body">
                <button className={`btn btn-primary`} type="button" onClick={() => setIsListOpen(!isListOpen)}>
                  {" "}
                  {isListOpen ? "Hide Places" : "Show Places"}{" "}
                </button>
                <button className={`btn btn-primary`} type="button" onClick={() => onShowPlace(trip)}>Add a Place</button>
                <Modal show={isShowPlaceVisible} onClose={handleClose}>
                  <PlacesCreate handlePlacesCreate={props.handlePlacesCreate} currentTrip={currentTrip} />
                </Modal>
                {isListOpen && (
                  <div>
                    {trip.places.map((place) => (
                      <div key={place.id}>
                        <p className="card-text">{place.address}</p>
                        <img src={place.image_url} width="100" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <Link className="btn btn-light"to="/createtrips">Create a new Trip</Link>
      </div>
    </>
  );
}
