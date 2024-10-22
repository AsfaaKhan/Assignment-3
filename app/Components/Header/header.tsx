"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import logoPic from "../../public/logoPic.png"

const Navbar = () => {

  const [navbar,setNavbar]= useState(false)

  const handleNavbar =()=>{
    setNavbar(!navbar);
  }
 
  return (
    <div>

     {/*               NAVBAR                  */}
  
      <nav className="bg-gradient-to-t from-purple-950 to-slate-200 p-4 w-full z-10 top-0 fixed ">
       
        <div className="container mx-auto flex justify-between items-center ">

          {/*             LOGO                    */}
          <div className="text-white text-2xl ">
            <h1 >AK Travels</h1>
            <Image className="pl-4" src={logoPic} width={50} height={50}  alt="LOGO" / >
          </div>

          {/*             NAVBAR ITEMS                  */}
        <div className=" hidden md:flex space-x-4 justify-end">
          <Link className=" hover:text-white hover:underline text-xl" href="/">Home </Link>
          <Link className=" hover:text-white hover:underline text-xl" href="#about">About</Link>
          <Link className=" hover:text-white hover:underline text-xl" href="#places">Places</Link>
          <Link className=" hover:text-white hover:underline text-xl" href="#contact">Contact </Link>
          <Link className=" hover:text-white hover:underline text-xl" href="/"> </Link>
        </div>


        {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
        <div className="md:hidden text-white  cursor-pointer" onClick={handleNavbar} >
            {navbar ? "Close" : "Menu"}
        </div>
        </div>

        {navbar && (
          <div className="md:hidden bg-purple-950 p-4">
            <Link href="/" className="block text-white py-2 hover:text-purple-400 hover:underline" onClick={handleNavbar}>Home</Link>

            <Link href="#about" className="block text-white py-2 hover:text-purple-400 hover:underline" onClick={handleNavbar}>About</Link>

            <Link href="#places" className="block text-white py-2 hover:text-purple-400 hover:underline" onClick={handleNavbar}>Places</Link>

            <Link href="#contact" className="block text-white py-2 hover:text-purple-400 hover:underline" onClick={handleNavbar}>Contact</Link>
          </div>
        )}
      </nav>
    </div>

  )
}
export default Navbar