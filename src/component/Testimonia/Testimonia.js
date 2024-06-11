import React, { useRef } from 'react'
import './Testimonia.css'

const data=[
       {
        imgpath:"user-1.png",
        name:"Amelia Sof",
        country:"Edusity, USA"
       },
       {
        imgpath:"user-2.png",
        name:"William Jockson",
        country:"Edusity, USA"
       },
       {
        imgpath:"user-3.png",
        name:"Emily Keria",
        country:"Edusity, USA"
       },
       {
        imgpath:"user-4.png",
        name:"Joun Rencho",
        country:"Edusity, USA"
       },
]
const Testimonia = () => {
    const slider=useRef();
     let tx = 0;
    const slideForward = ()=>{
       if(tx > -50){
        tx -= 25;
       }
       slider.current.style.transform=`translate(${tx}%)`
    }
    const slidebackward = ()=>{
        if(tx < 0){
            tx += 25;
           }
           slider.current.style.transform=`translate(${tx})`
    }
  return (
    <div className='container a_testimonia px-5 Testimonials'>
      <div className='text-center'>
      <h3 className='a_600 text-[16px] text-[#212EA0]'>TESTIMONIALS</h3>
      <h2 className='text-[32px] text-[#000f38] py-2'>What Student Says</h2>
      </div>
        <img  src="edusity/back-icon.png" alt="" className='back_btn' onClick={slideForward} />
        <img src="edusity/next-icon.png" alt="" className='next_btn' onClick={slidebackward} />
        <div className='slider'>
            <ul ref={slider} >
                {data.map(({imgpath,name,country},index)=>{
                    return  <li>
                    <div key={index} className='slide'>
                      <div className='flex gap-2 align-items-center a_testi'>
                        <img src={`edusity/${imgpath}`} alt=""  />
                        <div > 
                          <h3 className='text-[#212EA0] text-[16px] '> {name}</h3>
                          <span className='pb-2'>{country}</span>
                        </div>
                        </div>
                        <p className='text-[15px] pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iste ab, asperiores eveniet culpa sapiente nam incidunt. Expedita unde molestias, corrupti fugit sequi aut perferendis in voluptate reiciendis, tenetur ullam!</p>
                    </div>
                  </li>      
                })}
               
            </ul>
        </div>
    </div>
  )
}

export default Testimonia