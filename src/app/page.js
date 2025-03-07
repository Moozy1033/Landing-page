"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [isOpen, setIsOpen] = useState('')

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div className='fixed top-0 left-0 w-full backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg'>
        <nav className='md:py-3 py-1 flex justify-between px-10 items-center'>
      <div>
        <h4 className="text-white font-bold text-2xl">AY</h4>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMenu}><img className='pt-2' src='images/ham.svg' width={33}></img></button>
        
      </div>
      <ul className="hidden md:flex list-none gap-5 font-bold text-base  flex-column">
          <li ><a href='#home' className="text-white hover:text-gray-300">Home</a></li>
          <li ><a href='#home' className="text-white hover:text-gray-300">About us</a></li>
          <li ><a href='#home' className="text-white hover:text-gray-300">Service</a></li>
          <li ><a href='#home' className="text-white hover:text-gray-300">FAQ</a></li>
        </ul>
        <div className='hidden md:block'>
          <button className='text-white border-2 py-0.5 border-white-600 rounded-4xl px-4 font-medium'>Sign In</button>
        </div>
        {/* Mobile Menu - Visible Only When isOpen is True */}
      {isOpen && (
        <ul className="absolute top-14 right-10 w-50 bg-black/50 rounded-lg text-black flex flex-col items-center gap-3 p-4 md:hidden">
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#about" className="text-white">About us</a></li>
          <li><a href="#services" className="text-white">Service</a></li>
          <li><a href="#faq" className="text-white">FAQ</a></li>
          <div className=''>
          <button className='text-white border-2 py-0.5 border-white-600 rounded-4xl px-4 font-medium'>Sign In</button>
        </div>
        </ul>
      )}
      </nav>
      </div>
      <section className="bg-cover bg-center h-screen" style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,0.5)), url(/images/sec.jpg)', backgroundRepeat:'no-repeat'}}>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-black/70"></div> */}
        <div className='pt-50'>
          <p className='text-white text-2xl pt-18 leading-[24px] text-center pb-2'>WE ARE LEADER IN</p>
          <p className='text-white md:text-7xl text-4xl md:leading-[90px] leading-14 font-[600] text-center'>Creative & Innovative <br /> Digital Solution</p>
        </div>
      </section>
    </div>
  )
}

export default page