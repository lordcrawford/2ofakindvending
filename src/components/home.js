import './home.css';


const Home = () => {

    return (
        <div id="home" className="w-full overflow-hidden">

            <div id="first_section" className=" bg-black md:flex items-center place-content-center space-x-[5%] pt-[25%] md:pt-[11%] pb-[7%]">
                <img className=" w-[75%] md:w-[25%] ml-[5%]" src={require("../pictures/logo.png")} alt="2ofakind logo"/>
                <p className="text-white text-[5vw] md:text-[2.4vw] leading-[200%] w-[85%] md:w-[55%] py-[8%] md:py-0 pl-[10%] md:pl-0">
                    Our goal is to provide our clients with affordable vending solutions.</p>
            </div>

            <div id="second_section" className='bg-[#e8e8e8] pb-[5%] text-black'>
                <p className="text-[3.5vw] md:text-[1.7vw] leading-[190%] w-[90%] md:w-[62%] ml-[7%] py-[15%] md:pt-[4%] md:pb-0">
                We give your employees and customers the vending choices they want while <span className="underline decoration-blue-500 decoration-3 underline-offset-3">saving 
                money, increasing production, and keeping everyone happy.</span> We also provide healthy snacks and beverage options specifically designed for your location or type of business. </p>
                <div id="timeline" className='mt-[5%]'> 
                    <p className='ml-[7%] text-[4vw] md:text-[2.2vw] underline underline-offset-[60%] italic'>Timeline</p>
                    <div className='flex justify-center w-full my-[4%]'>
                        <img className="w-[95%] md:w-[70%] ml-[3%] py-[15%] md:py-[3%]" src={require("../pictures/timeline.png")} alt="machine timeline"/>
                    </div>
                </div>
            </div>

            <div id="third_section" className='bg-white pt-[15%] md:pt-[5%]'>
                <p className="underline underline-offset-[60%] text-[3.5vw] md:text-[2.2vw] pb-[5%] ml-[7%] italic">Our Machines</p>
                <div className='flex my-[8%] md:mt-0 ml-[6%] w-full'>
                    <div className='w-[25%]'>
                        <img className="w-[58%] ml-[20%]" src={require("../pictures/small_machine.png")} alt="Small Vending Machine"/>
                        <p className="image_title pt-[4%] text-[4vw] md:text-[2vw]">Smaller spaces</p>
                        <p className="image_description text-[2vw] md:text-[1vw] pt-[10%] md:pt-[5%]">SV 3000 <br></br> 29.3”FT Wide X 34.75”FT Deep x 72” FT High </p>
                    </div>
                    <div className="w-[25%] mr-[6%] ml-[4%]">
                        <img className="" src={require("../pictures/snacks_machine.png")} alt="Snacks Vending Machine"/>
                        <p className="image_title pt-[4%] text-[4vw] md:text-[2vw]">Snacks</p>
                        <p className="image_description text-[2vw] md:text-[1vw] pt-[10%] md:pt-[5%]">Crane National Vendor Model 167 <br/> 38.13”FT Wide X 32.25”FT Deep x 72” FT High </p>
                    </div>
                    <div className="w-[25%]">
                        <img className="" src={require("../pictures/drinks_machine.png")} alt="Drinks Vending Machine"/>
                        <p className="image_title pt-[4%] text-[4vw] md:text-[2vw]">Drinks</p>
                        <p className="image_description text-[2vw] md:text-[1vw] pt-[10%] md:pt-[5%]">CB500 Energy Star <br/> 31.5”FT Wide X 33.15”FT Deep x 72” FT High</p>
                    </div>
                </div>
            </div>

            <div id="fourth_section" className='bg-white pb-[12%]'>
                <div id="fiverr_group" className='flex mt-[15%] items-center justify-center w-full'>
                    <p className="text-black font-medium italic text-[3.3vw] md:text-[1.9vw] leading-[190%] w-[50%] md:w-[35%]">
                        Need help finding locations <br/> to place a vending machine? </p>
                    <a href="https://www.fiverr.com/s/xW9QjQ?utm_source=CopyLink_Mobile">
                        <button class="rounded-full bg-gradient-to-r from-red-700 to-blue-700 w-[150%] ml-[20%] md:ml-[-45%] py-[10%]
                         mb-[20%] md:mb-0 text-[2.5vw] md:text-[1.5vw] text-white">Create List</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Home