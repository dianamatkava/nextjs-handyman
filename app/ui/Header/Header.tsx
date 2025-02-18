"use client"
import Logo from "@/app/ui/Components/Logo";
import {useState} from "react";

export default function Header () {

  return (
    <div className="w-full h-fit justify-between inline-flex">
      <Logo/>
      <div className="justify-start items-center gap-12 flex">
        <div className="hidden justify-start items-center gap-8 sm:flex">
          <div className="text-white text-sm font-normal font-['Plus Jakarta Sans']">About</div>
          <div className="text-white text-sm font-normal font-['Plus Jakarta Sans']">Services</div>
          <div className="text-white text-sm font-normal font-['Plus Jakarta Sans']">Contact</div>
        </div>
        <div
          className="w-[110px] h-[40px] rounded-[40px] justify-center items-center gap-2.5 flex bg-white">
          <div className="w-fit text-black text-sm font-medium font-['Plus Jakarta Sans']">Contact</div>
        </div>
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
