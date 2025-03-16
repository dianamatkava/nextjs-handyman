import Link from "next/link";

export default function CTAPrimary({ className }: { className?: string }) {
  return (
    <Link
      href={"/#contact"}
      className={
        "w-[6.25rem] h-[2.35rem] rounded-[40px] border border-[#fe7800] justify-center items-center gap-2.5 flex hover:bg-[#fe7800]/80 transition-all duration-300" +
        ` ${className}`
      }
    >
      <div className="w-fit text-white text-xs font-semibold font-['Plus Jakarta Sans']">
        Contact
      </div>
    </Link>
  );
}
