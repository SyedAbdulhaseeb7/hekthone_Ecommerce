import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { GiHamburgerMenu } from "react-icons/gi";

const page = () => {
  return (
    <div className="bg-white">
   

      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › Shop
          </p>
        </div>
      </section>

      <div className="mt-[100px] mb-[100px] px-6 lg:px-[120px]">
        <div className="lg:flex gap-4 mb-6">
          <div className="flex items-center w-[332px]">
            <h1 className="text-lg text-black font-medium">Sort by:</h1>
            <div className="flex items-center justify-between text-black px-4 w-[236px] h-[40px] border ml-4 cursor-pointer">
              Newest <IoIosArrowDown className="text-xl" />
            </div>
          </div>
          <div className="flex items-center w-[332px]">
            <h1 className="text-lg font-medium text-black">Show:</h1>
            <div className="flex items-center text-black justify-between px-4 w-[236px] h-[40px] border ml-4 cursor-pointer">
              Default <IoIosArrowDown className="text-xl" />
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {[
                { id: 1, name: "Fresh Lime", price: "$16.00", img: "https://images.ctfassets.net/awb1we50v0om/2Spf80TME2zIhLqsi3Zxv9/919421a45f3260ee426c99c35235f1c8/Plates03__3__copy3.jpg", link: "/product/1" },
                { id: 2, name: "Chocolate Muffin", price: "$21.15", img: "https://cuisinesolutions.com/wp-content/uploads/2022/04/6057_content_top.jpg", link: "/product/2" },
                { id: 3, name: "Neptune", price: "$12.00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffEG4c52MG1JgeH7g_rY0Sue2njUYp3-yzh1JCRjIZOxj9JNVn6w47XxXFYFJx7BKveA&usqp=CAU", link: "/product/3" },
                { id: 4, name: "Burger", price: "$18.40", img: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_640,q_auto,f_auto/MS_FD_F01C_29420636_NC_X_EC_0", link: "/product/4" },
                { id: 5, name: "Chicken Chop", price: "$16.00", img: "https://i1.adis.ws/i/canon/pro-sid-ali-food-photography-trends-2_e5830f8b14d841ecab4f62b476497935?$media-collection-full-dt-jpg$", link: "/product/5" },
                { id: 6, name: "Pizza", price: "$21.15", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiz6fMr-Q75hK9pCx51SHjVBmG6TL_06jgw&s", link: "/product/6" },
                { id: 7, name: "Juice", price: "$12.00", img: "https://static.wixstatic.com/media/88305f_fdc4918227484493a5bdac4bf5a31f94~mv2.jpg/v1/fit/w_291,h_194,q_75/88305f_fdc4918227484493a5bdac4bf5a31f94~mv2.jpg", link: "/product/7" },
                { id: 8, name: "Salad", price: "$18.40", img: "https://i.pinimg.com/originals/45/d9/9c/45d99c1f0eff2b67e32ab2ed6f90d474.jpg", link: "/product/8" },
              ].map((product) => (
                <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link href={product.link}>
                    <div className="block relative h-48 rounded overflow-hidden transition-transform transform hover:scale-105">
                      <img
                        alt={product.name}
                        src={product.img}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                  </Link>
                  <div className="mt-4 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-yellow-600 font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
