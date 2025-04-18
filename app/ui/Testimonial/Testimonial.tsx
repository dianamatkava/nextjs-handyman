"use client";
import TestimonialHeader from "@/app/ui/Testimonial/TestimonialHeader";
import Review from "@/app/ui/Testimonial/Review";
import { reviews } from "@/app/data/reviews";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Testimonial() {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-4 inline-flex">
      <TestimonialHeader />
      <div className="w-full h-fit justify-start items-center gap-4 inline-flex overflow-hidden">
        <div className="w-full h-fit justify-start items-center gap-4 inline-flex">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            navigation
            slidesPerView="auto"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{
              overflow: "hidden",
              width: "fit-content",
              paddingBottom: "25px",
            }}
          >
            {reviews
              .sort((a, b) => b.id - a.id)
              .map((review) => (
                <SwiperSlide key={review.id} style={{ width: "auto" }}>
                  <Review
                    key={review.id}
                    name={review.name}
                    rating={review.rating}
                    review={review.review}
                    image={review.image}
                    service={review.service}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
