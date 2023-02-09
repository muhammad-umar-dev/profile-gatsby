import React from "react";

import ProjectPicture from "../images/plural-clone.webp";

const Project = () => {
  return (
    <section id="work">
      <h1 className="text-slate-300 font-sans font-semibold text-2xl inline-flex items-center">
        <span className="text-green-300 font-mono font-light">03. &nbsp; </span>
        Some Things I’ve Built &nbsp; &nbsp;
        <hr className="lg:w-52 w-12 border-slate-700" />
      </h1>
      <div className="p-6"></div>

      <div className="flex float-right text-right">
        <div>
          <p className="text-green-300 font-mono text-base">Featured Project</p>
          <h3 className="text-slate-300 font-sans text-2xl bold">
            <a
              href="https://plural-clone.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              Plural Landing Page
            </a>
          </h3>
          <div className="project-description"></div>
        </div>
      </div>
      {/* <!-- Project Image --> */}
      <div>
        <div className="absolute rounded bg-gradient-to-r from-[#64ffdb8c] to-[#64ffdb8c] hover:bg-gradient-to-r hover:from-[#ffffff00] hover:to-[#ffffff00]"></div>
        <img
          className="rounded border-2 border-green"
          src={ProjectPicture}
          alt=""
          srcSet=""
        />
      </div>
    </section>
  );
};

export default Project;
