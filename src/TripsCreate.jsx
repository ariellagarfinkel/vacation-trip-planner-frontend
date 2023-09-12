/* eslint-disable react/prop-types */
export function TripsCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // user_id:integer-is this needed bc only can create a trip once logged in-append
    const params = new FormData(event.target);
    props.onTripsCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Picture: <input name="image_url" type="text" />
        </div>
        <div>
          Start_time: <input name="start_time" type="datetime" />
        </div>
        <div>
          End_time: <input name="end_time" type="datetime" />
        </div>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
