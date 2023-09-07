export function PlacesCreateNew() {
  return (
    <div>
      <h1>New Place</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Address: <input name="url" type="text" />
        </div>
        <div>
          Description <input name="width" type="text" />
        </div>
        <div>
          Start_time <input name="height" type="text" />
        </div>
        <div>
          End_time <input name="height" type="text" />
        </div>
        <div>
          Image_url <input name="height" type="text" />
        </div>
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}
