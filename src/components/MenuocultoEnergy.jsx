import React from "react";
import { Cardauto } from "./Cardauto";

const MenuocultoEnergy = () => {
  return (
    <div className="flex w-[1270px] mx-auto justify-center place-items-center py-7 gap-10">
      <div className=" flex mx-auto flex-wrap w-[900px] justify-center ">
        <Cardauto model="model s" img="/asset 0.avif" />
        <Cardauto model="model s" img="/asset 1.avif" />
        <Cardauto model="model s" img="/asset 2.avif" />
        <Cardauto model="model s" img="/asset 3.avif" />
      </div>
      <div className="border-1 bg-black/10 border z-30 w-[1px] h-[81%]"></div>
      <div className="  h-[81%] flex flex-col justify-center  ">
        <ul className="flex gap-2 flex-col items-start font-bold capitalize text-black/60 w-[250px] text-sm">
          <li>
            <a href="">schedule a consutation</a>
          </li>
          <li>
            <a href="">why solar</a>
          </li>
          <li>
            <a href="">incetives</a>
          </li>
          <li>
            <a href="">support</a>
          </li>
          <li>
            <a href="">partner with tesla</a>
          </li>
          <li>
            <a href="">commercial</a>
          </li>
          <li>
            <a href="">utilities</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuocultoEnergy;
