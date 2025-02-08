import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";


const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleComments = comments.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 3 < comments.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
    <div className="max-w-6xl mx-auto my-16 p-5">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl md:text-3xl text-secondary">
          What Our Customer Says
        </p>
        <div className="flex gap-5">
          <button
            className={`p-3 rounded-full transition ${currentIndex === 0
              ? "cursor-not-allowed border border-[#DEE2E6]"
              : "bg-[#EF5B0C] text-white"
              }`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft />
          </button>
          <button
            className={`p-3 rounded-full transition ${currentIndex + 3 >= comments.length
              ? "cursor-not-allowed border border-[#DEE2E6]"
              : "bg-[#EF5B0C] text-white"
              }`}
            onClick={handleNext}
            disabled={currentIndex + 3 >= comments.length}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4 lg:mt-10 md:mt-6 mt-4">
        {visibleComments.map((comment, index) => (
          <div key={index} className="p-3 border border-[#E2E2E2] space-y-2 rounded-2xl flex flex-col justify-between">
            <p className="text-[#111111] font-semibold text-lg">{comment.title}</p>
            <p className="text-sm text-[#7B6E7E] font-medium mt-3">{comment.comment}</p>
            <div>
              <Rating
                value={comment?.rating} readOnly style={{ maxWidth: 130 }}
              />
            </div>
            <p className="text-[#111111] font-medium">{comment.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;


const comments = [
  {
    title: "Great Experience!",
    comment: "The service was amazing. I'm very satisfied.",
    rating: 5,
    name: "Rafiqul Islam",
  },
  {
    title: "Good but needs improvement",
    comment: "The service was good, but there is room for improvement.",
    rating: 4,
    name: "Suman Ahmed",
  },
  {
    title: "Very bad",
    comment: "My experience was not good at all. Didn't get service on time.",
    rating: 2,
    name: "Mohammad Ali",
  },
  {
    title: "Really good",
    comment: "I enjoyed it a lot. Will use it again.",
    rating: 5,
    name: "Anisur Rahman",
  },
  {
    title: "Average",
    comment: "It could have been a bit better.",
    rating: 3,
    name: "Zakir Hossain",
  },
  {
    title: "Satisfied",
    comment: "The service was fairly good.",
    rating: 4,
    name: "Rimon Mia",
  },
  {
    title: "Terrible experience",
    comment: "Total waste of time. I wouldn’t recommend it to anyone.",
    rating: 1,
    name: "Tanvir Hasan",
  },
  {
    title: "Good",
    comment: "A satisfactory service. Will try again.",
    rating: 4,
    name: "Sharmin Akter",
  },
  {
    title: "Excellent",
    comment: "The customer service was amazing. I'm impressed.",
    rating: 5,
    name: "Nusrat Jahan",
  },
  {
    title: "Definitely good",
    comment: "I will take service from here again.",
    rating: 5,
    name: "Habibur Rahman",
  },
];