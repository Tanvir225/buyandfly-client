import { useState } from "react";
import beach from "../../assets/icon/beach-02.png";
import boat from "../../assets/icon/boat.png";
import campfire from "../../assets/icon/campfire.png";
import lake from "../../assets/icon/lake.png";
import { FaStar } from "react-icons/fa";
import { Carousel } from "@material-tailwind/react";

const HoliDayDeal = () => {
  const [activeTab, setActiveTab] = useState("Amazing Views");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  // console.log(activeTab);
  const matchCategories = destinations.filter((destination) => destination.category === activeTab);

  return (
    <div className="bg-[#FFF9F5] lg:px-28 md:px-24 lg:py-20 md:py-16">
      <p className="font-semibold lg:text-[46px] md:text-4xl text-2xl leading-[64px] text-[#002E5B] md:text-left text-center">
        Holiday Deals Under Budget
      </p>
      <div className="grid lg:grid-cols-5 grid-cols-3 border-2 border-[#DEE2E6] p-[10px] w-fit rounded-[10px] lg:mt-10 md:mt-7 mt-2 bg-white">
        <button
          className={`px-4 flex gap-2 items-center ${activeTab === "Amazing Views"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
            }`}
          onClick={() => handleTabClick("Amazing Views")}
        >
          <img src={lake} alt="" /> Amazing Views
        </button>

        <button
          className={`px-4 flex gap-2 items-center ${activeTab === "Lakefront"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
            }`}
          onClick={() => handleTabClick("Lakefront")}
        >
          <img src={lake} alt="" /> Lakefront
        </button>
        <button
          className={`px-4 flex gap-2 items-center ${activeTab === "Beachfront"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
            }`}
          onClick={() => handleTabClick("Beachfront")}
        >
          <img src={beach} alt="" /> Beachfront
        </button>
        <button
          className={`px-4 flex gap-2 items-center ${activeTab === "Boats"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
            }`}
          onClick={() => handleTabClick("Boats")}
        >
          <img src={boat} alt="" /> Boats
        </button>
        <button
          className={`px-4 flex gap-2 items-center ${activeTab === "Camping"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
            }`}
          onClick={() => handleTabClick("Camping")}
        >
          <img src={campfire} alt="" /> Camping
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {matchCategories.map((data, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#DEE2E6] lg:mt-10 md:mt-6 mt-3 p-4"
          >
            <div>
              <Carousel className="rounded-xl">
                {data.images.map((imgUrl, index) => (
                  <div key={index}>
                    <img src={imgUrl} alt="image 1" className="h-full w-full object-cover" />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="mt-3 text-[#111111] flex justify-between">
              <p className="font-semibold text-lg">{data.title}</p>
              <p className="text-lg flex gap-2 items-center">
                <FaStar /> {data.rating}
              </p>
            </div>
            <p className="font-medium text-lg text-[#7B6E7E]">{data.description}</p>
            <p className="font-medium text-lg text-[#7B6E7E]">{data.expected_date}</p>
            <p className="font-semibold text-lg text-[#111111] mt-1">
              {data.price}
              <span className="font-normal text-sm">/{data.time}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoliDayDeal;



// fake data


const destinations = [
  {
    title: "Santorini, Greece",
    rating: 4.8,
    description: "A beautiful island with blue and white buildings overlooking the Aegean Sea.",
    expected_date: "2025-06-15",
    price: 1500,
    time: "Day",
    category: "Amazing Views",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/zW7zhQjw/Vietnam.png",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Bali, Indonesia",
    rating: 4.7,
    description: "Bali's peaceful beaches and lush forests captivate travelers.",
    expected_date: "2025-07-20",
    price: 1200,
    time: "Night",
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
    title: "Lake Como, Italy",
    rating: 4.7,
    description:
      "The calm waters of Lake Como and the surrounding mountains create a magical view.",
    expected_date: "2025-07-10",
    price: 1400,
    time: "Day",
    category: "Lakefront",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
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
      "The stunning limestone islands of Ha Long Bay make for an unforgettable boat trip.",
    expected_date: "2025-09-15",
    price: 1600,
    time: "Day",
    category: "Boats",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Grand Canyon, USA",
    rating: 4.9,
    description: "Camping in the heart of the Grand Canyon is a breathtaking experience.",
    expected_date: "2025-10-05",
    price: 900,
    time: "Night",
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
    title: "Machu Picchu, Peru",
    rating: 4.9,
    description:
      "The ancient ruins of Machu Picchu sit atop the Andes Mountains, offering an awe-inspiring view.",
    expected_date: "2025-08-25",
    price: 1700,
    time: "Day",
    category: "Amazing Views",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
    ],
  },
  {
    title: "Dubai, UAE",
    rating: 4.6,
    description: "A city where modern architecture meets desert landscapes.",
    expected_date: "2025-12-05",
    price: 2000,
    time: "Night",
    category: "Amazing Views",
    images: [
      "https://i.ibb.co.com/pjknrGzq/wooden-footbridge-leading-into-lake.jpg",
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
      "Luxury overwater bungalows and crystal-clear waters make this the perfect beach paradise.",
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
      "Home to geysers, hot springs, and an abundance of wildlife, Yellowstone is perfect for nature lovers.",
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
    description: "A city built on canals, where gondola rides create a romantic atmosphere.",
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
