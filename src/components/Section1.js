import React from "react";
import sectionImage from "../images/img/section1.png";
import { info } from "../data/data";
import Info from "./Info";

export default function Section1() {
  return (
    <section className="bg-white">
      <div className="container flex items-center justify-center py-52">
        <div className="w-1/2">
          <img src={sectionImage} alt="header" />
        </div>
        <div className="w-1/2">
          <h1 className="text-6xl text-black mb-10">
            It's helpful for operating <br /> system
          </h1>
          <div>
            {info.map((item) => (
              <Info {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
