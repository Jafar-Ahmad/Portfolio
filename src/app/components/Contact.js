import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-10">
      <div className="col-span-4 place-self-center items-center lg:mr-3">
        <h1 className="text-teal-950 text-center pb-2 text-3xl font-semibold font-sans">Let's Talk</h1>
        <p className="text-center font-serif text-lg pb-2">
          Have a question or want to hire me? I'm here to help. Feel free to
          reach out via social media handles or directly via email. Thank you!
        </p>
        <div className="flex justify-around mt-4 ">
          <AiOutlineGithub size={30} />
          <AiOutlineTwitter size={30} />
          <AiOutlineLinkedin size={30} />
          <AiOutlineInstagram size={30} />
        </div>
      </div>
      <div className="col-span-6 mt-10 lg:mt-0 lg:ml-80">
      <input type="text" placeholder="Your Full Name" className="rounded-lg p-3 w-full lg:w-1/2 text-teal-900 text-lg mb-4 border border-teal-900 lg:mr-2" />
      <input type="email" placeholder="Your Email" className="rounded-lg p-3 w-full lg:w-1/2 text-teal-900 text-lg border border-teal-900 mb-4 lg:mr-2" />
      <textarea placeholder="Message" className="rounded-lg p-3 w-full lg:w-1/2 text-teal-900 text-lg border border-teal-900 py-6 lg:mr-2" />
      <button className="bg-teal-950 rounded-xl p-2 w-full lg:w-1/2 mt-4 text-white border border-black py-4">Send a Message</button>
      </div>
    </div>
  );
};

export default Contact;
