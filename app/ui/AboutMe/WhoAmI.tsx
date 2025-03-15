import Image from "next/image";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import { IoPersonSharp } from "react-icons/io5";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function WhoAmI() {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-10 inline-flex">
      <SectionHeader name={"Who am I?"}>
        <IoPersonSharp size={16} color={"#fe7800"} />
      </SectionHeader>
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-fit flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="sm:w-1/2">
            <HeaderH1
              id={"whoAmI"}
              title={"Handyman Expert Committed to Quality"}
              className={"text-start"}
            />
          </div>
          <div className="w-full sm:w-1/2 flex items-center justify-center text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
            I am a handyman with a passion for precision and reliable service. I
            specialize in a range of home repair and maintenance projects,
            ensuring every job is completed with care and attention to detail.
          </div>
        </div>
      </div>
      <div className="hidden sm:block w-full h-[400px] rounded-lg relative p-4 overflow-hidden">
        <div className="absolute inset-0 rounded-[inherit]">
          <Image
            src="/WhoAmI.jpg"
            alt="Experties"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[inherit]"
          />
        </div>
      </div>
    </div>
  );
}
