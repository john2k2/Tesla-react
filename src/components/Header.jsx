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
             fixed  z-50 grid  h-20  w-full grid-cols-2 items-center xl:grid-cols-3    ${
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
        <nav className="hidden xl:block">
          <ul className="hidden justify-center text-base font-semibold capitalize md:flex ">
            <li>
              <a
                className="rounded-xl px-4 py-2 transition-all ease-in-out  hover:bg-black/5 hover:backdrop-blur-xl "
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
                className="rounded-xl px-4 py-2 transition-all ease-in-out  hover:bg-black/5 hover:backdrop-blur-xl "
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
                className="rounded-xl px-4 py-2 transition-all ease-in-out  hover:bg-black/5 hover:backdrop-blur-xl "
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
                className="rounded-xl px-4 py-2 transition-all ease-in-out  hover:bg-black/5 hover:backdrop-blur-xl "
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
                className="rounded-xl px-4 py-2 transition-all ease-in-out hover:bg-black/5  hover:backdrop-blur-sm"
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
          <ul className="hidden justify-end gap-4 pr-10 xl:flex">
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
          <nav className="col-span-1 grid w-full justify-end  gap-4 pr-10 xl:hidden">
            <a
              className="backdrop-blur-xxl flex w-full rounded-xl bg-black/10 px-5 py-2 text-sm font-semibold transition-all ease-in-out"
              href="#"
            >
              Menu
            </a>
          </nav>
        </nav>
      </header>
      {
        <div
          className={`absolute top-0 z-30 flex h-[50%] w-full content-center items-center bg-white ${
            menu || menuEnergy || menuCharging || menuDiscover || menuShop
              ? "animate-ease-in-out translate-y-0 transform transition-all duration-[0.6s]"
              : "-translate-y-full transform transition-all duration-[0.7s] "
          }`}
          onMouseLeave={
            setMenu ||
            setMenuEnergy ||
            setMenuCharging ||
            setMenuDiscover ||
            setMenuShop
              ? () => {
                  resetMenuStates();
                }
              : {}
          }
        >
          <div className="mx-auto flex h-full w-[1270px] animate-fade-out">
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
