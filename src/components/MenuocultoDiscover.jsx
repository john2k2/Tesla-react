import React from "react";

const MenuocultoDiscover = () => {
  return (
    <div className="w-[70%] mx-auto flex  justify-around items-baseline">
      <nav className="  h-[81%] flex flex-col justify-center ">
        <h2 className="text-lg py-4 font-bold text-black">Resources</h2>
        <ul className="flex gap-4 flex-col items-start font-bold capitalize text-black/60 w-[150px] text-sm">
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
      <nav className="  h-[81%] flex flex-col justify-center ">
        <h2 className="text-lg py-4 font-bold text-black">Location Services</h2>
        <ul className="flex gap-4 flex-col items-start font-bold capitalize text-black/60 w-[150px] text-sm">
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
      <nav className="  h-[81%] flex flex-col justify-center ">
        <h2 className="text-lg py-4 font-bold text-black">Company</h2>
        <ul className="flex gap-4 flex-col items-start font-bold capitalize text-black/60 w-[150px] text-sm">
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
