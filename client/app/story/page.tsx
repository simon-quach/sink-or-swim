"use client"; // Turns component into client-side only

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import "./page.css";

export default function Story() {
  const [story, setStory] = useState([]);
  const [generating, setGenerating] = useState(true);

  useEffect(() => {
    const storyJson: string =
      localStorage.getItem("data") == null
        ? ""
        : (localStorage.getItem("data") as string);
    if (localStorage.getItem("started") === "false") {
      localStorage.setItem("started", "true");
      axios
        .post("https://titanic.hop.sh/generate", JSON.parse(storyJson))
        .then((res) => {
          console.log(res.data.response);
          setStory(res.data.response.trimStart().split("\n"));
          setGenerating(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center text-center cursor-default text-white">
      {generating ? (
        <div className="mt-[30%] xl:mt-[5%] gap-6 w-[80%] xl:w-[80%] max-w-[1000px]">
          <motion.main
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-bold text-[24px] sm:text-[48px] drop-shadow-2xl"
          >
            Loading your titanic story...
          </motion.main>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="loader"
          ></motion.div>
        </div>
      ) : (
        <div className="mt-[30%] xl:mt-[5%] gap-6 w-[80%] xl:w-[80%] max-w-[1000px]">
          <motion.main
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
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
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="rounded-lg bg-[rgba(0,0,0,0.2)] p-8 flex flex-col items-center mt-[2rem] text-left whitespace-pre-line"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(0)
                  .changeDelay(20)
                  .typeString(story[0])
                  .start();
                for (let i = 1; i < story.length; i++) {
                  typewriter.pauseFor(1000).typeString("\n" + story[i]);
                }
              }}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
