import React from "react";
import creation from "../assets/creation.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile" });
  }, []);
  return (
    <div name="about" className="w-full h-screen bg-white text-gray-800">
      <div
        data-aos="fade-up"
        className="flex pb-[20rem] md:pb-[5rem] flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pl-4 mt-[370px] pb-4 ">
            <p className="text-7xl bottom-10 left-10 font-bold inline border-b-4 border-pink-600 ">
              About
            </p>
          </div>
          <div className="mt-[100px] w-full h-full hidden sm:block md:block">
            <img className="h-[400px]" src={creation} alt="" />
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Victor, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
