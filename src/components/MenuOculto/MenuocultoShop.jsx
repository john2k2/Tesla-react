import React from "react";
import { CardShop } from "../CardShop";

const MenuocultoShop = () => {
  return (
    <div className="mx-auto flex w-[1270px] place-items-center justify-center gap-10 py-7">
      <div className=" mx-auto flex justify-center  ">
        <CardShop text="charging" img="/asset 12.avif" />
        <CardShop text="vehicle accessories" img="/asset 13.avif" />
        <CardShop text="apparel" img="/asset 14.avif" />
        <CardShop text="lifestyle" img="/asset 15.avif" />
      </div>
    </div>
  );
};

export default MenuocultoShop;
