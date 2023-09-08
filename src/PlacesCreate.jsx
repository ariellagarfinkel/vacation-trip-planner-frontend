/* eslint-disable react/prop-types */
// export function PlacesCreate(props) {
//   return (
//     <div>
//       <h1>New Place</h1>
//       <form>
//         <div>
//           Name: <input name="name" type="text" />
//         </div>
//         <div>
//           Address: <input name="url" type="text" />
//         </div>
//         <div>
//           Description <input name="width" type="text" />
//         </div>
//         <div>
//           Start_time <input name="height" type="text" />
//         </div>
//         <div>
//           End_time <input name="height" type="text" />
//         </div>
//         <div>
//           Image_url <input name="height" type="text" />
//         </div>
//         <button onClick={() => props.handlePlacesCreate(trip)}>Create Place</button>
//       </form>
//     </div>
//   );
// }

// bc handlePlacesCreate is in Content

export function PlacesCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("trip_id", props.currentTrip.id);
    props.handlePlacesCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Place</h1>
      <form onSubmit={handleSubmit}>
        {/* <div>
          Trip_id <input name="trip_id" type="text" />
        </div> */}
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
          Start_time <input name="start_time" type="text" />
        </div>
        <div>
          End_time <input name="end_time" type="text" />
        </div>

        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
