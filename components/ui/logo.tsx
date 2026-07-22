import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md" aria-label="EDS Echo">
      <Image
        src={LogoImg}
        alt="EDS Echo Logo"
        width={130}
        height={32}
        className="h-8 w-auto object-contain cursor-pointer"
        priority
      />
    </Link>
  );
}
