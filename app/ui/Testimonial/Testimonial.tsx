import TestimonialHeader from "@/app/ui/Testimonial/TestimonialHeader";
import Review from "@/app/ui/Testimonial/Review";

export default function Testimonial () {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-4 inline-flex">
      <TestimonialHeader/>
      <div className="w-full h-fit justify-start items-center gap-4 inline-flex overflow-hidden">
        <div className="w-full h-fit justify-start items-center gap-4 inline-flex animate-marquee">
          <Review key={1}/>
          <Review key={2}/>
          <Review key={3}/>
          <Review key={4}/>
          <Review key={5}/>
        </div>
      </div>
      {/*<div className="w-full h-fit justify-start items-center gap-4 inline-flex animate-marqueeReverse">*/}
      {/*  <Review key={1}/>*/}
      {/*  <Review key={2}/>*/}
      {/*  <Review key={3}/>*/}
      {/*  <Review key={4}/>*/}
      {/*  <Review key={5}/>*/}
      {/*</div>*/}
    </div>
  )
}