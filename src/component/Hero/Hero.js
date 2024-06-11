import React from 'react'
import './Hero.css'
import { FaArrowRightLong } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='hero flex justify-center align-items-center text-center  '>
      <div className='w-50'>
        <h1 className='font-[600] py-3 text-[60px]'>We Ensure  better education for a better word</h1>
        <p style={{maxWidth:"700px", lineHeight:"1.4"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut laudantium,
           inventore quaerat iure nesciunt hic molestias iusto et explicabo incidunt, quae amet maxime
            eum nihil! Asperiores blanditiis iure quod maxime?</p>
            <button className='px-[25px] py-[13px] bg-[#fff] text-dark rounded-full my-3 flex  gap-2 align-items-center mx-auto  '>Explore More <FaArrowRightLong /></button>
      </div>
    </div>
  )
}

export default Hero