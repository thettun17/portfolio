"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function Navbar() {
  const pathName = usePathname();
  const isActive = (path: String): boolean => pathName === path;
  return (
    <div className="laptop:absolute mobile:fixed laptop:top-0 laptop:right-0 z-10 mobile:bottom-0 mobile:right-0 laptop:w-max mobile:w-full">
      <div className="flex gap-x-10 bg-secondaryColor p-4 laptop:rounded-bl-lg mobile:rounded-t-lg text-white/80 table:text-center justify-center">
        <Link href="/" className={isActive('/') ? 'active' : ''}>About</Link>
        <Link href="/resume" className={isActive('/resume') ? 'active' : ''}>Resume</Link>
        <Link href="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Porfolio</Link>
        {/* <Link href="">Project</Link> */}
      </div>
    </div>
  );
}
