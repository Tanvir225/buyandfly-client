// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import brack from "../../../assets/brack_Offer.png";
import bkash from "../../../assets/bkash_offer.png";
import enjoy from "../../../assets/enjoy_offer.png";
import umrah from "../../../assets/umrah_Offer.png";
import health from "../../../assets/health_Offer.png";
import singapore from "../../../assets/singapre_Offer.png";

// Import Swiper styles
import "swiper/css";

// import required modules

import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Button from "../../Shared/Button";
import { useRef } from "react";

const OfferCard = () => {
  const swiperRef = useRef(null); // Ref to access Swiper instance

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay.stop(); // Stop autoplay on hover
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay.start(); // Restart autoplay on mouse leave
  };

  const isSmallScreen = window.innerWidth < 1024;
  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign Swiper instance to ref
        slidesPerView={isSmallScreen ? 1 : 3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        modules={[Pagination, Autoplay]}
        className="mySwiper space-x-5 "
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div
            className="relative group  h-52 overflow-hidden rounded-lg shadow-lg mb-14"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            <img
              src={bkash}
              alt="Sample"
              className="w-full h-full object-cover"
            />
            {/* Full Overlay */}
            <div className="absolute inset-0 space-y-2 bg-black/70 text-white flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <p className="text-lg font-semibold">
                Extra 5% discount on USD Payments
              </p>
              <p>Extra 5% discount on USD Payments</p>
              <Button text="View Details"></Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative group  h-52 overflow-hidden rounded-lg shadow-lg mb-14"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            <img
              src={singapore}
              alt="Sample"
              className="w-full h-full object-cover"
            />
            {/* Full Overlay */}
            <div className="absolute inset-0 space-y-2 bg-black/70 text-white flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <p className=" text-center font-semibold">
                Exciting limited-time deals with Singapore Airlines!
              </p>
              <p>Extra 5% discount on USD Payments</p>
              <Button text="View Details"></Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative group  h-52 overflow-hidden rounded-lg shadow-lg mb-14"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            <img
              src={brack}
              alt="Sample"
              className="w-full h-full object-cover"
            />
            {/* Full Overlay */}
            <div className="absolute inset-0 space-y-2 bg-black/70 text-white flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <p className="text-lg font-semibold">
                Extra 5% discount on USD Payments
              </p>
              <p>Extra 5% discount on USD Payments</p>
              <Button text="View Details"></Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative group  h-52 overflow-hidden rounded-lg shadow-lg mb-14"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            <img
              src={umrah}
              alt="Sample"
              className="w-full h-full object-cover"
            />
            {/* Full Overlay */}
            <div className="absolute inset-0 space-y-2 bg-black/70 text-white flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <p className=" text-center font-semibold">
                Umrah packages for specific BRAC Bank Premium Banking Debit
                cardholders
              </p>
              <p>Extra 5% discount on USD Payments</p>
              <Button text="View Details"></Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative group  h-52 overflow-hidden rounded-lg shadow-lg mb-14"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            <img
              src={health}
              alt="Sample"
              className="w-full h-full object-cover"
            />
            {/* Full Overlay */}
            <div className="absolute inset-0 space-y-2 bg-black/70 text-white flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <p className="text-lg font-semibold">
                Your health journey made rewarding
              </p>
              <p>Extra 5% discount on USD Payments</p>
              <Button text="View Details"></Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative group  h-52 overflow-hidden rounded-lg shadow-lg mb-14"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Image */}
            <img
              src={enjoy}
              alt="Sample"
              className="w-full h-full object-cover"
            />
            {/* Full Overlay */}
            <div className="absolute inset-0 space-y-2 bg-black/70 text-white flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <p className="text-lg font-semibold">
                Extra 5% discount on USD Payments
              </p>
              <p>Extra 5% discount on USD Payments</p>
              <Button text="View Details"></Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OfferCard;
