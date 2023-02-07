import React from "react";

import ProfilePicture from "../images/profilePicture.jpg";

const AboutMe = () => {
  return (
    <section id="about">
      <h1 className="text-slate-400 font-sans font-semibold text-2xl inline-flex items-center">
        <lable className="text-green-300 font-mono font-light">
          01. &nbsp;
        </lable>
        About Me &nbsp; &nbsp;
        <hr className="lg:w-52 w-12 border-slate-700" />
      </h1>

      <div className="p-4"></div>
      <div className="lg:w-full lg:flex block">
        <div className="lg:w-[60%] w-full block">
          <p className="text-lg font-medium text-slate-400 font-sans">
            Hello! My name is Umar and I enjoy creating things that live on the
            internet. My interest in web development, As a web developer my
            responsible for creating and maintaining websites. This involves
            working with clients to understand their needs and developing a plan
            to meet those needs, using programming languages such as HTML, CSS,
            JavaScript, ReactJS and NodeJS to create the website's, and testing
            the website to ensure it is functioning properly.
          </p>
          <div className="p-2"></div>
          <div className="p-2"></div>
          <div className="p-2"></div>

          <h2 className="text-lg font-medium text-slate-400 font-sans">
            Here are a few technologies I’ve been working with recently:
          </h2>
          <div className="p-2"></div>
          <div className="flex w-full">
            <div className="flex flex-col lg:w-[40%] w-1/2">
              <a className="text-base font-normal text-slate-400 font-sans">
                <label className="text-green-300">▹</label> HTML
              </a>
              <a className="text-base font-normal text-slate-400 font-sans">
                <label className="text-green-300">▹</label> CSS
              </a>
              <a className="text-base font-normal text-slate-400 font-sans">
                <label className="text-green-300">▹</label> TailwindCSS
              </a>
              <a className="text-base font-normal text-slate-400 font-sans">
                <label className="text-green-300">▹</label> JavaScript
              </a>
            </div>

            <div className="flex flex-col lg:w-[40%] w-1/2">
              <a className="text-base font-normal text-slate-400 font-sans">
                <label className="text-green-300">▹</label> React JS
              </a>
              <a className="text-base font-normal text-slate-400 font-sans">
                <label className="text-green-300">▹</label> NodeJS
              </a>
              <a className="text-base font-normal text-slate-400 font-sans">
                <label className="text-green-300">▹</label> WordPress
              </a>
              <a className="text-base font-normal text-slate-400 font-sans">
                <label className="text-green-300">▹</label>Photoshop
              </a>
            </div>
          </div>
        </div>
        <div className="lg:p-0 p-4"></div>
        <div className="group lg:w-[40%] md:flex w-full inline-flex justify-center px-6 py-2">
          <div className="w-[271px] h-[271px] absolute rounded bg-gradient-to-r from-[#64ffdb8c] to-[#64ffdb8c] group-hover:-hover:bg-gradient-to-r hover:from-[#ffffff00] hover:to-[#ffffff00] delay-100"></div>
          <div className="w-[271px] h-[271px] -z-40 absolute rounded border-2 border-green -mr-24 mt-12 group-hover:-translate-y-4 group-hover:-translate-x-4 delay-150"></div>
          <img
            className="rounded border-2 border-green ring-8 ring-offset-1 ring-offset-white w-[271px] h-[271px]"
            src={ProfilePicture}
            alt="profile picture"
            srcset=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
