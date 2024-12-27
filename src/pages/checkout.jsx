import Image from "next/image";
import Link from "next/link";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  let images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db1fca66207249.5b0e56c8b91f3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFF5klczY9iPoMr_J83U_3RratHuZeeSG6A&s",
    "https://www.noreenhiskey.com/img/s/v-10/p3064441206-4.jpg",
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white text-black">
        {/* Header Section */}
        <section
          className="bg-cover bg-center h-64 flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://t4.ftcdn.net/jpg/04/76/57/27/360_F_476572792_zMwqHpmGal1fzh0tDJ3onkLo88IjgNbL.jpg')",
          }}
        >
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold">Checkout</h2>
            <p className="pt-2">
              <Link href="/" className="text-yellow-400">
                Home
              </Link>{" "}
              › Shop
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2 container py-8 lg:px-24 px-6 my-8">
          {/* Shipping & Billing Form */}
          <div className="space-y-0">
            {/* Shipping Address */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Choose country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Choose city"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Zip code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                  Same as shipping address
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-4 gap-3">
              <button className="py-2 border flex border-gray-300 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-72 h-12 px-3">
                <IoIosArrowBack className="text-[20px]" />
                <Link href="/shoppingcart">Back to cart</Link>
              </button>
              <button className="px-6 py-2 flex bg-orange-500 text-white shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 lg:w-72 lg:h-12">
                Proceed to shipping <IoIosArrowForward className="text-[20px]" />
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="p-6 rounded-lg border-2 border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {images.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="relative h-16 w-16">
                    <img
                      src={item}
                      alt={`Product ${index + 1}`}
                      layout="fill"
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Kebab</h3>
                    <p className="text-sm text-gray-500">150 gm net</p>
                    <p className="text-sm text-gray-500">$50</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">$130</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$20</span>
              </div>
              <div className="flex justify-between text-sm font-medium border-t border-gray-300 pt-4">
                <span>Total</span>
                <span>$150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
