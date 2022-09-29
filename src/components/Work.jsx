import { data } from "autoprefixer";
import React from "react";
import workImg from "../assets/workImg.png";
import workImg2 from "../assets/workImg2.png";
import netflix from "../assets/netflix.jpg";
import amazon from "../assets/amazon.jpg";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen bg-white workDiv">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-6xl font-bold inline border-b-4 text-gray-700 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects.</p>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${amazon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 rounded-md group-hover:opacity-100 hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[4rem]">
                <span className="text-2xl p-2 font-bold text-white tracking-wider">
                  Amazon Clone
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/vchoe89/amazon-clone"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 rounded-md group-hover:opacity-100 hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[4rem]">
                <span className="text-2xl p-2 font-bold text-white tracking-wider">
                  Netflix Clone
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/vchoe89/netflix-clone"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 hover:backdrop-blur-sm h-full w-full">
              <div className="justify-center items-center text-center pt-[4rem]">
                <span className="text-2xl p-2 font-bold text-white tracking-wider">
                  Weather Application
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/vchoe89/data-finance"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
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
                  <a
                    href="https://github.com/vchoe89/data-finance"
                    target="_blank"
                  >
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
