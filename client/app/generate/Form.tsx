"use client"

import axios from "axios";

export default function Form() {
  // FUNCTIONS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(''); // Put your server route here
  }

  return (
    <form action="POST" onSubmit={(e) => handleSubmit(e)} className="text-white flex flex-col w-[14rem]">
      <div className="">Name</div>
      <input type="text" className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 text-center"/>

      <div className="">Age</div>
      <input type="number" className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 text-center"/>
      
      <div className="">Number of Siblings & Spouses Traveling With</div>
      <input type="number" className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 text-center"/>
      
      <div className="">Number of Children/Parents</div>
      <input type="number" className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 text-center"/>
      
      <div className="">Fare Paid</div>
      <input type="number" className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 text-center"/>
      
      <div className="">Passenger Class</div>
      <input type="number" className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 text-center"/>
      
      <div className="">Gender</div>
      <input type="text" className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 text-center"/>
      
      <div className="">Embarking Location</div>
      <input type="text" className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 text-center"/>

      <button className="text-black bg-white px-3 py-2 rounded-md cursor-pointer mt-8">Submit</button>
    </form>
  )
}