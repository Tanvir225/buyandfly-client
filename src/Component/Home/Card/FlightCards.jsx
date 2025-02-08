import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const flights = [
  {
    airline: "Fly Emirates",
    route: "Dhaka ⇆ Delhi",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/bjwMYcCS/baki.jpg",
    category: "Domestic",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "Air India",
    route: "Dhaka ⇆ Los Angeles",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/bjwMYcCS/baki.jpg",
    category: "International",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "Biman Bangladesh Airlines",
    route: "Dhaka ⇆ Rome",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/svhPTc2k/bali.jpg",
    category: "Domestic",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/7dynF3Yj/Rectangle-8814-1.png",
    category: "International",
    logo: "https://i.ibb.co.com/Zpb07FP1/image-3.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/svhPTc2k/bali.jpg",
    category: "International",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/KxfDZC5h/america.webp",
    category: "International",
    logo: "https://i.ibb.co.com/bjwMYcCS/baki.jpg",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/RkZdQyTW/Rectangle-8814.png",
    category: "International",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/bjwMYcCS/baki.jpg",
    category: "International",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/RkZdQyTW/Rectangle-8814.png",
    category: "Domestic",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/KxfDZC5h/america.webp",
    category: "Domestic",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/KxfDZC5h/america.webp",
    category: "Domestic",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/svhPTc2k/bali.jpg",
    category: "Domestic",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/svhPTc2k/bali.jpg",
    category: "Domestic",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  },
  {
    airline: "China Southern Airlines",
    route: "Dhaka ⇆ Doha",
    price: "BDT 4,200",
    image: "https://i.ibb.co.com/svhPTc2k/bali.jpg",
    category: "Domestic",
    logo: "https://i.ibb.co.com/KzjTCdT3/image-1.png",
  }
];

const FlightCards = () => {
  const [selectedTab, setSelectedTab] = useState("Domestic");
  // console.log(selectedTab);

  const matchData = flights.filter((flight) => flight.category === selectedTab);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive breakpoints
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextSlide = () => {
    if (currentIndex + itemsPerView < matchData.length) {
      setCurrentIndex((prev) => prev + itemsPerView);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - itemsPerView);
    }
  };

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(intervalId);
    }, [nextSlide]);

  return (
    <div className="max-w-6xl mx-auto my-16 p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl lg:text-3xl text-secondary">
          Your Next Flight Awaits
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`transform p-3 rounded-full transition ${currentIndex === 0
                ? "bg-transparent text-[#3F1600] border border-[#DEE2E6] cursor-not-allowed"
                : "bg-[#EF5B0C] text-white hover:bg-orange-600"
              }`}
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + itemsPerView >= matchData.length}
            className={`transform p-3 rounded-full transition ${currentIndex + itemsPerView >= matchData.length
                ? "bg-transparent text-[#3F1600] border border-[#DEE2E6] cursor-not-allowed"
                : "bg-[#EF5B0C] text-white hover:bg-orange-600"
              }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mt-8 border border-[#DEE2E6] w-fit p-2 rounded-lg">
        <button
          className={`px-4 py-2 rounded-lg ${selectedTab === "Domestic" ? "bg-orange-500 text-white" : "bg-white"
            }`}
          onClick={() => setSelectedTab("Domestic")}
        >
          Domestic
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedTab === "International" ? "bg-orange-500 text-white" : "bg-white"
            }`}
          onClick={() => setSelectedTab("International")}
        >
          International
        </button>
      </div>

      <div className="w-full mx-auto lg:mt-10 md:mt-7 mt-4">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex / matchData.length) * 100}%)`,
              width: `${(matchData.length / itemsPerView) * 100}%`,
            }}
          >
            {matchData.map((card, index) => (
              <div key={index} className="w-full border border-[#DEE2E6] rounded-2xl">
                <div>
                  <div className="flex items-center gap-3 bg-[#FFF7F4] p-3">
                    <img className="w-[41px] h-[41px]" src={card.logo} alt="" />
                    <div className="text-[#111111]">
                      <p className="text-sm">{card.airline}</p>
                      <p className="font-semibold text-lg">{card.route}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <img className="w-full h-52" src={card.image} alt="" />
                    <div className="text-white absolute z-10 bottom-5 right-5 bg-[#0000004D] py-2 px-3 rounded-xl backdrop-blur-lg">
                      <p className="text-xs">Starting From</p>
                      <p className="font-semibold">BDT 4,200</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCards;
