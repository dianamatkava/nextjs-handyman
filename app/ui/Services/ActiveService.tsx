import Tag from "@/app/ui/Components/Tag";
import ImageContainer from "@/app/ui/Components/ImageContainer";
import React from "react";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function ActiveService () {
  return (
    <div className="w-full h-fit flex flex-row items-start justify-start">
      <div
        className="text-center text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight">00
      </div>
      <div
        className="border-b border-black flex-col justify-center items-start gap-4 inline-flex pb-6">
        <div className="w-fit flex-col justify-start items-start gap-[15px] flex">
          <HeaderH1 id={'services'} title={'Water Damage'} className={'pl-1'}/>
          {/*<div className="justify-start items-center gap-1.5 inline-flex">*/}
          {/*  <Tag key='Repair' name='Repair'/>*/}
          {/*  <Tag key='Remodelling' name='Remodelling'/>*/}
          {/*  <Tag key='Cleaning' name='Cleaning'/>*/}
          {/*</div>*/}
        </div>
        <div className="text-black text-sm font-normal font-['Plus Jakarta Sans']">Water damage
          restoration following a flood is no small or easy task, which is why hiring a company with a good reputation
          and vast history of successful flood damage restorations is a must. At otterwater.io, we hire the finest
          reconstruction contractors in all of Sacramento who use their experience and expertise in your water damage
          cleanup and restoration project. We are your go to water mitigation service in Northern California and Nevada.
        </div>
      </div>

    </div>
  )
}