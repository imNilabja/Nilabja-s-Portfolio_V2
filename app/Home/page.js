"use client"
import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/footer'
import Main from '@/Components/main_pageContent'
import Image from 'next/image';

function page() {

  return (
    <>

      <div className='bg-gray-800 relative min-h-screen min-w-screen flex flex-col pr-1 overflow-hidden'>

        <Header />

       <Main/>
       <Footer/>
      </div>

    </>
  )
}

export default page
