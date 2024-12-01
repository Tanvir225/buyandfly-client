import { Link } from "react-router-dom";
import logo from "/logo.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Navbar = () => {
  return (
    <section className="fixed top-0 w-full z-20">
      {/* topbar */}

      <div className="bg-secondary text-white py-1">
        <div className="flex justify-center items-center lg:justify-between max-w-6xl mx-auto px-2">
          {/* text */}
          <div className="hidden text-sm  lg:block w-full lg:w-[40%]">
            <Swiper
              spaceBetween={10}
              grabCursor={true}
              slidesPerView={1}
              autoplay={{delay:3000}}
              modules={[Autoplay]}
              loop={true} // Infinite loop
            >
              <SwiperSlide>
                Wi-fi flights allowed, government notifies new rules on flights
                allowed
              </SwiperSlide>
              <SwiperSlide>Travel far enough, you meet yourself.</SwiperSlide>
              <SwiperSlide>
                A journey is best measured in friends rather than miles.
              </SwiperSlide>
            </Swiper>
          </div>

          {/* navigate to pages */}
          <div className="flex justify-center items-center text-sm md:text-base space-x-0 sm:space-x-1 md:space-x-1">
            <Link to={"/"}>Log in</Link>
            <div className="divider divider-horizontal"></div>
            <Link to={"/"}>Sign up</Link>
            <div className="divider divider-horizontal"></div>
            <Link to={"/"}>Agent Login</Link>
            <div className="divider divider-horizontal"></div>
            <Link to={"/"}>Customer Care</Link>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="bg-base-100 shadow-md py-2">
        <div className="max-w-6xl mx-auto px-2 flex items-center justify-between">
          {/* logo */}
          <section className="w-32">
            <img src={logo} alt="logo" />
          </section>
          {/* nav item */}
          <section>
            <ul className="uppercase flex items-center justify-center gap-5 ">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Flights</Link>
              </li>
              <li>
                <Link>Hotels</Link>
              </li>
              <li>
                <Link>HoliDays</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
