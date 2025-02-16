import { FaPhoneAlt } from "react-icons/fa";


export default function ContactDetail ({name, title, value, children}: {name: string, title?: string, value: string, children?: React.ReactElement}) {
  return (
    <div className="w-full max-w-[400px] justify-between items-center gap-5 inline-flex">
      <div className="self-stretch justify-between items-center flex gap-5">
        {children}
        <div className="w-fit flex-col justify-start items-start inline-flex">
          <div className="self-stretch text-black text-sm font-bold font-['Plus Jakarta Sans']">{name}
          </div>
          <div
            className="self-stretch text-[#595959] text-xs font-normal font-['Plus Jakarta Sans']">{title}
          </div>
        </div>
      </div>
      <div className="text-black text-sm font-semibold font-['Plus Jakarta Sans'] underline">{value}</div>
    </div>
  )
}