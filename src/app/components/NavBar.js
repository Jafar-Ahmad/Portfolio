"use client"
import React from "react";
import Image from "next/image";
import logo from "../asset/BackgroundEraser_20240808_151057303.png";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={logo}
            className="cursor-pointer text-white"
            width="225px"
            height="90"
            alt="logo"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="../Components/About">
              <li className="mr-7 uppercase hover:border-b text-xl font-semibold">
                About
              </li>
            </Link>
            <Link href="../components/Contact">
              <li className="mr-7 uppercase hover:border-b text-xl font-semibold">
                Contact
              </li>
            </Link>
            <Link href="../components/Skills">
              <li className="mr-7 uppercase hover:border-b text-xl font-semibold">
                Skills
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-full bg-teal-950 p-10 ease-in duration-500 text-white"
            : "hidden "
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4 font-serif font-semibold ">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </Link>

            <Link href="../components/About">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                About
              </li>
            </Link>

            <Link href="../components/Contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact
              </li>
            </Link>

            <Link href="../components/Skills">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Skills
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
        <Link href="/">
          <Image
            src={logo}
            className="cursor-pointer pt-6 "
            width="225px"
            height="90"
            alt="logo"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
