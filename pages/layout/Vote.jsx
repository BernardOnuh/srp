import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";


const Vote = ()=>{

    const [votesFor, setVotesFor] = useState(0);
    const [votesAgainst, setVotesAgainst] = useState(0);
    const [votesAbstain, setVotesAbstain] = useState(0);
  
    const handleVote = (option) => {
      // Increment the vote count for the selected option
      if (option === 'For') {
        setVotesFor(votesFor + 1);
      } else if (option === 'Against') {
        setVotesAgainst(votesAgainst + 1);
      } else if (option === 'Abstain') {
        setVotesAbstain(votesAbstain + 1);
      }
    };
  
    // Calculate the total number of votes
    const totalVotes = votesFor + votesAgainst + votesAbstain;
  
    // Calculate the percentage of votes for each option
    const percentageFor = (votesFor / totalVotes) * 100;
    const percentageAgainst = (votesAgainst / totalVotes) * 100;
    const percentageAbstain = (votesAbstain / totalVotes) * 100;
    return(
        <div>
        <section  className="mt-[0.5rem] px-10 bg-[#020202] mx-auto pt-[3rem] pb-[3rem] text-white">
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
        <section className="mt-[0.5rem]  mx-auto px-10 pt-[3rem] pb-[3rem] text-white">
            <div className="flex flex-col md:flex-row px-5">
                <div className="md:w-1/2  text-white">
                    <h2 className="text-3xl font-bold">VOTE</h2>
                    {/* Add the content for page 1 */}
                    <p >This is a section where you vote for this proposal........</p>
                </div>
                
                <div className="md:w-1/2 ">
                <div className="text-center">
          <p className="mb-3 text-2xl font-bold">People Voting</p>
          <div className="font-medium mx-3 text-xl">
                <div className="flex items-center pb-3">
                    <div className="w-24 mr-2">
                    <p className="text-sm text-left">For</p>
                    </div>
                    <div className="flex-grow h-2 bg-green-200 ">
                    <div className="h-full bg-green-500" style={{ width: `${percentageFor}%` }}></div>
                    </div>
                    <p className="ml-2">{percentageFor.toFixed(1)}%</p>
                </div>
                <div className="flex items-center pb-3">
                    <div className="w-24 mr-2">
                    <p className="text-sm text-left">Against</p>
                    </div>
                    <div className="flex-grow h-2 bg-red-200">
                    <div className="h-full bg-red-500" style={{ width: `${percentageAgainst}%` }}></div>
                    </div>
                    <p className="ml-2">{percentageAgainst.toFixed(1)}%</p>
                </div>
                <div className="flex items-center pb-3">
                    <div className="w-24 mr-2">
                    <p className="text-sm text-left">Abstain</p>
                    </div>
                    <div className="flex-grow h-2 bg-yellow-200">
                    <div className="h-full bg-yellow-500" style={{ width: `${percentageAbstain}%` }}></div>
                    </div>
                    <p className="ml-2">{percentageAbstain.toFixed(1)}%</p>
                </div>
                </div>
                </div>
                    <div className="px-5 border border-white py-5 rounded-md">
                     <div className="flex flex-col justify-center items-center mb-3">
                    <WalletConnector/></div>   
                
                        <div className="text-center flex flex-col justify-center items-center">
                         <p className="font-bold text-xl text-left mb-3"> Cast your vote</p>   
                        <button className="block py-2 font-medium border border-[#ff69b4] hover:border-white hover:text-white w-[60%] mb-3">For</button>
                        <button className="block py-2 font-medium border border-[#ff69b4] hover:border-white hover:text-white w-[60%] mb-3">Against</button>
                        <button className="block py-2 font-medium border border-[#ff69b4] hover:border-white hover:text-white w-[60%] mb-3">Abstain</button>
                        <button className="block py-2 font-medium border bg-[#ff69b4] hover:text-pink-500 hover:bg-white border-white hover:border-white hover:text-white w-[60%] mb-3 ">VOTE</button>
                        </div>
                    </div>
                </div>
                </div>  
            </section>
        </div>
            
    )
}

export default Vote