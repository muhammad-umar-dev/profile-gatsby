import React from "react";

import ProfilePicture from "../images/profilePicture.jpg";

const About = () => {
  const skills = [
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "Gatsby",
    "TailwindCSS",
    "CSS3",
    "HTML",
    "PhotoShop",
  ];
  return (
    <section id="about">
      <h1 className="text-slate-300 font-sans font-semibold text-2xl inline-flex items-center">
        <span className="text-green-300 font-mono font-light">01. &nbsp; </span>
        About Me &nbsp; &nbsp;
        <hr className="lg:w-52 w-12 border-slate-700" />
      </h1>

      <div className="p-4"></div>
      <div className="lg:w-full lg:flex block">
        <div className="lg:w-[60%] w-full block">
          <p className="text-lg font-medium text-slate-300 font-sans">
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

          <h2 className="text-lg font-medium text-slate-300 font-sans">
            Here are a few technologies I’ve been working with recently:
          </h2>
          <div className="p-2"></div>
          <div className="flex w-full">
            <div className="grid grid-rows-4 grid-flow-col gap-x-24 ">
              {skills.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="text-base font-normal text-slate-300 font-sans"
                  >
                    <span className="text-green-300">▹</span> {item}
                  </div>
                );
              })}
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
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
