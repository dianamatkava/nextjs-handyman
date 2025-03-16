import Link from "next/link";

interface CTAPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function CTAPrimary({
  children,
  onClick,
  type = "button",
  disabled = false,
}: CTAPrimaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}
