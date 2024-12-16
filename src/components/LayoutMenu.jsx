'use client'
import React, { useState } from "react";

const LayoutMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const menuItems = [
    { name: "Lettuce Leaf", price: "12.5", image: "https://www.wellplated.com/wp-content/uploads/2024/02/Best-Chicken-Lettuce-Wraps-Recipe.jpg", category: "Lunch" },
    { name: "Fresh Breakfast", price: "14.5", image: "https://www.eatingwell.com/thmb/N4W9hm30iTtdpzoq_6mklPw2IUw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lemon-BerryRicottaToast-RM-7706-c9cf64c22e2348d68e3e86cd8f186f18.jpg", category: "Breakfast" },
    { name: "Mild Butter", price: "12.5", image: "https://www.funfoodfrolic.com/wp-content/uploads/2022/01/butter-blog.jpg", category: "Snack" },
    { name: "Fresh Bread", price: "12.5", image: "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/16:9/w_4000,h_2250,c_limit/milk-bread.jpg", category: "Snack" },
    { name: "Glow Cheese", price: "12.5", image: "https://ca-times.brightspotcdn.com/dims4/default/2a974a2/2147483647/strip/false/crop/2048x1365+0+0/resize/1486x990!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb2%2Fa5%2Fd673ffac73e3ff63f2f3c095fde9%2Fhomemade-american-cheese-recipes-db", category: "Lunch" },
    { name: "Italian Pizza", price: "12.5", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg", category: "Dinner" },
    { name: "Slixe Beef", price: "12.5", image: "https://embed.widencdn.net/img/beef/gh6lzohosy/exact/Ridiculously%20Tasty%20Roast%20Beef%2002.tif?keep=c&u=7fueml", category: "Dinner" },
    { name: "Mushroom Pizza", price: "12.5", image: "https://5.imimg.com/data5/SELLER/Default/2021/11/OW/HZ/OW/130657955/massrom-500x500.jpg", category: "Dinner" },
  ];

  // Filtered items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-black text-white py-10 px-5">
      {/* Title */}
      <div className="text-center mb-10">
        <h3 className="text-yellow-400 italic text-2xl">Choose & pick</h3>
        <h1 className="text-4xl font-bold">
          From Our <span className="text-yellow-500">Menu</span>
        </h1>

        {/* Categories */}
        <div className="flex justify-center gap-5 mt-3 text-gray-400">
          {["All", "Breakfast", "Lunch", "Dinner", "Snack"].map((category) => (
            <span
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer ${
                selectedCategory === category
                  ? "text-yellow-400 font-bold"
                  : "hover:text-gray-300"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-1">
        {/* Static Image */}
        <img
          src="https://assets.bonappetit.com/photos/62f5674caf9bae430097be0f/1:1/w_2560%2Cc_limit/0810-no-fail-roast-chicken-v2.jpg"
          alt="Static Display"
          className= " hidden lg:flex w-[40rem] lg:w-96 h-96 object-cover rounded-md"
        />

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto overflow-auto h-96">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-1 rounded-lg "
            >
              {/* Image */}
              <div className="w-36 h-36 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-400 text-sm">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
              </div>

              {/* Price */}
              <span className="text-yellow-400 text-lg font-bold">
                ${item.price}
              </span>
            </div>
          ))}
        </div>
        <img
          src="https://assets.bonappetit.com/photos/62f5674caf9bae430097be0f/1:1/w_2560%2Cc_limit/0810-no-fail-roast-chicken-v2.jpg"
          alt="Static Display"
          className= " lg:hidden  w-[40rem] lg:w-96 h-96 object-cover rounded-md"
        />

      </div>

    </section>
  );
};

export default LayoutMenu;
