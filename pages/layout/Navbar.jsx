import Image from "next/image"
import Link from "next/link";
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { useRef } from "react"


const Navbar = () => {
  const navRef= useRef()
	const burgerRef = useRef()

  const handleClick=()=>{
		navRef.current.classList.toggle("showNav")
		burgerRef.current.classList.toggle("burgerNav")	
	}

  return (
    <header className="flex md:items-center md:w-[80%] w-[90%] justify-between text-white mx-auto">
      <div className="flex cursor-pointer font-instrumentSerif text-[1.7rem] items-center py-4 px-4">
        <Link href="/">
        <Image alt="Nebulalogo" src="/nebulaEYE.png" width={75} height={0.5} className="rounded-md" />
        </Link>
        <div className="font-bold px-4 text-3xl">
        <Image alt="Nebulalogo" src="/nebulaLOGO.png" width={200} height={30} className="rounded-md" />
        </div>
      </div>
      <nav ref={navRef} className="mainNav z-10 font-raleway bg-[#0C0C0C] md:bg-transparent flex flex-col md:flex-row md:w-[60%] md:leading-[1.5rem] leading-[5rem] text-center items-center">
        <ul className=" md:flex-1 md:justify-evenly font-semibold flex flex-col md:flex-row cursor-pointer">
          <li className="hover:text-[#ff69b4]">Home</li>
          <li className="hover:text-[#ff69b4]">Vote</li>
          <li className="hover:text-[#ff69b4]">Faqs</li>
       
            
        </ul>
        <div className="flex justify-center md:justify-evenly md:pb-0 pb-5 ">
          <div className="px-5">
          <Link href=''>
          <FaTwitter className="w-5 h-5"/>
          </Link>
          </div>
          <div className="px-5">
          <Link href=''>
          <FaTelegram className="w-5 h-5"/>
          </Link>
          </div>
        </div>
        <div className="">
        <WalletConnector></WalletConnector>
        </div>
      </nav>
      <div onClick={handleClick}  ref={burgerRef} className="pt-10 pr-4 space-y-1 block md:hidden z-[999] fixed right-0">
        <svg width="21" className=" " height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </header>
  )
}

export default Navbar