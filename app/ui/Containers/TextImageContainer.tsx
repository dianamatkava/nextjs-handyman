import AchievementItem from "@/app/ui/shared/AchievementItem";
import SectionHeader from "@/app/ui/shared/SectionHeader";
import CTAContactMe from "@/app/ui/Components/CTAContactMe";
import Image from "next/image";

export default function TextImageContainer() {
  return (
    <div className="w-full full justify-center items-center gap-8 inline-flex">
      <div className="w-1/2 h-fit flex-col justify-start items-start gap-5 inline-flex">
        <SectionHeader name={"My Expertise"}/>
        <div className="self-stretch h-fit flex-col justify-between items-start flex gap-5">
          <div className="self-stretch h-fit flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div
                className="w-full text-black text-xxlg font-semibold font-['Plus Jakarta Sans'] leading-[50px]">Professional
                Handyman providing reliable repair services
              </div>
            </div>
            <div className="justify-start items-center gap-5 inline-flex">
              <AchievementItem key={1} title={'Availability'} score={'24/7'}/>
              <AchievementItem key={2} title={'Certifications'} score={'11'}/>
              <AchievementItem key={3} title={'Response Time'} score={'4h'}/>
              <AchievementItem key={4} title={'Satisfied Clients'} score={'98%'}/>
            </div>
            <div className="w-full text-black text-sm font-normal font-['Open Sans'] tracking-tight">Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source.
            </div>
          </div>
          <CTAContactMe />
        </div>
      </div>
      <div className="w-1/2 h-[500px] rounded-lg relative p-4 overflow-hidden">
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
  )
}