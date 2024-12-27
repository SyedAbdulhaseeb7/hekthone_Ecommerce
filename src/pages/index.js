import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="bg-black">  <Hero/></div>
  
    
    </>
    
  );
}
