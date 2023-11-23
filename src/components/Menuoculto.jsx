import React from "react";

const Menuoculto = () => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-[50%] bg-white z-30 flex content-center ${
          menuCharging
            ? "transform translate-y-0 transition-all duration-[0.6s] animate-ease-in-out"
            : "transform -translate-y-full transition-all duration-[0.7s] "
        }`}
      ></div>
    </>
  );
};

export default Menuoculto;
