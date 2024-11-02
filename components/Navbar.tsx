import Link from "next/link";
export default function Navbar() {
  return (
    <div className="absolute top-0 right-0 z-10">
      <div className="flex gap-x-10 bg-secondaryColor p-4 rounded-bl-lg text-white/80">
        <Link href="" className="active">About</Link>
        <Link href="">Resume</Link>
        <Link href="">Porfolio</Link>
        <Link href="">Project</Link>
      </div>
    </div>
  );
}
