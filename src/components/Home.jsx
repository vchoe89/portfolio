import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Cartoon from "../assets/image2.png";
import { bounce, flipInX } from "react-animations";
import styled, { keyframes } from "styled-components";

const Home = () => {
  return (
    <div>
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        <div>
          <img
            className="absolute  md:w-[690px] md:mx-[1000px] md:my-[220px]"
            src={Cartoon}
            alt=""
          />
        </div>
        {/* Container */}
        <div className="max-w-[800px] mx-[100px]  px-8 flex flex-col justify-center h-full relative">
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
              I am a Full Stack Developer
            </h2>
          </FlipDiv>

          <FlipDiv>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a full-stack developer specializing in building and designing
              an exceptional digital experience. Currently, I’m focused on
              building responsive full-stack web applications.
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
