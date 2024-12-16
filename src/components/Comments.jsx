import React, { useState } from "react";

const comments = [
  {
    name: "IMran",
    title: "Best Web Design Award",
    comment:
      "This website truly sets a new standard for innovation and quality. A seamless user experience!",
    image:"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/913758_697598.png",
    stars: 5,
  },
  {
    name: "Jane Smith",
    title: "UI/UX Excellence",
    comment:
      "A pixel-perfect design with incredible attention to detail. Well-deserved recognition!",
    image: "https://img.freepik.com/free-photo/face-satisfied-male-customer-showing-thumbs-up-approval-smiling-happy-wearing-glasses-t-shirt-pink-background_1258-41426.jpg",
    stars: 4,
  },
  {
    name: "Jussi",
    title: "Top Innovation Award",
    comment:
      "The website not only looks stunning but also performs flawlessly. Great work!",
    image: "https://img.freepik.com/free-photo/fantastic-meeting-with-friends-shopping_329181-7999.jpg?semt=ais_hybrid",
    stars: 4,
  },
];

const CommentsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % comments.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + comments.length) % comments.length);

  const renderStars = (stars) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`inline-block text-amber-400 text-2xl ${
          index < stars ? "" : "opacity-30"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="text-white py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl text-amber-500 hamza">Testimonials</h1>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-2">
            <span className="text-yellow-600 text-4xl lg:text-5xl pr-2">W</span>
            hat our clients are saying
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            &#8592;
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            &#8594;
          </button>

          {/* Comment Slide */}
          <div className="p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <img
                src={comments[current].image}
                alt={comments[current].name}
                className="w-72 h-72 object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold">{comments[current].name}</h2>
            <p className="text-yellow-400">{comments[current].title}</p>
            <div className="flex justify-center mt-2">
              {renderStars(comments[current].stars)}
            </div>
            <p className="mt-4 text-gray-300 italic">
              "{comments[current].comment}"
            </p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {comments.map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-full ${
                index === current ? "bg-yellow-400" : "bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentsCarousel;
