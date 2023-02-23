import * as React from "react";

import "../styles/global.css";

import Nav from "../components/Nav";
import LeftSide from "../components/LeftSide";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Expericence from "../components/Expericence";
import Project from "../components/Project";
import Contact from "../components/Contact";
import RightSide from "../components/RightSide";

const IndexPage = () => {
  return (
    <div className="bg-slate-900 w-full  ">
      <Nav />
      <div className="main flex justify-between ">
        <LeftSide />
        <div className="container lg:px-10 px-4 ">
          <Introduction />
          <About />
          <Expericence />
          <Project />
          <Contact />
        </div>
        <RightSide />
      </div>
      <div className="p-6"></div>
      <div className="p-6"></div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Muhammad Umar Profile</title>;
