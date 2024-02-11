import React from 'react'
import Link from 'next/link'
const Header = () => {

    return (
        <>
            <div className='flex min-w-[100px] h-14 relative'>

                <Link href='/Home' className='w-[200px] ml-5 mr-2 mt-5 font-semibold text-white italic font-serif'>
                    <p >Nilabja's Portfolio</p>
                </Link>
                
                <div className=' italic font-serif flex justify-evenly w-[450px] h-[60px] ml-auto mr-2 relative text-white text-m mt-2 py-3'>


                    <Link href='/Projects' className='my-1'>Project</Link>
                    <p className='mt-1'>|</p>
                    <Link href='/Skill' className='my-1'>Skills</Link>
                    <p className='mt-1'>|</p>
                    <Link href='/About' className='my-1'>About</Link>
                    <p className='mt-1'>|</p>
                    <Link href='/Contact' className='my-1'>Contact</Link>

                </div>



            </div>
        </>
    )
}

export default Header