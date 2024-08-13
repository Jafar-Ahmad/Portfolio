"use client";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function page() {
  return (
    <body className="bg-gray-100 ">
      <main className="">
        <div className="flex justify-between items-center p-3 bg-white shadow-lg text-xl capitalize">
          <h1>Jafar</h1>
          <ul className="flex p-3 capitalize justify-between">
            <button className="bg-green-500 rounded-md text-white p-3 m-2"><Link href="/">
              <li>Home</li>
            </Link></button>
            <button className="bg-green-500 rounded-md text-white p-3 m-2"><Link href="/">
              <li>About</li>
            </Link></button>
            <button className="bg-green-500 rounded-md text-white p-3 m-2"><Link href="/">
              <li>Contact</li>
            </Link></button>
          </ul>
        </div>

        <div className="justify-center items-center flex-col p-4">
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
          <p className="font-serif font-medium text-justify text-xl p-3 text-blue-950">
            To make your document look professionally produced, Word provides
            header, footer, cover page, and text box designs that complement
            each other. For example, you can add a matching cover page, header,
            and sidebar. Click Insert and then choose the elements you want from
            the different galleries.
          </p>
        </div>
      </main>
    </body>
  );
}
