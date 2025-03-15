import Tick from "@/app/ui/Components/Tick";
import Image from "next/image";
import CTAGroup from "@/app/ui/Components/CTAGroup";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function ContactUsBlock() {
  return (
    <div className="bg-[#0e1518]/60 w-full h-fit px-5 sm:px-20 py-5 sm:py-14 flex-col justify-center items-center rounded-lg gap-2.5 inline-flex relative">
      <Image
        src="/Image1.jpeg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 -z-10 rounded-[inherit]"
      />

      <div className="flex-col justify-start items-center gap-12 inline-flex">
        <HeaderH1
          id={"phone"}
          title={"Fast, Reliable, and Affordable Repairs"}
          className={"text-white"}
        />
        <div className="w-full justify-center items-center gap-5 inline-flex">
          <div className="w-full flex-wrap flex justify-center items-center gap-5 inline-flex">
            <Tick key={1} title={"24/7 Emergency Service"} />
            <Tick key={2} title={"Quick Fixes & Same-Day Appointments"} />
            <Tick key={3} title={"Licensed & Insured Team Available"} />
          </div>
        </div>
        <CTAGroup>
          <div className="w-fit h-full flex-col justify-center items-start gap-0 inline-flex">
            <div className="self-stretch text-white text-sm font-semibold font-['Plus Jakarta Sans']">
              Contact me
            </div>
            <div className="self-stretch text-white underline text-sm font-normal font-['Plus Jakarta Sans']">
              +1 619 510 1998
            </div>
          </div>
        </CTAGroup>
      </div>
    </div>
  );
}
