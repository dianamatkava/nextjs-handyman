export default function HeaderH1 ({title, className, id}: {title: string; className?: string, id: string}) {
  return (
    <div className="w-full justify-center items-center inline-flex" id={id}>
      <div className={"w-fit text-center text-black text-xxlg font-semibold font-['Plus Jakarta Sans'] leading-10 " + `${className}`}>{title}
      </div>
    </div>
  )
}