import "./index.css";
import { Link } from "react-router-dom";
export function Root() {
  return (
    <>
      <div className="buttons">
        <Link className="mx-2 btn btn-big btn-outline-dark rounded-pill" to="/signup">
            Sign Up
        </Link>
        <Link className="mx-2 btn btn-big btn-outline-dark rounded-pill" to="/login">
          Login
        </Link>
      </div>
    </>
  );
}

