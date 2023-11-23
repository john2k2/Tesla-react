import React from "react";
import { useState } from "react";

import Hero from "./Hero";

//icons
import Logo from "../icons/Logo";
import Idioma from "../icons/Idioma";
import Login from "../icons/Login";
import Iconopregunta from "../icons/Iconopregunta";

//menus

import MenuocultoEnergy from "./MenuocultoEnergy";
import MenuocultoVehicles from "./MenuocultoVehicles";
import MenuocultoCharging from "./MenuocultoCharging";
import MenuocultoDiscover from "./MenuocultoDiscover";
import MenuocultoShop from "./MenuocultoShop";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuEnergy, setMenuEnergy] = useState(false);
  const [menuCharging, setMenuCharging] = useState(false);
  const [menuDiscover, setMenuDiscover] = useState(false);
  const [menuShop, setMenuShop] = useState(false);

  const resetMenuStates = () => {
    if (menu) setMenu(false);
    if (menuEnergy) setMenuEnergy(false);
    if (menuCharging) setMenuCharging(false);
    if (menuDiscover) setMenuDiscover(false);
    if (menuShop) setMenuShop(false);
  };

  return (
    <>
      <header
        className={`
             grid  w-full h-20  items-center  fixed z-50 grid-cols-3 ${
               menu || menuEnergy || menuCharging || menuDiscover || menuShop
                 ? "text-black "
                 : "text-white"
             } `}
      >
        <div className="flex justify-start pl-10">
          <div>
            <Logo />
          </div>
        </div>
        <nav className="">
          <ul className="md:flex justify-center text-base font-semibold capitalize hidden ">
            <li>
              <a
                className="py-2 px-4 rounded-xl hover:backdrop-blur-xl transition-all  ease-in-out hover:bg-black/5 "
                onMouseEnter={() => {
                  resetMenuStates();
                  setMenu(true);
                }}
                href="#"
              >
                vehicles
              </a>
            </li>
            <li>
              <a
                className="py-2 px-4 rounded-xl hover:backdrop-blur-xl transition-all  ease-in-out hover:bg-black/5 "
                onMouseEnter={() => {
                  resetMenuStates();
                  setMenuEnergy(true);
                }}
                href="#"
              >
                energy
              </a>
            </li>
            <li>
              <a
                className="py-2 px-4 rounded-xl hover:backdrop-blur-xl transition-all  ease-in-out hover:bg-black/5 "
                onMouseEnter={() => {
                  resetMenuStates();
                  setMenuCharging(true);
                }}
                href="#"
              >
                charging
              </a>
            </li>
            <li>
              <a
                className="py-2 px-4 rounded-xl hover:backdrop-blur-xl transition-all  ease-in-out hover:bg-black/5 "
                onMouseEnter={() => {
                  resetMenuStates();
                  setMenuDiscover(true);
                }}
                href="#"
              >
                discover
              </a>
            </li>
            <li>
              <a
                className="py-2 px-4 hover:bg-black/5 rounded-xl hover:backdrop-blur-sm transition-all  ease-in-out"
                onMouseEnter={() => {
                  resetMenuStates();
                  setMenuShop(true);
                }}
                href="#"
              >
                shop
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="hidden md:flex justify-end gap-4 pr-10 ">
            <li>
              <a href="#">
                <Iconopregunta />
              </a>
            </li>
            <li>
              <a href="#">
                <Idioma />
              </a>
            </li>
            <li>
              <a href="#">
                <Login />
              </a>
            </li>
          </ul>
          <nav className="justify-end gap-4 pr-10 flex md:hidden  ">
            <a
              className="py-3 px-4 rounded-xl hover:backdrop-blur-xl transition-all  ease-in-out"
              href="#"
            >
              Menu
            </a>
          </nav>
        </nav>
      </header>
      <Hero
        menu={menu}
        setMenu={setMenu}
        setMenuEnergy={setMenuEnergy}
        menuEnergy={menuEnergy}
        menuCharging={menuCharging}
        setMenuCharging={setMenuCharging}
        menuDiscover={menuDiscover}
        setMenuDiscover={setMenuDiscover}
        menuShop={menuShop}
        setMenuShop={setMenuShop}
      />
      {
        <div
          className={`absolute top-0  w-full h-[50%] bg-white z-30 flex content-center ${
            menu || menuEnergy || menuCharging || menuDiscover || menuShop
              ? "transform translate-y-0 transition-all duration-[0.6s] animate-ease-in-out"
              : "transform -translate-y-full transition-all duration-[0.7s] "
          }`}
        >
          <div className="flex w-[1270px] mx-auto h-full animate-fade-out">
            {menu && <MenuocultoVehicles menu={menu} />}
            {menuEnergy && <MenuocultoEnergy menuEnergy={menuEnergy} />}
            {menuCharging && <MenuocultoCharging menuCharging={menuCharging} />}
            {menuDiscover && <MenuocultoDiscover menuDiscover={menuDiscover} />}
            {menuShop && <MenuocultoShop menuShop={menuShop} />}
          </div>
        </div>
      }
    </>
  );
};

export default Header;
