import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Animated } from "react-animated-css";
import Tech from "../assets/Tech.jpg";
import Cartoon from "../assets/image2.png";
const Home = () => {
  return (
    <div>
      <div name="home" className="w-full h-screen  bg-[#0a192f]">
        <img
          className="absolute w-[600px] mx-[900px] my-[275px]"
          src={Cartoon}
          alt=""
        />
        {/* Container */}
        <div className="max-w-[800px] mx-[100px]  px-8 flex flex-col justify-center h-full relative">
          <Animated animationIn="flipInX" animationInDuration={2500}>
            <p className="text-pink-600 text-xl">Hi, my name is</p>
          </Animated>

          <Animated
            animationIn="flipInX"
            animationInDelay={400}
            animationInDuration={4000}
          >
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Victor Choe
            </h1>
          </Animated>

          <Animated
            animationIn="flipInX"
            animationInDelay={800}
            animationInDuration={1800}
          >
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
              I am a Full Stack Developer
            </h2>
          </Animated>

          <Animated
            animationIn="flipInX"
            animationInDelay={1000}
            animationInDuration={2500}
          >
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a full-stack developer specializing in building and designing
              an exceptional digital experience. Currently, I’m focused on
              building responsive full-stack web applications.
            </p>
          </Animated>
          <Animated
            animationIn="flipInX"
            animationInDelay={1200}
            animationInDuration={2000}
          >
            <div>
              <Link to="about" smooth={true} duration={600}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 group-hover:rotate-90 duration-300">
                  View Work
                  <span className="group-hover:rotate-90 duration-300 ">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  );
};

export default Home;
