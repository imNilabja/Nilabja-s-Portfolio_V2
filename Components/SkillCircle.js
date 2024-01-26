import React from 'react'
import Image from 'next/image';


const SkillCircle = (props) => {
  const { img, w, h, mt, desc } = props
  return (
    <>


      <div className='flex justify-center flex-col sm:flex-row mr-auto ml-auto'>


        <div className=' m-7 h-[220px] w-[220px] relative justify-center rounded-[200px] top-[-20px] mr-10'>
          <div className='min-h-[60px] min-w-[150px] relative top-10'>
            <Image src={img} width={w} height={h} className={`relative top-[${mt}]`}></Image>
          </div>

        </div>

        <div className='m-7 min-h-[180px] min-w-[200px] max-w-[450px] relative top-[20px]'>
          <div className='m-auto min-h-[20px] min-w-[100px] p-3 text-white font-semibold'>
            {desc}
          </div >
        </div>

      </div>


      <br></br>
      <br></br>


    </>
  )
}

export default SkillCircle
