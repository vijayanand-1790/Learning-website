import React, { useState } from 'react'
import Logo from '../assets/Logo1.jpg'
import { GrLanguage } from "react-icons/gr";
import { HiOutlineXMark } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
import { Link, Element } from 'react-scroll';




const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const NavItems = [
    {link:"Overview", path:"home"},
    {link:"Features", path:"features"},
    {link:"About", path:"about"},
    {link:"Pricing", path:"pricing"}
  ]

  return (
    <>
    <nav className='bg-[#010851] md:px-10 p-4 max-w-screen-3xl mx-auto text-white fixed top-0 left-0 right-0 border-b'>
      <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
        <div className='flex space-x-14 items-center'>
          <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
           <img className='w-10 inline-block items-center' src={Logo} alt="" /><span>ABC</span>
          </a>
          <ul className='md:flex space-x-10 hidden'>
            {
              NavItems.map(({link,path})=>
                <Link spy={true} smooth={true} offset={-100} key={link} to={path} activeClass='active' className='block hover:bg-blue-900 px-4 py-2 rounded cursor-pointer'>{link}</Link>
              )
            }
          </ul>
        </div>
        <div className='space-x-14 md:flex hidden items-center'>
          <a href="/" className='hidden lg:flex px-4 py-2 hover:bg-blue-900 rounded items-center'><GrLanguage className='mr-2'/><span>Language</span></a>
          <button className='bg-blue-500 rounded px-4 py-1
          cursor-pointer text-white
          transition-all duration-300 hover:bg-green-400'>Sign Up</button>
        </div>

        {/* menu btn only display on mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-200 cursor-pointer'>
          {
            isMenuOpen ? <HiOutlineXMark className='w-7 h-7 text-white'/> : <CiMenuBurger className='w-7 h-7 text-white'/>
          }
         </button>
        </div>
      </div>
    </nav>

    {/* NavItems for mobile devices */}
    <div className={`gradientBg md:hidden space-y-9 pt-25 pl-5 text-white font-bold pb-10 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
      {
              NavItems.map(({link,path})=>
                <Link key={link} to={path} spy={true} smooth={true} offset={-100} activeClass='active' className='block text-lg hover:text-blue-600 cursor-pointer' onClick={toggleMenu}>{link}</Link>
              )
            }
    </div>
    </>
  )
}

export default NavBar