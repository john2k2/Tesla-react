import React from "react";
import { useState } from "react";

//icons
import Logo from "../icons/Logo";
import Idioma from "../icons/Idioma";
import Login from "../icons/Login";
import Iconopregunta from "../icons/Iconopregunta";

//menus

import MenuocultoEnergy from "./MenuOculto/MenuocultoEnergy";
import MenuocultoCharging from "./MenuOculto/MenuocultoCharging";
import MenuocultoDiscover from "./MenuOculto/MenuocultoDiscover";
import MenuocultoShop from "./MenuOculto/MenuocultoShop";
import MenuocultoVehicles from "./MenuOculto/MenuocultoVehicles";

const Header = ({ menuMobile, headerColor }) => {
  const [menu, setMenu] = useState(false);
  const [menuEnergy, setMenuEnergy] = useState(false);
  const [menuCharging, setMenuCharging] = useState(false);
  const [menuDiscover, setMenuDiscover] = useState(false);
  const [menuShop, setMenuShop] = useState(false);
  const [menumobile, setMenuMobile] = useState(false);

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
        className={`absolute z-50 grid  h-20  w-full grid-cols-2  items-center xl:grid-cols-3 ${
          menu || menuEnergy || menuCharging || menuDiscover || menuShop
            ? "text-black"
            : headerColor
        }`}
      >
        <div className="flex justify-start pl-10">
          <div>{menuMobile ? "" : <Logo />}</div>
        </div>
        <nav className="hidden xl:block ">
          <ul className="hidden justify-center text-base font-semibold capitalize md:flex ">
            <li>
              <a
                className="ease-in-outhover:bg-black/5 rounded-xl px-4 py-2 transition-all hover:bg-black/5 hover:backdrop-blur-xl "
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
                className="ease-in-outhover:bg-black/5 rounded-xl px-4 py-2 transition-all hover:bg-black/5 hover:backdrop-blur-xl "
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
              className="backdrop-blur-xxl z-20 flex  rounded-xl bg-black/10 px-5 py-2 text-sm font-semibold transition-all ease-in-out"
              onClick={() => {
                setMenuMobile(!menuMobile);
              }}
              href="#"
            >
              Menu
            </a>
          </nav>
        </nav>
      </header>
      {
        <div
          className={`absolute z-30 hidden w-full content-center items-center bg-white md:flex ${
            menu || menuEnergy || menuCharging || menuDiscover || menuShop
              ? "animate-ease-in-out h-[50%] translate-y-0 transform transition-all duration-[0.6s]"
              : "h-0 -translate-y-full transform transition-all duration-[0.7s]"
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
