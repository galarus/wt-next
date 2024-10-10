import Image from "next/image";
import { Quicksand, Forum } from 'next/font/google'
import {Button} from "@nextui-org/react";
import {  SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const quicksand = Quicksand({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-quicksand'
})
const forum = Forum({
  weight: '400',
  variable: '--font-forum',
  subsets: ['latin'],
  //display: 'swap'
})

export default function Home() {
  return (
    <div className="w-[1920px] h-[1080px] relative bg-white">
      <div className="w-[1920px] h-[121px] top-0 left=0 absolute bg-black/45"> 
       <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
      <Image alt="Hero Image" height={1080} width={1920}
        src={"/hero_cropped.png"} />
      <div className="w-[893px] h-[662px] left-[88px] top-[240px] absolute bg-gradient-to-b from-black/40 via-black/5 to-black/40" />
      <div className="w-[1536px] h-[1080px] left-[170px] top-0 absolute">
        <div className="w-[1536px] h-[130px] left-0 top-[950px] absolute" />
        <div className="w-[1536px] h-[820px] left-0 top-[130px] absolute">
          <div className="w-[779px] p-5 left-0 top-[400px] absolute bg-white/10 rounded-[10px] backdrop-blur justify-start items-center gap-2.5 inline-flex">
            <div className="w-[758px] text-white text-2xl font-semibold font-quicksand">A new virtual tabletop. <br />
              <br />Voice and video chat with friends, share your screen, and explore a breadth of plugins to enhance your experience.<br /><br />Play board games, delve dungeons, or simply hang out in a customized room.</div>
          </div>
          <div className={`w-[662px] h-[156px] left-0 top-[209px] absolute text-white text-9xl ${forum.className}`}>Wyrm Table</div>
          <div className={`w-[463px] h-20 left-0 top-[137px] absolute text-white text-[40px] font-light ${quicksand.className}`}>welcome, wanderer, to...</div>
        </div>
        <div className="w-[1618px] h-[196px] left-[-61px] top-[32px] absolute" >
          <div className="w-[202px] h-[52px] left-[229px] top-[7px] absolute text-white text-2xl font-bold font-quicksand">About</div>
          <div className="w-[226px] h-[52px] left-[431px] top-[7px] absolute text-white text-2xl font-bold font-quicksand">Blog</div>
          <div className="w-[200px] h-[52px] left-[599px] top-[7px] absolute text-white text-2xl font-bold font-quicksand">Contact</div>
        <div className="w-[200px] left-[1550px] h-[52px] top-[7px] absolute text-white text-2xl font-bold font-quicksand">Profile</div>
        </div>
        <Image src="/blueorb.png"
          width={204} height={204} alt="home logo"
          className="left-[-82px] top-[-40px] absolute"
        />
      </div>
   <Button color="warning" variant="shadow" size='lg' className='left-[700px] top-[820px] absolute font-quicksand font-medium leading-loose' >
        ENTER
      </Button>  
    
    </div>
  );
}
