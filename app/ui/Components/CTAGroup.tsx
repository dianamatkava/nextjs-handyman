import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import CTACall from "@/app/ui/Components/CTACall";

interface CTAGroupProps {
  children: React.ReactNode;
  className?: string;
}

export default function CTAGroup({ children, className }: CTAGroupProps) {
  return (
    <div
      className={`w-full h-fit flex-col justify-start items-start gap-5 inline-flex ${className}`}
    >
      <div className="self-stretch justify-center items-center gap-4 inline-flex">
        <CTAPrimary className={"bg-[#fe7800]"} />
        <CTACall />
        {children}
      </div>
    </div>
  );
}
