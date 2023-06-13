import Navbar from './layout/Navbar';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Navbar/>
    
    </div>
  )
}
