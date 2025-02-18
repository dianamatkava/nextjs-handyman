import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import CTACall from "@/app/ui/Components/CTACall";

export default function CTAGroup ({children=null}) {
  return (
    <div className="flex-col justify-center items-center gap-4 flex">
      <div className="self-stretch justify-center items-center gap-4 inline-flex">
        <CTAPrimary className={'bg-[#fe7800]'}/>
        <CTACall/>
        {children}
      </div>
    </div>
  )
}