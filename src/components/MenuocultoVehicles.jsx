import React from "react";
import { Cardauto } from "./Cardauto";

const MenuocultoVehicles = () => {
  return (
    <div className="flex  h-full w-[1170px] mx-auto justify-center items-end py-7 gap-10">
      <div className=" flex mx-auto flex-wrap w-[900px]  ">
        <Cardauto model="model s" img="/asset 0.avif" />
        <Cardauto model="model s" img="/asset 1.avif" />
        <Cardauto model="model s" img="/asset 2.avif" />
        <Cardauto model="model s" img="/asset 3.avif" />
        <Cardauto model="model s" img="/asset 4.png" />
      </div>
      <div className="border-1 bg-black/10 border z-30 w-[1px] h-[81%]"></div>
      <div className="  h-[81%] flex flex-col justify-center ">
        <ul className="flex gap-2 flex-col items-start font-bold capitalize text-black/60 w-[150px] text-sm">
          <li>
            <a href="">inventory</a>
          </li>
          <li>
            <a href="">used cars</a>
          </li>
          <li>
            <a href="">demo drive</a>
          </li>
          <li>
            <a href="">trade-in</a>
          </li>
          <li>
            <a href="">help me choose</a>
          </li>
          <li>
            <a href="">compare</a>
          </li>
          <li>
            <a href="">fleet</a>
          </li>
          <li>
            <a href="">cybertruck</a>
          </li>
          <li>
            <a href="">semi</a>
          </li>
          <li>
            <a href="">roadster</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuocultoVehicles;
