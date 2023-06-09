import React, { useRef } from "react";
import { Container, Nav } from "reactstrap";
import "../style/header.css"
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'
import SideMenu from "../components/SideMenu";
import "../style/header.css"

const navLinks = [
  {
    display: "Home",
    url: "/",
    class:"a"
  },
  {
    display: "About",
    url: "about",
    class:"a"
  },

  {
    display: "Courses",
    url: "course",
    class:"a"
  },
  {
    display: "Free",
    url: "free",
    class:"a"
  },
  {
    display: "Blog",
    url: "/blog",
    class:"a"
  },
];

const HeaderAll = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                
                  <li key={index} className="nav__item">
                  
                  
                    {/* <a href={item.url}>{item.display}</a> */}
                    <Link to={item.url} spy={true} smooth={true} duration={100} className={item.class}>{item.display }</Link>
                  </li>
                  
                ))}
              </ul>
            </div>

          </div>

          
        </div>
        <SideMenu/>
      </Container>
     
    </header>
  );
};

export default HeaderAll;