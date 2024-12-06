import React from "react";
import headerImage from "../images/img/header.png";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla nulla etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.";
const title = `Codext one of the best system in SAAS.`;
const buttonText = "Try A Live Demo";

export default function Header() {
  return (
    <header className="py-52 bg-gradient-to-b from-[#4e20a4] to-[#713bd0]">
      <div className=" container flex items-center justify-center">
        <div className="w-1/2">
          <h1 className="text-6xl text-white">{title}</h1>
          <p className="w-96 mt-6 text-[#d7c8ed]">{paragraph}</p>
          <button className="btn btn-info mt-6 text-white px-10 text-lg font-medium hover:bg-[#02577b] ease-in duration-300">
            {buttonText}
          </button>
        </div>
        <div className="w-1/2">
          <img src={headerImage} alt="header" />
        </div>
      </div>
    </header>
  );
}
