import SectionHeader from "@/app/ui/Components/SectionHeader";
import {FaRegCommentDots} from "react-icons/fa";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function TestimonialHeader () {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <SectionHeader name={"Testimonial"}>
        <FaRegCommentDots size={16} color={'#fe7800'}/>
      </SectionHeader>
      <div className="self-stretch flex-col justify-start items-center gap-5 flex">
        <HeaderH1 id={'testimonial'} title={'Your One-Stop Solution for All Repairs'} className={''}/>
        <div
          className="max-w-[500px] text-center text-[#595959] text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">Contrary
          to popular belief, Lorem Ipsum is not simply random text. I not simply random text. I
        </div>
      </div>
      {/*<div className="justify-start items-end gap-5 inline-flex">*/}
      {/*  <CTAPrimary/>*/}
      {/*</div>*/}
    </div>
  )
}