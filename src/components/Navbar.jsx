import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo2 from "../assets/vclogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  // var lastScrollTop;
  // let navbar = document.getElementById("navbar");
  // window.addEventListener("scroll", function () {
  //   var scrollTop =
  //     window.pageYOffset || this.document.documentElement.scrollTop;
  //   if (scrollTop > lastScrollTop) {
  //     navbar.style.top = "-80px";
  //   } else {
  //     navbar.style.top = "0";
  //   }
  //   lastScrollTop = scrollTop;
  // });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div
      id="navbar"
      className="fixed w-full text-lg h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 "
    >
      <div>
        <img
          id="nav-img"
          src={Logo2}
          alt="Logo image"
          style={{ width: "80px" }}
        />
      </div>

      {/*menu */}
      <div>
        <ul className="nav-bar group hidden md:flex">
          <li>
            <Link
              className="nav-div nav-div-black"
              to="home"
              smooth={true}
              duration={600}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-div nav-div-black"
              to="about"
              smooth={true}
              duration={600}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-div nav-div-black"
              to="skills"
              smooth={true}
              duration={600}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="nav-div nav-div-black"
              to="work"
              smooth={true}
              duration={600}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="nav-div nav-div-black"
              to="contact"
              smooth={true}
              duration={600}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/vchoe/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/vchoe89"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
