import Navbar from '@/components/Navbar'
import React from 'react'
import Link from 'next/link'
const product = () => {
let image =[
    "https://www.seriouseats.com/thmb/uSNXjlR9pQU0Nt9HJTzD2ZhZ45Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__07__20150728-homemade-whopper-food-lab-35-b3500a5c2f3e4e10aa3169d5f76e1468.jpg",
    "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
    "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
]

  return (
    <>
    <Navbar/>
    <div className="mt-20 container mx-auto px-4 bg-white">
    <div className="flex flex-col sm:flex-row gap-5">
      {/* Left Side - Image Gallery */}
      <div className="flex-1 flex flex-col-reverse gap-1 sm:flex-row">
        {/* Image Thumbnails */}
        <div className="flex sm:flex-col ml-0 lg:ml-0 sm:ml-1 md:ml-1 overflow-x-auto sm:justify-normal md:justify-normal lg:justify-flex-start sm:w-[24.6%] w-full">
          {image.map((img, index) => (
            <img
              key={index}
              src={img}
       
              className="w-[25%] sm:w-full sm:mb-1 cursor-pointer hover:opacity-75 transition-opacity duration-300 object-cover"
            
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full sm:w-[95%] md:w-[94%] lg:w-[100%] cursor-zoom-in">
          <img
          
            src={image[0]}
     
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="flex-1">
        <h1 className="lg:text-3xl sm:text-4xl md:text-3xl text-2xl font-semibold mb-4 text-gray-700 tracking-tight">Burger</h1>

            {/* Price with Discount */}
            <div className="text-xl font-bold mb-4">
          <span className="text-red-500">PKR 1200</span>
            <span className="text-sm text-gray-500 line-through ml-4">
              PKR 1244
            </span>

        </div>
    


        {/* Collapsible Sections */}
        <div className="mt-8 space-y-4">
          {/* Description */}
     
<Link href="/checkout" >  <button class="btn">
    <span class="btn-text-one">BUY</span>
    <span class="btn-text-two">Great!</span>
</button> </Link>
        

        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500 text-xl">
    
          </div>
          <span className="ml-2 text-gray-500">(4.5/5 - 120 reviews)</span>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <div className="icon-container">
            <span className="product-inventory__icon-low">
              <svg className="icon icon--small icon--type-clock w-4 h-4 text-gray-500" strokeWidth="1" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <circle stroke="currentColor" fill="none" cx="8" cy="8" r="6.7097588"></circle>
                <polyline stroke="currentColor" fill="none" points="12 6 12 12 16 14" transform="matrix(0.67097581,0,0,0.67097581,-0.01963672,-0.01963672)"></polyline>
              </svg>
            </span>
          </div>
          <span className="text-gray-700 text-sm">7 in stock</span>
        </div>

        {/* Delivery Information */}
        <div className="mt-1 text-gray-700 text-sm">
          <p>Delivery in 7 days</p>
        </div>
        <div className="border-b">

{/* Description Section */}
<div
  className="flex justify-between items-center cursor-pointer py-2"
  onClick={() => toggleSection('description')}
>
   <div className="flex items-center">
    {/* New Shirt Icon using provided path */}
    <svg
      className="h-5 w-5 mr-2 text-gray-600"
      strokeWidth="1"
      aria-hidden="true"
      focusable="false"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path fill="currentColor" d="M15.27 5.1l-3.3-3.3a1 1 0 00-.7-.3h-1.2a1 1 0 00-.74.32l-.04.04c-.7.7-1.86.7-2.56 0l-.05-.04a1 1 0 00-.73-.32H4.76a1 1 0 00-.72.3L.74 5.1a1 1 0 000 1.4L2.4 8.16a1 1 0 001.36.05v5.29a1 1 0 001 1h6.5a1 1 0 001-1V8.22a1 1 0 001.35-.06l1.66-1.65a1 1 0 000-1.42zM12.9 7.45L11.26 5.8v7.69h-6.5V5.8L3.11 7.46 1.45 5.8l3.3-3.3.01.01V2.5h1.19l.07.07a2.81 2.81 0 003.98 0l.06-.07h1.2l3.3 3.3-1.66 1.66z"></path>
    </svg>
    <h2 className="text-lg ">Description</h2>
  </div>
  <span></span>
</div>
<div
  className={`overflow-auto transition-all duration-700 ease-in-out`}
>
    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, est ad error nam cupiditate autem excepturi velit, dolores reiciendis beatae dolorem? Modi labore quia nemo dignissimos fugit ab ea reiciendis!</p>
  
</div>
</div>

{/* Returns & Exchanges Section */}
<div className="border-b">
<div
  className="flex justify-between items-center cursor-pointer py-2"
  onClick={() => toggleSection('returns')}
>
  <div className="flex items-center">
    {/* New Return Icon for Returns & Exchanges */}
    <svg
      className="h-5 w-5 mr-2 text-gray-600"
      strokeWidth="1"
      aria-hidden="true"
      focusable="false"
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path fill="currentColor" d="M9 .5a.5.5 0 000 1h1a4.5 4.5 0 110 9H2.2l3.15-3.15a.5.5 0 10-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L2.21 11.5H10a5.5 5.5 0 100-11H9z"></path>
    </svg>
    <h2 className="text-lg ">Returns & Exchanges</h2>
  </div>
  <span></span>
</div>
<div
  className={`overflow-auto transition-all duration-700 `}
>

    <p className="text-gray-600">Return and exchange policy goes here.</p>
  
</div>
</div>

{/* Shipping Section */}
<div className="border-b">

</div>
</div>

      </div>
    </div>
    </div>
    </>
  )
}

export default product