import React from 'react'
import './About.css'
const About = ({setPlay}) => {
  return (
    <div className='container my-4  About'>
        <div className="row justify-center align-items-center gap-3">
            <div className='col-12 col-md-5 a_about'>
                <img src="edusity/about.png" alt="" style={{borderRadius:"10px"}} />
                <img onClick={()=>{setPlay(true)}} className='a_about_icons' src="edusity/play-icon.png" alt="" />
            </div>
            <div className='col-12 col-md-6 a_about_bottom'>
                <h3 className='a_600 text-[16px] text-[#212EA0]'>ABOUT UNIVERSITTY</h3>
                <h2 className='text-[32px] text-[#000f38] py-2'>Nurturing Tomorrow <br /> Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, vel vero ex quis molestiae libero id itaque harum, quae quisquam ad iusto cum veniam soluta mollitia rerum non dolores!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, vel vero ex quis molestiae libero id itaque harum, quae quisquam ad iusto cum veniam soluta mollitia rerum non dolores!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, vel vero ex quis molestiae libero id itaque harum, quae quisquam ad iusto cum veniam soluta mollitia rerum non dolores!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis, vel vero ex quis molestiae libero id itaque harum, quae quisquam ad iusto cum veniam soluta mollitia rerum non dolores!</p>
                
            </div>
        </div>

    </div>
  )
}

export default About