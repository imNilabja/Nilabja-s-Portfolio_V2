import React from 'react'
import Link from 'next/link'
const Header = () => {

    return (
        <>
            <div className='flex w-screen h-14 relative'>

                <p className='w-[200px] ml-10 mt-4 font-semibold text-white italic font-serif'>Nilabja's Portfolio</p>

                <div className=' italic font-serif flex justify-between w-[350px] left-[600px] relative text-white text-m mt-4'>
                        
                    
                
                    <Link href='/Projects' className=''>Projects</Link>
                    <Link href='/Skill' className=''>Skills</Link>
                    <Link href='/About' className=''>About</Link>
                    <Link href='/Contact' className=''>Contact</Link>

                </div>



            </div>
        </>
    )
}

export default Header