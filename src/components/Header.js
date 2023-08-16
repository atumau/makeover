import React from "react";
import { Link } from "react-router-dom";
import {BiSolidHomeHeart} from "react-icons/bi"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/home">
          <img src="logo.png" className="img-fluid rounded-circle border border-3 border-white" style={{maxWidth: 60, maxHeight: 60}} />


          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="blog"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link text-white" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown ">
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      Concealer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      Mascara
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      Foundation
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      Eyeliner
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      Highlighter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      Eye Primer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      Eyebrow pencil
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products">
                      Show Details
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
            <form className="d-flex">
              <input
                className="btn btn-light form-control me-2"
                type="search"
                placeholder="@type"
                aria-label="Search"
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="button mx-3 md:mx-8 lg:mx-16">
            <Link to="/login">
              <button type="button" className="btn btn-light">
                Booking
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
