import StartRating from "@/app/ui/Components/StartRating";
import Profile from "@/app/ui/Components/Profile";
import Image from "next/image";
import Link from "next/link";
interface ReviewProps {
  name: string;
  rating: number;
  review: string;
  image: string;
  service?: string;
}

export default function Review({
  name,
  rating,
  review,
  image,
  service,
}: ReviewProps) {
  return (
    <div className="review-card w-fit max-w-[360px] h-[200px] p-5 rounded-md border border-[#eaeaea] flex-col justify-start items-start gap-3 inline-flex">
      <div className="w-full justify-between items-center gap-5 inline-flex">
        <Profile name={name} title={service ?? ""} image={image} />
        <StartRating rating={rating} />
      </div>
      <div className="w-[320px] text-black text-xs font-normal font-['Plus Jakarta Sans'] tracking-tight">
        {review}
      </div>
      <div className="w-full justify-between items-center gap-5 inline-flex">
        <Image
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
          alt="Thumbtack"
          width={80}
          height={80}
        />
        <Link
          target="_blank"
          className="text-gray-600 text-xs font-normal font-['Plus Jakarta Sans'] tracking-tight"
          href="https://www.thumbtack.com/ca/san-diego/furniture-assembly/alex-handyman/service/498261268525244416"
        >
          See all reviews
        </Link>
      </div>
    </div>
  );
}
