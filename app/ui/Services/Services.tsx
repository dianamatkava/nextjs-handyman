import ServiceItem from "@/app/ui/Services/ServiceItem";
import ActiveService from "@/app/ui/Services/ActiveService";
import SectionHeader from "@/app/ui/shared/SectionHeader";

export default function Services () {
  return (
    <div className='w-full h-full flex flex-col items-start justify-start gap-4'>
    <SectionHeader name={"Services"} />
    <div className="w-full h-fit inline-flex justify-start items-start gap-8">
      <div className="w-2/3 max-w-[800px] h-fit flex-col justify-start items-start inline-flex">
        <ActiveService/>
        <div className="w-full h-fit flex-col justify-start items-start inline-flex">
          <ServiceItem key={1} number={"01"} title="House Remodeling"/>
          <ServiceItem key={2} number={"02"} title="Plumbing Service"/>
          <ServiceItem key={3} number={"03"} title="Water Damage Restoration"/>
          <ServiceItem key={4} number={"04"} title="Plumbing Service"/>
          <ServiceItem key={5} number={"05"} title="Water Damage Restoration"/>
        </div>
      </div>
      <div className="w-1/3 h-[630px] bg-neutral-100 rounded-[25px]"/>
    </div>
    </div>
  )
}