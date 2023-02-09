import React from "react";

const Introduction = () => {
  return (
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
        As a software engineer, I specialize in building and sometimes designing
        exceptional digital experiences. Currently, I am focused on creating
        accessible and human-centered products at&nbsp;
        <span className="text-green-300 hover:underline">CipherSavvy</span>. My
        expertise lies in using various programming languages and development
        frameworks to build high-quality software systems. I am committed to
        staying up-to-date with the latest developments in the software
        engineering field and constantly improving my skills. I enjoy working on
        challenging projects that allow me to use my problem-solving skills to
        create innovative solutions.
      </p>
    </section>
  );
};

export default Introduction;
