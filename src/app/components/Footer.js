import React from 'react'
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineTwitter,
  } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=''>
     <div className="flex flex-row justify-around place-content-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
        <p className='text-center pt-8 text-teal-950 font-semibold font-serif text-lg'>All Right Reserved! @2024 </p>
    </footer>
  )
}

export default Footer