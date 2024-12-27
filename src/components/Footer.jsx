import React from "react";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    let smallpicture = [
        "https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg",
        "https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
        "https://plus.unsplash.com/premium_photo-1725075086631-b21a5642918b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdCUyMGRyaW5rfGVufDB8fDB8fHww"
    ]
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-yellow-500">Still</span> You Need Our Support ?
          </h2>
          <p className="text-gray-400 mt-2">
            Don’t wait make a smart & logical quote here. It's pretty easy.
          </p>
          {/* Subscribe Section */}
          <div className="mt-6 flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="py-2 px-4 rounded-l-md bg-gray-800 text-white outline-none w-64 md:w-80"
            />
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold lg:px-6 lg:py-2 rounded-r-md">
              Subscribe Now
            </button>
          </div>
          <div className="border-t border-gray-700 mt-8 w-1/2 mx-auto"></div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-400">
          {/* About Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">About Us.</h4>
            <p className="text-sm mb-6 leading-relaxed">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className="bg-yellow-500 text-black rounded-md px-4 py-2 inline-block">
              <p className="font-semibold">Opening Hours</p>
              <p className="text-sm">Mon - Sat (8:00 - 6:00)</p>
              <p className="text-sm">Sunday - Closed</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {["About", "News", "Partners", "Team", "Menu", "Contacts"].map(
                (link, index) => (
                  <li key={index} className="hover:text-yellow-500 cursor-pointer">
                    {link}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-semibold mb-4">Help?</h4>
            <ul className="space-y-2">
              {[
                "FAQ",
                "Term & conditions",
                "Reporting",
                "Documentation",
                "Support Policy",
                "Privacy",
              ].map((help, index) => (
                <li key={index} className="hover:text-yellow-500 cursor-pointer">
                  {help}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Recent Post</h4>
            <div className="space-y-4">
              {smallpicture.map((post) => (
                <div key={post} className="flex items-center">
                  <img
                    src={post}
                    alt="Post"
                    className="w-12 h-12 rounded-md mr-4"
                  />
                  <div>
                    <p className="text-sm text-gray-500">20 Feb 2022</p>
                    <p className="hover:text-yellow-500 cursor-pointer">
                      Keep Your Business
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Social Icons */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © 2022 by Haseeb. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
          <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="https://www.facebook.com/maarij.khan.161"><FaFacebookF /></a></div>
            <div className=" text-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaTwitter /></div>
            <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="https://www.instagram.com/maarijkhan_mk/#">< FaInstagram/></a></div>
            <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaYoutube /></div>
            <div className="text-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaPinterest /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
