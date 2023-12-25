import {Button} from "@/components/ui/button";
import Link from 'next/link';
import Dash2 from "@/components/dash2";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
// 
export default function Home() {
  return (
  <><main className="flex min-h-screen flex-col align-center justify-between">
      <header className="w-full bg-[#ff6600]  text-white flex justify-start items-center ">
        <h1 className="text-lg font-bold border p-2">S</h1>
        <nav className="ml-4">
          <ul className="flex space-x-4 start-end inline-flex items-center justify-center whitespace-nowrap">
            <li>
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li>
            <Link href="/sign-up"><Button>Sign Up</Button></Link> 
            </li>
            <li>
            <Link href="/sign-in"><Button>Sign In</Button></Link>
              
            </li>
          </ul>
        </nav>
      </header>
    
      {/* <p className="text-3xl text-gray-500">hello from the AI app</p> */}
      
      <h1 className="text-center font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
        Welcome 
        </h1>
      <p className="text-xl text-gray-500 text-center">Where the creativity meets imagination</p>
	</main><Dash2/>
  <div className="min-h-screen flex flex-col md:flex-row">
  
  <div className="flex-1 flex items-center justify-center p-80">
    <div className="max-w-lg w-full">
      <h1 className="text-5xl font-bold mb-6">
        <span className="relative">
          Freelance
          <span className="absolute w-full h-1/3 bg-blue-400 bottom-0 left-0 z-[-1]"></span>
        </span>
        <br/>
        <span className="text-blue-400">Design Projects</span>
      </h1>
      <p className="text-lg text-gray-500 mb-6">
        The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="rounded-full bg-blue-400 text-white py-3 px-6 hover:bg-blue-500">
          Create Project
        </button>
        <button className="rounded-full border border-gray-400 py-3 px-6 hover:bg-gray-100">
          How It Works
        </button>
      </div>
    </div>
  </div>
</div>
  </>
  
  )
}

