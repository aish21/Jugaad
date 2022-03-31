import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Images/logo_size.jpg";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Header() {

  const [openedDrawer, setOpenedDrawer] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    }
  });

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
  }

  function logoutUser(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
    localStorage.removeItem("uid");
    localStorage.setItem("bannerURL", JSON.stringify("banner/banner-1.jpg"));
    signOut(auth).then(() => {
      alert("Logged out!");
      setLoggedIn(false);
    });
  }

  if (isLoggedIn) {
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={changeNav}>
              <img src={Logo} alt = "" width={90}/>
            </Link>
  
            <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    href="!#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={["fas", "user-alt"]} />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userDropdown"
                  >
                    <li>
                    <Link to="/Login" className="dropdown-item" onClick={logoutUser}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
  
            <div className="d-inline-block d-lg-none">
              <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  else {
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={changeNav}>
              <img src={Logo} alt = "" width={90}/>
            </Link>
  
            <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    href="!#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={["fas", "user-alt"]} />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userDropdown"
                  >
                    <li>
                    <Link to="/Login" className="dropdown-item" onClick={changeNav}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/Signup" className="dropdown-item" onClick={changeNav}>
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
  
            <div className="d-inline-block d-lg-none">
              <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
