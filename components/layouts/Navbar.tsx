"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function Navbar() {
  const pathName = usePathname();
  const isActive = (path: String): boolean => pathName === path;
  return (
    <div className="absolute laptop:top-0 laptop:right-0 z-10 tablet:bottom-0 tablet:right-0 ">
      <div className="flex gap-x-10 bg-secondaryColor p-4 laptop:rounded-bl-lg tablet:rounded- text-white/80">
        <Link href="/" className={isActive('/') ? 'active' : ''}>About</Link>
        <Link href="/resume" className={isActive('/resume') ? 'active' : ''}>Resume</Link>
        <Link href="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Porfolio</Link>
        {/* <Link href="">Project</Link> */}
      </div>
    </div>
  );
}
