import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants'
import { Menu, X } from "lucide-react";
import '../index.css'

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false)

  return (
    <nav className="sticky top-0 z-50 py-3 background-blur-lg bg-white border-b border-neutral-700/800">
        <div className='container px-4 mx-auto relative text-sm'>
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={logo} alt="Logo" />
                    <span className='text-xl tracking-tight'>CodeCraft Solutions</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, i) => (
                        <li key={i}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#" className='text-stone-50 bg-gradient-to-r from-blue-500 to-[#243c5a] py-2 px-3 border rounded-md'>Create an account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={() => setMobileNavbar(!mobileNavbar)}>
                        {mobileNavbar ? <X/> : <Menu/>}
                    </button>
                </div>
                {mobileNavbar && (
                    <div className="fixed right-0 top-16 z-20 bg-slate-100 w-full p-6 flex flex-col justify-start items-start lg:hidden">
                        <ul>
                            {navItems.map((item, i) => (
                                <li key={i} className='py-2'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
                            <a href="#" className='text-stone-50 bg-gradient-to-r from-blue-500 to-[#243c5a] py-2 px-3 border rounded-md'>Create an account</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar