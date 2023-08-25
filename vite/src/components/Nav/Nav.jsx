import React from "react";
import "@bootstrap/bootstrap.css";

function Nav({brand, children}) {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
          <img src="../../../public/img/fox-svgrepo-com.svg" width="30" height="24" class="d-inline-block align-text-top"/>
            {brand}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul class="navbar-nav mb-lg-0">
              {children}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
