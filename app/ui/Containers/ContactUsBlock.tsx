import Tick from "@/app/ui/Components/Tick";
import Image from 'next/image';
import CTAGroup from "@/app/ui/Components/CTAGroup";

export default function ContactUsBlock () {
  return (
    <div className="bg-[#0e1518]/60 w-full h-fit px-20 py-14 flex-col justify-center items-center rounded-lg gap-2.5 inline-flex relative">
      <Image
        src="/Image1.jpeg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 -z-10 rounded-[inherit]"
      />

        <div className="flex-col justify-start items-center gap-5 inline-flex">
          <div className="self-stretch text-center text-white text-xxlg font-semibold font-['Plus Jakarta Sans']">Your
            One-Stop Solution for All Repairs
          </div>
          <div className="w-full justify-start items-start gap-5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
              <Tick key={1} title={'Working with Insurances'}/>
              <Tick key={2} title={'Virtual consultations from home'}/>
              <Tick key={3} title={'24/7 Emergency Repair Services'}/>
            </div>
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-3 inline-flex">
              <Tick key={4} title={'Working with Insurances'}/>
              <Tick key={5} title={'Virtual consultations from home'}/>
              <Tick key={6} title={'24/7 Emergency Repair Services'}/>
            </div>
          </div>
          <CTAGroup>
            <div className="w-fit h-full flex-col justify-center items-start gap-1 inline-flex">
              <div
                className="self-stretch text-white text-sm font-semibold font-['Plus Jakarta Sans']">Contact
                me
              </div>
              <div
                className="self-stretch text-white text-sm font-normal font-['Plus Jakarta Sans']">
                +01 1 26-55-56-00
              </div>
            </div>
          </CTAGroup>
        </div>
    </div>
  )
}