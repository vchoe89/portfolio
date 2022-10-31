import React, { useEffect } from "react";
import workImg from "../assets/deliciouss.jpg";
import netflix from "../assets/netflix.jpg";
import amazon from "../assets/amazon.jpg";
import covid from "../assets/covid.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile" });
  }, []);
  return (
    <div name="work" className=" w-full md:h-screen bg-white workDiv">
      <div
        data-aos="fade-up"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 ">
          <p className="text-7xl font-bold inline border-b-4 text-gray-700 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects.</p>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${amazon})` }}
            className="shadow-lg shadow-[#040c16] group container hover:scale-105 duration-500 rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 rounded-md group-hover:opacity-100  hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[2rem]">
                <span className="text-2xl p-2 font-bold text-black tracking-wider">
                  Amazon Clone
                </span>
                <div className="">
                  <p className="pl-2 pr-2 pt-4 text-gray-800 font-semibold">
                    ReactJS || ContextAPI || Google Firebase Cloud || Axios ||
                    Stripe || MaterialUI || RapidAPI
                  </p>
                </div>
                <div className="pt-10 text-center">
                  <a href="https://clone-f0714.firebaseapp.com/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-700 hover:text-white ease-in-out">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vchoe89/amazon-clone">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-700 hover:text-white ease-in-out">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${netflix})` }}
            className="shadow-lg shadow-[#040c16] group container hover:scale-105 duration-500 rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 rounded-md group-hover:opacity-100 hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[2rem]">
                <span className="text-2xl p-2 font-bold text-white tracking-wider">
                  Netflix Clone
                </span>
                <div className="text-black font-normal">
                  <p className="pl-2 pr-2 pt-4 text-slate-100  font-semibold">
                    ReactJS || TailwindCSS || Firebase Auth || Axios || Google
                    Firestore || ContextAPI
                  </p>
                </div>
                <div className="pt-10 text-center">
                  <a href="https://netflix-clone-c353e.web.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-700 hover:text-white ease-in-out">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vchoe89/netflix-clone">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-700 hover:text-white ease-in-out">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${covid})` }}
            className="shadow-lg shadow-[#040c16] group container hover:scale-105 duration-500 rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:rounded-md hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[2rem]">
                <span className="text-2xl p-2 font-bold text-black tracking-wider">
                  Covid-19 Tracker
                </span>
                <p className="pl-2 pr-2 pt-4 text-gray-800  font-semibold">
                  ReactJS || MaterialUI || Axios || Chart.JS || React-LeafLet ||
                  React-Router-DOM || Numeral
                </p>
                <div className="pt-10 text-center">
                  <a href="https://covid-tracker-a2570.web.app/">
                    <button className="ttext-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-700 hover:text-white ease-in-out">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vchoe89/covid-tracker">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-700 hover:text-white ease-in-out">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container hover:scale-105 duration-500 rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 rounded-md group-hover:opacity-100 hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[2rem]">
                <span className="text-2xl font-bold text-black tracking-wider">
                  Deliciouss
                </span>
                <p className="pl-2 pr-2 pt-4 text-gray-800 font-semibold">
                  ReactJS || React-Router-DOM || styled-components || RapidAPI
                  || React-Icons || Framer-Motion
                </p>
                <div className="pt-10 text-center">
                  <a href="https://recipe-app-5fce6.web.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-slate-700 text-gray-700 hover:text-white font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vchoe89/recipe-react">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-slate-700 text-gray-700 hover:text-white font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
