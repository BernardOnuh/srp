import React from "react";
import Link from "next/link";
import Image from "next/image";

const Vote = ()=>{
    return(
        <section className="bg-black">
        <div className="mt-2  mx-auto pt-[8rem] text-white">
        <div className="flex gap-10 md:gap-0 flex-col md:flex-row w-full items-center justify-evenly">
                <div className="wow fadeInUp w-[90%] md:w-[50%]">
                    <p className="font-openSans mb-[1.2rem] text-[3.8rem] font-bold tex ">Stellar <span className=" text-[#ff69b4]">Redemption</span> Protocol</p>
                    <p className="text-[1.3rem] mb-[1.2rem] font-medium text-gray-400">Weekly polls are conducted, granting each member a single vote to determine the token that the SRP will acquire using the collected transaction taxes</p>
                    <div className="flex  text-[1.2rem] font-medium ">
                    <Link href="/">
                        <div className="p-2 bg-[#ff69b4] hover:text-[#ff69b4] hover:bg-black rounded-md mr-2 cursor-pointer  hover:text-white border border-2 hover:border-[#ff69b4]">
                            Buy $NBUL
                        </div>
                    </Link>
                    <a href="/">
                        <div className="p-2 border hover:border-[#ff69b4] hover:text-[#ff69b4] rounded-md mr-2 cursor-pointer">
                            Stake $NBUL
                        </div>
                    </a>
                    </div>
                </div>
                <div className=" wow slideInLeft ">
                    <Image src = "/nebulaEYE.png" alt="NebulaImg" height={5} width={350} />
                </div>
            </div>
            </div>
            </section>
    )
}

export default Vote