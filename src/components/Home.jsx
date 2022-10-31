import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Cartoon from "../assets/image2.png";
import { bounce, flipInX } from "react-animations";
import styled, { keyframes } from "styled-components";

const Home = () => {
  return (
    <div>
      <div
        name="home"
        className="w-full relative justify-center h-screen bg-[#0a192f]"
      >
        <img
          className="absolute w-[800px] h-[500px] hidden xl:block md:top-[200px] md:right-[50px]"
          src={Cartoon}
          alt="cartoon"
        />
        {/* Container */}
        <div className="max-w-[800px] px-4 md:mx-[100px] flex flex-col justify-center h-full relative">
          <BouncyDiv>
            <p className="text-pink-600 text-xl">Hi, my name is</p>
          </BouncyDiv>

          <FlipDiv>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Victor Choe
            </h1>
          </FlipDiv>

          <FlipDiv>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
              I am a Full Stack Software Engineer
            </h2>
          </FlipDiv>

          <FlipDiv>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a full stack software engineer specializing in building and
              designing an exceptional digital experience. Currently, I’m
              focused on building responsive front-end web applications.
            </p>
          </FlipDiv>
          <FlipDiv>
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
          </FlipDiv>
        </div>
      </div>
    </div>
  );
};

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;

const flipAnimation = keyframes`${flipInX}`;

const FlipDiv = styled.div`
  animation: 2s ${flipAnimation};
`;

export default Home;

// className="absolute hidden lg:block md:block sm:block w-[690px] my-[220px] mx-[900px]"
