import React from "react";
import Link from "next/link";
import Image from "next/image";

const Vote = ()=>{
    return(
        <div>
        <section  className="mt-[0.5rem] bg-[#020202] mx-auto pt-[3rem] pb-[3rem] text-white">
            <div className=" flex gap-10 md:gap-0 flex-col md:flex-row w-full items-center  justify-evenly">
                <div className=" wow slideInLeft">
                    <Image src = "/POLYGON.png" alt="landing-pageImg" height={300} width={600} />
                </div>
                <div className="md:w-[46%] w-[90%] justify-center">
                <p className="font-openSans mb-[1.2rem] text-[2.8rem] font-bold tex ">Check <span className=" text-[#ff69b4]">Eligibity</span> Status</p>
                    <p className="text-[1.3rem] mb-[1.2rem] font-medium text-gray-400">To be able to participate in this vote  there are criterials which you should meet. </p>
                    <ol  className="text-[1.1rem] mb-[1.2rem] font-normal text-[#ff69b4]">
                        <li className="mb-4"> <span className="text-gray-400">1.</span> You should be a holder of $NBUL token.</li>
                        <li> <span className="text-gray-400">2.</span>You must  stake atleast 50000 $NBUL token on <Link href='/' className="text-gray-400">BaptSwap</Link>.</li>
                    </ol>
                    <div className="flex  text-[1.2rem] font-medium  py-3 ">
                   <div className="bg-[#ff69b4] py-3 rounded text-white px-3 mr-3">
                    $NBUL Balance:
                   </div>
                   <div className="border border-white rounded-md text-white p-3 ">
                    50000
                    <span> $NBUL</span>
                   </div>
                    </div>
                    <p className="text-[1.3rem] mb-[1.2rem] font-normal text-gray-400">Click the button below to check if you are Eligible</p>
                    <div className="p-3 bg-[#ff69b4] hover:text-[#ff69b4] hover:bg-black rounded-md w-content cursor-pointer w-[20%] font-normal  hover:text-white border border-2 hover:border-[#ff69b4]">Click Me</div>
                </div>
            </div>
        </section>
        <section className="mt-[0.5rem]  mx-auto px pt-[3rem] pb-[3rem] text-white bg-black">
            <div className="flex flex-col md:flex-row px-5">
                <div className="md:w-1/2 bg-black">
                    <h2>Page 1</h2>
                    {/* Add the content for page 1 */}
                </div>
                <div className="md:w-1/2 bg-black">
                    <h2>Page 2</h2>
                    {/* Add the content for page 2 */}
                </div>
                </div>  
            </section>
        </div>
            
    )
}

export default Vote