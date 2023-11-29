import React from "react";
import { Cardauto } from "../Cardauto";

const MenuocultoCharging = () => {
  return (
    <div className="mx-auto  flex h-full w-[1000px] items-center justify-center gap-10 py-7">
      <div className=" mx-auto flex w-[900px] flex-wrap ">
        <Cardauto model="model s" img="/asset 0.avif" />
        <Cardauto model="model s" img="/asset 1.avif" />
        <Cardauto model="model s" img="/asset 2.avif" />
      </div>
      <div className="border-1 z-30 h-[70%] w-[1px] border bg-black/10"></div>
      <div className="  flex h-[81%] flex-col justify-center ">
        <ul className="flex w-[150px] flex-col items-start gap-4 text-sm font-bold capitalize text-black/60">
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
