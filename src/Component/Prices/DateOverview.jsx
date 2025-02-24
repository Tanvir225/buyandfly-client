import { useCallback, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Function to chunk the flight data into groups of 5
const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) =>
        i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc, []
    );
};

const DateOverview = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    // Chunking flight data into slides of 5 items each
    const chunkedFlights = chunkArray(flightData, 5);

    const prevSlider = () => {
        setCurrentSlider((prev) => (prev === 0 ? chunkedFlights.length - 1 : prev - 1));
    };

    const nextSlider = useCallback(() => {
        setCurrentSlider((prev) => (prev === chunkedFlights.length - 1 ? 0 : prev + 1));
    }, [chunkedFlights.length]);

    return (
        <div className="relative mx-auto px-10">
            {/* Left Arrow */}
            <button onClick={prevSlider} className="absolute -left-1 top-2 btn btn-sm btn-primary btn-outline">
                <FaArrowLeft></FaArrowLeft>
            </button>

            {/* Carousel Container */}
            <div className="w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-linear"
                    style={{ transform: `translateX(-${currentSlider * 100}%)` }}
                >
                    {chunkedFlights.map((group, index) => (
                        <div key={index} className="w-full flex justify-center items-center shrink-0">
                            {group.map((data, inx) => (
                                <div key={inx} className="text-sm p-1 border w-full text-center rounded-md">
                                    {data.date} <br /> <span className="font-semibold">{data.price} BDT</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <button onClick={nextSlider} className="absolute -right-1 top-2  btn btn-sm btn-primary btn-outline">
                <FaArrowRight/>
            </button>
        </div>
    );
};

export default DateOverview;

// Flight Data
const flightData = [
    { "date": "15 Mar 2025", "price": 10500 },
    { "date": "16 Mar 2025", "price": 11000 },
    { "date": "17 Mar 2025", "price": 11500 },
    { "date": "18 Mar 2025", "price": 12000 },
    { "date": "19 Mar 2025", "price": 12500 },
    { "date": "20 Mar 2025", "price": 13000 },
    { "date": "21 Mar 2025", "price": 13500 },
    { "date": "22 Mar 2025", "price": 14000 },
    { "date": "23 Mar 2025", "price": 14500 },
    { "date": "24 Mar 2025", "price": 15000 }
];
