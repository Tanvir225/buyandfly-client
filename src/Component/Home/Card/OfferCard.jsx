import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://i.ibb.co.com/fYNqfqQQ/Frame-1171275583.png",
  "https://i.ibb.co.com/xt4xDDSX/Frame-1171275581.png",
  "https://i.ibb.co.com/7dcQ0FC9/Frame-1171275582.png",
  "https://i.ibb.co.com/fYNqfqQQ/Frame-1171275583.png",
  "https://i.ibb.co.com/xt4xDDSX/Frame-1171275581.png",
  "https://i.ibb.co.com/7dcQ0FC9/Frame-1171275582.png",
  "https://i.ibb.co.com/fYNqfqQQ/Frame-1171275583.png",
  "https://i.ibb.co.com/xt4xDDSX/Frame-1171275581.png",
  "https://i.ibb.co.com/7dcQ0FC9/Frame-1171275582.png",
  "https://i.ibb.co.com/fYNqfqQQ/Frame-1171275583.png",
  "https://i.ibb.co.com/xt4xDDSX/Frame-1171275581.png",
  "https://i.ibb.co.com/7dcQ0FC9/Frame-1171275582.png",
  "https://i.ibb.co.com/fYNqfqQQ/Frame-1171275583.png",
  "https://i.ibb.co.com/xt4xDDSX/Frame-1171275581.png",
  "https://i.ibb.co.com/7dcQ0FC9/Frame-1171275582.png",
  "https://i.ibb.co.com/7dcQ0FC9/Frame-1171275582.png",
  "https://i.ibb.co.com/7dcQ0FC9/Frame-1171275582.png",
  "https://i.ibb.co.com/7dcQ0FC9/Frame-1171275582.png",
];

export default function ExTravels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive breakpoints
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= images.length ? 0 : prev + itemsPerView));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerView < 0 ? images.length - itemsPerView : prev - itemsPerView
    );
  };

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(intervalId);
    }, [nextSlide]);

  return (
    <div className="max-w-6xl mx-auto my-16">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl lg:text-3xl text-secondary">
          Exclusive travel deals.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`transform p-3 rounded-full transition ${
              currentIndex === 0
                ? "bg-transparent text-[#3F1600] border border-[#DEE2E6] cursor-not-allowed"
                : "bg-[#EF5B0C] text-white hover:bg-orange-600"
            }`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + itemsPerView >= images.length}
            className={`transform p-3 rounded-full transition ${
              currentIndex + itemsPerView >= images.length
                ? "bg-transparent text-[#3F1600] border border-[#DEE2E6] cursor-not-allowed"
                : "bg-[#EF5B0C] text-white hover:bg-orange-600"
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="overflow-hidden lg:mt-10 md:mt-7 mt-4">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex / images.length) * 100}%)`,
            width: `${(images.length / itemsPerView) * 100}%`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full px-2">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-[240px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
