import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { BsCupHot } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { PiUserBold } from 'react-icons/pi';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const menu = () => {
  const menudata1 = [
    { id: 0, title: 'Alder Grilled Chinook Salmon', para: 'Toasted French bread topped with romano, cheddar', some: '560 CAL', price: '32$' },
    { id: 1, title: 'Berries and creme tart', para: 'Gorgonzola, ricotta, mozzarella, taleggio', some: '700 CAL', price: '43$' },
    { id: 2, title: 'Tormentoso Bush Pizza Pintoage', para: 'Ground cumin, avocados, peeled and cubed', some: '1000 CAL', price: '14$' },
    { id: 3, title: 'Spicy Vegan Potato Curry', para: 'Spreadable cream cheese, crumbled blue cheese', some: '560 CAL', price: '35$' },
  ];

  const menudata2 = [
    { id: 0, title: 'Optic Big Breakfast Combo Menu', para: 'Toasted French bread topped with romano, cheddar', some: '560 CAL', price: '32$' },
    { id: 1, title: 'Cashew Chicken With Stir-Fry', para: 'Gorgonzola, ricotta, mozzarella, taleggio', some: '700 CAL', price: '43$' },
    { id: 2, title: 'Vegetables & Green Salad', para: 'Ground cumin, avocados, peeled and cubed', some: '1000 CAL', price: '14$' },
    { id: 3, title: 'Spicy Vegan Potato Curry', para: 'Spreadable cream cheese, crumbled blue cheese', some: '560 CAL', price: '35$' },
  ];

  const menudata3 = [
    { id: 0, title: 'Fig and lemon cake', para: 'Toasted French bread topped with romano, cheddar', some: '560 CAL', price: '32$' },
    { id: 1, title: 'Creamy mascarpone cake', para: 'Gorgonzola, ricotta, mozzarella, taleggio', some: '700 CAL', price: '43$' },
    { id: 2, title: 'Pastry, blueberries, lemon juice', para: 'Ground cumin, avocados, peeled and cubed', some: '1000 CAL', price: '14$' },
    { id: 3, title: 'Pain au chocolat', para: 'Spreadable cream cheese, crumbled blue cheese', some: '560 CAL', price: '35$' },
  ];

  const menudata4 = [
    { id: 0, title: 'Caffè macchiato', para: 'Toasted French bread topped with romano, cheddar', some: '560 CAL', price: '32$' },
    { id: 1, title: 'Aperol Spritz Capacianno', para: 'Gorgonzola, ricotta, mozzarella, taleggio', some: '700 CAL', price: '43$' },
    { id: 2, title: 'Caffe Latte Campuri', para: 'Ground cumin, avocados, peeled and cubed', some: '1000 CAL', price: '14$' },
    { id: 3, title: 'Tormentoso BushTea Pintoage', para: 'Spreadable cream cheese, crumbled blue cheese', some: '560 CAL', price: '35$' },
  ];

  return (
    <>
  
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/06/33/87/22/360_F_633872253_QLM1VxbQBfLhQs0zt1gWOjHjfRw46Q3D.jpg')",
          backgroundSize: 'cover',
        }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Menu</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Menu
          </p>
        </div>
      </section>

      <div className="bg-white text-black">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="space-y-6 max-w-xl">
              <div>
                <BsCupHot className="text-yellow-500" />
                <h1 className="text-[38px] font-bold">Starter Menu</h1>
              </div>
              {menudata1.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h1 className="font-bold text-lg hover:text-yellow-500">{item.title}</h1>
                    <p className="text-gray-600 text-sm">{item.para}</p>
                    <h1 className="text-sm text-gray-500">{item.some}</h1>
                  </div>
                  <div className="text-yellow-500 font-bold text-lg">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img src="https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenuu11.42abf282.png&w=640&q=75" alt="Starter Menu" className="w-[308px] h-[486px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="space-y-6 max-w-xl">
              <div>
                <BsCupHot className="text-yellow-500" />
                <h1 className="text-[38px] font-bold">Main Course</h1>
              </div>
              {menudata2.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h1 className="font-bold text-lg hover:text-yellow-500">{item.title}</h1>
                    <p className="text-gray-600 text-sm">{item.para}</p>
                    <h1 className="text-sm text-gray-500">{item.some}</h1>
                  </div>
                  <div className="text-yellow-500 font-bold text-lg">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img src="https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourmenupage.ff7c2edc.png&w=640&q=75" alt="Main Course" className="w-[308px] h-[486px]" />
            </div>
          </div>
        </div>
        <section
  className="relative flex justify-center pl-5 lg:p-20 text-center"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/black-banner-background-cooking-spices-vegetables-top-view-free-space-your-text_187166-38946.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content */}
  <div className="relative flex flex-wrap lg:gap-14 gap-14 z-10">
    {[
      {
        number: "420",
        label: "Professional Chefs",
        img: "https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproffcheff.fa7f783c.png&w=128&q=75",
      },
      {
        number: "320",
        label: "Items of Food",
        img: "https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood.c0e2ecfb.png&w=128&q=75",
      },
      {
        number: "30+",
        label: "Years of Experience",
        img: "https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspoon.0dee7d4a.png&w=128&q=75",
      },
      {
        number: "220",
        label: "Happy Customers",
        img: "https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpizza.d61d6cc9.png&w=128&q=75",
      },
    ].map((item, idx) => (
      <div key={idx} className="text-white">
        <img
          src={item.img}
          alt={item.label}
          className="w-32 h-32 object-cover mx-auto"
        />
        <p className="text-white text-2xl p-2 font-bold">{item.number}</p>
        <p className="text-gray-300">{item.label}</p>
      </div>
    ))}
  </div>
</section>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="space-y-6 max-w-xl">
              <div>
                <BsCupHot className="text-yellow-500" />
                <h1 className="text-[38px] font-bold">Dessert</h1>
              </div>
              {menudata3.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h1 className="font-bold text-lg hover:text-yellow-500">{item.title}</h1>
                    <p className="text-gray-600 text-sm">{item.para}</p>
                    <h1 className="text-sm text-gray-500">{item.some}</h1>
                  </div>
                  <div className="text-yellow-500 font-bold text-lg">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img src="https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourmenupage3.c4fbc74d.png&w=640&q=75" alt="Dessert" className="w-[308px] h-[486px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="space-y-6 max-w-xl">
              <div>
                <BsCupHot className="text-yellow-500" />
                <h1 className="text-[38px] font-bold">Drinks</h1>
              </div>
              {menudata4.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h1 className="font-bold text-lg hover:text-yellow-500">{item.title}</h1>
                    <p className="text-gray-600 text-sm">{item.para}</p>
                    <h1 className="text-sm text-gray-500">{item.some}</h1>
                  </div>
                  <div className="text-yellow-500 font-bold text-lg">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img src="https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourmenupage4.1fd1ae70.png&w=640&q=75" alt="Drinks" className="w-[308px] h-[486px]" />
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default menu;
