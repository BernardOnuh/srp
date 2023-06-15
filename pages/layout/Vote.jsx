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
        <section className="mt-[0.5rem]  mx-auto px pt-[3rem] pb-[3rem] text-white">
        <div className="flex gap-10 md:gap-0 flex-col md:flex-row w-full items-center justify-evenly">
                <div className="wow fadeInUp w-[90%] md:w-[50%] px-14">
                <p className="font-openSans mb-[1.2rem] text-[2.8rem] font-bold tex "> <span className=" text-[#ff69b4]">VOTE</span> </p>
                    <p className="text-[1.3rem] mb-[1.2rem] font-medium text-gray-400">Weekly Voting. </p>
                    <div className="my-[1.2rem] rounded bg-[#ff69b4]">
                    <p className="text-white font-medium text-[1.2rem] p-5">
                        Eligible users would be able to cast their vote in the poll and help Nebula make the right decision.
                    </p>
                    <h3 className="text-white font-medium text-[1.3rem] px-5">Question</h3>
                    <p className="text-white font-normal text-[1.1rem] p-5">
                        Should we airdrop tokens to all holders ?
                    </p>

                    <div className=" flex justify-between p-5"><button className="font-bold text-white bg-gray-500 rounded-md w-40 h-10">Yes</button> <button className="font-bold text-white bg-gray-500 rounded-md w-40 h-10">No</button></div>
                    <button className="w-48 h-10 mb-5 mx-auto text-xl flex justify-center items-center font-bold text-white bg-black rounded-md">
                        2500:VOTED
                    </button>
                    </div>           
                   
                </div>
                   
                </div> 
            </section>
        </div>
            
    )
}

export default Vote