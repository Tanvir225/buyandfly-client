import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Flame, Mountain, PawPrint, TentTree } from "lucide-react";
import { FaStar, FaUmbrellaBeach } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { GrUserFemale } from "react-icons/gr";



// card funvtion
function Card({ card }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    if (imageIndex < card.images.length - 1) {
      setImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden mt-10 p-3">
      <div className="relative">
        <div className="relative">
          <img
            src={card.images[imageIndex]}
            alt={card.title}
            className="w-full h-full object-cover rounded-lg opacity-710"
          />

          <p className="font-medium absolute left-4 top-4 backdrop-blur-md py-2 px-3 rounded-lg">
            $200/Night
          </p>
        </div>

        {imageIndex > 0 && (
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white text-[#3F1600] rounded-full transition"
          >
            <ChevronLeft />
          </button>
        )}

        {imageIndex < card.images.length - 1 && (
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white text-[#3F1600] rounded-full transition"
          >
            <ChevronRight />
          </button>
        )}

        <div className="flex justify-center space-x-2 absolute bottom-3 left-1/2 -translate-x-1/2">
          {card.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setImageIndex(idx)}
              className={`h-2 w-2 rounded-full ${imageIndex === idx ? "bg-white w-4 transition-all" : "bg-gray-200"
                }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mt-3 p-2">
        <div className="text-[#111111] flex justify-between items-center">
          <p className="font-semibold">Leonardo Hotel Barcelona </p>
          <p className="flex gap-2 items-center">
            <FaStar /> <span>4.7</span>
          </p>
        </div>
        <p className="text-sm text-[#7B6E7E] flex items-center gap-1">
          <SlLocationPin />
          United Kingdom
        </p>
        <div className="flex gap-2 mt-2 text-sm">
          <p className="flex gap-2 items-center font-medium border border-[#DEE2E6] rounded-2xl   py-1 mt-1">
            <GrUserFemale size={10} />2 Adult
          </p>
          <p className="flex gap-2 items-center font-medium border border-[#DEE2E6] rounded-2xl px-1 py-1 mt-1">
            <PawPrint size={10} />
            Pet Friendly
          </p>
          <p className="flex gap-2 items-center font-medium border border-[#DEE2E6] rounded-2xl px-1 py-1 mt-1">
            <TentTree size={10}/>
            Lake Nearby
          </p>
        </div>
        <div className="flex gap-2 mt-1">
          <p className="flex gap-2 items-center font-medium border border-[#DEE2E6] rounded-2xl  py-1 mt-1">
            <Flame size={10}/>
            BonFire 
          </p>
          <p className="flex gap-2 items-center font-medium border border-[#DEE2E6] rounded-2xl  py-1 mt-1">
            <Mountain size={10} />
            Mountain
          </p>
          <p className="flex gap-2 items-center font-medium border border-[#DEE2E6] rounded-2xl px-1 py-1 mt-1">
            <FaUmbrellaBeach size={10}/>
            Beach View
          </p>
        </div>
      </div>
    </div>
  );
}


const TrendingHotel = () => {
  const [selectedTab, setSelectedTab] = useState("France");
  console.log(selectedTab);

  const matchData = cards.filter((card) => card.category === selectedTab);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

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
    if (currentIndex + itemsPerView < cards.length) {
      setCurrentIndex((prev) => prev + itemsPerView);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - itemsPerView);
    }
  };

  return (
    <div className="p-5 lg:py-16 bg-[#002E5B]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl lg:text-3xl text-white ">
            Top Trending hotel in worldwide
          </p>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`transform p-3 rounded-full transition ${currentIndex === 0
                ? "bg-transparent text-white border border-[#DEE2E6] cursor-not-allowed"
                : "bg-[#EF5B0C] text-white hover:bg-orange-600"
                }`}
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerView >= cards.length}
              className={`transform p-3 rounded-full transition ${currentIndex + itemsPerView >= cards.length
                ? "bg-transparent text-white border border-[#DEE2E6] cursor-not-allowed"
                : "bg-[#EF5B0C] text-white hover:bg-orange-600"
                }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap space-x-4 mt-8 bg-white w-fit p-2 rounded-lg">
          <button
            className={`px-4 py-2 rounded-lg ${selectedTab === "France" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("France")}
          >
            France
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${selectedTab === "Japan" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Japan")}
          >
            Japan
          </button>

          <button
            className={`px-4 py-2 rounded-lg ${selectedTab === "Italy" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Italy")}
          >
            Italy
          </button>

          <button
            className={`px-4 py-2 rounded-lg ${selectedTab === "Australia" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Australia")}
          >
            Australia
          </button>

          <button
            className={`px-4 py-2 rounded-lg ${selectedTab === "Denmark" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Denmark")}
          >
            Denmark
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex / cards.length) * 100}%)`,
              width: `${(cards.length / itemsPerView) * 20}%`,
            }}
          >
            {matchData.map((card, index) => (
              <div key={index} className=" px-2">
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHotel;


// fake data


const cards = [
  {
    category: "France",
    price: 120,
    time: "day",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Eiffel Tower",
    rating: 4.8,
    location: "Paris, France",
    seat: 2,
    pet: "pet friendly",
  },
  {
    category: "France",
    price: 120,
    time: "day",
    images: ["https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Eiffel Tower",
    rating: 4.8,
    location: "Paris, France",
    seat: 2,
    pet: "pet friendly",
  },
  {
    category: "France",
    price: 120,
    time: "day",
    images: ["https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Eiffel Tower",
    rating: 4.8,
    location: "Paris, France",
    seat: 2,
    pet: "pet friendly",
  },
  {
    category: "Japan",
    price: 100,
    time: "night",
    images: ["https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Tokyo Tower",
    rating: 4.7,
    location: "Tokyo, Japan",
    seat: 3,
    pet: "not pet friendly",
  },
  {
    category: "Japan",
    price: 100,
    time: "night",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Tokyo Tower",
    rating: 4.7,
    location: "Tokyo, Japan",
    seat: 3,
    pet: "not pet friendly",
  },
  {
    category: "Japan",
    price: 100,
    time: "night",
    images: ["https://i.ibb.co.com/5gPQQZpf/image-4.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Tokyo Tower",
    rating: 4.7,
    location: "Tokyo, Japan",
    seat: 3,
    pet: "not pet friendly",
  },
  {
    category: "Italy",
    price: 150,
    time: "day",
    images: ["https://i.ibb.co.com/5gPQQZpf/image-5.png","https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Colosseum",
    rating: 4.9,
    location: "Rome, Italy",
    seat: 2,
    pet: "pet friendly",
  },
  {
    category: "Italy",
    price: 150,
    time: "day",
    images: ["https://i.ibb.co.com/BKjv9r4c/image-4.png","https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Colosseum",
    rating: 4.9,
    location: "Rome, Italy",
    seat: 2,
    pet: "pet friendly",
  },
  {
    category: "Italy",
    price: 150,
    time: "day",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Colosseum",
    rating: 4.9,
    location: "Rome, Italy",
    seat: 2,
    pet: "pet friendly",
  },
  {
    category: "Australia",
    price: 130,
    time: "night",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-5.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Sydney Opera House",
    rating: 4.8,
    location: "Sydney, Australia",
    seat: 3,
    pet: "not pet friendly",
  },
  {
    category: "Australia",
    price: 130,
    time: "night",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Sydney Opera House",
    rating: 4.8,
    location: "Sydney, Australia",
    seat: 3,
    pet: "not pet friendly",
  },
  {
    category: "Australia",
    price: 130,
    time: "night",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png"],
    title: "Sydney Opera House",
    rating: 4.8,
    location: "Sydney, Australia",
    seat: 3,
    pet: "not pet friendly",
  },
  {
    category: "Denmark",
    price: 110,
    time: "day",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-5.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png"],
    title: "Tivoli Gardens",
    rating: 4.6,
    location: "Copenhagen, Denmark",
    seat: 2,
    pet: "pet friendly",
  },
  {
    category: "Denmark",
    price: 110,
    time: "day",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png"],
    title: "Tivoli Gardens",
    rating: 4.6,
    location: "Copenhagen, Denmark",
    seat: 2,
    pet: "pet friendly",
  },
  {
    category: "Denmark",
    price: 110,
    time: "day",
    images: ["https://i.ibb.co.com/MkcNmdGd/image-4.png", "https://i.ibb.co.com/5gPQQZpf/image-5.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/MkcNmdGd/image-6.png", "https://i.ibb.co.com/BKjv9r4c/image-4.png"],
    title: "Tivoli Gardens",
    rating: 4.6,
    location: "Copenhagen, Denmark",
    seat: 2,
    pet: "pet friendly",
  },
];
