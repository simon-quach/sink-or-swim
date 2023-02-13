"use client" // Turns component into client-side only

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center text-center cursor-default">
      <section className="w-full flex justify-center">
        <div className="text-white flex flex-col items-center mt-[30%] xl:mt-[10%] gap-6 w-[80%] xl:w-[50%]">
          <motion.main
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="font-bold text-[24px] sm:text-[48px] drop-shadow-2xl"
          >
            Discover your own story
          </motion.main>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="text-[16px] sm:text-[24px] drop-shadow-2xl"
          >
            Do you want to find out the chance of you surviving the Titanic&apos;s historical event?
            Create your own story here at SOS.
          </div>
          <Link href="/generate" className="bg-[rgba(0,0,0,0.2)] px-4 py-2 rounded-lg shadow-lg">
            Get started
          </Link>
          <Link href="/story">Click to see your story</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: 2.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/generate" className="bg-[rgba(0,0,0,0.2)] px-4 py-2 rounded-lg shadow-lg">
                Get started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}