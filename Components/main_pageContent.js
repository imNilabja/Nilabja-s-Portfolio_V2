import React from 'react'
import Image from 'next/image';

const main_pageContent = () => {
  return (
    <>
      <div className='w-[600px] mr-auto h-[400px] ml-auto relative flex-col justify-center'>


        <div className=' text-white font-semibold text-4xl relative left-1 ml-auto mr-auto top-40 p-2 mt-5 italic font-serif z-50'>Hi, I am Nilabja
          <br></br>
          <div className='text-xl font-thin'>A Software Engineer</div>
        </div>
        <Image src="/coding.png" width={500} height={500} className='absolute top-[-10px] mt-auto w-full opacity-20 rounded-xl' />
        <div className='w-52 h-52 relative left-[550px] top-[250px]'>
          <Image src="/tag.png" width={500} height={500} className='absolute top-[-10px] mt-auto w-full opacity-15 rounded-xl' />

        </div>
      </div>
    </>
  )
}

export default main_pageContent
