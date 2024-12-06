import React from "react";
import logoImage from "../images/img/logo.png";
import { ReactComponent as MenuIcon } from "../images/icons/menu.svg";

export default function Navbar() {
  return (
    <nav className="navbar flex items-center fixed top-4 justify-center">
      <div className=" bg-red-400 ">
        <div className="navbar-start flex items-center">
          <div className="dropdown desktop:hidden laptop:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <MenuIcon />.
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <a className="btn btn-info my-3 text-white px-10 hover:bg-[#02577b] md:w-25">
                FREE TRIAL
              </a>
            </ul>
          </div>
          <div className="logo w-[45rem]">
            <button>
              <img src={logoImage} alt="logo" />
            </button>
          </div>
        </div>
        <div className="navbar-center items-center flex gap-10">
          <ul className="flex gap-10 px-1">
            <a href="/" className=" text-[#42B4EE]">
              Home
            </a>
            <a className="cursor-pointer text-white hover:text-[#42B4EE]">
              Services
            </a>
            <a className="cursor-pointer text-white hover:text-[#42B4EE]">
              Pricing
            </a>
            <a className="cursor-pointer text-white hover:text-[#42B4EE]">
              Testimonials
            </a>
            <a className="cursor-pointer text-white hover:text-[#42B4EE]">
              Blog
            </a>
          </ul>
          <a className="btn btn-info text-white px-10 hover:bg-[#02577b]">
            FREE TRIAL
          </a>
        </div>
      </div>
    </nav>
  );
}
