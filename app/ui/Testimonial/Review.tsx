import StartRating from "@/app/ui/Components/StartRating";
import Profile from "@/app/ui/Components/Profile";

export default function Review () {
  return (
    <div
      className="w-fit h-fit p-5 rounded-md border border-[#eaeaea] flex-col justify-center items-start gap-5 inline-flex">
      <div className="justify-start items-center gap-5 inline-flex">
        <Profile name={'Lorem Ipsum'} title={'House Remodeling'}/>
        <StartRating rating={4}/>
      </div>
      <div className="w-[350px] text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
        cites of the word in classical literature, discovered the undoubtable source.
      </div>
    </div>
  )
}