import { FiInstagram, FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from "next/link";
import SubscribeForm from "@/app/ui/Form/SubscribeForm";
import Logo from "@/app/ui/Components/Logo";
import { FaFacebookF } from "react-icons/fa";
import { servicesData } from "@/app/data/services";

export default function Footer() {
  return (
    <div className="self-stretch px-5 sm:px-20 bg-[#223037] flex-col justify-between items-start flex text-md">
      <div className="self-stretch grow shrink basis-0 pt-2.5 pb-10 border-b border-black justify-between items-start inline-flex flex-wrap">
        <div className="w-full justify-between items-start gap-6 sm:gap-12 flex flex-wrap">
          <div className="flex-col w-[350px] justify-start items-start gap-8 inline-flex">
            <div className="flex-col justify-start items-statext-[#828181] gap-4 inline-flex pt-5">
              <Logo />
              <div className="text-[#f5efe7] text-sm">
                Hi, I am Alex. I provide reliable handyman services focused on
                quality and precision. From fixing minor issues to handling
                larger maintenance projects, I ensure every job is completed
                with care and attention to detail.
              </div>
            </div>
            <div className="self-stretch h-[58px] justify-start items-center gap-5 inline-flex">
              <div className="inline-flex justify-center items-center gap-4">
                <a
                  href="https://www.instagram.com/amesc_group"
                  className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]"
                >
                  <FiInstagram width={24} />
                </a>
                <div className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                  <FaFacebookF width={24} />
                </div>
                <a
                  href={`mailto:'email@example.com'`}
                  className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]"
                >
                  <MdOutlineAlternateEmail width={24} />
                </a>
                <a
                  href="tel:+17472955409"
                  className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]"
                >
                  <FiPhone width={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-16 w-fit">
            <div className="flex-col justify-start items-start inline-flex gap-4">
              <div className="self-stretch text-white text-md font-bold">
                Links
                <br />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                <Link
                  href="/#services"
                  className="w-fit text-[#f5efe7] text-sm cursor-pointer hover:text-[#828181]"
                >
                  Services
                </Link>
                <Link
                  href="/#about"
                  className="w-fit text-[#f5efe7] text-sm cursor-pointer hover:text-[#828181]"
                >
                  About Me
                </Link>
                <Link
                  href="/#contact"
                  className="w-fit text-[#f5efe7] text-sm cursor-pointer hover:text-[#828181]"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch pt-[30px] pb-2.5 border-t border-neutral-700 justify-between items-start inline-flex text-sm">
        <div className="text-[#e2e2e2] text-xs font-normal cursor-pointer hover:text-[#f5efe7] w-1/2">
          © 2025 All Rights Reserved
        </div>
        <div className={"inline-flex gap-1 w-fit"}>
          <Link
            href="/privacypolicy"
            className="text-nowrap text-xs text-[#e2e2e2] font-normal cursor-pointer hover:text-[#f5efe7] w-1/2 text-end"
          >
            Privacy Policy
          </Link>
          <span className="text-[#e2e2e2] font-normal">|</span>
          <Link
            href="/termsofuse"
            className="text-nowrap text-xs text-[#e2e2e2] font-normal cursor-pointer hover:text-[#f5efe7] w-1/2 text-end"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
