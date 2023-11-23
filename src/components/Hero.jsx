import React from "react";

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
}) => {
  function resetMenuStates() {
    if (menu) setMenu(false);
    if (menuEnergy) setMenuEnergy(false);
    if (menuCharging) setMenuCharging(false);
    if (menuDiscover) setMenuDiscover(false);
    if (menuShop) setMenuShop(false);
  }

  return (
    <>
      <section className="h-screen w-full text-center relative overflow-hidden ">
        <section
          {...(setMenuEnergy ||
          setMenu ||
          setMenuCharging ||
          setMenuDiscover ||
          setMenuShop
            ? { onMouseEnter: resetMenuStates }
            : {})}
          className={`relative flex z-20 h-full flex-col justify-center  ${
            menu ? "bg-black/60 blur-sm transition-all " : ""
          }`}
        >
          <div className="flex flex-col justify-between h-[90%] ">
            <div className="flex flex-col items-center pt-32 gap-y-3">
              <h1 className="text-white text-5xl font-semibold animate-slide-down">
                Model Y
              </h1>
              <h4 className="text-white text-xl font-semibold animate-slide-down2 ">
                Lease starting at $399/mo*
              </h4>
            </div>
            <div className="flex flex-col justify-center w-[80%] mx-auto">
              <div className="flex flex-col gap-5 mx-auto md:justify-center items-center md:flex md:flex-row  ">
                <a
                  className="
                           md:px-20 px-40 py-2 bg-gray-800/80 text-white rounded-md font-semibold capitalize animate-fade-in text-sm md:text-base
                            "
                  href="#"
                >
                  Order Now
                </a>
                <a
                  className="px-40 py-2 bg-white/60 text-black rounded-md font-semibold capitalize animate-fade-in text-sm md:text-base md:px-20
                            "
                  href="#"
                >
                  Demo Drive
                </a>
              </div>

              <div>
                <p className="z-40 text-white text-sm pt-5">
                  *Excludes taxes and fees with price subject to change.
                  Available in select states.{" "}
                  <span className="underline">See Details</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 z-0 h-full w-full object-cover"
          src="/video.mp4"
        ></video>
      </section>
    </>
  );
};

export default Hero;
