import './home.css';


const Home = () => {

    return (
        <div id="home" className="w-full overflow-hidden">
            <div id="mission" className="flex items-center place-content-center space-x-[5%] pt-[18%] md:pt-[11%] pb-[7%]">
                <img className="w-[25%] ml-[5%]" src={require("../pictures/logo.png")} alt="2ofakind logo"/>
                <p className="text-black text-[3.5vw] md:text-[2.6vw] leading-[200%] w-[50%] md:w-[60%]">
                    Our goal is to provide our clients with affordable vending solutions.</p>
            </div>
            <div id="machines" className='bg-stone-600 pb-[5%] text-white'>
                <p className="text-black text-[2.5vw] md:text-[1.9vw] leading-[190%] w-[75%] md:w-[65%] ml-[7%] py-[5%] text-white">
                We give your employees and customers the vending choices they want while saving 
                money, increasing production, and keeping everyone happy. </p>
                <div id="catalog" className='my-[5%]'> 
                    <p className='ml-[7%] text-[3.5vw] md:text-[2.2vw] underline underline-offset-[60%] italic'>Timeline</p>
                    <div className='flex justify-center w-full my-[4%]'>
                        <img className="w-[75%] ml-[5%] py-[5%]" src={require("../pictures/timeline.png")} alt="machine timeline"/>
                    </div>
                    <p className="underline underline-offset-[60%] text-[3.5vw] md:text-[2.2vw] pb-[5%] ml-[7%]">Our Machines</p>
                    <div className='flex space-x-5 ml-[10%] w-full'>
                        <img className="w-[25%]" src="https://via.placeholder.com/275x275"alt="placeholder" />
                        <img className="w-[25%]" src="https://via.placeholder.com/275x275" alt="placeholder"/>
                        <img className="w-[25%]" src="https://via.placeholder.com/275x275" alt="placeholder"/>
                    </div>
                </div>
            </div>
            <div id="third_section" className='bg-white pb-[10%]'>
                <p className="text-black text-[2.5vw] md:text-[1.9vw] leading-[190%] w-[75%] md:w-[65%] ml-[7%] py-[8%] float-right text-right mr-[10%]">
                    We also provide healthy snack and beverage options specifically designed for your 
                    location or type of business. </p>
                <div className='flex space-x-5 ml-[10%] w-full'>
                    <img className="w-[25%]" src="https://via.placeholder.com/275x275" alt="placeholder"/>
                    <img className="w-[25%]" src="https://via.placeholder.com/275x275"alt="placeholder" />
                    <img className="w-[25%]" src="https://via.placeholder.com/275x275"alt="placeholder" />
                </div>
                <div id="fiverr_group" className='flex mt-[12%] items-center justify-center'>
                    <p className="text-black text-[2.9vw] md:text-[1.9vw] leading-[190%] w-[45%] md:w-[35%]">
                        Need help finding locations <br/> to place a vending machine? </p>
                    <a href="https://www.fiverr.com/s/xW9QjQ?utm_source=CopyLink_Mobile">
                        <button class="rounded-full bg-red-400 w-[150%] md:ml-[-45%] py-[10%]
                         mb-[20%] md:mb-0 text-[1.5vw] text-white">Create List</button>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Home