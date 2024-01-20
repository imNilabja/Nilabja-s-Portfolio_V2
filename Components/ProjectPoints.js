import React from 'react'

const ProjectPoints = (props) => {

    const { Topic_name, desc, download } = props
    console.log(download)
    return (
        <>
            <div className='bg-red-600 max-w-[950px] min-w-[10px] min-h-[100px] mr-auto relative ml-auto top-[100px] rounded-[25px] p-4 flex-col justify-center'>
                <p className='bg-orange-600 text-white font-semibold ml-auto mr-auto text-2xl max-w-[900px] min-h-[50px] py-3 px-4 rounded-[20px] relative'>
                    {Topic_name}
                </p>
                <br></br>

                <div className='bg-orange-600 text-white font-semibold mr-auto text-2xl max-w-[900px] min-h-[50px] py-3 px-4 rounded-[20px] relative'>
                    <span className='text-black'>
                        Description:
                    </span>
                    <br></br>
                    <div className='my-4'>


                        {desc}
                    </div>
                </div>
                <br></br>
                {download ? <a href={download} target="_blank"><button className='border border-black rounded-[20px] px-3 py-2 text-white font-bold bg-green-600'>View Report</button></a> : null}

            </div>

        </>
    )
}
export default ProjectPoints