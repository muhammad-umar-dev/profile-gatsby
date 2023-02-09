import React from "react";

const Contact = () => {
  return (
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
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="p-4"></div>
        <button className="p-3 ml-3 font-mono text-base font-normal text-green-300 rounded border-2 border-green hover:bg-slate-300">
          Say Hello
        </button>
      </div>
    </section>
  );
};

export default Contact;
