"use client"

import axios from "axios";

export default function Form() {
  // FUNCTIONS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    let data = {
      name: (form[0] as HTMLInputElement).value,
      age: (form[1] as HTMLInputElement).value,
      siblings: (form[2] as HTMLInputElement).value,
      spouses: (form[3] as HTMLInputElement).value,
      children: (form[4] as HTMLInputElement).value,
      parents: (form[5] as HTMLInputElement).value,
      fare: (form[6] as HTMLInputElement).value,
      passengerClass: (form[7] as HTMLInputElement).value,
      sex: (form[8] as HTMLInputElement).value,
      embarkingLocation: (form[9] as HTMLInputElement).value,
    }
    console.log(data);
    axios.post("http://localhost:5000/predict", data).then((res) => {
      console.log(res);
    })
  }

  return (
    <form action="POST" onSubmit={(e) => handleSubmit(e)} className="text-[#ffffff] flex flex-col gap-2 bg-[rgba(0,0,0,0.2)] py-4 px-8 rounded-lg w-full max-w-[800px] text-left">
      <div className="">Name</div>
      <input type="text" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>

      <div className="">Age</div>
      <input type="number" placeholder="Your age.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>
      
      <div className="">Number of Siblings On Board</div>
      <input type="number" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>
      
      <div className="">Number of Spouses On Board</div>
      <input type="number" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>
      
      <div className="">Number of Children On Board</div>
      <input type="number" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>
      
      <div className="">Number of Parents On Board</div>
      <input type="number" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>

      <div className="">Fare Paid</div>
      <input type="number" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>
      
      <div className="">Passenger Class</div>
      <input type="number" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>
      
      <div className="">Gender</div>
      <input type="text" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>
      
      <div className="">Embarking Location</div>
      <input type="text" placeholder="Your name.." className="bg-[rgba(0,0,0,0.2)] border-[2px] border-[rgba(0,0,0,0)] focus:ring-violet-500 focus:border-violet-500 focus:outline-none text-sm rounded-lg block p-3 mt-1"/>

      <button className="text-black bg-white px-3 py-2 rounded-md cursor-pointer mt-8">Submit</button>
    </form>
  )
}