import { LogoutLink } from "./LogoutLink";
import { TripsCreate } from "./TripsCreate";
import { Link } from "react-router-dom";
export function Header() {

  let LogoutLinks;
  if (localStorage.jwt !== undefined){
    LogoutLinks = 
      <li className="nav-item">
        <LogoutLink />
      </li>
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img
          //  background-image: url('assets/logo.png');
          src="https://thumbs.dreamstime.com/b/travel-trip-logo-agency-adventure-creative-sign-171132504.jpg"
          width="50"
          height="50"
        />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/createTrips">
                    Create a Trip
                </Link>
            </li>
            {LogoutLinks}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Book a Flight
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Book Your Lodging
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Budget Your trip
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
