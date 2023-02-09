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
      <h1 className="text-gray-300 md:text-7xl text-4xl font-sans font-bold">
        I build things for the web.
      </h1>
      <div className="p-6"></div>
      <p className="text-lg md:font-semibold font-normal text-gray-300 font-sans max-w-[80%]">
        As a frontend developer, I specialize in the design and functionality of
        the client side of websites. I am passionate about creating beautiful
        and intuitive interfaces that deliver a seamless user experience.
      </p>
    </section>
  );
};

export default Introduction;
