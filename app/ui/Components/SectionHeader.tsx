import React from "react";

export default function SectionHeader ({name, children}: {name: string, children?: React.ReactElement}) {
  return (
    <div className="w-full justify-center items-center gap-2 inline-flex">
      {children}
      <div className="justify-center items-center gap-5 flex">
        <div className="text-[#fe7800] text-xs font-bold font-['Plus Jakarta Sans'] uppercase tracking-wide">{name}
        </div>
      </div>
    </div>
  )
}