"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Thumbtack() {
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
      className="widget w-fit inline-flex gap-2 justify-center items-center gap-8 pl-8"
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
          className="tt-logo brightness-0 invert"
          width={200}
          height={200}
        />
      </a>

      <div id="tt-dynamic" className="w-full flex inline-flex gap-1">
        <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
        <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
        <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
        <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
        <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
        <span className="pl-2 text-sm text-white font-['Plus Jakarta Sans'] tracking-tight">
          14 reviews
        </span>
      </div>
    </div>
  );
}
