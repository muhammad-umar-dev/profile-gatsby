import React from "react";

const LeftSide = () => {
  return (
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
  );
};

export default LeftSide;
