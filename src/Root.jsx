// import "./App.css";
import "./index.css";
// import { Signup } from "./Signup"; -how come signup and login work if these are commented out
// import { Login } from "./Login";
import { Link } from "react-router-dom";
// import { Routes, Route, Navigate } from "react-router-dom";
export function Root() {
  return (
    <>
      <div className="buttons center">
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
// div className used to be centered
