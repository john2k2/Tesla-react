import React from "react";

const MenuocultoDiscover = () => {
  return (
    <div className="mx-auto flex w-[70%]  items-baseline justify-around">
      <nav className="  flex h-[81%] flex-col justify-center ">
        <h2 className="py-4 text-lg font-bold text-black">Resources</h2>
        <ul className="flex w-[150px] flex-col items-start gap-4 text-sm font-bold capitalize text-black/60">
          <li>
            <a href="">demo drive</a>
          </li>
          <li>
            <a href="">Insurance</a>
          </li>
          <li>
            <a href="">Video Guides</a>
          </li>
          <li>
            <a href="">Customer Stories</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
        </ul>
      </nav>
      <nav className="  flex h-[81%] flex-col justify-center ">
        <h2 className="py-4 text-lg font-bold text-black">Location Services</h2>
        <ul className="flex w-[150px] flex-col items-start gap-4 text-sm font-bold capitalize text-black/60">
          <li>
            <a href="">Find Us</a>
          </li>
          <li>
            <a href="">Trip Planner</a>
          </li>
          <li>
            <a href="">Find a Collision Center</a>
          </li>
          <li>
            <a href="">Find a Certified Installerr</a>
          </li>
        </ul>
      </nav>
      <nav className="  flex h-[81%] flex-col justify-center ">
        <h2 className="py-4 text-lg font-bold text-black">Company</h2>
        <ul className="flex w-[150px] flex-col items-start gap-4 text-sm font-bold capitalize text-black/60">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuocultoDiscover;
