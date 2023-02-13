"use client"; // Turns component into client-side only

import Contributor from "./Contributor";
import { motion } from "framer-motion";

export default function About() {
  const contacts = [
    {
      name: "Bill Zhang",
      linkedin: "https://www.linkedin.com/in/bill-zhang-57976b1b3/",
      github: "https://github.com/IdkwhatImD0ing",
      info: "B.S. in Computer Science at UC Santa Cruz",
      photo: "/bill.jpg",
    },
    {
      name: "Simon Quach",
      linkedin: "https://www.linkedin.com/in/simon-quach/",
      github: "https://github.com/simon-quach",
      info: "B.S. in Mathematics at Orange Coast College",
      photo: "/simon.jpg",
    },
    {
      name: "Trique Nguyen",
      linkedin: "https://www.linkedin.com/in/trique-nguyen/",
      github: "https://github.com/triquenguyen",
      info: "B.S. in Software Engineering at San Jose State University",
      photo: "/trique.jpg",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center text-center cursor-default">
      <div className="text-white flex flex-col items-center mt-[10%] mb-[4rem] xl:mt-[5%] mx-[10%]">
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
          About Us
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="mt-[1rem]"
        >
          We are thriving students with a passion for developing tools to help
          the world!
        </motion.div>

        <div className="flex flex-wrap justify-center w-[100%] gap-10 mt-[4rem]">
          {contacts.map((contact, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 1 + index * 0.5, // This is insane big brain math for the staggered animations
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={index}
            >
              <Contributor
                name={contact.name}
                linkedin={contact.linkedin}
                github={contact.github}
                info={contact.info}
                photo={contact.photo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
