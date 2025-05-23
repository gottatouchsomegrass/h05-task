"use client"

import { useState } from 'react'
import Script from 'next/script'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

       <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="beforeInteractive"
      />
      <Script
        noModule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="beforeInteractive"
      />


      {/* Top promo bar */}
      <div className="bg-black text-white text-center text-xs p-3">
        Sign up and get 20% off on your first order.
        <a href="#" className="underline ml-2">Sign Up Now</a>
      <ion-icon name="close-outline" className="absolute top-[8] right-8 text-white cursor-pointer text-2xl hidden md:flex"></ion-icon>

      </div>


      <header className="relative top-0 bg-white md:mx-14 md:mr-22">
        <div className="flex items-center justify-between px-4 py-2 h-[86px]">

          {/* Mobile menu button */}
          <span
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => setIsOpen(isOpen => !isOpen)}
          >
            <ion-icon name={isOpen ? "close-outline" : "menu-outline"} />
          </span>

          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-tight md:ml-8 mr-3">
            <a href='#'>SHOP.CO</a>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className='ml-4'>Shop</span>
              <ion-icon name="chevron-down-outline" className="text-sm" />
            </div>
            <span className="cursor-pointer">On Sale</span>
            <span className="cursor-pointer">New Arrivals</span>
            <span className="cursor-pointer">Brands</span>
          </nav>

          {/* Desktop search bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md mx-6">
            <ion-icon name="search-outline" className="text-gray-400 text-lg mr-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full"
            />
          </div>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-6 text-xl text-black">
            <ion-icon name="cart-outline" className="cursor-pointer" />
            <ion-icon name="person-outline" className="cursor-pointer" />
          </div>

          {/* Mobile icons (search, cart, profile) */}
          <div className="flex items-center space-x-4 text-xl md:hidden">
            <ion-icon name="search-outline" className="cursor-pointer" />
            <ion-icon name="cart-outline" className="cursor-pointer" />
            <ion-icon name="person-outline" className="cursor-pointer" />
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`
            md:hidden
            transition-all duration-300
            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
            bg-white
          `}
        >
          <nav className="flex flex-col p-4 space-y-4 text-gray-700">
            <div className="flex items-center justify-between cursor-pointer">
              <span>Shop</span>
              <ion-icon name="chevron-down-outline" />
            </div>
            <span className="cursor-pointer">On Sale</span>
            <span className="cursor-pointer">New Arrivals</span>
            <span className="cursor-pointer">Brands</span>
          </nav>
        </div>
      </header>
    </>
  )
}
