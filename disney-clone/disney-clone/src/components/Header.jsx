import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiPlus,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import { HiDotsVertical } from "react-icons/hi";

function Header() {
  const [toggleNavBar, setToggleNavbar] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      id:1
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
      id:2
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      id:3
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
      id:4
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      id:5
    },
    {
      name: "SERIES",
      icon: HiTv,
      id:6
    },
  ];
  return (
    <div
    
      className="flex items-center justify-between p-5 py-3"
      style={{ backgroundColor: "black" }}
    >
      <div className="flex gap-8 items-center" >
        <div className="gap-4 hidden md:flex">
          <img src={logo} className="w-[120px] xs:w-{100px] object-cover" key={logo}/>
          {menu.map((item, icon) => (
            <HeaderItem name={item.name} Icon={item.icon} key={menu.id}/>
          ))}
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <img src={logo} className="w-[100px] sm:w-{200px] object-cover " />
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div
            className="md:hidden"
            onClick={() => setToggleNavbar(!toggleNavBar)}
          >
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggleNavBar ? (
              <div className="absolute mt-3 bg-[#181818] border-[1px] border-gray-700 px-4 py-3">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNVkBPcFtHQ53cFPrqE7Oo9PQb-kG-wzq43JEAa6jibcL4NSb_SK7bY7UrSnj-DLEJFM&usqp=CAU"
          className="rounded-full w-[50px]"
        />
      </div>
    </div>
  );
}

export default Header;
