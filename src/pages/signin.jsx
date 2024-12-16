import Image from "next/image";
import Link from "next/link";
import { SlEnvolope } from "react-icons/sl";
import { IoIosCheckbox } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
   

      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/ripe-products-colored-vitamine-riched-salad-vegetables-dark-floor_179666-85.jpg?semt=ais_hybrid')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">404 Error</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › 404
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl text-black font-bold mb-6 ">Sign In</h3>
          <form>
            <div className="mb-4">
              <h1
                className="w-full border rounded px-3 py-2 text-black focus:ring focus:ring-yellow-300 flex gap-2"><SlEnvolope className="text-xl"/> Email</h1>
            </div>
            <div className="mb-4">
              <h1 className="w-full border rounded px-3 text-black py-2 focus:ring focus:ring-yellow-300 flex gap-2"><MdLockOutline  className="text-xl"/> Password</h1>
            </div>
            <div className="flex items-center mb-4">
            <IoIosCheckbox className="text-black text-xl"/>
              <span className="text-black">Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 "
            >
              Sign In 
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-gray-900 flex justify-end">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" className="h-6 mr-2 object-cover" width={40} height={40} />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s" alt="Apple" className="h-6 mr-2 object-cover" width={40} height={40} />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}