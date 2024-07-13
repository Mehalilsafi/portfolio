//import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.svg";
function Nav() {
  return (
    <div className="p-4 flex justify-between">
      <img src={logo} alt="logo image" />
      <ul className="flex justify-end items-center gap-3 w-[200px]">
        <li>
           <a href="https://github.com/Mehalilsafi"><FontAwesomeIcon icon={faGithub} className="w-6 h-4" /> </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/safi-mhalil"><FontAwesomeIcon icon={faLinkedin} className="w-6 h-4" /></a>
        </li>
       
      </ul>
    </div>
  );
}

export default Nav;
