import React from "react";
import { CardShop } from "./CardShop";

const MenuocultoShop = () => {
  return (
    <div className="flex w-[1270px] mx-auto justify-center place-items-center py-7 gap-10">
      <div className=" flex mx-auto justify-center  ">
        <CardShop text="charging" img="/asset 12.avif" />
        <CardShop text="vehicle accessories" img="/asset 13.avif" />
        <CardShop text="apparel" img="/asset 14.avif" />
        <CardShop text="lifestyle" img="/asset 15.avif" />
      </div>
    </div>
  );
};

export default MenuocultoShop;
