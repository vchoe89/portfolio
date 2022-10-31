import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo2 from "../assets/vclogo2.png";
import { Link } from "react-scroll";
import Aos from "aos";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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

  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <div
      id="navbar"
      className="fixed w-screen text-lg h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 "
    >
      <div>
        <Link to="home" smooth={true} duration={600}>
          <img
            className="mx-4 my-2 hidden md:block left cursor-pointer"
            id="nav-img"
            src={Logo2}
            alt="Logo"
            style={{ width: "50px" }}
          />
        </Link>
      </div>

      {/*menu */}
      <div>
        <ul className="nav-bar px-4 group hidden md:flex">
          <li data-aos="zoom-in-down" data-aos-delay="1000">
            <Link
              className="nav-div drop-shadow-sm nav-div-black"
              to="home"
              smooth={true}
              duration={600}
            >
              Home
            </Link>
          </li>
          <li data-aos="zoom-in-down" data-aos-delay="800">
            <Link
              className="nav-div nav-div-black"
              to="about"
              smooth={true}
              duration={600}
            >
              About
            </Link>
          </li>
          <li data-aos="zoom-in-down" data-aos-delay="600">
            <Link
              className="nav-div nav-div-black "
              to="skills"
              smooth={true}
              duration={600}
            >
              Skills
            </Link>
          </li>
          <li data-aos="zoom-in-down" data-aos-delay="400">
            <Link
              className="nav-div nav-div-black "
              to="work"
              smooth={true}
              duration={600}
            >
              Projects
            </Link>
          </li>
          <li data-aos="zoom-in-down" data-aos-delay="200">
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
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
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
              href="mailto: vchoe89@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://docs.google.com/document/d/197AEtbxx3hBnRDFWWqtqtNbCG3p3DH3xtebs5Fos7_U/preview"
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
