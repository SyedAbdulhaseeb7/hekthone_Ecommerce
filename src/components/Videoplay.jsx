import React, { useState } from "react";

const Videoplay = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          isVideoPlaying ? "hidden" : "block"
        }`}
        style={{
          backgroundImage:
            "url('https://hackathon-figma-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fidk.a5c5feef.png&w=1920&q=75')",
        }}
      ></div>

      {/* Video Background */}
      {isVideoPlaying && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1110269927/preview/stock-footage-close-up-of-a-chef-preparing-a-burger-tasty-beef-patty-being-grilled-on-a-barbeque-grill-flipping.webm" // Replace with your video URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Right Side Content */}
      <div className="relative z-10 flex justify-end items-center h-full px-6 md:px-16">
        <div className="w-full md:w-1/2 text-white text-right">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-sm md:text-xl mb-6 text-gray-200">
            Explore the latest trends with exceptional style and quality. Be the
            first to shop our exclusive products.
          </p>
          <div className="flex justify-end gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition">
              Shop Now
            </button>
            <button
              onClick={toggleVideo}
              className="bg-transparent border border-yellow-500 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded transition"
            >
              {isVideoPlaying ? "Stop Video" : "Play Video"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videoplay;
