import React from "react";

export default function Info({ Icon, title, text }) {
  return (
    <div>
      <div className="flex items-baseline">
        <div>{<Icon />}</div>
        <h1 className="text-2xl text-black mt-5 ml-3 mb-2">{title}</h1>
      </div>
      <p className="text-sm w-80 text-[#7c8284]">{text}</p>
    </div>
  );
}
