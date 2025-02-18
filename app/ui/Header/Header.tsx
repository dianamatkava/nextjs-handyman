"use client"
import Logo from "@/app/ui/Components/Logo";
import {useState} from "react";
import Link from "next/link";

export default function Header () {

  return (
    <div className="w-full h-fit justify-between inline-flex">
      <Logo/>
      <div className="justify-start items-center gap-12 flex">
        <div className="hidden justify-start items-center gap-4 sm:flex">
          <Link href={'/#about'} className="p-3 text-white text-sm font-normal font-['Plus Jakarta Sans']">About</Link>
          <Link href={'/#services'} className="p-3 text-white text-sm font-normal font-['Plus Jakarta Sans']">Services</Link>
          <Link href={'/#contact'} className="p-3 text-white text-sm font-normal font-['Plus Jakarta Sans']">Contact</Link>
        </div>
        <Link href={'/#contact'}
          className="w-[110px] h-[40px] rounded-[40px] justify-center items-center gap-2.5 flex bg-white cursor-pointer">
          <div className="w-fit text-black text-sm font-medium font-['Plus Jakarta Sans']">Contact</div>
        </Link>

      </div>

      {/*{isNavOpen && (*/}
      {/*  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex lg:hidden w-2/3">*/}
      {/*  <Footer/>*/}
      {/*    /!* Clickable area outside the sidebar that closes it *!/*/}
      {/*    <div*/}
      {/*      className="flex-1"*/}
      {/*      onClick={() => setIsNavOpen(false)}*/}
      {/*    ></div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}
