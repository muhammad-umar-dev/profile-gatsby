import * as React from "react";
import { useState } from "react";

import "../styles/global.css";
import ProfilePicture from "../images/profilePicture.jpg";
import ProjectPicture from "../images/plural-clone.webp";
import CV from "../assets/CV.pdf";

const IndexPage = () => {
  const [cipherSavvy, setCipherSavvy] = useState(true);
  const [iconTechnologies, setIconTechnologies] = useState(false);
  const [iparagons, setIparagons] = useState(false);
  const [service, setService] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuButton = () => {
    // setMobileMenu(true);
    setMobileMenu(!mobileMenu);
  };
  const mobileList = () => {
    console.log("Mobile List");
  };
  const tabDisplay = (value) => {
    console.log(value);
    switch (value) {
      case "cipherSavvy":
        setCipherSavvy(true);
        setIconTechnologies(false);
        setIparagons(false);
        setService(false);
        break;

      case "iconTechnologies":
        setCipherSavvy(false);
        setIconTechnologies(true);
        setIparagons(false);
        setService(false);
        break;
      case "iParagons":
        setCipherSavvy(false);
        setIconTechnologies(false);
        setIparagons(true);
        setService(false);
        break;
      case "service":
        setCipherSavvy(false);
        setIconTechnologies(false);
        setIparagons(false);
        setService(true);
        break;
      default:
        setCipherSavvy(false);
        setIconTechnologies(true);
        setIparagons(false);
        setService(false);
    }
  };

  return (
    <div className="bg-slate-900 w-full ">
      <nav className="flex justify-between w-full h-24 bg-slate-900 shadow z-30 relative px-14 py-3 items-center">
        <a href="/">
          <span className="text-green-300 font-sans font-black tracking-wide border-x-greentint">
            <span className="text-white">muhammad</span>-
            <span className="text-slate-400">umar</span>-
            <span className="text-slate-500">dev</span>
          </span>
        </a>

        <div className="lg:flex lg:flex-row hidden">
          <a
            className="p-3 font-mono text-sm text-slate-300 hover:text-green-300"
            href="#about"
            // href="/"
          >
            <span className="text-green-300">01.</span> About
          </a>
          <a
            className="p-3 font-mono text-sm text-slate-300 hover:text-green-300"
            // href="#experience"
            href="#experience"
            // href="/"
          >
            <span className="text-green-300">02.</span> Experience
          </a>
          <a
            className="p-3 font-mono text-sm text-slate-300 hover:text-green-300"
            href="#work"
          >
            <span className="text-green-300">03.</span> Work
          </a>
          <a
            className="p-3 font-mono text-sm text-slate-300 hover:text-green-300"
            href="#contact"
            // href="/"
          >
            <span className="text-green-300">04.</span> Contact
          </a>

          <a
            className="p-3 ml-3 font-mono text-sm justify-center items-center text-green-300 rounded-lg border-2 border-green hover:bg-darkslate"
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <button onClick={mobileMenuButton} className={`lg:hidden flex z-50`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-green-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </nav>
      {/* <!-- Mobile Nav bar --> */}
      <nav
        className={`lg:hidden bg-slate-900 w-[75vw] h-[100vh] z-20 mt-[65px] sticky top-0 right-0 bottom-0 p-10  items-center justify-center ${
          mobileMenu ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col text-center p-10 w-full h-[100vh] justify-center">
          <a
            className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
            href="#about"
            onClick={mobileList}
          >
            <span className="text-green-300 items-center">
              01.
              <br />
            </span>
            <span className="justify-center"> About</span>
          </a>
          <a
            className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
            href="#experience"
            onClick={mobileList}
          >
            <span className="text-green-300">
              02.
              <br />
            </span>{" "}
            Experience
          </a>
          <a
            className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
            href="#work"
            onClick={mobileList}
          >
            <span className="text-green-300">
              03.
              <br />
            </span>{" "}
            Work
          </a>
          <a
            className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
            href="#contact"
            onClick={mobileList}
          >
            <span className="text-green-300">
              04.
              <br />
            </span>{" "}
            Contact
          </a>
          <a
            href={CV}
            className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-3 mt-4 font-mono text-base text-green-300 rounded-lg border-2 border-green hover:bg-darkslate text-center">
              Resume
            </button>
          </a>
        </div>
      </nav>
      <div className="main flex justify-between w-full">
        {/* <!-- Left Side --> */}
        <section className="leftSide w-[10%] lg:flex hidden">
          <div className="flex flex-col items-center bottom-0 fixed">
            <a
              href="https://github.com/muhammad-umar-dev"
              target="_blank"
              rel="noreferrer"
              className="p-4 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github text-slate-300 w-6 hover:text-green-300 hover:-translate-y-2 delay-100"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-umar-dev/"
              target="_blank"
              rel="noreferrer"
              className="p-4 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin text-slate-300 w-6 hover:text-green-300 hover:-translate-y-2 delay-100"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <div className="p-4"></div>
            <span className="w-24">
              <hr className="px-4 mt-4 justify-center text-slate-300 rotate-90 w-24" />
            </span>
          </div>
        </section>
        {/* <!-- Main Container --> */}
        <div className="container lg:px-10 px-4">
          {/* <!-- introduction --> */}
          <section className="">
            <div className="p-8"></div>
            <h5 className="text-green-300 text-2xl font-sans font-bold">
              Hi, my name is
            </h5>
            <div className="p-2"></div>
            <h1 className="text-white md:text-7xl text-4xl font-sans font-bold">
              Muhammad Umar.
            </h1>
            <div className="p-2"></div>
            <h1 className="text-slate-300 md:text-7xl text-4xl font-sans font-bold">
              I build things for the web.
            </h1>
            <div className="p-6"></div>
            <p className="text-lg font-semibold text-slate-300 font-sans max-w-[540px]">
              As a software engineer, I specialize in building and sometimes
              designing exceptional digital experiences. Currently, I am focused
              on creating accessible and human-centered products at&nbsp;
              <span className="text-green-300 hover:underline">
                CipherSavvy
              </span>
              . My expertise lies in using various programming languages and
              development frameworks to build high-quality software systems. I
              am committed to staying up-to-date with the latest developments in
              the software engineering field and constantly improving my skills.
              I enjoy working on challenging projects that allow me to use my
              problem-solving skills to create innovative solutions.
            </p>
          </section>

          <div className="p-6"></div>
          <div className="p-6"></div>
          {/* <!-- About me --> */}
          <section id="about">
            <h1 className="text-slate-300 font-sans font-semibold text-2xl inline-flex items-center">
              <span className="text-green-300 font-mono font-light">
                01. &nbsp;{" "}
              </span>
              About Me &nbsp; &nbsp;
              <hr className="lg:w-52 w-12 border-slate-700" />
            </h1>

            <div className="p-4"></div>
            <div className="lg:w-full lg:flex block">
              <div className="lg:w-[60%] w-full block">
                <p className="text-lg font-medium text-slate-300 font-sans">
                  Hello! My name is Umar and I enjoy creating things that live
                  on the internet. My interest in web development, As a web
                  developer my responsible for creating and maintaining
                  websites. This involves working with clients to understand
                  their needs and developing a plan to meet those needs, using
                  programming languages such as HTML, CSS, JavaScript, ReactJS
                  and NodeJS to create the website's, and testing the website to
                  ensure it is functioning properly.
                </p>
                <div className="p-2"></div>
                <div className="p-2"></div>
                <div className="p-2"></div>

                <h2 className="text-lg font-medium text-slate-300 font-sans">
                  Here are a few technologies I’ve been working with recently:
                </h2>
                <div className="p-2"></div>
                <div className="flex w-full">
                  <div className="flex flex-col lg:w-[40%] w-1/2">
                    <div className="text-base font-normal text-slate-300 font-sans">
                      <span className="text-green-300">▹</span> HTML
                    </div>
                    <div className="text-base font-normal text-slate-300 font-sans">
                      <span className="text-green-300">▹</span> CSS
                    </div>
                    <div className="text-base font-normal text-slate-300 font-sans">
                      <span className="text-green-300">▹</span> TailwindCSS
                    </div>
                    <div className="text-base font-normal text-slate-300 font-sans">
                      <span className="text-green-300">▹</span> JavaScript
                    </div>
                  </div>

                  <div className="flex flex-col lg:w-[40%] w-1/2">
                    <div className="text-base font-normal text-slate-300 font-sans">
                      <span className="text-green-300">▹</span> React JS
                    </div>
                    <div className="text-base font-normal text-slate-300 font-sans">
                      <span className="text-green-300">▹</span> NodeJS
                    </div>
                    <div className="text-base font-normal text-slate-300 font-sans">
                      <span className="text-green-300">▹</span> WordPress
                    </div>
                    <div className="text-base font-normal text-slate-300 font-sans">
                      <span className="text-green-300">▹</span>Photoshop
                    </div>
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
                  alt=""
                />
              </div>
            </div>
          </section>

          <div className="p-6"></div>
          <div className="p-6"></div>
          <div className="p-6"></div>
          <div className="p-6"></div>
          {/* <!-- Experience --> */}
          <section id="experience" className="md:px-0 px-[10%]">
            <h1 className="text-slate-300 font-sans font-semibold text-2xl inline-flex items-center">
              <span className="text-green-300 font-mono font-light">
                02. &nbsp;{" "}
              </span>
              Where I've Worked &nbsp; &nbsp;
              <hr className="lg:w-52 w-12 border-slate-700" />
            </h1>
            <div className="p-6"></div>
            <div className="flex md:flex-row flex-col">
              <div className="md:w-[25%] md:flex-col md:overflow-x-hidden w-full flex flex-row overflow-x-scroll">
                <button
                  value="cipherSavvy"
                  onClick={() => tabDisplay("cipherSavvy")}
                  className={`w-[150px] h-12 px-6 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-left  hover:border-green-100 hover:text-green-100 hover:bg-slate-800 ${
                    cipherSavvy
                      ? " text-green-300 border-[#64ffda]"
                      : "text-slate-300 border-indigo-500"
                  } `}
                >
                  Cipher Savvy
                </button>
                <button
                  value="iconTechnologies"
                  onClick={() => tabDisplay("iconTechnologies")}
                  className={`w-[150px] h-12 px-6 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-left  hover:border-green-100 hover:text-green-100 hover:bg-slate-800 ${
                    iconTechnologies
                      ? " text-green-300 border-[#64ffda]"
                      : "text-slate-300 border-indigo-500"
                  } `}
                >
                  IconTechnologies
                </button>
                <button
                  value="iParagons"
                  onClick={() => tabDisplay("iParagons")}
                  className={`w-[150px] h-12 px-6 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-left  hover:border-green-100 hover:text-green-100 hover:bg-slate-800 ${
                    iparagons
                      ? " text-green-300 border-[#64ffda]"
                      : "text-slate-300 border-indigo-500"
                  } `}
                >
                  iParagons
                </button>
                <button
                  value="service"
                  onClick={() => tabDisplay("service")}
                  className={`w-[150px] h-12 px-6 md:border-l-2 md:border-b-0 border-b-2 font-sans text-base text-left  hover:border-green-100 hover:text-green-100 hover:bg-slate-800 ${
                    service
                      ? " text-green-300 border-[#64ffda]"
                      : "text-slate-300 border-indigo-500"
                  } `}
                >
                  Service
                </button>
              </div>
              <div className="py-6"></div>
              <div className="md:w-[70%] w-full">
                <div
                  id="cipherSavvy"
                  className={`${cipherSavvy ? "block" : "hidden"}`}
                >
                  <h1 className="text-white text-xl font-sans font-bold">
                    FrontEnd Web Developer&nbsp;
                    <span className="text-green-300">CipherSavvy</span>
                  </h1>
                  <p className="font-mono text-slate-400">Aug 2022 - Present</p>
                  <div className="p-2"></div>
                  <div className="flex flex-col">
                    <p className="text-slate-300 font-sans font-medium">
                      I worked on React.js, Gatsby, Tailwind CSS, Bootstrap,
                      JavaScript core, and HTML.
                    </p>
                    <p className="text-slate-300 font-sans font-medium">
                      My responsibilities included:
                    </p>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Write modern, performant, maintainable code for a
                        diverse array of client and internal projects.
                      </p>
                    </div>
                    <div className="p-2"></div>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Communicate with multi-disciplinary teams of engineers,
                        designers, producers, and clients on a daily basis
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="iconTechnologies"
                  className={`${iconTechnologies ? "block" : "hidden"}`}
                >
                  <h1 className="text-white text-xl font-sans font-bold">
                    Head of Operations&nbsp;
                    <span className="text-green-300">IconTechnologies</span>
                  </h1>
                  <p className="font-mono text-slate-400">
                    July 2020 - July 2022
                  </p>
                  <div className="p-2"></div>
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Handling day to day Operation in and outside office
                      </p>
                    </div>
                    <div className="p-2"></div>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Communicate with client teams to understand designers
                        and Conducting effective Market Surveys regarding.
                      </p>
                    </div>
                    <div className="p-2"></div>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Develop new SOP’s for the production house for seamless
                        operations and deployee product intime.
                      </p>
                    </div>
                    <div className="p-2"></div>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Used my pervious techs savy expertise for generating
                        online presence.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="iParagons"
                  className={`${iparagons ? "block" : "hidden"}`}
                >
                  <h1 className="text-white text-xl font-sans font-bold">
                    Android Developer(Intern)&nbsp;
                    <span className="text-green-300">iParagons</span>
                  </h1>
                  <p className="font-mono text-slate-400">
                    April 2019 - October-2019
                  </p>
                  <div className="p-2"></div>
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Participated in Design and developing and its workflow
                        using Activities.
                      </p>
                    </div>
                    <div className="p-2"></div>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Worked on Designing, Bug-fixing and Maintenance of
                        Application.
                      </p>
                    </div>
                    <div className="p-2"></div>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Key Resources for layouts and UI work utilizing xml,
                        Views, Web-Views, ListView, Menu Item, Activities,
                        Fragments, Async-Task and handlers etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="service" className={`${service ? "block" : "hidden"}`}>
                  <h1 className="text-white text-xl font-sans font-bold">
                    IT Technical Support (Intern)&nbsp;
                    <span className="text-green-300">
                      Servis Industries limited
                    </span>
                  </h1>
                  <p className="font-mono text-slate-400">
                    Nov 2018 - Jan 2019
                  </p>
                  <div className="p-2"></div>
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Installation & configuration of a company’s computer
                        hardware operating systems and applications.
                      </p>
                    </div>
                    <div className="p-2"></div>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
                      <p className="text-slate-300 font-sans">
                        Communicate with staff or clients to help him for set up
                        systems or resolve issues.
                      </p>
                    </div>
                    <div className="flex">
                      <span className="text-green-300">▹&nbsp;&nbsp;</span>
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
          </section>

          <div className="p-6"></div>
          <div className="p-6"></div>
          <div className="p-6"></div>
          <div className="p-6"></div>
          {/* <!-- Work --> */}
          <section id="work">
            <h1 className="text-slate-300 font-sans font-semibold text-2xl inline-flex items-center">
              <span className="text-green-300 font-mono font-light">
                03. &nbsp;{" "}
              </span>
              Some Things I’ve Built &nbsp; &nbsp;
              <hr className="lg:w-52 w-12 border-slate-700" />
            </h1>
            <div className="p-6"></div>

            <div className="flex float-right text-right">
              <div>
                <p className="text-green-300 font-mono text-base">
                  Featured Project
                </p>
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

          <div className="p-6"></div>
          <div className="p-6"></div>
          {/* <!-- Get in Touch --> */}
          <section id="contact">
            <div className="flex flex-col justify-center items-center">
              <span className="text-green-300 font-mono font-light">
                04. What’s Next?
              </span>
              <h1 className="text-white font-sans font-bold text-5xl inline-flex items-center">
                Get In Touch
              </h1>
              <div className="p-2"></div>
              <p className="text-slate-300 font-sans font-normal text-xl text-center line-clamp-3">
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
              </p>
              <div className="p-4"></div>
              <button className="p-3 ml-3 font-mono text-base font-normal text-green-300 rounded border-2 border-green hover:bg-darkslate">
                Say Hello
              </button>
            </div>
          </section>

          <div className="p-6"></div>
          <div className="p-6"></div>
        </div>
        {/* <!-- Right side --> */}
        <section className="rightSide w-[10%] lg:flex hidden">
          {/* <!-- mt-[200px] --> */}
          <div className="flex flex-col bottom-0 items-center fixed">
            <span className="flex place-items-start text-slate-300 origin-top-left rotate-90 translate-x-16 hover:text-green-300 hover:-translate-y-2 delay-50">
              umar.osamafarooq@gmail.com
            </span>
            <div className="p-4"></div>
            <hr className="px-4 mt-56 w-24 justify-center relative text-slate-300 rotate-90 -translate-x-[3.8rem]" />
          </div>
        </section>
      </div>

      <div className="p-6"></div>
      <div className="p-6"></div>
      <div className="p-6"></div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
