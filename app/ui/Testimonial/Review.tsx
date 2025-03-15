import StartRating from "@/app/ui/Components/StartRating";
import Profile from "@/app/ui/Components/Profile";

export default function Review({
  name,
  title,
  rating,
  review,
  image,
}: {
  name: string;
  title: string;
  rating: number;
  review: string;
  image: string;
}) {
  return (
    <div className="w-fit h-[200px] p-5 rounded-md border border-[#eaeaea] flex-col justify-start items-start gap-3 inline-flex">
      <div className="justify-start items-center gap-5 inline-flex">
        <Profile name={name} title={title} image={image} />
        <StartRating rating={rating} />
      </div>
      <div className="w-[350px] text-black text-xs font-normal font-['Plus Jakarta Sans'] tracking-tight">
        {review}
      </div>
    </div>
  );
}
