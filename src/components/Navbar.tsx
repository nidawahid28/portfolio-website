import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMenueOpen, setIsMenuOpen] =  useState(false)

  const toggleMenue = () => {
    setIsMenuOpen(!isMenueOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-medium'>Nida.</div>
          <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink'><a href='#hero'>Home</a></li>
            <li className='menuLink'><a href='#about'>About</a></li>
            <li className='menuLink'><a href='#projects'>Projects</a></li>
            <li className='menuLink'><a href='#skills'>Skills</a></li>
            <li className='menuLink'><a href='#contact'>Contact</a></li>
        </ul>
        <div className='md:hidden' onClick={toggleMenue}>
          {isMenueOpen ? <AiOutlineClose size={30} /> :
          <AiOutlineMenu size={30} />
          }
        </div>
      
        </div>

        {isMenueOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li>
            <a href='#hero' onClick={toggleMenue}>Home</a>
            </li>
            <li>
            <a href='#about' onClick={toggleMenue}>About</a>
            </li>
            <li>
            <a href='#projects' onClick={toggleMenue}>Projects</a>
            </li>
            <li>
            <a href='#skills' onClick={toggleMenue}>Skills</a>
            </li>
            <li>
            <a href='#contact' onClick={toggleMenue}>Contact</a>
            </li>
          </ul>
        )}
      
    </div>
  )
}

export default Navbar