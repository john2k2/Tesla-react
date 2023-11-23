import React from "react";

export const Cardauto = ({ model, img }) => {
  return (
    <>
      <nav className="w-[210px] h-full flex flex-col justify-center items-center">
        <img src={img} alt="" />
        <h2 className="font-bold capitalize text-black">{model}</h2>
        <span className="flex gap-4 capitalize ">
          <a
            className="underline text-black/40 hover:text-black/70 transition-colors font-medium"
            href="#"
          >
            learn
          </a>
          <a
            className="underline text-black/40 hover:text-black/70 transition-colors font-medium"
            href="#"
          >
            order
          </a>
        </span>
      </nav>
    </>
  );
};
