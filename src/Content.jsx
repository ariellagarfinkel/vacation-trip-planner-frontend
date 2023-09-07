import { TripsIndex } from "./TripsIndex";
import { Signup } from "./Signup";

export function Content() {
  const trips = [
    { id: 1, title: "Africa", image_url: "africa.jpg", start_time: "January 8, 2023", end_time: "February 1, 2023" },
    {
      id: 2,
      title: "Australia",
      image_url: "australia.jpg",
      start_time: "January 8, 2023",
      end_time: "February 1, 2023",
    },
    {
      id: 3,
      title: "Scotland",
      image_url: "scotland.jpg",
      start_time: "January 8, 2023",
      end_time: "February 1, 2023",
    },
  ];
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Signup />
      <TripsIndex trips={trips} />
    </div>
  );
}
