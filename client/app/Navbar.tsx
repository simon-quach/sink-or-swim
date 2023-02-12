import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="h-[90px] flex items-center justify-between px-[24px]">
      <Link href="/">
        <Image 
          src="/navbar-logo.svg"
          width={150}
          height={150}
          alt="navbar-logo"
          className="cursor-pointer"
        />
      </Link>
      
      <Link href="/about" className="text-white bg-[rgba(0,0,0,0.2)] px-3 py-2 rounded-md cursor-pointer">
        About Us
      </Link>
    </nav>
  )
}