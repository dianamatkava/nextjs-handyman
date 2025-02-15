export default function Profile () {
  return (
    <div className="justify-start items-center gap-3 inline-flex">
      <div className="w-[50px] h-[50px] bg-[#d9d9d9] rounded-full"/>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="justify-center items-center gap-3 inline-flex">
          <div
            className="w-fit text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight">Alexandr
            Lerem
          </div>
        </div>
        <div className="text-[#e4e4e4] text-xs font-medium font-['Plus Jakarta Sans']">Handyman
          Executive
        </div>
      </div>
    </div>
  )
}