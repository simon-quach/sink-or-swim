"use client"; // Turns component into client-side only

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0,
      }}
      className="h-[90px] flex items-center justify-between px-[24px]"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/">
          <Image
            src="/navbar-logo.svg"
            width={150}
            height={150}
            alt="navbar-logo"
            className="cursor-pointer"
          />
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/about"
          className="text-white bg-[rgba(0,0,0,0.2)] px-3 py-2 rounded-md cursor-pointer"
        >
          About Us
        </Link>
      </motion.div>
    </motion.nav>
  );
}
