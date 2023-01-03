import React from "react";

export function NavBar() {
  return (
      <div className="ease-in-out duration-300 flex flex-col justify-center w-4/5 pt-20 mx-10 rounded-md fixed z-20 top-9 right-0 p-5 bg-slate-700 ">
        <p className=" pb-6 text-gray-200 font-bold">
          Features
        </p>
        <p className=" pb-6 text-gray-200 font-bold">
          Pricing
        </p>
        <p className=" pb-6 text-gray-200 font-bold">
          Resources
        </p>
  <hr className="text"/>
        <div>
          <button className="   text-gray-200 pb-6 px-5 py-1 font-bold">
            Login
          </button>
        </div>

        <div>
          <button className="bg-cyan-400 rounded-full text-slate-100 font-bold  px-5 py-1">
            SignUp
          </button>
        </div>
    </div>
  );
}
