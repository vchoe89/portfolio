import React, { useEffect } from "react";
import workImg from "../assets/workImg.png";
import workImg2 from "../assets/workImg2.png";
import netflix from "../assets/netflix.jpg";
import amazon from "../assets/amazon.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      name="work"
      data-aos="fade-up"
      className=" w-full md:h-screen bg-white workDiv"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-7xl font-bold inline border-b-4 text-gray-700 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects.</p>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${amazon})` }}
            className="shadow-lg shadow-[#040c16] group container hover:scale-105 duration-300 rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 rounded-md group-hover:opacity-100  hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[2rem]">
                <span className="text-2xl p-2 font-bold text-[#DB2777] tracking-wider">
                  Amazon Clone
                </span>
                <div className="">
                  <p className="pl-2 pr-2 text-slate-800 font-semibold">
                    By using ContextAPI & Firebase Cloud functions, I was able
                    to authenticate users, create new accounts, and save user
                    data. Additionally, I incorporated Stripe to emulate
                    real-life user payment methods.
                  </p>
                </div>
                <div className="pt-4 text-center">
                  <a href="https://clone-f0714.firebaseapp.com/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#DB2777] hover:text-white ease-in-out">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vchoe89/amazon-clone">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#DB2777] hover:text-white ease-in-out">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${netflix})` }}
            className="shadow-lg shadow-[#040c16] group container hover:scale-105 duration-300 rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 rounded-md group-hover:opacity-100 hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[2rem]">
                <span className="text-2xl p-2 font-bold text-[#DB2777] tracking-wider">
                  Netflix Clone
                </span>
                <div className="text-black font-normal">
                  <p className="pl-2 pr-2 text-slate-100  font-semibold">
                    By using TailwindCSS, I created this application mainly to
                    focus on a mobile-first, fully responsive application. Also,
                    by incorporating Google Firebase Authenication I was able to
                    achieve conditional rendering base on user authentication.
                  </p>
                </div>
                <div className="pt-4 text-center">
                  <a href="https://netflix-clone-c353e.web.app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#DB2777] hover:text-white ease-in-out">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vchoe89/netflix-clone">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#DB2777] hover:text-white ease-in-out">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg2})` }}
            className="shadow-lg shadow-[#040c16] group container hover:scale-105 duration-300 rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[2rem]">
                <span className="text-2xl p-2 font-bold text-[#DB2777] tracking-wider">
                  Global Weather
                </span>
                <p className="pl-2 pr-2 text-slate-100 font-semibold">
                  I'm especially proud of this application because it's the
                  first I built on my own when I was starting to learn how to
                  use API's. I created multiple endpoints to allow users to
                  easily see hourly-based or daily-based weather information.
                </p>
                <div className="pt-4 text-center">
                  <a href="https://global-weather-a51c5.web.app/">
                    <button className="ttext-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#DB2777] hover:text-white ease-in-out">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vchoe89/global-weather">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#DB2777] hover:text-white ease-in-out">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container hover:scale-105 duration-300 rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 rounded-md group-hover:opacity-100 hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[4rem]">
                <span className="text-2xl p-2 font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/vchoe89/data-finance">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
