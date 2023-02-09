import React from "react";

import AdoptmePicture from "../images/adoptme.png";
import ImuunaPicture from "../images/immuna.png";
import NewsMonkey from "../images/newaMonkey.png";
import Plural from "../images/plural.png";

const Project = () => {
  const projectDetail = [
    {
      id: 1,
      title: "AdoptMe",
      picture: AdoptmePicture,
      link: "https://adopt-m-app.netlify.app/",
    },
    {
      id: 2,
      title: "Immuna",
      picture: ImuunaPicture,
      link: "https://immuna.vercel.app/login",
    },
    {
      id: 3,
      title: "NewsMonkey",
      picture: NewsMonkey,
      link:
        "https://vercel.com/muhammad-umar-dev/news-monkey/FcszRiKYrwbCwLXZwD6hUCbJ6hAC",
    },
    {
      id: 4,
      title: "Plural",
      picture: Plural,
      link: "https://plural-clone-voil3ybje-muhammad-umar-dev.vercel.app/",
    },
  ];
  return (
    <section id="work">
      <h1 className="text-slate-300 font-sans font-semibold text-2xl inline-flex items-center">
        <span className="text-green-300 font-mono font-light">03. &nbsp; </span>
        Some Things I’ve Built &nbsp; &nbsp;
        <hr className="lg:w-52 w-12 border-slate-700" />
      </h1>
      <div className="py-6"></div>

      {projectDetail.map((items) => {
        return (
          <div className="md:my-16 my-8" key={items.id}>
            <div
              className={`flex flex-col w-full  ${
                items.id % 2 === 0
                  ? "float-right text-right items-end"
                  : "float-left text-left items-start"
              }`}
            >
              <p className="text-green-300 font-mono text-base">
                Featured Project
              </p>

              <a
                href="https://plural-clone.vercel.app/#"
                rel="noreferrer"
                target="_blank"
                className="text-slate-300 font-sans md: md:text-4xl bold"
              >
                {items.title}
              </a>
            </div>
            {/* <!-- Project Image --> */}
            <div className="group  md:flex w-full inline-flex justify-center md:px-6 py-2">
              <div className="w-1/2  absolute rounded bg-gradient-to-r from-[#a6f3e18c] to-[#a6f3e18c] group-hover:-hover:bg-gradient-to-r hover:from-[#ffffff00] hover:to-[#ffffff00] delay-100"></div>

              <img
                className="rounded border-2 border-green-500 ring-8 ring-offset-1 ring-offset-white md:w-[70%] w-full my-6"
                src={items.picture}
                alt="profile"
              />
            </div>
            <div className="shadow-lg w-full h-px bg-slate-800 md:mt-20 mt-4" />
          </div>
        );
      })}
    </section>
  );
};

export default Project;
