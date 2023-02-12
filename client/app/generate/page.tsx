import Form from './Form';

export default function Generate() {
  return (
    <section className="w-full flex flex-col justify-center items-center text-center">
      <div className="text-white flex flex-col xl:flex-row items-center xl:items-start justify-around mt-[10%] mb-[4rem] xl:mt-[5%] gap-6 xl:gap-20 w-[80%] xl:w-[90%]">
        <div className='flex flex-col gap-4 xl:mt-[10%]'>
          <div className="font-bold text-[48px] text-white">
            Generate your story
          </div>
          <div className="text-[16px] sm:text-[24px] drop-shadow-2xl">
            Enter your information to create your own story on the Titanic.
          </div>
        </div>
        <Form />
      </div>
    </section>
  )
}