import React from "react";
import Footer from "./Footer";
import BotonBlanco from "./BotonBlanco";
import BotonNegro from "./BotonNegro";
import { useState } from "react";

export const Hero = ({
  menu,
  setMenu,
  setMenuEnergy,
  menuEnergy,
  menuCharging,
  setMenuCharging,
  menuDiscover,
  setMenuDiscover,
  menuShop,
  setMenuShop,
  model,
  subtitle,
  botton1,
  botton2,
  span,
  footertext,
  footerlink,
  link,
  video,
  imagen,
  alt,
}) => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden text-center ">
        <section
          {...(setMenuEnergy ||
          setMenu ||
          setMenuCharging ||
          setMenuDiscover ||
          setMenuShop
            ? { onMouseEnter: resetMenuStates }
            : {})}
          className={`relative z-20 flex h-full flex-col justify-center  ${
            menu ? "bg-black/60 blur-sm transition-all " : ""
          }`}
        >
          <div className="flex h-[95%] flex-col justify-between ">
            <div className="flex flex-col items-center gap-y-3 pt-32">
              <h1 className="animate-slide-down text-5xl font-semibold text-white">
                {model}
              </h1>
              <h4 className="flex animate-slide-down2 flex-col text-xl font-semibold text-white  ">
                {subtitle}
                <span className="text-base font-normal">{span}</span>
                <a href="#">{link}</a>
              </h4>
            </div>
            <div className="z-40 mx-auto w-[90%]  text-sm text-white md:w-full xl:w-full">
              <div className="flex flex-col items-center  justify-center  gap-5 pb-5 md:flex-row  ">
                {botton1 || botton2 ? (
                  <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
                    {botton1 ? <BotonBlanco botton1={botton1} /> : ""}
                    {botton2 ? <BotonNegro botton2={botton2} /> : ""}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p>
                {footertext}
                <a className=" underline" href="#">
                  {footerlink}
                </a>
              </p>
            </div>
            {model === "Accessories" ? <Footer /> : ""}
          </div>
        </section>
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 z-0 h-full w-full object-cover"
          src={video}
        ></video>
        <img
          className="absolute top-0 z-0 h-full w-full object-cover"
          src={imagen}
          alt={alt}
        />
      </section>
    </>
  );
};

export default Hero;
