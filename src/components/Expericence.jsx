import React, { useState } from "react";
import JSONData from "../json/data.json";

const Expericence = () => {
  const Data = [...JSONData];
  const [currentCompany, setCurrentCompany] = useState("Cipher Savvy");

  const tabDisplay = (value) => {
    setCurrentCompany(value);
  };

  return (
    <section id="experience" className="md:px-0 px-[10%]">
      <h1 className="text-slate-300 font-sans font-semibold text-2xl inline-flex items-center">
        <span className="text-green-300 font-mono font-light">02. &nbsp; </span>
        Where I've Worked &nbsp; &nbsp;
        <hr className="lg:w-52 w-12 border-slate-700" />
      </h1>
      <div className="p-6"></div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[25%] md:flex-col md:overflow-x-hidden  w-full flex flex-row overflow-x-scroll">
          {Data.map((items) => {
            return (
              <button
                value={items.company}
                key={items.id}
                onClick={(e) => tabDisplay(e.target.value)}
                className={`w-[150px] h-12 px-6 my-2 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-left  hover:border-green-100 hover:text-green-100 hover:bg-slate-800 ${
                  items.company === currentCompany
                    ? " text-green-300 border-[#64ffda]"
                    : "text-slate-300 border-indigo-500"
                } `}
              >
                {items.company}
              </button>
            );
          })}
        </div>
        <div className="py-6"></div>

        <div className="md:w-[70%] w-full">
          {Data.filter((items) => items.company === currentCompany).map(
            (items) => {
              return (
                <div
                  key={items.id}
                  className={`${items.company ? "block" : "hidden"}`}
                >
                  <h1 className="text-white text-xl font-sans font-bold">
                    {items.jobTitle}&nbsp;
                    <span className="text-green-300">{items.company}</span>
                  </h1>
                  <p className="font-mono text-slate-400">
                    {items.startDate} - {items.leavingDate}
                  </p>
                  <div className="p-2"></div>
                  <div className="flex flex-col">
                    {items.jobDetails.map((item, index) => {
                      return (
                        <p key={index} className="font-serif text-white">
                          {item}
                        </p>
                      );
                    })}
                    {items.jobDescription.map((item, index) => {
                      return (
                        <div className="flex" key={index}>
                          <span className="text-green-300">▹&nbsp;&nbsp;</span>
                          <p className="text-slate-300 font-sans">{item}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Expericence;
