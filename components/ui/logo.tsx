import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center justify-center" aria-label="Cruip">
      <Image src="/images/logo.png" alt="VibeViral" width={90} height={30} />
      <span className="text-sm">VibeViral</span>
    </Link>
  );
}
