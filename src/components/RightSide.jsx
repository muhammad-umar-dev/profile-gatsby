import React from "react";

const RightSide = () => {
  return (
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
  );
};

export default RightSide;
