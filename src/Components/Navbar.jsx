import React, { useState, useRef } from 'react'; // ✅ added useRef
import './Navbar.css';
import logo from '../assets/logo.jpg';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(); // ✅ corrected

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />

      {/* Mobile Menu Open Icon */}
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu} />

      {/* Menu List */}
      <ul className='nav-menu' ref={menuRef}>
        {/* Mobile Menu Close Icon */}
        <img src={menu_close} alt="" className='nav-mob-close' onClick={closeMenu} />

        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt=""/> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset="50" href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt=""/> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset="50" href='#services'>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt=""/> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset="50" href='#work'>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt=""/> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset="50" href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt=""/> : <></>}
        </li>
      </ul>

      {/* Connect Button */}
      <div className='nav-content'>
        <AnchorLink className='anchor-link' offset="50" href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
