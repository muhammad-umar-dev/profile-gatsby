import React, { useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisiable] = useState(false);

  console.log(isVisible);

  return (
    <>
      <nav className="flex justify-between w-full h-24 bg-slate-900 shadow-2xl z-30 relative px-14 py-3 items-center">
        <a href="/" aria-label="home">
          <label className="text-green-300 font-sans font-black tracking-wide border-x-green-300tint">
            <span className="text-white">muhammad</span>-
            <span className="text-slate-300">umar</span>-
            <span className="text-slate-300-500">dev</span>
          </label>
        </a>

        <div className="lg:flex lg:flex-row hidden">
          <a
            className="p-3 font-mono text-sm text-slate-300 hover:text-green-300"
            href="#about"
          >
            <label className="text-green-300">01.</label> About
          </a>
          <a
            className="p-3 font-mono text-sm text-slate-300 hover:text-green-300"
            href="#experience"
          >
            <label className="text-green-300">02.</label> Experience
          </a>
          <a
            className="p-3 font-mono text-sm text-slate-300 hover:text-green-300"
            href="#work"
          >
            <label className="text-green-300">03.</label> Work
          </a>
          <a
            className="p-3 font-mono text-sm text-slate-300 hover:text-green-300"
            href="#contact"
          >
            <label className="text-green-300">04.</label> Contact
          </a>

          <a
            className="p-3 ml-3 font-mono text-sm justify-center items-center text-green-300 rounded-lg border-2 border-green-300 hover:bg-darkslate"
            href="./ass/CV.pdf"
            target="_new"
          >
            Resume
          </a>
        </div>

        <button
          className="lg:hidden flex z-50"
          onClick={() => {
            setIsVisiable(!isVisible);
          }}
        >
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
      {isVisible ? (
        <nav
          className={`lg:hidden bg-slate-900 w-[75vw] h-[100vh] z-20 top-0 bottom-0 right-0 p-10 fixed items-center justify-center `}
        >
          <div className="flex flex-col text-center p-10 w-full h-[100vh] justify-center">
            <a
              className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
              href="#about"
              onClick="mobileList()"
            >
              <label className="text-green-300 items-center">
                01.
                <br />
              </label>
              <label className="justify-center"> About</label>
            </a>
            <a
              className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
              href="#experience"
              onClick="mobileList()"
            >
              <label className="text-green-300">
                02.
                <br />
              </label>{" "}
              Experience
            </a>
            <a
              className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
              href="#work"
              onClick="mobileList()"
            >
              <label className="text-green-300">
                03.
                <br />
              </label>{" "}
              Work
            </a>
            <a
              className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center"
              href="#contact"
              onClick="mobileList()"
            >
              <label className="text-green-300">
                04.
                <br />
              </label>{" "}
              Contact
            </a>
            <a className="p-3 font-mono text-base text-slate-300 hover:text-green-300 text-center">
              <button className="px-3 mt-4 font-mono text-base text-green-300 rounded-lg border-2 border-green hover:bg-darkslate text-center">
                Resume
              </button>
            </a>
          </div>
        </nav>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Nav;
