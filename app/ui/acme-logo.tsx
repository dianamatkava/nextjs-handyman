import { StarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <StarIcon className="h-12 w-24 rotate-[15deg]" width={50} height={50}/>
      <p className="text-[40px]">ASTRA</p>
    </div>
  );
}
