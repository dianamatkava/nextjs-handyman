import TestimonialHeader from "@/app/ui/Testimonial/TestimonialHeader";
import Review from "@/app/ui/Testimonial/Review";
import { reviews } from "@/app/data/reviews";

export default function Testimonial() {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-4 inline-flex">
      <TestimonialHeader />
      <div className="w-full h-fit justify-start items-center gap-4 inline-flex overflow-hidden">
        <div className="w-full h-fit justify-start items-center gap-4 inline-flex animate-marquee">
          {reviews.map((review) => (
            <Review
              key={review.id}
              name={review.name}
              rating={review.rating}
              review={review.review}
              image={review.image}
              service={review.service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
