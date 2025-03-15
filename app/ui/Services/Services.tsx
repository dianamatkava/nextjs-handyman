"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ServiceItem from "@/app/ui/Services/ServiceItem";
import { servicesData } from "@/app/data/services";
import ServiceHeader from "@/app/ui/Services/ServiceHeader";
export default function ServiceList() {
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState<number | null>(
    servicesData?.[0]?.id ?? null
  );
  const [activeImage, setActiveImage] = useState<string | null>(
    servicesData?.[0]?.image ?? null
  );
  const [isVisible, setIsVisible] = useState(false);
  const [hoverSelected, setHoverSelected] = useState<number | null>(null);

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
      if (!Array.isArray(servicesData) || servicesData.length === 0) return;

      const currentIndex = servicesData.findIndex(
        (e) => Number(e.id) === Number(activeService)
      );
      const nextIndex = (currentIndex + 1) % servicesData.length;

      setActiveService(servicesData[nextIndex]?.id ?? null);
      setActiveImage(servicesData[nextIndex]?.image ?? null);
      window.scrollTo(0, scrollY);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [activeService, servicesData, isVisible, hoverSelected]);

  const onMouseEnterService = (id: number) => {
    setHoverSelected(id);
    setActiveService(id);
    setActiveImage(
      servicesData.find((e) => Number(e.id) === Number(id))?.image ?? null
    );
  };

  const onMouseLeaveService = () => {
    setHoverSelected(null);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-fit flex flex-col items-start justify-start gap-12 overflow-hidden relative"
    >
      <ServiceHeader />
      <div className="w-full flex gap-12 items-stretch">
        <div className="w-full md:w-2/3 max-w-[800px] flex flex-col gap-4">
          {servicesData.map((item, index) => {
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
        <div className="hidden w-2/5 md:block relative p-4 overflow-hidden bg-black rounded-lg">
          <Image
            src={
              servicesData.find((e) => Number(e.id) === Number(activeService))
                ?.image ?? ""
            }
            alt="Service Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-[inherit]"
          />
        </div>
      </div>
    </div>
  );
}
