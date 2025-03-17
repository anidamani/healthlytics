"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Button from './components/Button';
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { RxCross2 } from "react-icons/rx";

const navItem = "text-[#161B24] text-[16px] font-medium"
const navItem2 = "text-white text-[16px] font-medium"

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='sticky top-0  bg-[#f4f4f4] z-50'>
      <div className='flex items-center justify-between py-[33px] px-[24px] xl:px-[48px]'>
        <Link href="/">
          <Image src="/logo.svg" width={238} height={42} alt="log" />
        </Link>

        {/* Desktop Nav */}
        <div className="lg:flex hidden items-center justify-between gap-[25px]">
          <Link href="/"><h1 className={navItem}>Home</h1></Link>
          <Link href="/services"><h1 className={navItem}>Services</h1></Link>
          <Link href="/products"><h1 className={navItem}>Products</h1></Link>
          <Link href="/about-us"><h1 className={navItem}>About Us</h1></Link>
          <Link href="/blogs"><h1 className={navItem}>Blogs</h1></Link>
          <Link href="/contact"><h1 className={navItem}>Contact</h1></Link>
        </div>

        {/* Contact & Mobile Menu */}
        <div className='flex items-center gap-[32px]'>
          <Link href="/contact">
            <div className='lg:block hidden'><Button text='Contact Us' /></div>
          </Link>
          <div onClick={() => setOpen(true)} className='lg:hidden cursor-pointer'>
            <IoMdMenu size={24} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='fixed top-0 right-0 bg-black z-50 w-1/2 h-[60vh]'>
          <RxCross2 onClick={() => setOpen(false)} size={30} className='text-white absolute right-4 top-3 cursor-pointer' />
          <div className="flex flex-col px-[25px] text-white pt-[60px] gap-[25px]">
            <Link href="/" onClick={() => setOpen(false)}><h1 className={navItem2}>Home</h1></Link>
            <Link href="/services" onClick={() => setOpen(false)}><h1 className={navItem2}>Services</h1></Link>
            <Link href="/products" onClick={() => setOpen(false)}><h1 className={navItem2}>Products / Case Studies</h1></Link>
            <Link href="/about-us" onClick={() => setOpen(false)}><h1 className={navItem2}>About Us</h1></Link>
            <Link href="/blogs" onClick={() => setOpen(false)}><h1 className={navItem2}>Blogs</h1></Link>
            <Link href="/contact" onClick={() => setOpen(false)}><h1 className={navItem2}>Contact</h1></Link>
            <Link href="/contact" onClick={() => setOpen(false)}><Button text='Contact Us' /></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
