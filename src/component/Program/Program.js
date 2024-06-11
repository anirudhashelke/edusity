import React from 'react'
import './Program.css'
const Program = () => {
    const data=[
     {
        imgpth:"program-1.png",
        imgurl:"program-icon-1.png",
        title:"Graduation Degree"
     },
     {
        imgpth:"program-2.png",
        imgurl:"program-icon-2.png",
        title:"Master Degree"
     },
     {
        imgpth:"program-3.png",
        imgurl:"program-icon-3.png",
        title:"Post Graduation"
     },
    ]
  return (
    <section  className='container py-5 Program'>
        <div className='text-center mb-4'>
            <h6 className='text-[#212EA0] a_600 text-[14px]'>OUR PROGRAM</h6>
            <h5 className='text-[32px] text-[#000F38] mt-2'>What We Offer</h5>
        </div>
          <div className="row justify-center">
            {data.map(({imgpth,imgurl,title},index)=>{
                return <div key={index} className='col-12 col-md-3'>
                <div className='relative a_programs'><img src={`edusity/${imgpth}`}alt="" />
                <div  className='flex a_program '>
                    <img className='w-[60px] mx-auto' src={`edusity/${imgurl}`} alt="" />
                     <h1 className='text-center text-[16px]'>{title}</h1>
                </div>
                </div>
            </div>
            })}
            
          </div>
    </section>
  )
}

export default Program