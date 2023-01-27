import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../constants/navLinks";
import Logo from "../Assets/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(window.screen.width > 768);

  return (
    <header className="flex items-center justify-between flex-column-md flex-wrap bg-blue-500 px-8">
      <div className="max-[768px]:w-screen w-100 flex justify-between flex-row">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={Logo} alt="logo" />
        </div>
        <div className="block lg:hidden mt-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="max-[768px]:pb-6">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mb-2 ">
            <div className="text-sm flex lg:flex-grow flex-row-reverse">
              <div className="block text-white text-md font-semibold mr-4">
                Fr &nbsp;&nbsp;&nbsp;
                <span className="text-emerald-400">En</span>
              </div>
              <div className="block text-white text-md font-semibold mr-12">
                Points <span className="text-emerald-400">66,708</span>
              </div>
              <div className="block text-white text-md font-semibold mr-9">
                Welcome{" "}
                <span className="text-emerald-400">Mr. Chidi Mbulu</span>
              </div>
            </div>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div
              // className={`text-sm flex lg:flex-grow ${
              //   window.screen.width > 768 && "flex-row-reverse"
              // }`}
              className="text-sm flex lg:flex-grow flex-row-reverse-lg"
            >
              <div className="block">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.url}
                    className={`block mt-4 font-semibold text-white
                text-lg lg:inline-block lg:mt-0 hover:text-emerald-400 mr-4`}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
