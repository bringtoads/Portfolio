import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

//this is a test to see if git is working  
const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='../assets/bgImage.JPG' alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/25'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:item-start items-center'>
                    <h1 className='smLtext-5xl text-4xl font-bold text-gray-800 '>I'm Ajay</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-black-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        < FaTwitter size={20} className='cursor-pointer' />
                        < FaFacebook size={20} className='cursor-pointer' />
                        < FaInstagram size={20} className='cursor-pointer' />
                        < FaLinkedinIn size={20} className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main