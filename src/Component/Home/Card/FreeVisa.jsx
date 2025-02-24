

import React from 'react';
import Title from '../../Shared/Title';

const FreeVisa = () => {
    return (
        <div className="bg-[#FFF9F5] w-full space-y-10 p-5 md:pb-16 shadow-sm">

            <div className='mt-10'>
                <Title  title="Hassle-Free Visa Processing"></Title>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 w-full">
                {visaData.map((visa, index) => (<div key={index} className="relative w-fit mx-auto">
                    <div className="relative w-full">
                        <img className="rounded-2xl w-full  " src={visa.image} alt="" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
                    </div>
                    <div className="absolute top-0 flex flex-col justify-between h-full px-6 py-5 ">
                        <p className="px-[14px] py-2 text-center text-white rounded-[10px] bg-[#0000004D] w-fit font-medium leading-[22px]">
                            {visa.price}
                        </p>
                        <div>
                            <p className="font-semibold text-white text-[18px] leading-6">{visa.title}</p>
                            <p className="text-sm leading-[23px] text-white mt-1">{visa.description}</p>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default FreeVisa;



// fake data


const visaData = [
    {
        "image": "https://i.ibb.co.com/5XLGPQvX/Indian.png",
        "price": "BDT 1500",
        "title": "Indian Visa Process",
        "description": "Tourist Visa"
    },
    {
        "image": "https://i.ibb.co.com/9Hfk9Trg/Thailand.png",
        "price": "BDT 2000",
        "title": "Thailand",
        "description": "Tourist Visa"
    },
    {
        "image": "https://i.ibb.co.com/4n6XGvR5/Malaysia.png",
        "price": "BDT 1800",
        "title": "Malaysia",
        "description": "Tourist Visa"
    },
    {
        "image": "https://i.ibb.co.com/pjDSnxpc/Chaina.png",
        "price": "BDT 2500",
        "title": "China",
        "description": "Tourist Visa"
    },
    {
        "image": "https://i.ibb.co.com/zW7zhQjw/Vietnam.png",
        "price": "BDT 1200",
        "title": "Vietnam",
        "description": "Tourist Visa."
    },
    {
        "image": "https://i.ibb.co.com/BVTS8qMk/Singapore.png",
        "price": "BDT 2200",
        "title": "Singapore",
        "description": "Tourist Visa"
    },
    {
        "image": "https://i.ibb.co.com/RkgMn8Lv/United-Arab-Emirates.png",
        "price": "BDT 1600",
        "title": "United Arab Emirates",
        "description": "Tourist Visa"
    },
    {
        "image": "https://i.ibb.co.com/6K97NKH/Uzbekishtan.png",
        "price": "BDT 3000",
        "title": "Uzbekistan",
        "description": "Tourist Visa"
    }
]  