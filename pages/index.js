import Navbar from './layout/Navbar';
import Hero from './layout/Hero';
import Vote from './layout/Vote';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <div>
    <Navbar/>
    </div>  
    <Hero/>
    <Vote/>
    </div>
    
  )
}
