import CTAPrimary from "@/app/ui/Components/CTAPrimary";

export default function TestimonialHeader () {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <div className="self-stretch flex-col justify-start items-center gap-5 flex">
        <div className="self-stretch text-center text-black text-xxlg font-medium font-['Plus Jakarta Sans']">Your
          One-Stop Solution for All Repairs
        </div>
        <div
          className="max-w-[500px] text-center text-[#595959] text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">Contrary
          to popular belief, Lorem Ipsum is not simply random text. I not simply random text. I
        </div>
      </div>
      <div className="justify-start items-end gap-5 inline-flex">
        <CTAPrimary/>
      </div>
    </div>
  )
}