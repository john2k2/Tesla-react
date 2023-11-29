import React from "react";
import { Cardauto } from "../Cardauto";

const MenuocultoVehicles = () => {
  return (
    <div className="mx-auto  flex h-full w-[1170px] items-end justify-center gap-10 py-7">
      <div className=" mx-auto flex w-[900px] flex-wrap  ">
        <Cardauto model="model s" img="/asset 0.avif" />
        <Cardauto model="model s" img="/asset 1.avif" />
        <Cardauto model="model s" img="/asset 2.avif" />
        <Cardauto model="model s" img="/asset 3.avif" />
        <Cardauto model="model s" img="/asset 4.png" />
      </div>
      <div className="border-1 z-30 h-[81%] w-[1px] border bg-black/10"></div>
      <div className="  flex h-[81%] flex-col justify-center ">
        <ul className="flex w-[150px] flex-col items-start gap-2 text-sm font-bold capitalize text-black/60">
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
