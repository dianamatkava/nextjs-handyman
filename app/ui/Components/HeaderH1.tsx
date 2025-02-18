export default function HeaderH1 ({title, className}: {title: string; className?: string}) {
  return (
    <div className="w-full justify-center items-center inline-flex">
      <div className={"w-fit text-center text-black text-xxlg font-semibold font-['Plus Jakarta Sans'] leading-10 " + `${className}`}>{title}
      </div>
    </div>
  )
}