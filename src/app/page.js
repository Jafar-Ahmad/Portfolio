"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import pic from "/src/app/asset/jafar.jpg";
import {} from "@material-tailwind/react";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"


export default function page() {
  return (
    <body className="bg-gray-100 ">
      <main className="">
        <div className="flex justify-between items-center p-3 bg-white shadow-2xl text-xl capitalize">
        
          <ul className="flex p-3 capitalize justify-between">
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white p-3 m-1">
              <Link href="/">
                <li>Home</li>
              </Link>
            </button>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white p-3 m-1">
              <Link href="/">
                <li>About</li>
              </Link>
            </button>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white p-3 m-1">
              <Link href="/">
                <li>Contact</li>
              </Link>
            </button>
          </ul>
        </div>

        <div className="pl-4 justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ">
          <div className="flex justify-center items-center">
            <Image src={pic} alt="mmm" className="rounded-full overflow-hidden" />
          </div>
          <div className="justify-center items-center">
            <h4 className="font-semibold text-2xl">Hello,</h4>
            <h2 className="font-semibold text-3xl">I'm Jafar Ahmad</h2>
            <h1 className="font-medium text-xl text-red-500 capitalize">
              A {""}
              <span>
                <Typewriter
                  words={[
                    "FullStack Develper",
                    "Data Analyzer",
                    "Graphic Designer",
                    "Public Speaker!",
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
            <p className="font-serif font-medium text-justify text-xl p-3">
              Im a passionate fullstack web developer based in Yobe State,
              Nigeria with 2+ years of expeience in web development using Next
              Js as frontEnd framework and tailwind css, while Django as BackEnd
              framework.
            </p>
            <br />
            <div className="justify-center items-center gab-2">
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-2 py-2 px-6 text-white mr-3">
                Contact
              </button>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-2 py-2 px-6 text-white mr-3">
                Download CV
              </button>
            </div>
          </div>
        </div>
       
      </main>
      <footer className="flex bg-gradient-to-r from-indigo-500 via-purple-500 shadow-2xl">
        <div className="flex">
          <h1 className="font-semibold text-2xl">
            <AiFillFacebook />
            <AiFillLinkedin />
            
          </h1>
          </div>
        </footer>
    </body>
  );
}
