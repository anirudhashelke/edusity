import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Campus = () => {
    const data = [
        "gallery-1.png",
        "gallery-2.png",
        "gallery-3.png",
        "gallery-4.png",
    ]
    return (
        <div className='container my-5 Campus'>
            <div className='text-center pt-5'>
                <h3 className='a_600 text-[16px] text-[#212EA0]'>Gallery</h3>
                <h2 className='text-[32px] text-[#000f38] py-2'>Campus Photos</h2>
                <div className="row">
                    {data.map((values, index) => {
                        return <div key={index} className='col-12 col-md-3 pt-5 pb-4 a_campus'>
                            <div><img className='w-[100%]' style={{borderRadius:"10px"}} src={`edusity/${values}`} alt="" /></div>
                        </div>
                    })}

                </div>
            </div>
            <button className='px-[25px] py-[13px] bg-[#212EA0] text-[#fff] rounded-full my-3 flex  gap-2 align-items-center mx-auto  '>Explore More <FaArrowRightLong /></button>
        </div>
    )
}

export default Campus