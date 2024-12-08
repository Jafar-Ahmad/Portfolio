import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSec from './components/HeroSec';
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";



export default function page() {
  return (
    <main className="flex bg-white min-w-screen flex-col">
       <NavBar />
      <div className="container mx-auto px-12 py-12 bg-gray-100 min-w-full shadow-md">
        <HeroSec />
      </div>
      <div className="container mx-auto px-12 py-12 bg-gray-200 min-w-full shadow-xl">
        <About />
      </div>
      <div className="container mx-auto px-12 py-12 bg-gray-100 min-w-full shadow-md">
        <Services />
      </div>
      <div className="container mx-auto px-12 py-12 bg-gray-200 min-w-full shadow-2xl">
        <Contact />
      </div>
      <div className="container mx-auto px-12 py-12 bg-gray-300 min-w-full shadow-md">
        <Footer />
      </div>
          
    </main>
  );
}
