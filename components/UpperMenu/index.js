"use client";
import React, { useState } from "react";
import Header from "@/components/UpperMenu/header";
import Test from "../Test.js";
import Outer from "../../static/tempp.js";
import Bottom from "../Bottom/index.js";
function page() {
  const [click, setClick] = useState(false);
  return (
    <>
      <Header click={click} setClick={setClick} />
      {click && (
        <>
          <div className="flex justify-center">
            <button className="py-2.5 px-9 my-2 text-white bg-[#5CB571]  bg-brand-green-dark border-1 rounded-full border-transparent transition-all duration-100 shadow-one">
              Open Demat Account
            </button>
          </div>
          {Object.keys(Outer).map((key, index) => (
            <Test key={index} fields={Outer[key]} level={0} />
          ))}
          <Bottom />
        </>
      )}
    </>
  );
}

export default page;
