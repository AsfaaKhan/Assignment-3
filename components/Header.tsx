"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { CgMenu } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";
const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () => {
    setNavbar(!navbar);
  }

  return (
    <div>

      {/*               NAVBAR                  */}

      <nav className="bg-gradient-to-t from-purple-950 to-slate-200 p-4 w-full z-10 top-0 fixed ">

        <div className="container mx-auto flex justify-between items-center h-12">
          {/*             LOGO                    */}
          <div className="text-white text-2xl  flex gap-2 ">
            <Image className="pl-4"
             src={'/New folder/logoPic.png'} width={50} height={50} alt="LOGO" />
            <h1 >AK Travels</h1>
          </div>

          {/*             NAVBAR ITEMS                  */}
          <div className=" hidden md:flex space-x-4 justify-end ">
            <Link className=" hover:text-white hover:underline text-xl" href="/">Home </Link>
            <Link className=" hover:text-white hover:underline text-xl" href="/aboutPage">About</Link>
            <Link className=" hover:text-white hover:underline text-xl" href="/visitingPlaces">Places</Link>
            <Link className=" hover:text-white hover:underline text-xl" href="/contactPage">Contact </Link>
            
          </div>


          {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
          <div className="md:hidden text-white  cursor-pointer" onClick={handleNavbar} >
            {navbar ?<CgMenuMotion size={40} /> : <CgMenu  size={40} /> }
          </div>
        </div>

        {navbar && (
          <div className="md:hidden bg-transparent p-4  flex flex-col  justify-center items-center gap-3  ">
            <Link href="/" className="block text-black text-bold text-[20px]  py-2 hover:text-white hover:underline" onClick={handleNavbar}>Home</Link>

            <Link href="/aboutPage" className="block text-black  text-bold text-[20px]  py-2 hover:text-white hover:underline" onClick={handleNavbar}>About</Link>

            <Link href="/visitingPlaces" className="block text-black  text-bold text-[20px]  py-2 hover:text-white hover:underline" onClick={handleNavbar}>Places</Link>

            <Link href="/contactPage" className="block text-black  text-bold text-[20px]  py-2 hover:text-white hover:underline" onClick={handleNavbar}>Contact</Link>
          </div>
        )}
      </nav>
    </div>

  )
}
export default Navbar