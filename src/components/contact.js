import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div id="contact" className='pt-[20%] md:pt-[13%] w-full overflow-hidden'>
        <div id="email info" className='text-[2vw] ml-[10%]'>   
            <span>Contact us at: </span>
        </div>
        <div className='mt-[5%] ml-[13%] text-[1.5vw] italic'>
            <a className="underline decoration-blue-500 decoration-2" 
                href="mailto:2ofakindvending@gmail.com">2ofakindvending@gmail.com</a>
            <div id="instagram" className='mt-[5%] flex items-center'>
                <img className="w-[3%] mr-[1%]" src={require("../pictures/instagram.png")} alt="ig logo"/>
                <a href="https://www.instagram.com/2ofakindvendingllc/">@2ofakindvendingllc</a>
            </div>
        </div>

    </div>
  );
}

export default Contact;