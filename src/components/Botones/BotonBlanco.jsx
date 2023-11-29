import React from "react";

export const BotonBlanco = ({ botton1 }) => {
  return (
    <>
      <div>
        <a
          className="
                 animate-fade-in rounded-md bg-[#f4f4f4]/75 px-32 py-2 text-sm font-semibold capitalize text-black md:px-20 md:text-base
                  "
          href="#"
        >
          {botton1}
        </a>
      </div>
    </>
  );
};

export default BotonBlanco;
