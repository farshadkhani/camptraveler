import Camp from "@/components/Camp"
import Features from "@/components/Features"
import Guide from "@/components/Guide"
import Hero from "@/components/Hero"
import Getapp from "@/components/Getapp"
import  Image from "next/image"

export default function Home(){
    return(
        <>
          <Hero/>
          <Camp/>
          <Guide/>
          <Features/>
          <Getapp/>
          
        </>
    )
}