import React, { useState } from "react";

import CV from "../assets/CV.pdf";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuButton = () => {
    // setMobileMenu(true);
    setMobileMenu(!mobileMenu);
  };
  const mobileList = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <nav className="flex justify-between  w-full h-24 bg-slate-900 shadow z-30 fixed md:px-8 px-4 py-3 items-center">
        <a href="#">
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
            className="p-3 ml-3 font-mono text-sm justify-center items-center text-green-300 rounded-lg border-2 border-green hover:bg-slate-300"
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

      <nav
        className={`lg:hidden bg-slate-900 w-[75vw] h-[100vh] z-20 mt-[65px] sticky top-0 right-0 bottom-0 p-10  items-center justify-center ${
          mobileMenu ? "flex shadow-2xl" : "hidden"
        }`}
      >
        <div className="flex flex-col text-center p-10 w-full h-[100vh] ">
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
            <button className="px-3 mt-4 font-mono text-base text-green-300 rounded-lg border-2 border-green hover:bg-slate-300 text-center">
              Resume
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
