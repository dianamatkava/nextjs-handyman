import Link from "next/link";

export default function Logo() {
  return (
    <div className="justify-start items-center gap-3 inline-flex">
      <div className="w-[8px] h-[8px] bg-white rounded-full" />
      <Link
        href={"/#whoAmI"}
        className="text-white text-md font-medium font-['Poppins']"
      >
        alxhandyman.com
      </Link>
    </div>
  );
}
