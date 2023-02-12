import Form from './Form';

export default function Generate() {
  return (
    <section className="w-full flex flex-col justify-center items-center text-center">
      <div className="text-white flex flex-col items-center mt-[10%] xl:mt-[5%] gap-6 w-[80%] xl:w-[50%]">
        <div className="font-bold text-[48px] text-white">
          Generate your story
        </div>
        <Form />
      </div>
      
    </section>
  )
}