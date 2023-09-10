/* eslint-disable react/prop-types */

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
      </div>
    </>
  );
}

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

//   return (
//     <>
//       <div>
//         <h1>My Trips</h1>
//         {props.trips.map((trip) => (
//           <div key={trip.id}>
//             <div className="card">
//               <img src={trip.image_url} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <h5 className="card-title">{trip.title}</h5>
//                   <p className="card-text">{trip.start_time}</p>
//                   <p className="card-text">{trip.end_time}</p>
//                 </div>
//               <div className="card-body">
//                 <a href="#" className="card-link">
//                   Places
//                 </a>
//                 <p>
//                   <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false"     aria-controls="multiCollapseExample1">Toggle first element</a>
//                     <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
//                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
//                 </p>
//               <div class="row">
//                 <div class="col">
//                  <div class="collapse multi-collapse" id="multiCollapseExample1">
//                    <div class="card card-body">
//                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
//                    </div>
//                   </div>
//                </div>
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
//       </div>
//       </div>
//     </>
//   );
// }
