import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import {FaRegCommentDots} from "react-icons/fa";

export default function TestimonialHeader () {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <SectionHeader name={"Testimonial"}>
        <FaRegCommentDots size={16} color={'#fe7800'}/>
      </SectionHeader>
      <div className="self-stretch flex-col justify-start items-center gap-5 flex">
        <div className="self-stretch text-center text-black text-xxlg font-medium font-['Plus Jakarta Sans']">Your
          One-Stop Solution for All Repairs
        </div>
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