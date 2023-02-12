"use client" // Turns component into client-side only

import { motion, Variants } from "framer-motion";
import { useState } from "react";

// Type declations for the props
interface Props {
  value: { display: string, value: string },
  setValue: (test: { display: string, value: string }) => void,
  options: string[];
}

// Variants for the list items
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Select({ value, setValue, options }: Props) {
  // STATES

  // State for the dropdown
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative"
    >
      <motion.div
        whileTap={{ scale: 0.98 }}
        onMouseDown={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        className="flex items-center justify-between cursor-pointer bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg p-3 mt-1"
      >
        {value.display}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.div>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="absolute flex flex-col justify-center z-10 w-full bg-white text-blue-500 font-bold focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg mt-1"
      >
        {options.map((option, index) => (
          <motion.li 
            variants={itemVariants} 
            onMouseDown={() => {
              setValue({ display: option, value: option})
              setIsOpen(false)
            }}
            className="transition-colors duration-200 cursor-pointer p-4 hover:bg-blue-100"
            key={index}
          >
            {option}
          </motion.li>
        ))}
        
      </motion.ul>
    </motion.div>
  )
}