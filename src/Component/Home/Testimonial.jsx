// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules

import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = ({ reviews }) => {
  return (
    <div className="pb-10">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review._id} className="text-center p-5 pb-8">
            <h2 className="text-xl mb-5 w-[85%] mx-auto bg-gradient-to-t  from-secondary to-primary  text-transparent bg-clip-text">
              {review.review}
            </h2>
            <p className="text-xl font-bold  bg-gradient-to-r  from-primary to-secondary inline-block text-transparent bg-clip-text">
              {review.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
