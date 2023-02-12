import Contributor from "./Contributor";

export default function About() {
  const contacts = [
    {
      name: 'Bill Zhang',
      linkedin: 'https://www.linkedin.com/in/bill-zhang-57976b1b3/',
      github: 'https://github.com/IdkwhatImD0ing',
      info: 'B.S. in Computer Science at UC Santa Cruz',
      photo: "/bill.jpg",
    },
    {
      name: 'Simon Quach',
      linkedin: 'https://www.linkedin.com/in/simon-quach/',
      github: 'https://github.com/simon-quach',
      info: 'B.S. in Mathematics at Orange Coast College',
      photo: "/simon.jpg",
    },
    {
      name: 'Trique Nguyen',
      linkedin: 'https://www.linkedin.com/in/trique-nguyen/',
      github: 'https://github.com/triquenguyen',
      info: 'B.S. in Software Engineering at San Jose State University',
      photo: "/trique.jpg",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center text-center">
      <div className="text-white flex flex-col items-center mt-[10%] mb-[4rem] xl:mt-[5%] mx-[10%] gap-6 ">
        <div className="font-bold text-[48px] text-white">
          About Us
        </div>
        <div>
          We are thriving students with a passion for developing tools to help the world!
        </div>

        <div className="flex flex-wrap justify-center w-[100%] gap-10">
          {contacts.map((contact, index) => (
            <Contributor
              name={contact.name}
              linkedin={contact.linkedin}
              github={contact.github}
              info={contact.info}
              photo={contact.photo}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}