import React from "react";
import "@bootstrap/bootstrap.css";

function NavLinks({href, text}) {
  return (
    <>
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href={href}>
          {text}
        </a>
      </li>
    </>
  );
}

export default NavLinks;
