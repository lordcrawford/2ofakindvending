import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div id="contact" className='pt-[30%] md:pt-[13%] w-full overflow-hidden'>
        <div id="email info" className='text-[7vw] md:text-[2vw] ml-[10%] italic'>   
            <span>Contact us at: </span>
        </div>
        <div className='mt-[13%] md:mt-[5%] ml-[13%] text-[5.5vw] md:text-[1.5vw] italic'>
            <a className="underline decoration-blue-500 decoration-2" 
                href="mailto:2ofakindvending@gmail.com">2ofakindvending@gmail.com</a>
            <p className='mt-[2%]'>+1-(646)-269-9103</p>
            
            <div id="instagram" className='mt-[15%] md:mt-[5%] flex items-center'>
                <img className="w-[8%] md:w-[3%] mr-[4%] md:mr-[1%]" src={require("../pictures/instagram.png")} alt="ig logo"/>
                <a href="https://www.instagram.com/2ofakindvendingllc/">@2ofakindvendingllc</a>
            </div>
            <div id="facebook" className='mt-[3%] flex items-center'>
                <img className="w-[8%] md:w-[3%] mr-[4%] md:mr-[1%]" src={require("../pictures/facebook.png")} alt="facebook logo"/>
                <a href="https://www.facebook.com/people/2ofakind-vending-LLC/100077169247923/">2ofakind Vending LLC</a>
            </div>
        </div>

    </div>
  );
}

export default Contact;