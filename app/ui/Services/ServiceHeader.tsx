import SectionHeader from "@/app/ui/shared/SectionHeader";
import AchievementItem from "@/app/ui/shared/AchievementItem";

export default function ServiceHeader () {
  return (
    <div className="w-full h-fil flex-col justify-center items-center gap-5 inline-flex">
      <SectionHeader name="Services"/>
      <div className="w-full justify-center items-center inline-flex">
        <div className="w-fit text-black text-xxlg font-semibold font-['Plus Jakarta Sans']">Some of the services I provide
        </div>
      </div>
      <div className="justify-start items-center gap-12 inline-flex">
        <AchievementItem key={1} title={'Availability'} score={'24/7'}/>
        <AchievementItem key={2} title={'Certifications'} score={'11'}/>
        <AchievementItem key={3} title={'Response Time'} score={'4h'}/>
        <AchievementItem key={4} title={'Satisfied Clients'} score={'98%'}/>
      </div>
    </div>
  )
}