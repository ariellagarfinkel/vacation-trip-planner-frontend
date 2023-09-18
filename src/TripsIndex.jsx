/* eslint-disable react/prop-types */

// import { Modal } from "./Modal";
// import { PlacesCreate } from "./PlacesCreate";
// import { useState } from "react";

// export function TripsIndex(props) {
//   const [isShowPlaceVisible, setIsShowPlaceVisible] = useState(false);

//   const [currentTrip, setCurrentTrip] = useState({});

//   const onShowPlace = (trip) => {
//     console.log("ShowPlace", trip);
//     setIsShowPlaceVisible(true);
//     setCurrentTrip(trip);
//   };

//   const handleClose = () => {
//     console.log("handleClose");
//     setIsShowPlaceVisible(false);
//   };

//   const handleClick = () => {
//     console.log("handleTripsCreate");
//     props.handleTripsCreate();
//   };

//   return (
//     <>
//       <div>
//         <h1>My Trips</h1>
//         {props.trips.map((trip) => (
//           <div key={trip.id}>
//             <div className="card">
//               <img src={trip.image_url} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">{trip.title}</h5>
//                 <p className="card-text">{trip.start_time}</p>
//                 <p className="card-text">{trip.end_time}</p>
//               </div>
//               <div className="card-body">
//                 <a href="#" className="card-link">
//                   Places
//                 </a>
//                 <button onClick={() => onShowPlace(trip)}>Add a Place</button>
//                 <Modal show={isShowPlaceVisible} onClose={handleClose}>
//                   <PlacesCreate handlePlacesCreate={props.handlePlacesCreate} currentTrip={currentTrip} />
//                 </Modal>

//                 {trip.places.map((place) => (
//                   <div key={place.id}>
//                     <p className="card-text">{place.address}</p>
//                     <img src={place.image_url} width="100" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//         <button onClick={handleClick()}>Add a Trip</button>
//       </div>
//     </>
//   );
// }

import { Modal } from "./Modal";
import { PlacesCreate } from "./PlacesCreate";
import { useState } from "react";

export function TripsIndex(props) {
  const [isShowPlaceVisible, setIsShowPlaceVisible] = useState(false);

  const [currentTrip, setCurrentTrip] = useState({});

  const onShowPlace = (trip) => {
    console.log("ShowPlace", trip);
    setIsShowPlaceVisible(true);
    setCurrentTrip(trip);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsShowPlaceVisible(false);
  };

  // const handleClick = () => {
  //   console.log("handleTripsCreate");
  //   props.handleTripsCreate();
  // };

  return (
    <>
      <div>
        <h1>My Trips</h1>
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
                <a href="#" className="card-link">
                  Places
                </a>
                <button onClick={() => onShowPlace(trip)}>Add a Place</button>
                <Modal show={isShowPlaceVisible} onClose={handleClose}>
                  <PlacesCreate handlePlacesCreate={props.handlePlacesCreate} currentTrip={currentTrip} />
                </Modal>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Places
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {place.name}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Book Your Lodging
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Budget Your trip
                      </a>
                    </li>
                  </ul>
                </li>

                {trip.places.map((place) => (
                  <div key={place.id}>
                    <p className="card-text">{place.address}</p>
                    <img src={place.image_url} width="100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* <button onClick={handleClick()}>Add a Trip</button> */}
      </div>
    </>
  );
}
