import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" />
        <img
          src="https://thumbs.dreamstime.com/b/travel-trip-logo-agency-adventure-creative-sign-171132504.jpg"
          width="50"
          height="50"
        />

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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add a trip
              </a>
            </li>
            <li className="nav-item">
              <a className="logout-link" href="">
                <LogoutLink />
              </a>
            </li>
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
