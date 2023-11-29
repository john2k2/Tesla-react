import React from "react";

const Menuocultomobile = () => {
  return (
    <div
      className={` absolute left-0 top-0  z-30 flex h-screen w-full content-center items-center bg-white ${
        menuMobile
          ? "animate-ease-in-out translate-y-0 transform transition-all duration-[0.6s]"
          : "-translate-y-full transform transition-all duration-[0.7s] "
      }`}
    >
      <ol>
        <li>
          <a href="">vehicules</a>
        </li>
        <li>
          <a href="">energy</a>
        </li>
        <li>
          <a href="">chargin</a>
        </li>
        <li>
          <a href="">discover</a>
        </li>
        <li>
          <a href="">shop</a>
        </li>
        <li>
          <a href="">support</a>
        </li>
        <li>
          <a href="">idioma</a>
        </li>
        <li>
          <a href="">account</a>
        </li>
      </ol>
    </div>
  );
};

export default Menuocultomobile;
