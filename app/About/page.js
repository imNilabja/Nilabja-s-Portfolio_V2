"use client"

import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/footer'
const page = () => {
  return (
    <>
      
    <div className='bg-gray-800 relative min-h-screen min-w-screen flex flex-col pb-[300px] pr-1 justify-center overflow-hidden'>

        <Header />
        <p className='text-white font-semibold font-mono w-14 text-4xl left-[-40px] ml-auto mr-auto top-[50px] mb-28 relative'>ABOUT</p>
      <p className=' border-s-white text-yellow-200 font-semibold ml-auto mr-auto text-lg min-w-[40px] max-w-[900px] min-h-[50px] py-3 px-4 rounded-[20px] relative'>
      Hello! I'm Nilabja Nayan Goswami, a passionate and driven individual with a keen interest in technology and innovation. Currently pursuing my B.Tech in Electronics & Telecommunication Engineering from Kalinga Institute of Industrial Technology, I thrive on challenges that push me to explore new horizons.

With a solid foundation in web development, data structures, algorithms, and object-oriented programming, I am adept at leveraging languages such as Java, C/C++, and JavaScript to create robust and efficient solutions. My technical toolkit includes Next.js, ReactJS, Bootstrap, TailwindCSS, Postman, Git, and Github, among others.

I've had the privilege of gaining hands-on experience through internships, including my current role as a Intelligent Automation Intern at PWC India, where I utilize AI algorithms to optimize workflows and integrate machine learning models for predictive maintenance. Prior to this, I honed my skills at HighRadius Technologies, developing ARPA software bots for process automation.

Outside of academics and work, I've contributed to impactful projects like an IoT-based framework for automated human emotion recognition and an AI-enabled fintech B2B invoice management application. These experiences have shaped me into a versatile problem-solver with a penchant for innovation and continuous learning.
        </p>

      <Footer/>

    </div>
    
  </>
  )
}

export default page
