import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import styles from './header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = (route: string) => {
    if (router.pathname === route) {
      setMenuOpen(false);
    } else {
      setMenuOpen(!menuOpen);
    }
  };

  // Effect to handle body overflow when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (

    <>
      <div className={`${styles.header} fixed top-0 z-50 px-4 py-3 flex w-full items-center justify-between`}>
        <Link href="/">
          <Image width="200" height="200" className="w-52 md:w-60 lg:w-72" src="/assets/images/headers/logo.svg" alt="logo" />
        </Link>

        <ul className="hidden lg:flex items-center justify-center">
          <li className="text-center mx-5">
            <Link className=" text-white" href="/">Home</Link>
          </li>
          <li className="text-center mx-5">
            <Link className=" text-white" href="/about">About Us</Link>
          </li>
          <li className="text-center mx-5">
            <Link className=" text-white" href="/how-we-work">How We Work</Link>
          </li>
          <li className="text-center mx-5">
            <Link className=" text-white" href="/products">Our Products</Link>
          </li>
          <li className="text-center mx-5">
            <Link className=" text-white" href="/contact">Contact Us</Link>
          </li>
          <li className={`${styles.phoneNumber}`}>
            <Link href="tel:9775600370" className=" flex items-center">
              <Image src="/assets/images/headers/phone-icon.svg" width="100" height="100" className="w-6 h-6" alt="" /> +91 9775600370
            </Link>
          </li>
        </ul>


        <div className="w-6 h-6 lg:w-10 lg:hidden flex items-center justify-center cursor-pointer" onClick={() => toggleMenu("")}>
          <div className={`${styles.hamburger} ${menuOpen ? `${styles.cross}` : ''}`}>
            <span></span>
          </div>
        </div>

      </div>
      <div
        className={`overlay-menu z-30 fixed inset-0 flex justify-center bg-[#0631a7] transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out `}
      >
        <ul className="mt-[100px]">
          <li className="text-center my-2">
            <Link className="text-white hover:text-[#6cd4da]" href="/" onClick={() => toggleMenu("/")}>Home</Link>
          </li>
          <li className="text-center my-2">
            <Link className="text-white hover:text-[#6cd4da]" href="/about" onClick={() => toggleMenu("/about")}>About Us</Link>
          </li>
          <li className="text-center my-2">
            <Link className="text-white hover:text-[#6cd4da]" href="/how-we-work" onClick={() => toggleMenu("/how-we-work")}>How We Work</Link>
          </li>
          <li className="text-center my-2">
            <Link className="text-white hover:text-[#6cd4da]" href="/products" onClick={() => toggleMenu("/products")}>Our Products</Link>
          </li>
          <li className="text-center my-2">
            <Link className="text-white hover:text-[#6cd4da]" href="/contact" onClick={() => toggleMenu("/contact")}>Contact Us</Link>
          </li>
        </ul>
      </div>

    </>

  )
}