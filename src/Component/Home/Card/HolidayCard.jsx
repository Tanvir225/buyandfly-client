import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

import campfire from "../../../assets/icon/campfire.png"
import boat from "../../../assets/icon/boat.png"
import beach from "../../../assets/icon/beach-02.png"
import lake from "../../../assets/icon/lake.png"


// card view

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
    <div className=" rounded-lg overflow-hidden mt-10 h-96">
      <div className="rounded-2xl border border-[#DEE2E6] bg-base-100 shadow-sm p-4">
        <div className="relative">
          <div>
            <img
              src={card.images[imageIndex]}
              alt={card.title}
              className="w-full h-full object-cover rounded-lg"
            />
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

        <div className="mt-3">
          <div >
            <div className="mt-3 text-[#111111] flex justify-between">
              <p className="font-semibold text-lg">{card.title}</p>
              <p className="text-lg flex gap-2 items-center">
                <FaStar /> {card.rating}
              </p>
            </div>
            <p className="font-medium  text-[#7B6E7E]">{card.description}</p>
            <p className="font-medium  text-[#7B6E7E]">{card.expected_date}</p>
            <p className="font-semibold  text-[#111111] mt-1">
              {card.price}
              <span className="font-normal text-sm">/{card.time}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const HolidayCard = () => {
  const [selectedTab, setSelectedTab] = useState("Amazing Views");
  console.log(selectedTab);

  const matchData = destinations.filter((card) => card.category === selectedTab);

  return (
    <div className="bg-[#FFF9F5] p-5 lg:p-16">
      <div className=" max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl lg:text-3xl text-secondary">
            Holiday Deals Under Budget
          </p>
        </div>

        <div className="flex space-x-4 flex-wrap mt-8 bg-white w-fit p-3 rounded-lg">
          <button
            className={`px-4 py-2 rounded-lg flex gap-1 items-center ${selectedTab === "Amazing Views" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Amazing Views")}
          >
            <img src={lake} alt="" />Amazing Views
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex gap-1 items-center ${selectedTab === "Lakefront" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Lakefront")}
          >
            <img src={lake} alt="" />Lakefront
          </button>

          <button
            className={`px-4 py-2 rounded-lg flex gap-1 items-center ${selectedTab === "Beachfront" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Beachfront")}
          >
            <img src={beach} alt="" />Beachfront
          </button>

          <button
            className={`px-4 py-2 rounded-lg flex gap-1 items-center ${selectedTab === "Boats" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Boats")}
          >
            <img src={boat} alt="" />Boats
          </button>

          <button
            className={`px-4 py-2 rounded-lg flex gap-1 items-center ${selectedTab === "Camping" ? "bg-orange-500 text-white" : "text-[#7B6E7E]"
              }`}
            onClick={() => setSelectedTab("Camping")}
          >
            <img src={campfire} alt="" />Camping
          </button>
        </div>

        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
            {matchData.map((card, index) => (
              <div key={index} className=" ">
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;


// fake data
const destinations = [
  {
    title: "Santorini, Greece",
    rating: 4.8,
    description: "A beautiful island with blue and white.",
    expected_date: "2025-06-15",
    price: 1500,
    time: "Day",
    category: "Amazing Views",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",

      "https://i.ibb.co.com/svhPTc2k/bali.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Bali, Indonesia",
    rating: 4.7,
    description: "Bali's peaceful beaches and lush forests",
    expected_date: "2025-07-20",
    price: 1200,
    time: "Night",
    category: "Beachfront",
    images: [
      "https://i.ibb.co.com/svhPTc2k/bali.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Lake Como, Italy",
    rating: 4.7,
    description:
      "The calm waters of Lake  view.",
    expected_date: "2025-07-10",
    price: 1400,
    time: "Day",
    category: "Lakefront",
    images: [
      "https://i.ibb.co.com/KxfDZC5h/america.webp",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Ha Long Bay, Vietnam",
    rating: 4.8,
    description:
      "The stunning islands for an unforgettable trip.",
    expected_date: "2025-09-15",
    price: 1600,
    time: "Day",
    category: "Boats",
    images: [
      "https://i.ibb.co.com/KxfDZC5h/america.webp",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Grand Canyon, USA",
    rating: 4.9,
    description: "Camping in the heart of the Grand Canyon.",
    expected_date: "2025-10-05",
    price: 900,
    time: "Night",
    category: "Camping",
    images: [
      "https://i.ibb.co.com/svhPTc2k/bali.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Machu Picchu, Peru",
    rating: 4.9,
    description:
      "The ancient ruins of Machu Picchu.",
    expected_date: "2025-08-25",
    price: 1700,
    time: "Day",
    category: "Amazing Views",
    images: [
      "https://i.ibb.co.com/svhPTc2k/bali.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Dubai, UAE",
    rating: 4.6,
    description: "A city where modern architecture.",
    expected_date: "2025-12-05",
    price: 2000,
    time: "Night",
    category: "Amazing Views",
    images: [
      "https://i.ibb.co.com/bjwMYcCS/baki.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "The Maldives",
    rating: 4.9,
    description:
      "Luxury overwater and crystal-clear waters.",
    expected_date: "2025-11-10",
    price: 2500,
    time: "Day",
    category: "Beachfront",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Yellowstone National Park, USA",
    rating: 4.8,
    description:
      "Home to geysers, hot springs, and wildlife.",
    expected_date: "2025-09-30",
    price: 800,
    time: "Day",
    category: "Camping",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Venice, Italy",
    rating: 4.7,
    description: "A city canals,create a romantic atmosphere.",
    expected_date: "2025-05-20",
    price: 1800,
    time: "Night",
    category: "Boats",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
];
