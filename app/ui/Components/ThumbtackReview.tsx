"use client";
import { useEffect } from "react";
import Image from "next/image";
export default function ThumbtackWidget() {
  useEffect(() => {
    if (!document.getElementById("tt-css")) {
      const link = document.createElement("link");
      link.id = "tt-css";
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href =
        "https://cdn.thumbtackstatic.com/fe-assets-web/_assets/styles/release/pages/widgets-page/styles/review-widget-one.fc389f0f2a42fbdaf603.css.gz";
      link.media = "all";
      document.head.appendChild(link);
    }

    const domPurifyScript = document.createElement("script");
    domPurifyScript.src =
      "https://cdn.jsdelivr.net/npm/dompurify@2.4.0/dist/purify.min.js";
    domPurifyScript.async = true;
    document.body.appendChild(domPurifyScript);

    domPurifyScript.addEventListener("load", () => {
      fetchWidgetContent();
    });

    function fetchWidgetContent(retries = 5) {
      const req = new XMLHttpRequest();

      req.onreadystatechange = function () {
        if (
          req.readyState === 4 &&
          req.status === 200 &&
          window.DOMPurify &&
          document.getElementById("tt-dynamic")
        ) {
          document.getElementById("tt-dynamic")!.innerHTML =
            window.DOMPurify.sanitize(req.responseText, {
              FORBID_TAGS: ["script"],
              FORBID_ATTR: ["onerror"],
            });
        } else if (req.readyState === 4 && req.status === 202 && retries > 0) {
          setTimeout(() => fetchWidgetContent(retries - 1), 1000);
        }
      };

      req.open(
        "GET",
        "https://www.thumbtack.com/profile/widgets/dynamic/review-list/498261268525244416/?type=one"
      );
      req.send();
    }
    return () => {
      document.getElementById("tt-dynamic")?.remove();
    };
  }, []);

  return (
    <div className="widget" id="tt-review-widget-one">
      <Image
        src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
        alt="Thumbtack"
        width={100}
        height={100}
      />
      <div id="tt-dynamic">
        <div className="tt-left">
          <img src="https://cdn.thumbtackstatic.com/fe-assets-web/_assets/images/release/components/avatar/images/legacy-default-avatar-50x50.25cbe35c0002a2eef6cbc5f1c4f271545eafbb59.png" />
        </div>
        <div className="tt-right">
          <div className="tt-name">Shane S.</div>
          <div className="tt-stars">
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" />
            <span>14 reviews</span>
            <p>
              Alex was a life saver! He replaced an entire door frame and
              threshold for me. Great work and the result was perfect. Highly
              recommend him for any handyman needs.
            </p>
            <a
              target="_blank"
              href="https://www.thumbtack.com/ca/san-diego/furniture-assembly/alex-handyman/service/498261268525244416"
            >
              See all reviews
            </a>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<script src="https://www.thumbtack.com/profile/widgets/js/498261268525244416&widget_id=review&type=one"></script>`,
          }}
        />
      </div>
    </div>
  );
}
