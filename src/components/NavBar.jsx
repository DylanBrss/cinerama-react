import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid nav_c">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarScroll">
            <ul class="navbar-nav d-flex my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/filmfr">
                  Film Français
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/filmen">
                  Film Américain
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/film2023">
                  Film sorite en 2023
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/top50">
                  Les 50 films les mieux notés
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/recherche">
                  Rechercher un film
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
