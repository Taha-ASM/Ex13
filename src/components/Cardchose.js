import React from "react";

export default function Cardchose({svg, title, text, buttonSvg}) {
  return (
    <div>
      <div className="card w-96 bg-white shadow-2xl shadow-black">
        <div className="forsvg">
          {svg}
        </div>
        <div className="card-body items-center gap-6 text-center">
          <h2 className="card-title text-black">{title}</h2>
          <p className="text-[#676b72]">{text}</p>
          <div className="card-actions">
            <button className="px-5 py-5 border-2 border-[#42B4EE] rounded-3xl">{buttonSvg}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
