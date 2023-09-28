// import "./App.css";
import "./index.css";
// import { Signup } from "./Signup";
// import { Login } from "./Login";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

export function Root() {
  return (
    <>
      <div className="buttons">
        <Link to="/signup">
          <button type="button" className="btn btn-big btn-outline-dark rounded-pill">
            Sign Up
          </button>
        </Link>
        &nbsp;
        <Link to="/login">
          <button type="button" className="btn btn-big btn-outline-dark rounded-pill">
            Log In
          </button>
        </Link>
      </div>
    </>
  );
}
// div className used to be centered
