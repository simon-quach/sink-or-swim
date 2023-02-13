"use client"; // Turns component into client-side only

import Form from "./Form";
import Alert from "./Alert";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AlertState {
  show: boolean;
  message: string;
}

export default function Generate() {
  const [alert, setAlert] = useState<AlertState>({ show: false, message: "" });

  useEffect(() => {
    localStorage.setItem("started", "false");
  });

  return (
    <section className="w-full flex flex-col justify-center items-center text-center cursor-default">
      {alert.show && <Alert alert={alert} setAlert={setAlert}></Alert>}
      <div className="text-white flex flex-col xl:flex-row items-center xl:items-start justify-around mt-[10%] mb-[4rem] xl:mt-[5%] gap-6 xl:gap-20 w-[80%] xl:w-[90%]">
        <div className="flex flex-col gap-4 xl:mt-[10%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-bold text-[48px] text-white"
          >
            Generate your story
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-[16px] sm:text-[24px] drop-shadow-2xl"
          >
            Enter your information to create your own story on the Titanic.
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-full max-w-[800px]"
        >
          <Form setAlert={setAlert} />
        </motion.div>
      </div>
    </section>
  );
}
