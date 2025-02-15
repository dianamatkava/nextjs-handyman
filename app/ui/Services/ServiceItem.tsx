export default function ServiceItem ({title, number}: {title: string, number: string}) {
  return (
    <div className='w-full h-fit flex items-center justify-start gap-2'>
      <div
        className="pb-6 text-center text-black text-sm font-normal font-['Plus Jakarta Sans'] leading-tight tracking-tight">{number}
      </div>
      <div
        className="w-full h-fit py-5 border-b border-black flex-col justify-center items-start inline-flex">
          <div className="text-black text-xlg font-normal font-['Plus Jakarta Sans'] tracking-tight">{title}</div>
      </div>
    </div>
  )
}