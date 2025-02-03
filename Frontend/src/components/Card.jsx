import React from "react";
import { Link } from "react-router";

const Card = ({ id, semester, imgSrc, desc, btnText = "Get", linkAddress }) => {
  return (
    <Link to={linkAddress}>
      <div
        id={id}
        className=" text-white px-3 py-5 flex flex-col justify-center gap-4 items-center"
      >
        <div className="bg-[#171717] rounded-lg">
          <div className="notes-image">
            <img src={imgSrc} alt="notes icon" className="rounded-t-lg" />
          </div>
          <div className="notes-body px-4 py-6">
            <h2 className="text-xl">{semester}</h2>
            <p className="text-sm text-[#24CFA6]">{desc}</p>
          </div>
        </div>
        <div className="w-full">
          <button className="px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full">
            {btnText}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
