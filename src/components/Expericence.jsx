import React from "react";

const Expericence = () => {
  return (
    <div id="experience" className="md:px-0 px-[10%]">
      <h1 className="text-slate-300 font-sans font-semibold text-2xl inline-flex items-center">
        <lable className="text-slate-300 font-mono font-light">
          02. &nbsp;
        </lable>
        Where I've Worked &nbsp; &nbsp;
        <hr className="lg:w-52 w-12 border-slate-700" />
      </h1>
      <div className="p-6"></div>
      {/* Expericence */}

      <div className="flex md:flex-row flex-col">
        <div className="md:w-[25%] md:flex-col md:overflow-x-hidden w-full flex flex-row overflow-x-scroll">
          <button
            value="tab1"
            onclick="tabDisplay(this)"
            className="tab1 w-[150px] h-12 px-6 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-slate-300 text-left border-indigo-500 hover:border-[#64ffda] hover:text-green-300 hover:bg-darkslate active:text-green-300 active:border-[#64ffda]"
          >
            CipherSavvy
          </button>

          <button
            value="tab2"
            onclick="tabDisplay(this)"
            className="tab2 w-[150px] h-12 px-6 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-slate-300 text-left border-indigo-500 hover:border-[#64ffda] hover:text-green-300 hover:bg-darkslate active:text-green-300 active:border-[#64ffda]"
          >
            IconTechnologies
          </button>

          <button
            value="tab3"
            onclick="tabDisplay(this)"
            className="tab3 w-[150px] h-12 px-6 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-slate-300 text-left border-indigo-500 hover:border-[#64ffda] hover:text-green-300 hover:bg-darkslate active:text-green-300 active:border-[#64ffda]"
          >
            iParagons
          </button>

          <button
            value="tab4"
            onclick="tabDisplay(this)"
            className="tab4 w-[150px] h-12 px-6 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-slate-300 text-left border-indigo-500 hover:border-[#64ffda] hover:text-green-300 hover:bg-darkslate active:text-green-300 active:border-[#64ffda]"
          >
            Service
          </button>
        </div>

        <div className="py-6"></div>
        <div className="md:w-[70%] w-full">
          <div id="cipherSavvy">
            <h1 className="text-white text-xl font-sans font-bold">
              FrontEnd Web Developer
              <span className="text-green-300"> CipherSavvy</span>
            </h1>
            <p className="font-mono text-slate-300">Aug 2022 - Present</p>
            <div className="p-2"></div>
            <div className="flex flex-col">
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects.
                </p>
              </div>
              <div className="p-2"></div>
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Communicate with multi-disciplinary teams of engineers,
                  designers, producers, and clients on a daily basis
                </p>
              </div>
            </div>
          </div>

          <div id="iconTechnologies" className="hidden">
            <h1 className="text-white text-xl font-sans font-bold">
              Head of Operations
              <span className="text-green-300">IconTechnologies</span>
            </h1>
            <p className="font-mono text-slate-300">July 2020 - July 2022</p>
            <div className="p-2"></div>
            <div className="flex flex-col">
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Handling day to day Operation in and outside office
                </p>
              </div>
              <div className="p-2"></div>
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Communicate with client teams to understand designers and
                  Conducting effective Market Surveys regarding.
                </p>
              </div>
              <div className="p-2"></div>
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Develop new SOP’s for the production house for seamless
                  operations and deployee product intime.
                </p>
              </div>
              <div className="p-2"></div>
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Used my pervious techs savy expertise for generating online
                  presence.
                </p>
              </div>
            </div>
          </div>

          <div id="iParagons" className="hidden">
            <h1 className="text-white text-xl font-sans font-bold">
              Android Developer(Intern)
              <span className="text-green-300">iParagons</span>
            </h1>
            <p className="font-mono text-slate-300">
              April 2019 - October-2019
            </p>
            <div className="p-2"></div>
            <div className="flex flex-col">
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Participated in Design and developing and its workflow using
                  Activities.
                </p>
              </div>
              <div className="p-2"></div>
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Worked on Designing, Bug-fixing and Maintenance of
                  Application.
                </p>
              </div>
              <div className="p-2"></div>
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Key Resources for layouts and UI work utilizing xml, Views,
                  Web-Views, ListView, Menu Item, Activities, Fragments,
                  Async-Task and handlers etc.
                </p>
              </div>
            </div>
          </div>

          <div id="service" className="hidden">
            <h1 className="text-white text-xl font-sans font-bold">
              IT Technical Support (Intern)
              <span className="text-green-300">Servis Industries limited</span>
            </h1>
            <p className="font-mono text-slate-300">Nov 2018 - Jan 2019</p>
            <div className="p-2"></div>
            <div className="flex flex-col">
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Installation & configuration of a company’s computer hardware
                  operating systems and applications.
                </p>
              </div>
              <div className="p-2"></div>
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Communicate with staff or clients to help him for set up
                  systems or resolve issues.
                </p>
              </div>
              <div className="flex">
                <label className="text-green-300">▹&nbsp;&nbsp;</label>
                <p className="text-slate-300 font-sans">
                  Troubleshoot system and network problems, diagnosing and
                  solving hardware or software faults and replace parts as
                  required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expericence;
