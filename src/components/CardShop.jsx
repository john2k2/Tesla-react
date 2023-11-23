import React from "react";

export const CardShop = ({ text, img }) => {
  return (
    <>
      <nav className="w-full h-full ">
        <a
          className=" text-black/40 hover:text-black/70 transition-colors font-medium"
          href="#"
        >
          <img className="w-64" src={img} alt="" />
          <h2 className="font-bold text-center capitalize py-6 text-black/60 text-xl">
            {text}
          </h2>
        </a>
      </nav>
    </>
  );
};
