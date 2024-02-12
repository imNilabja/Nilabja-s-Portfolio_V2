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

        <p className='text-white font-semibold font-mono w-14 text-4xl left-[-40px] ml-auto mr-auto top-[50px] mb-28 relative'>SKILLS</p>

        <div className='flex-row justify-center sm:flex-row min-h-[50px] min-w-[100px] max-w-screen relative ml-4 mr-4 mt-10 p-[20px] mb-10'>
          {/* skill add template-><SkillCircle img="/Java-Logo.png" h="1000" w="1000" mt="8" desc=""/> */}


          <SkillCircle img="/Java-Logo.png" h="1100" w="1100" mt="0" desc="Experienced in Java, I possess proficiency in Collection Frameworks and Data Structures & Algorithms (DSA), specializing in stack implementations. With a solid foundation, I've demonstrated adeptness in creating efficient and optimized solutions, contributing valuable expertise to Java-based projects. " />

          <SkillCircle img="/cpp.png" h="180" w="180" mt="0px" desc="Experienced in C++ with a strong foundation in Standard Template Library (STL) and Data Structures and Algorithms (DSA) expertise, particularly in array manipulation. Proficient in utilizing STL containers and algorithms to efficiently solve complex problems and implement robust solutions. Adept at optimizing array-based operations for enhanced performance in diverse programming scenarios." />

          <SkillCircle img="/next.png" h="180" w="180" mt="0px" desc="I am a beginner familiar with Next.js, a React framework. Eager to delve into its capabilities for building efficient and dynamic web applications. Excited to explore the fundamentals, leverage server-side rendering, and harness the power of React components to create seamless user experiences. Ready to embark on the journey of mastering Next.js and expanding my skills in web development." />

          <SkillCircle img="/c_lang.png" h="200" w="200" mt="50px" desc="I have knowledge of the C programming language, acquired during my college curriculum. I'm familiar with fundamental concepts, including variables, loops, functions, and data structures like trees. My understanding encompasses both theoretical concepts and practical applications. While I may not have exhaustive expertise, I possess a foundational understanding of C programming, providing a basis for further learning and application in software development." />
        
          <SkillCircle img="/tailwind.png" h="1000" w="1000" mt="8" desc="I'm proficient in Tailwind CSS, a utility-first CSS framework that enables rapid UI development with pre-defined classes. It streamlines styling by providing a comprehensive set of utility classes, allowing for efficient and maintainable code. With Tailwind, I can swiftly create responsive and customizable designs without the need for extensive CSS. Its flexibility empowers me to craft sleek interfaces tailored to specific project requirements, ensuring a seamless user experience." />

          <SkillCircle img="/RegEx.png" h="1000" w="1000" mt="8" desc="I possess expertise in regular expressions (regex), a powerful tool for pattern matching and text manipulation tasks. With regex, I can efficiently search, extract, and manipulate strings based on specific patterns. Whether it's parsing data, validating input, or replacing text, regex enables precise and flexible text processing, making it an indispensable skill in programming and data processing tasks." />

          <SkillCircle img="/bootstrap.png" h="1000" w="1000" mt="8" desc="I know Bootstrap, a popular front-end framework for building responsive and mobile-first websites. It provides pre-designed templates and components such as grids, buttons, and forms, simplifying web development. With its extensive documentation and flexibility, Bootstrap enables efficient creation of modern and visually appealing user interfaces." />


        </div>
        <Footer />


      </div>

    </>
  )
}

export default page
