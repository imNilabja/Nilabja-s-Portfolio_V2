    import React from 'react'
    import Link from 'next/link'
    const Header = () => {

        return (
            <>
                <div className='flex w-screen h-14 relative'>

                    <p className='w-[10rem] ml-10 mt-4 font-semibold text-red-500 italic font-serif'>Nilabja's Portfolio</p>

                    <div className=' italic font-serif flex justify-between w-[20rem] left-[40rem] relative text-white text-m mt-4'>
                            
                        
                    <Link href='app/page.js' className=''>Home</Link>
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
