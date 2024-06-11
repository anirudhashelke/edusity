import React from 'react'
import './Contact.css'
import { FaArrowRightLong } from 'react-icons/fa6'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "47953d88-2298-4636-8353-54b609913fcd");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='container my-5 Contact'>
        <div className='text-center'>
        <h3 className='a_600 text-[16px] text-[#212EA0]'>Contact</h3>
        <h2 className='text-[32px] text-[#000f38] py-2'>Campus</h2>
        </div>
        <div className="row mt-5 justify-center gap-5">
            <div className='col-12 col-md-5'>
                <div className='text-[#676767]'>
                <h3 className='flex gap-2 text-[25px] text-[#000F38] a_500 m'>Send as a message <img className='w-[35px]' src="edusity/msg-icon.png" alt="" /></h3>
                    <p className='text-[15px] my-3'>Feel free to reach out through contact form or fine ore contact information below Your feedback,questions,and 
                        suggession are important to  us as  we  strive to provide
                         exceptional server to our university community </p>
                         <ul className='a_contact'>
                            <li><img src="edusity/mail-icon.png" alt="" />  Contact@GreatStack.dev</li>
                            <li><img src="edusity/phone-icon.png" alt="" />  +1 123-345-6788</li>
                            <li><img src="edusity/location-icon.png" alt="" />  77 Massachusetts  Ave, combridge <br /> MA 02234,United States</li>
                           
                         </ul>
                </div>
            </div>
            <div className='col-12 col-md-5'>
                <div>
                    <form onSubmit={onSubmit} >
                       <div className='mb-3'>
                       <label htmlFor="Your name">Your name</label><br />
                       <input type="text" name='name' placeholder='Enter your name' required />
                       </div>
                       <div className='mb-3'>
                       <label htmlFor="Phone Number">Phone Number</label><br />
                       <input type="tel" name='phone' placeholder='Enter Phone Number' required />
                       </div>
                      <div>
                      <label htmlFor="message">Write your message here</label><br />
                      <textarea className='p-2' name="message" rows={6} placeholder='Enter your message' required></textarea>
                      </div>
                      <button type='submit' className='px-[25px] py-[13px] bg-[#212EA0] text-[#fff] rounded-full my-3 flex  gap-2 align-items-center  '>Submit <FaArrowRightLong /></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact