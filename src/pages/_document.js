import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import Link from "next/link";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
      <div className="container hidden  mx-auto lg:flex justify-between items-center py-4 px-6">
      <p className="text-yellow-700 text-xl font-bold">
              Food<span className="text-white">Truck</span>
            </p>
      <nav className="lg:block hidden">
        <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/ourmenu">Menu</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/ourchef">Chef</Link></li>
        <li><Link href="/aboutus">About</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/signin">SignIn</Link></li>
        </ul>
      </nav>
      <div className="flex gap-4 ">
      <h1><IoSearch className="text-whitetext text-[24px] cursor-pointer" /></h1>
      <h1><Link href={"/signup"}><PiUserBold className="text-whitetext text-[24px] cursor-pointer" /></Link></h1>
      <h1><Link href={"/cart"}><HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" /></Link> </h1>
      </div>
      </div>
      <div className="lg:hidden flex">    <Navbar /></div>
  
        <Main />

        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
