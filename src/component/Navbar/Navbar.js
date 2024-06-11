import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { IoClose, IoMenu } from 'react-icons/io5'
import clsx from 'clsx'
import { Link } from 'react-scroll'
// const data = [
//   "Home",
//   "Program",
//   "About Us",
//   "Campus",
//   "Testimonials",
//   "Contact Us"

// ]
const Navbar = () => {
  const [MenuBar, setMenuBar] = useState(false);

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 700 ? setSticky(true) : setSticky(false);
    })
  }, []);
  return (

    <nav className={`text-white py-2 flex justify-around  position-fixed w-100 align-items-center top-0 left-0 z-[10]   ${sticky ? 'dark_bg' : ''}`}>
      <img className='w-[180px] ' src="edusity/logo.png" alt="" />
      <div className='d-flex gap-3 align-items-center' >
        <IoMenu size={40} className='lg:hidden' onClick={() => { setMenuBar(true) }} />
        <ul className='d-flex gap-5 '>
          {/* {data.map((values, index) => { */}
          <li className=' hidden lg:block'  style={{ listStyle: "none" }} ><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
          <li className=' hidden lg:block' style={{ listStyle: "none" }} ><Link to='Program' smooth={true} offset={-50} duration={500}>Program</Link></li>
          <li className=' hidden lg:block' style={{ listStyle: "none" }} ><Link to='About' smooth={true} offset={-120} duration={500}>About Us</Link></li>
          <li className=' hidden lg:block' style={{ listStyle: "none" }} ><Link to='Campus' smooth={true} offset={-50} duration={500}>Campus</Link></li>
          <li className=' hidden lg:block' style={{ listStyle: "none" }} ><Link to='Testimonials' smooth={true} offset={-70} duration={500}>Testimonials</Link></li>
          <li className=' hidden lg:block' style={{ listStyle: "none" }} ><Link to='Contact' smooth={true} offset={-50} duration={500}>Contact Us</Link></li>
          {/* })} */}
        </ul>
      </div>

      {/* mobile menu */}
      <div className={clsx('fixed h-full w-screen  bg-black/50 lg:hidden backdrop-blur-sm top-0 right-0 -translate-x-full',
        MenuBar && "translate-x-0"
      )}>
        <div className='text-white bg-[#212EA0] flex--cc  absolute left-0 top-0 h-screen  p-8 gap-9 z-50 flex w-50 '>
          <IoClose onClick={() => { setMenuBar(false) }} className='absolute top-0 right-0  text-[30px]  ' />
          <ul className='mt-5 ms-[40px] a_headers ' style={{transition:"0.5s"}}>
            {/* {data.map((values, index) => { */}
            <li   style={{ listStyle: "none" }} ><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
          <li  style={{ listStyle: "none" }} ><Link to='Program' smooth={true} offset={-50} duration={500}>Program</Link></li>
          <li  style={{ listStyle: "none" }} ><Link to='About' smooth={true} offset={-120} duration={500}>About Us</Link></li>
          <li  style={{ listStyle: "none" }} ><Link to='Campus' smooth={true} offset={-50} duration={500}>Campus</Link></li>
          <li  style={{ listStyle: "none" }} ><Link to='Testimonials' smooth={true} offset={-70} duration={500}>Testimonials</Link></li>
          <li  style={{ listStyle: "none" }} ><Link to='Contact' smooth={true} offset={-50} duration={500}>Contact Us</Link></li>
            {/* })} */}
          </ul>
        </div>
      </div>
      {/* <li><button className='px-[20px] py-[10px] bg-[#fff] text-dark rounded-full'>Contact Us</button></li> */}
    </nav>
  )
}

export default Navbar