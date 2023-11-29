import React from "react";

const Menuoculto = () => {
  return (
    <>
      <div
        className={`absolute left-0 top-0 z-30 flex h-[50%] w-full content-center ${
          menuCharging
            ? "animate-ease-in-out translate-y-0 transform transition-all duration-[0.6s]"
            : "-translate-y-full transform transition-all duration-[0.7s] "
        }`}
      ></div>
    </>
  );
};

export default Menuoculto;
