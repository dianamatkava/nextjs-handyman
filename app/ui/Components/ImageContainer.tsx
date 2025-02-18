import Image from "next/image";

export default function ImageContainer ({src, alt, className}: {src: string; alt: string, className?: string}) {
  return (
    <div className={"h-[400px] rounded-lg relative p-4 overflow-hidden " + `${className}`}>
      <div className="absolute inset-0 rounded-[inherit]">
        <Image
          src={src}
          alt={alt}
          fill
          style={{objectFit: 'cover'}}
          className="rounded-[inherit]"
        />
      </div>
    </div>
  )
}