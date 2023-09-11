// import * as React from "react";
import { Link } from "react-router-dom";

export function root() {
  return (
    <>
      <Link to="/signup" className="btn btn-primary">
        Sign up
      </Link>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
    </>
  );
}
