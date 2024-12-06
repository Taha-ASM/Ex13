import React from "react";

export default function Pay() {
  return (
    <div className="bg-white p-96">
      <h1 className="text-6xl text-black text-center">
        Choose your best pricing plan
      </h1>
      <div className="flex items-center justify-center py-10">
        <p className="text-2xl pr-4 text-black">Added for Monthly</p>
        <input type="checkbox" className="toggle toggle-info" checked />
        <p className="text-2xl pl-4 text-black">Yearly</p>
      </div>
    </div>
  );
}
