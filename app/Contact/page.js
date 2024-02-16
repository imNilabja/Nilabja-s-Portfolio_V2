"use client"

import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/footer'
import Image from 'next/image';
const page = () => {
  return (
    <>

      <div className='bg-gray-800 relative min-h-screen min-w-screen flex flex-col pb-[300px] pr-1 justify-center overflow-hidden'>

        <Header />

        <p className='text-white font-semibold font-mono w-14 text-4xl left-[-40px] ml-auto mr-auto top-[50px] relative'>CONTACT</p>




        <form className='flex-col dire justify-evenly relative max-w-[550px] min-h-[100px] ml-auto mr-auto top-28'>
          <div className='flex justify-center ml-auto mr-auto'>
            <input type='text' placeholder='ENTER NAME' className='italic text-sm text-white thin min-w-[300px] max-w-[500px] bg-gray-800 border-2 border-yellow-500 rounded-[20px] p-2 ml-auto mr-auto mt-5 mb-5'></input>
          </div>
          <div className='flex justify-center ml-auto mr-auto '>
            <input type='text' placeholder='ENTER YOUR EMAIL' className='italic text-sm text-white thin min-w-[300px] max-w-[500px] bg-gray-800 border-2 border-yellow-500 rounded-[20px] p-2 ml-auto mr-auto mt-5 mb-5'></input>
          </div>
          <div className='flex justify-center ml-auto mr-auto '>
            <textarea placeholder='ENTER YOUR MESSAGE' className='italic text-sm text-white thin min-w-[300px] max-w-[500px] bg-gray-800 border-2 border-yellow-500 rounded-[20px] p-2 ml-auto mr-auto mt-5 mb-5'></textarea>
          </div>
          <div className='flex justify-center ml-auto mr-auto relative top-[20px] '>
            <button className='border border-black rounded-[20px] px-8 py-2 text-white font-bold bg-yellow-600'>SUBMIT</button>
          </div>



        </form>

        <div className=' text-white font-semibold ml-auto mr-auto text-2xl min-w-[20px] max-w-[900px] min-h-[50px] py-3 px-4 rounded-[20px] relative top-[300px] mb-12 justify-evenly'>
          {/* // */}

          <a href='https://www.linkedin.com/in/nilabjagoswami23/' target='_blank'>
            <button className=' max-h-[50px] m-3'>
              <div className='w-1 h-1'>
                <Image src="/linkedin.png" width={20} height={20} className='absolute mt-auto opacity-100 ' />
              </div>
            
            </button>
          </a>

          {/* // */}

          <a href='https://www.instagram.com/nilabja23/' target='_blank'>
            <button className='max-h-[50px] m-10'>
              <div className='w-1 h-1'>
                <Image src="/insta.png" width={20} height={20} className='absolute mt-auto opacity-100 ' />
              </div>
             
            </button>
          </a>
          {/* // */}
           
          <a href='https://github.com/imNilabja' target='_blank'>
            <button className='max-h-[50px] m-3'>
              <div className='w-1 h-1'>
                <Image src="/github.png" width={20} height={20} className='absolute mt-auto opacity-100 rounded-[30px]' />
              </div>
             
            </button>
          </a>


        </div>

        <Footer />
      </div>

    </>
  )
}

export default page
