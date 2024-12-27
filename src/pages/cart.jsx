import Link from "next/link";
import React from "react";
import { cartdata } from "../components/BlogData";
import Navbar from "@/components/Navbar";
import { IoIosStar } from "react-icons/io";
import { PiCheckSquareOffsetBold } from "react-icons/pi";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Banner Section */}
        <section
          className="bg-cover bg-center h-64 flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://www.shutterstock.com/image-photo/food-concept-flat-lay-fresh-260nw-2133441375.jpg')",
          }}
        >
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Shopping Cart</h2>
            <p className="pt-2 text-sm md:text-base">
              <Link href="/" className="text-yellow-400">
                Home
              </Link>{" "}
              › Cart
            </p>
          </div>
        </section>

        {/* Cart Table Header */}
        <div className="mt-8 px-4 md:px-8 lg:px-[150px] hidden md:block">
          <ul className="flex justify-between font-bold text-base md:text-lg text-gray-800 border-b pb-4">
            <li className="w-2/5">Product</li>
            <li className="w-1/5 text-center">Price</li>
            <li className="w-1/5 text-center">Quantity</li>
            <li className="w-1/5 text-center">Total</li>
            <li className="w-1/5 text-center">Remove</li>
          </ul>
        </div>

        {/* Cart Items */}
        <div className="mt-8 px-4 md:px-8 lg:px-[150px]">
          {cartdata.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-700 py-4 border-b gap-4"
            >
              {/* Product Details */}
              <div className="flex items-center gap-4 w-full md:w-2/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md w-20 h-20 object-cover"
                />
                <div>
                  <h1 className="font-semibold text-sm md:text-base">
                    {item.title}
                  </h1>
                  <div className="flex text-yellow-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <IoIosStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Price */}
              <h1 className="w-full md:w-1/5 text-center text-sm md:text-base">
                ${item.price}
              </h1>

              {/* Quantity */}
              <div className="flex items-center gap-2 border border-gray-200 w-[100px] h-[30px] text-sm md:text-base font-medium text-center rounded-2xl">
                <button className="px-2 py-1 rounded">-</button>
                <span>1</span>
                <button className="px-2 py-1 rounded">+</button>
              </div>

              {/* Total */}
              <h1 className="w-full md:w-1/5 text-center text-sm md:text-base">
                ${item.total}
              </h1>

              {/* Remove Button */}
              <button className="w-full md:w-1/5 text-center text-red-500 hover:text-red-700 font-bold text-sm md:text-base">
                X
              </button>
            </div>
          ))}
        </div>

        {/* Coupon Code & Total Bill */}
        <div className="flex flex-col md:flex-row gap-8 px-4 md:px-8 lg:px-[150px] mt-12">
          {/* Coupon Code */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold mb-2 text-black">Coupon Code</h2>
            <div className="border px-4 py-6 rounded-md w-full">
              <p className="text-sm text-gray-500">
                Enter your coupon code to get discounts.
              </p>
              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Enter your code"
                  className="border px-4 py-2 rounded-md w-full text-sm"
                />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Total Bill */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold mb-4 text-black">Total Bill</h2>
            <div className="border rounded-md p-4">
              <div className="flex justify-between mb-2 text-sm text-black">
                <span>Cart Subtotal</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between mb-2 text-sm text-black">
                <span>Shipping Charge</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-black">
                <span>Total Amount</span>
                <span>$205.00</span>
              </div>
            </div>
            <button className="mt-4 w-full flex justify-center bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-600">
              <Link href="/checkout" className="flex items-center gap-2">
                Proceed to Checkout
                <PiCheckSquareOffsetBold />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
