import Link from "next/link";

export default function CTAPrimary ({className}: {className?: string}) {
  return (
    <Link href={'/#contact'}
      className={"w-[110px] h-[45px] rounded-[40px] border border-[#fe7800] justify-center items-center gap-2.5 flex" + ` ${className}`}>
      <div className="w-fit text-white text-sm font-semibold font-['Plus Jakarta Sans']">Contact</div>
    </Link>
  )
}