import Image from 'next/image';

interface Props {
  name: string,
  linkedin: string,
  github: string,
  info: string,
  photo: string,
}

export default function Contributor({ name, linkedin, github, info, photo }: Props) {
  return (
    <div className="xl:w-[40rem] w-[20rem] h-auto text-[16px] flex flex-col xl:flex-row bg-[rgba(0,0,0,0.2)] rounded-xl shadow-lg">
      <Image className="xl:w-[30%] w-full auto rounded-xl object-cover" src={photo} alt="contact-image"  width={1000} height={1000}/>
      <div className="flex flex-col justify-between px-6 py-3 text-left">
        <figcaption className="flex flex-col gap-2">
          <div className="text-left font-bold text-[20px]">
              {name}
          </div>
          <div className="">
              {info}
          </div>
        </figcaption>
        <div className="flex gap-2 items-center mt-4">
          <a href={linkedin} target="_blank" rel="noreferrer" >
            <Image className="w-[24px] hover:ring-grey" src="/linkedin.svg" alt="linkedin-image" width={20} height={20} />
          </a> 
          <a href={github} target="_blank" rel="noreferrer" >
            <Image className="w-[24px]" src="/github.svg" alt="github-image" width={20} height={20} />
          </a> 
        </div>
      </div>
    </div>
  )
}



