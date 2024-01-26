import React from 'react'
import Image from 'next/image';


const SkillCircle = (props) => {
  const { img, w, h, mt, desc } = props
  return (
    <>


      <div className='flex justify-center flex-col sm:flex-row mr-auto ml-auto'>


        <div className='bg-orange-400 m-7 h-[220px] w-[220px] relative rounded-[200px] overflow-hidden mr-10'>
          <div className='m-auto min-h-[20px] min-w-[100px] '>
            <Image src={img} width={w} height={h} className={`justify-center mt-${mt}`}></Image>
          </div>

        </div>

        <div className='m-7 min-h-[180px] min-w-[200px] max-w-[450px] relative'>
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
