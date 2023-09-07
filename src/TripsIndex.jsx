/* eslint-disable react/prop-types */
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
}
