import Image from "next/image";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import {IoPersonSharp} from "react-icons/io5";

export default function WhoAmI () {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-10 inline-flex">
      <SectionHeader name={'Who am I?'}>
        <IoPersonSharp size={16} color={'#fe7800'}/>
      </SectionHeader>
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-fit justify-between items-center flex">
          <div className="w-1/2 text-black text-xxlg font-semibold font-['Plus Jakarta Sans'] leading-[45px]">
            I am professional Handymen with 11 years of experience
          </div>
          <div className="w-1/2 text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] rounded-lg relative p-4 overflow-hidden">
        <div className="absolute inset-0 rounded-[inherit]">
          <Image
            src="/WhoAmI.jpg"
            alt="Experties"
            fill
            style={{objectFit: 'cover'}}
            className="rounded-[inherit]"
          />
        </div>
      </div>
</div>
)
}