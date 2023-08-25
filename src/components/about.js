import React from 'react';
import './about.css';

function Navbar() {
  return (
    <div id="about" className=''>
            <div id="about_paragraph" className="flex pt-[30%] md:pt-[10%] w-full overflow-hidden items-center place-content-center space-x-[5%]">
                    <img className="hidden md:block w-[22%] ml-[5%]" src={require("../pictures/logo.png")} alt="2ofakind logo"/>
                    <p className="text-black text-[3.8vw] md:text-[1.2vw] leading-[200%] w-[80%] md:w-[45%]">
                        2ofaKind Vending is your full-service vending company located in New York City.
                         We provide top-notch service to our clients throughout the 5 boroughs. 
                         2ofaKind Vending is a fully-insured and locally owned family business that 
                         puts our client's interest first. We offer:
                        <ul className='list-disc ml-[5%] mt-[3%]'>
                            <li>Wide selection of name-brand popular snacks, beverages, foods, and healthy snacks</li>
                            <li>Excellent service and fast response time</li>
                            <li>Customized menu to meet your organization's unique needs</li>
                        </ul>
                    </p>
            </div>
            <div id="team" className=' mt-[10%] md:mt-[3%]'>
                    <div className='flex space-x-5 justify-center mt-[2%]'>
                        <div className="w-[20%]">
                            <img className="w-[100%]" src="https://via.placeholder.com/275x275" alt="placeholder"/>
                            <p>Adam Toro</p>
                        </div>
                        <div className="w-[20%]">
                            <img className="w-[100%]" src="https://via.placeholder.com/275x275" alt="placeholder" />
                            <p>Liandry Suarez</p>
                        </div>
                    </div>
            </div>

    </div>
  );
}

export default Navbar;