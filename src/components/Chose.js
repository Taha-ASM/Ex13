import React from "react";
import { datachose } from "../data/datachose";
import Cardchose from "./Cardchose";

export default function Chose() {
  return (
    <div className="bg-white">
      <div className="container">
        <h1 className="text-black text-6xl text-center">
          We Provides best Feature <br /> for customar
        </h1>
        <div className="flex items-center justify-center py-20 gap-10">
          {datachose.map((item) => (
            <Cardchose {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
