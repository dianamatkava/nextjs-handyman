import SectionHeader from "@/app/ui/shared/SectionHeader";
import CTAContactMe from "@/app/ui/Components/CTAContactMe";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="w-full full justify-center items-center gap-8 flex flex-col">
      <SectionHeader name={"About Me"}/>
      <div className="w-full full justify-center items-center gap-8 inline-flex">
        <div className="w-1/2 h-fit flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch h-fit flex-col justify-between items-start flex gap-10">
            <div className="self-stretch h-fit flex-col justify-start items-start gap-8 flex">
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div
                  className="w-full text-black text-xxlg font-semibold font-['Plus Jakarta Sans'] leading-[45px]">
                  Professional Handyman providing reliable repair services
                </div>
              </div>
              <div className="w-full text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">Contrary to
                popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                undoubtable source.
              </div>
            </div>
            <CTAContactMe/>
          </div>
        </div>
        <div className="w-1/2 h-[400px] rounded-lg relative p-4 overflow-hidden">
          <div className="absolute inset-0 rounded-[inherit]">
            <Image
              src="/Image1.jpeg"
              alt="Experties"
              fill
              style={{objectFit: 'cover'}}
              className="rounded-[inherit]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}