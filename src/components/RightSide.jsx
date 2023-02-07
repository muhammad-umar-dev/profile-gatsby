import React from "react";

const RightSide = () => {
  return (
    <div className="w-[10%] lg:flex hidden">
      <div className="flex flex-col items-center bottom-0 fixed">
        <a className="flex  text-slate-400 origin-bottom-center rotate-90 hover:text-green-300  delay-50">
          umar.osamafarooq@gmail.com
        </a>

        {/* <div className="p-4"></div> */}
        <hr className="px-4 mt-44 w-24 justify-center relative text-slate-400 rotate-90 -translate-400-x-[3.8rem]" />
      </div>
    </div>
  );
};

export default RightSide;
