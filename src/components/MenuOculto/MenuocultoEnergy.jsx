import React from "react";
import { Cardauto } from "../Cardauto";

const MenuocultoEnergy = () => {
  return (
    <div className="mx-auto flex w-[1270px] place-items-center justify-center gap-10 py-7">
      <div className=" mx-auto flex w-[900px] flex-wrap justify-center ">
        <Cardauto model="model s" img="/asset 0.avif" />
        <Cardauto model="model s" img="/asset 1.avif" />
        <Cardauto model="model s" img="/asset 2.avif" />
        <Cardauto model="model s" img="/asset 3.avif" />
      </div>
      <div className="border-1 z-30 h-[81%] w-[1px] border bg-black/10"></div>
      <div className="  flex h-[81%] flex-col justify-center  ">
        <ul className="flex w-[250px] flex-col items-start gap-2 text-sm font-bold capitalize text-black/60">
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
