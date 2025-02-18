import ServiceItem from "@/app/ui/Services/ServiceItem";
import ActiveService from "@/app/ui/Services/ActiveService";
import Image from "next/image";
import ServiceHeader from "@/app/ui/Services/ServiceHeader";
import ImageContainer from "@/app/ui/Components/ImageContainer";
import React from "react";

export default function Services() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-12">
      <ServiceHeader/>
      <div className="w-full flex gap-12 items-stretch">
        <div className="w-full md:w-2/3 max-w-[800px] flex flex-col gap-4">
          <ActiveService/>
          <div className="flex flex-col gap-2">
            <ServiceItem key={1} number={"01"} title="House Remodeling"/>
            <ServiceItem key={2} number={"02"} title="Plumbing Service"/>
            <ServiceItem key={3} number={"03"} title="Water Damage Restoration"/>
            <ServiceItem key={4} number={"04"} title="Plumbing Service"/>
            <ServiceItem key={5} number={"05"} title="Water Damage Restoration"/>
          </div>
        </div>
        <div className="hidden w-2/5 md:block relative p-4 overflow-hidden bg-black rounded-lg">
          <Image
            src="/Service1.jpg"
            alt="Experties"
            fill
            style={{objectFit: "cover"}}
            className="rounded-[inherit]"
          />
        </div>
      </div>
    </div>
  );
}
