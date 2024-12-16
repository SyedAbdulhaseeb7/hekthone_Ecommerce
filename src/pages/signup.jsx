import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { IoIosCheckbox } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/ripe-products-colored-vitamine-riched-salad-vegetables-dark-floor_179666-85.jpg?semt=ais_hybrid')" }}
      >
        <div className="text-center ">
          <h2 className="text-4xl font-bold text-white">Sign up page</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">
              Home
            </Link>{" "}
            › Sign up
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white text-black shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6">Sign Up</h3>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <div className="flex items-center border rounded px-3 py-2 gap-2 focus-within:ring focus-within:ring-yellow-300">
                <AiOutlineUser className="text-xl" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <div className="flex items-center border rounded px-3 py-2 gap-2 focus-within:ring focus-within:ring-yellow-300">
                <SlEnvolope className="text-xl" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none text-black"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <div className="flex items-center border rounded px-3 py-2 gap-2 focus-within:ring focus-within:ring-yellow-300">
                <MdLockOutline className="text-xl" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none text-black"
                />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2  text-yellow-500 focus:ring-yellow-300"
              />
              <label htmlFor="rememberMe text-black">Remember me?</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">
                Forgot password?
              </Link>
            </p>
          </form>

          {/* Social Signup Options */}
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <img
                src="https://hackathon-figma-silk.vercel.app/_next/image?url=%2Fgoogle.png&w=32&q=75"
                alt="Google"
                className="h-6 mr-2"
                width={20}
                height={20}
              />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <img
                src="https://hackathon-figma-silk.vercel.app/_next/image?url=%2Fapple.png&w=32&q=75"
                alt="Apple"
                className="h-6 mr-2"
                width={20}
                height={20}
              />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
