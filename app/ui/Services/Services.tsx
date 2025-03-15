"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ServiceItem from "@/app/ui/Services/ServiceItem";

const data = [
  {
    id: 1,
    title: "Drywall Repair and Maintenance",
    description:
      "Patching holes, repairing nail pops, and removing old wallpaper.",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 2,
    title: "Interior and Exterior Painting",
    description:
      "Applying new paint or stain to walls, furniture, baseboards, doors, decks, or fences.",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 3,
    title: "Minor Plumbing Work",
    description: "Addressing faucet leaks and other small plumbing issues.",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 4,
    title: "Minor Electrical Work",
    description: "Installing light fixtures and other simple electrical tasks.",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 5,
    title: "Carpentry",
    description:
      "Performing tasks such as installing kitchen cabinets or adding pet doors.",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 6,
    title: "Flooring Improvements and Tiling",
    description:
      "Installing or replacing tiles on floors, backsplashes, or walls. \n",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 7,
    title: "Deck Repairs",
    description:
      "Maintaining and repairing outdoor decks to ensure safety and longevity.",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 8,
    title: "Gutter Cleaning and Repair",
    description:
      "Removing debris from gutters and fixing any damages to prevent water damage.\n",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 9,
    title: "Pressure Washing",
    description:
      "Cleaning exterior surfaces such as driveways, sidewalks, and siding using high-pressure water.\n",
    image: "/public/services/Service1.jpg",
  },
  {
    id: 10,
    title: "Smart Home Upgrades",
    description:
      "Installing devices like smart thermostats, doorbells, or security cameras.",
    image: "/public/services/Service1.jpg",
  },
];

export default function ServiceList() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState<number | null>(
    data?.[0]?.id ?? null
  );
  const [isVisible, setIsVisible] = useState(false);
  const [hoverSelected, setHoverSelected] = useState<number | null>(null);

  const imageData = Array.isArray(data)
    ? data.find((e) => Number(e.id) === Number(activeService))
    : undefined;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (hoverSelected) return;
    if (!isVisible) return;

    const scrollY = window.scrollY;
    const timeout = setTimeout(() => {
      if (!Array.isArray(data) || data.length === 0) return;

      const currentIndex = data.findIndex(
        (e) => Number(e.id) === Number(activeService)
      );
      const nextIndex = (currentIndex + 1) % data.length;

      setActiveService(data[nextIndex]?.id ?? null);
      window.scrollTo(0, scrollY);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [activeService, data, isVisible, hoverSelected]);

  const onMouseEnterService = (id: number) => {
    setHoverSelected(id);
    setActiveService(id);
  };

  const onMouseLeaveService = () => {
    setHoverSelected(null);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-fit flex flex-col items-start justify-start gap-12 overflow-hidden relative"
    >
      {/*<ServiceHeader/>*/}
      <div className="w-full flex gap-12 items-stretch">
        <div className="w-full md:w-2/3 max-w-[800px] flex flex-col gap-4">
          {data.map((item, index) => {
            return (
              <ServiceItem
                key={item.id}
                id={item.id}
                number={"0" + index}
                title={item.title}
                description={item.description}
                isActive={item.id === activeService}
                onHoverEnter={onMouseEnterService}
                onHoverLeave={onMouseLeaveService}
              />
            );
          })}
        </div>
        {imageData && (
          <div className="hidden w-2/5 md:block relative p-4 overflow-hidden bg-black rounded-lg">
            <Image
              src={imageData.image}
              alt="Service Image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-[inherit]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
