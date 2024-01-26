import React from 'react'

const footer = (props) => {
  const { deep } = props
  return (
    <>
      
      {/* <div>
        <img src='/icons/icons8-linked-in-500.png'></img>
      </div> */}
          <div className={`absolute bottom-[0px] left-0 right-0 flex items-center justify-center min-w-screen p-2`}>
              <p className='text-white text-[8.5px]'>© 2023 | All rights reserved:ImNilabja </p>  
              
           

      </div>
    </>
  )
}

export default footer
