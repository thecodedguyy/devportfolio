import Image from "next/image";

export default function CollageImage({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <div className={`collage-img ${className}`}>
      <Image src={src} alt="" width={300} height={300} />
    </div>
  );
}
