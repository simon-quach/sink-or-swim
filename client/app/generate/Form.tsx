"use client"; // Turns component into client-side only

import axios from "axios";
import { useState } from "react";
import Select from "./Select";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  setAlert: (alert: boolean) => void;
}

export default function Form({ setAlert }: Props) {
  // STATES
  const router = useRouter();
  // States for the select components
  const [passengerClass, setPassengerClass] = useState({
    display: "Select your passenger class..",
    value: "",
  });
  const [sex, setSex] = useState({ display: "Select your sex..", value: "" });
  const [location, setLocation] = useState({
    display: "Select your embarking location..",
    value: "",
  });

  // FUNCTIONS

  // Handles the form submission & sends the data to the server
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Checks to see if any of the fields are empty
    if (
      !(
        (form[0] as HTMLInputElement).value &&
        (form[1] as HTMLInputElement).value &&
        (form[2] as HTMLInputElement).value &&
        (form[3] as HTMLInputElement).value &&
        (form[4] as HTMLInputElement).value &&
        (form[5] as HTMLInputElement).value &&
        (form[6] as HTMLInputElement).value &&
        passengerClass.value &&
        sex.value &&
        location.value
      )
    ) {
      setAlert(true);
      return;
    }

    // Creates an object with the data from the form
    let data = {
      name: (form[0] as HTMLInputElement).value,
      age: (form[1] as HTMLInputElement).value,
      siblings: (form[2] as HTMLInputElement).value,
      spouses: (form[3] as HTMLInputElement).value,
      children: (form[4] as HTMLInputElement).value,
      parents: (form[5] as HTMLInputElement).value,
      fare: (form[6] as HTMLInputElement).value,
      passengerClass: passengerClass.value,
      sex: sex.value,
      embarkingLocation: location.value,
      survived: "",
      rate: -1,
    };
    axios
      .post("https://titanic.hop.sh/predict", data)
      .then((res) => {
        // Generate random float between 0 and 1
        const random = Math.random();
        // If the random float is less than res.data.prediction, the passenger survived
        if (random < res.data.prediction) {
          data.survived = "survived";
          data.rate = res.data.prediction;
          localStorage.setItem("data", JSON.stringify(data));
          router.push("/story");
          return;
        } else {
          data.survived = "perished";
          data.rate = res.data.prediction;
          localStorage.setItem("data", JSON.stringify(data));
          router.push("/story");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      action="POST"
      onSubmit={(e) => handleSubmit(e)}
      className="text-[#ffffff] flex flex-col gap-2 bg-[rgba(0,0,0,0.2)] p-8 rounded-lg w-full max-w-[800px] text-left"
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="font-bold">Name</div>
        <input
          type="text"
          placeholder="Your name.."
          className="bg-[rgba(0,0,0,0.2)] w-full border-[2px] border-[rgba(0,0,0,0)] focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Age</div>
        <input
          type="number"
          placeholder="Your age.."
          className="bg-[rgba(0,0,0,0.2)] w-full border-[2px] border-[rgba(0,0,0,0)] focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Number of Siblings On Board</div>
        <input
          type="number"
          placeholder="Siblings on board.."
          className="bg-[rgba(0,0,0,0.2)] w-full border-[2px] border-[rgba(0,0,0,0)] focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Number of Spouses On Board</div>
        <input
          type="number"
          placeholder="Spouses on board.."
          className="bg-[rgba(0,0,0,0.2)] w-full border-[2px] border-[rgba(0,0,0,0)] focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Number of Children On Board</div>
        <input
          type="number"
          placeholder="Children on board.."
          className="bg-[rgba(0,0,0,0.2)] w-full border-[2px] border-[rgba(0,0,0,0)] focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Number of Parents On Board</div>
        <input
          type="number"
          placeholder="Parents on board.."
          className="bg-[rgba(0,0,0,0.2)] w-full border-[2px] border-[rgba(0,0,0,0)] focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Fare Paid</div>
        <input
          type="number"
          placeholder="Your fair paid.."
          className="bg-[rgba(0,0,0,0.2)] w-full border-[2px] border-[rgba(0,0,0,0)] focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Passenger Class</div>
        <Select
          value={passengerClass}
          setValue={setPassengerClass}
          options={["1", "2", "3"]}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.9,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Sex</div>
        <Select value={sex} setValue={setSex} options={["Male", "Female"]} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full"
      >
        <div className="font-bold">Embarking Location</div>
        <Select
          value={location}
          setValue={setLocation}
          options={["Southampton", "Cherbourg", "Queenstown"]}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 2.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-blue-500 bg-white w-full transition-colors duration-200 font-bold px-3 py-2 rounded-md cursor-pointer mt-8"
        >
          Submit
        </motion.button>
      </motion.div>
    </form>
  );
}
