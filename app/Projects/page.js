"use client"

import React from 'react'
import Header from '@/Components/Header'
import ProjectPoints from '@/Components/ProjectPoints'
import Footer from '@/Components/footer'
const page = () => {
  return (
    <>

      <div className='bg-gray-800 relative min-h-screen min-w-screen flex flex-col pb-[300px] pr-1 justify-center overflow-hidden' >

        
        <Header />

        <p className='text-white font-semibold font-mono w-14 text-4xl left-[-60px] ml-auto mr-auto top-[50px] relative'>PROJECTS</p>
        {/* <ProjectPoints Topic_name="" desc=" " /> */}



        <ProjectPoints Topic_name="IOT BASED FRAMEWORK DESIGN FOR AUTOMATED HUMAN EMOTION RECOGNITION." desc=" This project proposes a novel approach to identifying mental health issues in real-time through the use of physical changes such as sweat capacitance and heart rate. The project leverages cost-efficient and simple-to-arrange sensors, which can be integrated with smartphones and smartwatches to send alerts to medical professionals and families. The proposed model is based on the Internet of Medical Things (IoMT) and machine learning, which not only recognizes emotions but also predicts long-term depression risk through maintained databases. The integration of these technologies could lead to earlier and more accurate diagnosis, as well as better management of mental health conditions. Overall, this project has the potential to improve the lives of individuals with mental health issues and their families, and contribute to the growing field of digital health." download="https://drive.google.com/file/d/1TE00HpQJjqp0lCa0iCFVnuvph4n1KTdm/view?usp=sharing" />
        <br></br>
        
        
       
        <ProjectPoints Topic_name="AI ENABLED FINTECH B2B INVOICE MANAGEMENT APPLICATION" desc="
AI Enabled Fintech B2B Invoice Management Application helps companies automate tasks related to invoice processing. B2B means business to business transaction. In this ideal world, the buyer business should payback within the stipulated time which is the Payment Term. However the buyer business hardly or infrequently pays within their established time frame ." download="https://drive.google.com/file/d/16V-ytKUF5Edd2lrp3K3MyBYYb1a1VGTA/view?usp=sharing" />



       <Footer/>
      </div>

    </>
  )
}

export default page