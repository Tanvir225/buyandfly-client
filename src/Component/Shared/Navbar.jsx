import { Link } from "react-router-dom";
import logo from "/logo.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";

import { FaMailBulk, FaPhone } from "react-icons/fa";
import NavLink from "./NavLink";


const Navbar = () => {



  return (
    <section className="fixed top-0 w-full z-20 hidden lg:block">
      {/* topbar */}

      <div className="bg-secondary text-white py-3">
        <div className="flex justify-center items-center lg:justify-between max-w-7xl mx-auto px-2">
          {/* text */}
          <div className="hidden text-[15px]  lg:block w-full lg:w-[42%]">
            <Swiper
              spaceBetween={10}
              grabCursor={true}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
              loop={true} // Infinite loop
            >
              <SwiperSlide>
                Wi-fi flights allowed, government notifies on flights
                allowed
              </SwiperSlide>
              <SwiperSlide>Travel far enough, you meet yourself.</SwiperSlide>
              <SwiperSlide>
                A journey is best measured in friends rather than miles.
              </SwiperSlide>
            </Swiper>
          </div>

          {/* navigate to pages */}
          <div className="flex justify-center items-center text-sm space-x-0 sm:space-x-1 md:space-x-1">
            <Link to={"/"} className="flex items-center gap-1"><FaPhone size={14}></FaPhone> 09606-030405</Link>
            <div className="divider divider-horizontal  divider-accent"></div>
            <Link to={"/"} className="flex items-center gap-1"><FaMailBulk size={14}></FaMailBulk>agency@buyandfly.net</Link>
            <div className="divider divider-horizontal divider-accent"></div>

            {/* user  */}
            <Link to={"/"} className="">Login</Link>
            <div className="divider divider-horizontal divider-accent"></div>

            {/* agent  */}
            <Link to={"/"} className="">Agent</Link>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="bg-base-100 shadow-md py-1">
        <div className="max-w-7xl mx-auto px-2 flex items-center justify-between">
          {/* logo */}
          <Link to={"/"} className="w-32">
            <img src={logo} alt="logo" />
          </Link>
          {/* nav item */}
          <section>
            <ul className="  flex items-center justify-center">
               <NavLink></NavLink>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
