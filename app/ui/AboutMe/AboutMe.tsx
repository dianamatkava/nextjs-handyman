import CTAGroup from "@/app/ui/Components/CTAGroup";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import { IoPersonSharp } from "react-icons/io5";
import ImageContainer from "@/app/ui/Components/ImageContainer";
import React from "react";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function AboutMe() {
  return (
    <div className="w-full full justify-center items-center gap-8 flex flex-col">
      <SectionHeader name={"About Me"}>
        <IoPersonSharp size={16} color={"#fe7800"} />
      </SectionHeader>
      <div className="w-full full justify-center items-center gap-8 inline-flex">
        <div className="w-full sm:w-1/2 h-fit flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch h-fit flex-col justify-between items-start flex gap-10">
            <div className="self-stretch h-fit flex-col justify-start items-start gap-8 flex">
              <HeaderH1
                id={"about"}
                title={
                  "Professional Handyman providing reliable repair services"
                }
                className={"justify-start items-center text-start"}
              />
              <div className="flex flex-col gap-3 w-full text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                <p>
                  Hello! My name is Alex, and I am a dedicated handyman
                  providing reliable and quality home repair and maintenance
                  services. I strive for excellence in every project and
                  guarantee meticulous attention to detail.
                </p>
                <p>
                  I value the trust of my clients and always strive to exceed
                  their expectations. My goal is to provide you with peace of
                  mind, knowing that the work is done efficiently and on time.
                  For larger projects, I collaborate with a team of licensed
                  contractors to ensure all work complies with California
                  regulations and meets the highest standards. Feel free to
                  reach out; I would be happy to assist you with your household
                  needs!
                </p>
              </div>
              <ImageContainer
                src={"/Contract.jpg"}
                alt={"/Contract.jpg"}
                className={"block w-full h-[250px] sm:hidden"}
              />
            </div>
            <CTAGroup className="hidden sm:flex">
              <div className="w-fit h-full flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-black text-sm font-semibold font-['Plus Jakarta Sans']">
                  Contact me
                </div>
                <div className="self-stretch text-black text-sm font-normal font-['Plus Jakarta Sans']">
                  +1 619 510 1998
                </div>
              </div>
            </CTAGroup>
          </div>
        </div>
        <ImageContainer
          src={"/Contract.jpg"}
          alt={"/Contract.jpg"}
          className={"hidden w-1/2 sm:block"}
        />
      </div>
    </div>
  );
}
