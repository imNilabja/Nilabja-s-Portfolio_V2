import React from 'react'
import Link from 'next/link'
const Header = () => {

    return (
        <>
            <div className='flex min-w-[100px] h-14 relative'>

                <p className='w-[200px] ml-10 mt-4 font-semibold text-white italic font-serif'>Nilabja's Portfolio</p>

                <div className=' italic font-serif flex justify-evenly w-[450px] h-[60px] ml-auto relative text-white text-m mt-2 py-3'>


                    <Link href='/Projects' className='my-2'>Project</Link>
                    <Link href='/Skill' className='my-2'>Skills</Link>
                    <Link href='/About' className='my-2'>About</Link>
                    <Link href='/Contact' className='my-2'>Contact</Link>

                </div>



            </div>
        </>
    )
}

export default Header