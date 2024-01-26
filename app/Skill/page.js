"use client"

import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/footer'
import SkillCircle from '@/Components/SkillCircle'
const page = () => {
  return (
    <>
      
    <div className='bg-gray-800 relative min-h-screen min-w-screen flex flex-col pr-1 overflow-hidden'>
 
        <Header />
        
        <div className='flex-row justify-center sm:flex-row min-h-[50px] min-w-[100px] max-w-screen relative ml-4 mr-4 mt-10 p-[20px] mb-10'>
          {/* skill add template-><SkillCircle img="/Java-Logo.png" h="1000" w="1000" mt="8" desc=""/> */}
          

          <SkillCircle img="/Java-Logo.png" h="1000" w="1000" mt="[32px]" desc="Experienced in Java, I possess proficiency in Collection Frameworks and Data Structures & Algorithms (DSA), specializing in stack implementations. With a solid foundation, I've demonstrated adeptness in creating efficient and optimized solutions, contributing valuable expertise to Java-based projects. " />
          
          <SkillCircle img="/cpp.png" h="500" w="500" mt="[-10px]" desc="Experienced in C++ with a strong foundation in Standard Template Library (STL) and Data Structures and Algorithms (DSA) expertise, particularly in array manipulation. Proficient in utilizing STL containers and algorithms to efficiently solve complex problems and implement robust solutions. Adept at optimizing array-based operations for enhanced performance in diverse programming scenarios."/>

          

        

        </div>
      <Footer/>
      

    </div>
    
  </>
  )
}

export default page
