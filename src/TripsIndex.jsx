/* eslint-disable react/prop-types */
export function TripsIndex(props) {
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
                <a href="#" className="card-link">
                  Add a Place
                </a>
                {trip.places.map((place) => (
                  <div key={place.id}>
                    <p className="card-text">{place.address}</p>
                    <img src={place.image_url} />
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

{
  /* 
export function TripsIndex(props) {
  return (
    <div>
      <h1>My Trips</h1>
      {props.trips.map((trip) => (
        <div key={trip.id}>
          <h2>{trip.title}</h2>
          <img src={trip.image_url} />
          <p>{trip.start_time}</p>
          <p>{trip.end_time}</p>
          <p>These are the places</p>
          {trip.places.map((place) => (
            <div key={place.id}>
              <h3>{place.name}</h3>
              <img src={place.image_url} />
              <p>{place.address}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
} */
}
