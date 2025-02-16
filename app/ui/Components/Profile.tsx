export default function Profile ({name, title, mode='light'}: {name: string, title: string, mode?: string}) {
  return (
    <div className="justify-start items-center gap-3 inline-flex">
      <div className="w-[50px] h-[50px] bg-[#d9d9d9] rounded-full"/>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="justify-center items-center gap-3 inline-flex">
          <div
            className={"w-fit text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight " + `${mode=='dark' ? "text-white" : "text-black"}`}>{name}
          </div>
        </div>
        <div className={"text-xs font-medium font-['Plus Jakarta Sans'] " + `${mode=='dark' ? "text-[#e4e4e4]" : 'text-black'}`}>{title}
        </div>
      </div>
    </div>
  )
}