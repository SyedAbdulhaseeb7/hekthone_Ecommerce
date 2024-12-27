'use client';
import { MdThumbUpOffAlt } from "react-icons/md";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { LuShare2 } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import LayoutMenu from './LayoutMenu';
import CommentsCarousel from './Comments';
import Videoplay from './Videoplay';
import Link from "next/link";
import Footer from "./Footer";

export default function Hero() {
  return (
    <>
    <section
      className=" bg-black relative w-full lg:h-screen top-16 bg-cover bg-center"
 
    >
      <div className="w-full lg:hidden flex justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/031/415/218/small_2x/top-view-delicious-food-plate-on-a-black-background-ai-generated-photo.jpg"
          alt="Hero Image"
          className="rounded-lg shadow-lg w-full h-96 max-w-[400px] lg:max-w-none object-cover"
        />
      </div>

      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4 text-center lg:text-left mb-6 lg:mb-0">
          {/* Top Line */}
          <div className="h-32 w-[2px] bg-gray-400 hidden lg:flex"></div>

          {/* Center Icon */}
     

          {/* Heading */}


          {/* Social Icons */}
          <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-1 mt-4 lg:mt-0">
            <a href="#" className=" text-white p-2 rounded-full hover:bg-gray-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className=" text-yellow-600 p-2 rounded-full hover:bg-gray-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className=" text-white py-1 px-2 rounded-full hover:bg-gray-600 transition">
              <FaPinterestP />
            </a>
          </div>

          {/* Bottom Line */}
          <div className="h-32 w-[2px] bg-gray-400 mt-4 hidden lg:flex"></div>
        </div>
        {/* Heading and Button */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
        <h1 className='text-3xl hamza text-amber-500'> Its is quick Amusing</h1>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-2">
            <span className="text-yellow-600 text-5xl lg:text-5xl">T</span>he
            art of speed food quality
          </h1>
          <p className="text-gray-100 mb-4 text-sm lg:text-base">
            Explore the best services and experiences we offer.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex w-full lg:w-full justify-center items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/031/415/218/small_2x/top-view-delicious-food-plate-on-a-black-background-ai-generated-photo.jpg"
            alt="Hero Image"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
    <div class="container mx-auto p-8 flex flex-col md:flex-row space-y-6 md:space-y-0">
  
    <div class=" flex-col space-y-4 w-full md:w-1/2 hidden lg:flex">
    <h1 className='text-3xl hamza text-amber-500'> about us</h1>
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-2">
            <span className="text-yellow-600 text-4xl lg:text-5xl pr-2">We</span>
            Create this foodie product
          </h1>

  
   
      <p class="text-gray-100">This is a description that provides more context about the content of this section. It could be an explanation, brief introduction, or any other relevant information.</p>
  
  
      <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
        <label for="check" class="text-gray-100">Check this box for more info</label>
      </div>
      <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
        <label for="check" class="text-gray-100">Check this box for more info</label>
      </div>
      <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
        <label for="check" class="text-gray-100">Check this box for more info</label>
      </div>
      <button className="w-36 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Get Started
          </button>
    </div>
  
 
    <div class="flex flex-col space-y-4 w-full md:w-1/2 ">
  
      <img src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Big Image" class="w-full h-72 object-cover rounded-lg shadow-md" />
      
  
      <div class="flex space-x-4">
        <img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Medium Image 1" class="w-1/2 h-40 object-cover rounded-lg shadow-md" />
        <img src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Medium Image 2" class="w-1/2 h-40 object-cover rounded-lg shadow-md" />
      </div>
    </div>
    <div class="lg:hidden flex flex-col space-y-4 w-full md:w-1/2">
    <h1 className='text-3xl hamza text-amber-500'> about us</h1>
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-2">
            <span className="text-yellow-600 text-4xl lg:text-5xl pr-2">We</span>
            Create this foodie product
          </h1>

  
   
      <p class="text-gray-600">This is a description that provides more context about the content of this section. It could be an explanation, brief introduction, or any other relevant information.</p>
  
  
      <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
        <label for="check" class="text-gray-700">Check this box for more info</label>
      </div>
      <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
        <label for="check" class="text-gray-700">Check this box for more info</label>
      </div>
      <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
        <label for="check" class="text-gray-700">Check this box for more info</label>
      </div>
      <button className="w-36 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
            Get Started
          </button>
    </div>
  
 
  </div>
  <div className="text-center p-2">
  <h1 className='text-3xl hamza text-amber-500'> about us</h1>
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-2">
            <span className="text-yellow-600 text-4xl lg:text-5xl pr-2">We</span>
            Create this foodie product
          </h1>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:flex  lg:flex lg:justify-center lg:gap-4 gap-1 ">
        <div className="w-42 h-auto lg:h-96">
          <img src="https://www.robingoodlad.com/wp-content/uploads/2022/12/Christmas-food-photographer-Robin-Goodlad9-1.jpg" alt="Image 1"  className="rounded-lg w-60 h-72 object-cover" />
        </div>
        <div className="w-42 h-auto lg:h-96">
          <img src="https://foodphotographyacademy.co/wp-content/uploads/2021/05/Food-Photography-Flatlay-Example-Noodle-Soup-660x990.jpg" alt="Image 2"  className="rounded-lg  w-60 h-72 object-cover" />
        </div>
        <div className="w-42 h-auto lg:h-96">
          <img src="https://w0.peakpx.com/wallpaper/275/419/HD-wallpaper-indian-food-indian-food-stock-8k-food.jpg" alt="Image 3" className="rounded-lg  w-60 h-72 object-cover" />
        </div>
        <div className="w-42  h-auto lg:h-96">
          <img src="https://images.squarespace-cdn.com/content/v1/5ccec69c523958d3c510f0b7/2b970446-2cb6-4e1c-998e-1f3b0239290b/Prawn+and+Egg+Noodle+Salad+in+a+restaurant+with+chopstick+photo+taken+by+Matt+Madden+Photography+and+styled+by+Kate+Wesson.jpg" alt="Image 4"  className="rounded-lg  w-60 h-72 object-cover" />
        </div>
      </div>
    </div>
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="p-8 lg:flex lg:items-center lg:justify-evenly">
        {/* Images Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-1">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg"
            alt="Image 1"
            className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform"
          />
          <img
            src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=5ro7Cvwx79tWpyN1r2hy3DwplFi5FuPrD_4DYD8tZpg="
            alt="Image 2"
            className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform"
          />
          <img
            src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-fast-foods-png-image_13369480.png"
            alt="Image 3"
            className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform"
          />
          <img
            src="https://img.pikbest.com/origin/09/35/02/93QpIkbEsTGeA.png!sw800"
            alt="Image 4"
            className="w-full h-40 object-cover rounded-md hover:scale-105 transition-transform"
          />
          
        </div>

        {/* Text Content */}
        <div className="mt-6 lg:mt-0 lg:w-1/3 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            Extraordinary Taste & Experience
          </h2>
          <p className="text-gray-400 mb-4">
            Discover delicious food that brings joy to every bite. With years of
            experience, we create dishes that leave a lasting impression.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="  text-white  transition-colors">
              <img src="https://thumbs.dreamstime.com/b/hamburger-icon-yellow-background-fast-food-calories-fatty-foods-outline-minimal-53224397.jpg" alt="" className='h-24 w-24 rounded-lg object-cover' />
              Fast Food
            </button>
            <button className=" text-white  transition-colors">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYbNvB2YLc7eOs6zfS5jAzUVFh5bwl9X-xA&s" alt="" className='h-24 w-24 rounded-lg object-cover' />
              Lunch
            </button>
            <button className="text-white transition-colors">
              <img src="https://www.shutterstock.com/image-vector/black-wine-glass-icon-on-260nw-1106131943.jpg" alt="" className='h-24 w-24 rounded-lg object-cover' />
              Dinner
            </button>
          </div>
          <div className="mt-4">
            <span className="bg-white text-black py-4 px-4 rounded-full font-semibold">
              <span className='text-amber-700'>30+</span> Years of Experience
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" flex justify-center pl-5 lg:p-20 text-center">
        <div className="flex flex-wrap lg:gap-14 gap-14 ">
          {[
            { number: "420", label: "Professional Chefs",img: "https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproffcheff.fa7f783c.png&w=128&q=75"},
            { number: "320", label: "Items of Food",img: "https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood.c0e2ecfb.png&w=128&q=75" },
            { number: "30+", label: "Years of Experience",img: "https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspoon.0dee7d4a.png&w=128&q=75" },
            { number: "220", label: "Happy Customers",img: "https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpizza.d61d6cc9.png&w=128&q=75" },
          ].map((item, idx) => (
            <div key={idx}>
              <img
                src={item.img}
                alt={item.label}
                className="w-32 h-32 object-cover"
              />
              <p className="text-white text-2xl p-2 font-bold">{item.number}</p>
              <p className="text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

    <LayoutMenu/>

      {/* Meet Our Chefs */}
      <section className="  text-center">
      <h1 className='text-3xl hamza text-amber-500'> Our Chefs</h1>
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-2">
            <span className="text-yellow-600 text-4xl lg:text-5xl pr-2">C</span>hoice
food item
          </h1>
        <div className="grid grid-cols-2 md:grid-cols-4  text-center">
          {[
            { name: "D. Smith", image: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "O. Sandeek", image: "https://media.istockphoto.com/id/1634442523/photo/happy-baker-in-uniform-at-door-of-her-cafe.jpg?s=1024x1024&w=is&k=20&c=X1KjBmSqsFPg57ryx4s_CW0PMkuT4wKwnOSIiMRvtSs=" },
            { name: "M. Wilson", image: "https://t4.ftcdn.net/jpg/06/41/88/25/360_F_641882588_QayqH5oM7zcnBBGRwK7TWsCJTM0shfKX.jpg" },
            { name: "N. Woodford", image: "https://www.shutterstock.com/shutterstock/photos/2310935819/display_1500/stock-photo-smiling-beautiful-woman-baker-in-uniform-stands-near-the-oven-before-the-start-work-bakery-2310935819.jpg" },
          ].map((chef, idx) => (
            <div key={idx} className="p-2">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-72 h-44 lg:h-72 object-cover mx-auto mb-2 rounded-md hover:scale-110 transition-transform"
              />
              <p className="font-bold">{chef.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <CommentsCarousel/>
    <Videoplay/>
    <div className="mt-[100px]">
      <h1 className="text-center text-bordercoloryello font-greatVibes text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-medium  text-white">
        Blog Post
      </h1>
      <h1 className="text-center font-helvetica font-bold text-[32px] md:text-[40px] leading-[38px] md:leading-[45px] text-white text">
        <span className="text-bordercoloryello">La</span>test News & Blog
      </h1>
      <section className="text-gray-600 flex flex-col px-[20px] sm:px-[60px] lg:px-[230px]">
        <div className="container py-12 md:py-24">
          <div className="flex flex-wrap justify-center md:justify-between -m-4">
            <div className="p-4 w-[300px] sm:w-[300px] h-auto sm:h-[379px]">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <img
                  src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
                  className="lg:h-48 md:h-36 object-cover object-center"
                  alt="blog"
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-bordercoloryello text-yellow-600 title-font font-medium text-[14px] md:text-[16px] mb-1">
                    10 February 2022
                  </h2>
                  <p className="font-helvetica font-bold text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-white text">
                    Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                  </p>
                </div>
                <div className="px-4 md:px-[30px] flex justify-between">
                  <div className="text-[12px] md:text-[13px] font-medium  leading-[20px] md:leading-[24px] text-white ">
                   <Link href={"/blog"}>Learn More</Link>
                  </div>
                  <div className="flex gap-[6px] md:gap-[10px] text-whitetext text-[16px] md:text-[18px]">
                    <MdThumbUpOffAlt className="text-white text hover:text-bordercoloryello cursor-pointer" />
                    <LiaCommentDotsSolid className="text-white text hover:text-bordercoloryello cursor-pointer" />
                    <LuShare2 className="text-white text hover:text-bordercoloryello cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[300px] sm:w-[300px] h-auto sm:h-[379px]">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <img
                  src="https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg"
                  className="lg:h-52 md:h-36 object-cover "
                  alt="blog"
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-yellow-600 title-font font-medium text-[14px] md:text-[16px] mb-1">
                    10 February 2022
                  </h2>
                  <p className="font-helvetica font-bold text-[12px] md:text-[14px] leading-[15px]  text-white md:leading-[17px] text-whitetext">
                    Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                  </p>
                </div>
                <div className="px-4 md:px-[30px] flex justify-between">
                  <div className="text-[12px] md:text-[13px] font-medium leading-[20px]   text-white md:leading-[24px] text-whitetext">
                    <Link href={"/blog"}>Learn More</Link>
                  </div>
                  <div className="flex gap-[6px] md:gap-[10px] text-white text text-[16px] md:text-[18px]">
                    <MdThumbUpOffAlt className="text-white text hover:text-bordercoloryello cursor-pointer" />
                    <LiaCommentDotsSolid className="text-white text hover:text-bordercoloryello cursor-pointer" />
                    <LuShare2 className="text-white text hover:text-bordercoloryello cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[300px] sm:w-[300px] h-auto sm:h-[379px]">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0_6.jpg/1200px-%D0%A8%D0%B0%D1%83%D1%80%D0%BC%D0%B0_6.jpg"
                  className="lg:h-48 md:h-36 object-cover object-center"
                  alt="blog"
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-bordercoloryello text-yellow-600 title-font font-medium text-[14px] md:text-[16px] mb-1 ">
                    10 February 2022
                  </h2>
                  <p className="font-helvetica  text-white font-bold text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] text-whitetext">
                    Curabitur rutrum velit ac congue malesuada
                  </p>
                </div>
                <div className="px-4 md:px-[30px] flex justify-between">
                  <div className="text-[12px] md:text-[13px] font-medium leading-[20px] md:leading-[24px] text-whitetext">
                    <Link href={"/blog"}>Learn More</Link>
                  </div>
                  <div className="flex gap-[6px] md:gap-[10px] text-whitetext text-[16px] md:text-[18px]">
                    <MdThumbUpOffAlt className="text-white text hover:text-bordercoloryello cursor-pointer" />
                    <LiaCommentDotsSolid className="text-white text hover:text-bordercoloryello cursor-pointer" />
                    <LuShare2 className="text-white text hover:text-bordercoloryello cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   

</>  
  );
}
