import React from "react";
import { Cardauto } from "./Cardauto";

const MenuocultoCharging = () => {
  return (
    <div className="flex  h-full w-[1000px] mx-auto justify-center items-center py-7 gap-10">
      <div className=" flex mx-auto flex-wrap w-[900px] ">
        <Cardauto model="model s" img="/asset 0.avif" />
        <Cardauto model="model s" img="/asset 1.avif" />
        <Cardauto model="model s" img="/asset 2.avif" />
      </div>
      <div className="border-1 bg-black/10 border z-30 w-[1px] h-[70%]"></div>
      <div className="  h-[81%] flex flex-col justify-center ">
        <ul className="flex gap-4 flex-col items-start font-bold capitalize text-black/60 w-[150px] text-sm">
          <li>
            <a href="">charging calculator</a>
          </li>
          <li>
            <a href="">trip planner</a>
          </li>
          <li>
            <a href="">supercharger voting</a>
          </li>
          <li>
            <a href="">host a supercharger</a>
          </li>
          <li>
            <a href="">commercial charging</a>
          </li>
          <li>
            <a href="">host wall connectors</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuocultoCharging;
