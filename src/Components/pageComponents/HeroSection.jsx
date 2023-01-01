import React from "react";
import { Action } from "./Action";

export function HeroSection() {
  return (
    <React.Fragment>
      <div className="phone:flex flex-col-reverse pt-20 px-10 text-center  laptop:flex-row laptop:px-20 items-center ">
        <div className="phone:w-full laptop:w-2/5 text-left">
          <h3 className="font-bold pb-5 phone:text-center phone:text-3xl laptop:text-left laptop:text-5xl ">
            More than just shorter Links
          </h3>
          <p className=" phone:text-center laptop:text-left" >
            Build your brands recognition and get detailed insight on how your
            links are performing
          </p>
          <div className="phone:text-center laptop:text-left phone:pb-10">
          <button className="mt-10 bg-cyan-400 rounded-full font-bold text-slate-100 px-5 py-2">
            Get Started
          </button>
          </div>
         
        </div>
        <div className="phone:w-full mb-30  laptop:w-4/5 ">
          <img 
            src="https://media.istockphoto.com/id/1140135959/vector/young-woman-reading-book-hand-drawn-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=dWgZKWVvzi9WQFqTI33q4pMLPydYCsdgljSua14clps="
            alt=""
          />
        </div>
      </div>
      <Action />
    </React.Fragment>
  );
}
