/* eslint-disable react/prop-types */
export function PlacesCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("trip_id", props.currentTrip.id);
    props.handlePlacesCreate(params, () => event.target.reset(), props.currentTrip);
  };

  return (
    <div>
      <h1>New Place</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Address <input name="address" type="text" />
        </div>
        <div>
          Name <input name="name" type="text" />
        </div>
        <div>
          Description <input name="description" type="text" />
        </div>
        <div>
          Image_url <input name="image_url" width="3" type="text" />
        </div>
        <div>
          Start_time <input name="start_time" type="datetime" />
        </div>
        <div>
          End_time <input name="end_time" type="datetime" />
        </div>

        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
