import React from 'react'
import { databloglistindivi } from '../../components/BlogData'

import { IoIosStar } from "react-icons/io";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { LuArrowUpFromLine } from "react-icons/lu";
import { GoCommentDiscussion } from "react-icons/go";
import { PiUserCircleGear } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";
import { BsCalendarMonth } from "react-icons/bs";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const blog = () => {
  return (
<>
<Navbar/>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/04/76/57/27/360_F_476572792_zMwqHpmGal1fzh0tDJ3onkLo88IjgNbL.jpg')" ,
        backgroundSize:"cover"
      }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Blog List</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Blog
          </p>
        </div>
      </section>

      <div className='lg:flex gap-4 px-6 lg:px-48 mt-[100px] mb-[100px] justify-between'>
      <div className='lg:w-[600px] '>
        {databloglistindivi.map((blog)=>{
            return(
                <div key={blog.id} className='flex flex-col gap-4 justify-center mb-[50px]'>
                   <img src={blog.image} alt='blogs' width={400} height={400} className='lg:w-[600px] lg:h-[450px] w-[300px] h-[250px] object-cover'/>
                    <h1 className='flex gap-3 text-gray-600 '><BsCalendarMonth className='text-white text-2xl'/> Feb 14, 2022 /<GoCommentDiscussion className='text-bordercoloryello text-2xl'/>  3 / <PiUserCircleGear className='text-bordercoloryello text-2xl'/>Admin</h1>
                    <h1 className='lg:text-[24px] text-[20px] font-bold font-helvetica text-black'>{blog.title}</h1>
                    <p className='lg:w-[550px] h-[170px] w-[300px] pt-[30px] font-medium text-[15px] text-white]'>{blog.para}</p>
                    <Link href={`/blog/${blog.id}`}><button className='border text-black lg:mt-0 mt-[30px] border-bordercoloryello w-[150px] h-[52px] p-3 rounded-[6px] flex gap-2 '><LuArrowUpFromLine className='text-xl text-black'/> Read more </button></Link>
                </div>
            )
        })}
      </div>

      <div className='w-[300px] h-fit '>
      <div className="flex items-center gap-[10px] w-full h-[40px] border text-blackkk border-gray-100">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-blackkk text-[14px] placeholder:text-whitetext w-full"
            />
            <IoSearch className="text-whitetext w-[40px] h-[40px] bg-bordercoloryello p-2" />
          </div>

          <section className="text-gray-600 border-[1px] body-font border-gray-100 mt-10 max-w-[400px] pb-[20px] mx-auto">
  <div className="container px-5 py-2 ">
    <div className=" sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="px-4 w-[280px] flex flex-col text-center items-center">
        <div className="w-full h-auto inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          
        </div>
        <div className="flex-grow items-center ">
            <img src={"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt='client' className=''/>
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Hamza
          </h2>
          <h1 className='text-gray-900 text-lg title-font font-medium mb-3'>Blogger/Photographer</h1>
          <h1 className='flex gap-1 justify-center'><IoIosStar className='text-white'/><IoIosStar className='text-white'/><IoIosStar className='text-white'/><IoIosStar className='text-white'/><IoIosStar className='text-white'/> (1 Review)</h1>
          <p className="leading-relaxed text-base text-black">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard.
          </p>
          <div className='flex gap-2 justify-center text-xl text-white mt-1'>
                <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
                <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
                <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
                <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a></div>
        </div>
      </div>
    </div>
  </div>
          </section>

        <div className="border-[1px] border-gray-400 mt-10 px-6 py-4 max-w-[400px] mx-auto">
  {/* Heading */}
  <h1 className="text-lg font-bold py-4 border-b-[1px] border-gray-300">Recent Posts</h1>

  {/* Post 1 */}
  <div className="flex gap-4 mt-6">
    <img
      src="https://wallpapers.com/images/featured/4k-food-y48pwsir6u6w5iws.jpg"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-100">June 22, 2020</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>

  {/* Post 2 */}
  <div className="flex gap-4 mt-6">
    <img
      src="https://img.freepik.com/premium-photo/closeup-detailed-image-delicious-looking-food-4k-hd-background_1193781-6155.jpg"
      alt="Fries"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-100">June 22, 2020</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>

  {/* Post 3 */}
  <div className="flex gap-4 mt-6">
    <img
      src="https://img.freepik.com/free-photo/homemade-tex-mex-taco-boats-recipe-idea_53876-100139.jpg"
      alt="Fries"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-100">June 22, 2020</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>

  {/* Post 4 */}
  <div className="flex gap-4 mt-6">
    <img
      src="https://img.freepik.com/free-photo/delicious-tacos-arrangement_23-2151047971.jpg"
      alt="Dessert"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-100">June 22, 2020</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>
        </div>


        <div className="border-[1px] border-gray-400 mt-10 px-6 py-4 max-w-[400px] mx-auto">
  {/* Heading */}
  <h1 className="text-lg font-bold py-4 border-b-[1px] border-gray-300">Filter by menu</h1>

  {/* Post 1 */}
  <div className="flex gap-4 mt-6">
    <img
      src="https://img.freepik.com/premium-photo/closeup-view-delicious-thanksgiving-turkey-food_838900-21860.jpg"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-100">Chicken Fry</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        26
      </h2>
    </div>
  </div>

  {/* Post 2 */}
  <div className="flex gap-4 mt-6">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4U7oZVZyOZRlcl6Z2sZZQ7wKPAlSNVSeuw&s"
      alt="Fries"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-100">Pizza</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
       40
      </h2>
    </div>
  </div>

  {/* Post 3 */}
  <div className="flex gap-4 mt-6">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEq0sMLMtPXF5VgMjJ5e5j8jJ-gkyC4TWsg&s"
      alt="Fries"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-100">Biryani</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        18
      </h2>
    </div>
  </div>

  {/* Post 4 */}
  <div className="flex gap-4 mt-6">
    <img
      src="https://media.gettyimages.com/id/1469368909/photo/close-up-roasted-coffee-beans-with-dramatic-light-and-copy-space.jpg?s=612x612&w=gi&k=20&c=fGcApJMFMsTnd3ZE12Cuo69FN1EPwzlY2Twe7vXZ7Lc="
      alt="Dessert"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg object-cover"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-100">Vegatables</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        17
      </h2>
    </div>
  </div>
        </div>
            
        <div className="border-[1px] border-gray-400 mt-10 px-6 py-4 max-w-[400px] mx-auto">
           <div className='flex flex-wrap gap-3'>
           <h1 className='border border-gray-400 py-2 px-[13px]'>Resturant</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Sandwitch</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Tikka</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Bbq</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Pizza</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Health</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>FastFood</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Food</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Chicken Shawrma</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Burger</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Chicken</h1>
           </div>
        </div>
         
        <div className="border-[1px] border-gray-400 mt-10 px-[22px] py-4 max-w-[400px] mx-auto">
        <div className='flex gap-1 flex-wrap'>
        <img
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <img
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <img
      src="/whyus2.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <img
      src="/whyus7.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <img
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <img
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
        </div>
        </div>
        <div className="border-[1px] border-gray-400 mt-10 px-[22px] py-4 max-w-[400px] mx-auto">
        <h1 className='text-2xl font-bold'>Follow us</h1>
        <div className='flex gap-4 justify-center text-xl text-white mt-1'>
                <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
                <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
                <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
                <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a>
        </div>
        </div>
     </div>
      </div>
<Footer/>
    </>
  )
}
export default blog