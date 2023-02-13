"use client"

import Typewriter from 'typewriter-effect'

// interface Props {
//     story: string;
// }

export default function YourStory() {
    return(
        <div className="rounded-lg bg-[rgba(0,0,0,0.2)] py-8 px-16 text-[#ffffff] max-w-3xl">
            <h1 className='text-center font-bold text-xl pb-4 '>This is your lovely Titanic story</h1>
            <p>
                <Typewriter 
                    options={{
                        strings: "This is a string. Uncomment the interface Props above to pass a string to this component.This is a string. Uncomment the interface Props above to pass a string to this component.This is a string. Uncomment the interface Props above to pass a string to this component.This is a string. Uncomment the interface Props above to pass a string to this component.This is a string. Uncomment the interface Props above to pass a string to this component.This is a string. Uncomment the interface Props above to pass a string to this component.",
                        autoStart: true,
                    }}
                />
            </p>
            
        </div>
    )
}