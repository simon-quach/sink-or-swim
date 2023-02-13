"use client" // Turns component into client-side only

import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import axios from 'axios'

export default function Story() {
  // Put the story text here
  const story: string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolorem, assumenda at optio impedit corporis vero earum deleniti eligendi nisi, doloribus officia voluptatem reiciendis. Tenetur quis quibusdam excepturi porro reiciendis!'

  axios.post("https://titanic.hop.sh/", JSON.parse(localStorage.get("data")))

  return(
    <section className="w-full flex flex-col justify-center items-center text-center cursor-default text-white">
      <div className='mt-[30%] xl:mt-[5%] gap-6 w-[80%] xl:w-[80%] max-w-[1000px]'>
        <motion.main
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="font-bold text-[24px] sm:text-[48px] drop-shadow-2xl"
        >
          This is your Titanic story...
        </motion.main>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="rounded-lg bg-[rgba(0,0,0,0.2)] p-8 flex flex-col items-center mt-[2rem] text-left"
        >
          <Typewriter 
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .changeDelay(75)
                .typeString(story)
                .start();
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
