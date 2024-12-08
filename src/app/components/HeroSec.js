'use client'
import React from "react";
import Image from "next/image";
import ja from "../asset/aj.png";
import { AiOutlineDownload } from "react-icons/ai";
import {Typewriter, typewriter} from "react-simple-typewriter";

const HeroSec = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-10 ">
      <div className="col-span-5 place-self-center mt-8">
          <div className="rounded-full w-[350px] h-[400px] static mt-14">
            <Image src={ja} alt="jafar" className="w-full  rounded-full" width={350} height={350} />
          </div>
        </div>
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-4xl lg:text-5xl sm:text-5xl font-bold mb-4 mt-7 text-teal-950">
            <span className="">Hello,</span> I am Jafar Ahmad
          </h1>
          <h1 className="text-3xl text-left p-4 font-semibold text-teal-950">
            A {""}
          <span className="text-red-500">
            <Typewriter
            words={[
                "FrontEnd Developer",
                "Data Analyst",
                "Graphic Desihgner",
                "Public Speaker",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
          </span>
          </h1>
          
          <div className="">
            <button className="px-6 py-3 rounded-full mr-4 bg-teal-950 hover:bg-teal-800 text-white w-full sm:w-fit">Hire Me</button>
            <button className="px-6 py-3 rounded-full mr-4 bg-teal-950 text-white mt-4 hover:bg-teal-800 w-full sm:w-fit">Download CV</button>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default HeroSec;
