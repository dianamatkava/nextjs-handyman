"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Thumbtack({ mode = "dark" }: { mode?: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.thumbtack.com/profile/widgets/scripts/?service_pk=498261268525244416&widget_id=review&type=star";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="widget w-fit flex flex-col gap-2 justify-center items-center"
      id="tt-review-widget-star"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.thumbtack.com/ca/san-diego/furniture-assembly/alex-handyman/service/498261268525244416"
      >
        <Image
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
          alt="Thumbtack"
          className={`tt-logo ${mode == "dark" ? "brightness-0 invert" : ""}`}
          width={120}
          height={120}
        />
      </a>

      <div id="tt-dynamic" className="w-full flex inline-flex gap-1">
        <Image
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg"
          alt="star"
          width={16}
          height={16}
          className="star-icon"
        />
        <Image
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg"
          alt="star"
          width={16}
          height={16}
          className="star-icon"
        />
        <Image
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg"
          alt="star"
          width={16}
          height={16}
          className="star-icon"
        />
        <Image
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg"
          alt="star"
          width={16}
          height={16}
          className="star-icon"
        />
        <Image
          src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg"
          alt="star"
          width={16}
          height={16}
          className="star-icon"
        />
        <span
          className={`pl-2 text-xs font-['Plus Jakarta Sans'] tracking-tight ${
            mode == "dark" ? "text-white" : "text-black"
          }`}
        >
          14 reviews
        </span>
      </div>
    </div>
  );
}
