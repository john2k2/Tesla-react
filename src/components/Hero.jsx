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
                Model Y
              </h1>
              <h4 className="animate-slide-down2 text-xl font-semibold text-white ">
                Lease starting at $399/mo*
              </h4>
            </div>
            <div className="mx-auto flex flex-col">
              <div className="mx-auto flex flex-col items-center gap-5 md:flex md:flex-row md:justify-center">
                <a
                  className="
                           animate-fade-in rounded-md bg-gray-800/80 px-32 py-2 text-sm font-semibold capitalize text-white md:px-20 md:text-base
                            "
                  href="#"
                >
                  Order Now
                </a>
                <a
                  className="animate-fade-in rounded-md bg-white/60 px-32 py-2 text-sm font-semibold capitalize text-black md:px-20 md:text-base
                            "
                  href="#"
                >
                  Demo Drive
                </a>
              </div>

              <div className="z-40 mx-auto w-[90%]  pt-5 text-sm text-white md:text-base xl:w-full">
                <p>
                  *Excludes taxes and fees with price subject to change.
                  Available in select states.
                  <a className="px-1 underline" href="#">
                    See Details
                  </a>
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
