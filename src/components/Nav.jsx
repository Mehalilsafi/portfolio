//import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.svg";
function Nav() {
  return (
    <div className="m-4 flex justify-between">
      <img src={logo} alt="logo image" />
      <ul className="flex justify-center items-center gap-4 ">
        <li>
      
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
