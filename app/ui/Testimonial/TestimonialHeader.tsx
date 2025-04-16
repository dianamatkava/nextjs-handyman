import SectionHeader from "@/app/ui/Components/SectionHeader";
import { FaRegCommentDots } from "react-icons/fa";
import HeaderH1 from "@/app/ui/Components/HeaderH1";
import Thumbtack from "../Components/Thumbtack";

export default function TestimonialHeader() {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <SectionHeader name={"Testimonial"}>
        <FaRegCommentDots size={16} color={"#fe7800"} />
      </SectionHeader>
      <div className="self-stretch flex-col justify-start items-center gap-5 flex">
        <HeaderH1
          id={"testimonial"}
          title={"What Our Neighbors Say"}
          className={""}
        />
        <div className="max-w-[500px] text-center text-[#595959] text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
          Hear from real homeowners who’ve experienced a personal touch in every
          project. Their stories highlight honest, reliable service that
          transforms everyday spaces into comfortable homes.
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 pt-4">
        <Thumbtack mode="light" />
      </div>
      {/*<div className="justify-start items-end gap-5 inline-flex">*/}
      {/*  <CTAPrimary/>*/}
      {/*</div>*/}
    </div>
  );
}
