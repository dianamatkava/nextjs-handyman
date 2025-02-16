export default function Tag ({name}: {name: string}) {
  return (
    <div
      className="w-fit h-fit px-3 py-1 rounded-xl border border-[#9e9e9e] justify-center items-center gap-1 flex">
      <div className="text-center text-black text-xs font-['Plus Jakarta Sans'] leading-tight tracking-tight">{name}</div>
    </div>
  )
}