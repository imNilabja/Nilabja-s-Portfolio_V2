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
        
        <div className='bg-red-600 flex-row justify-center sm:flex-row min-h-[50px] min-w-[350px] max-w-screen relative m-auto mt-10 p-[20px] mb-10'>
       
          <SkillCircle />
          <SkillCircle />

          <SkillCircle />

        

        </div>
      <Footer/>
      

    </div>
    
  </>
  )
}

export default page
