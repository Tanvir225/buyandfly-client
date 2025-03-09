import { useForm } from "react-hook-form";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react";

const DetailsForm = ({ selectedBookingSide, setSelectedBookingSide }) => {

    console.log(selectedBookingSide);
    // form start
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Form Submitted Successfully!");
    };

    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedMeal, setSelectedMeal] = useState("none");
    const [selectedChair, setSelectedChair] = useState("no");
    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const handleMealChange = (e) => {
        setSelectedMeal(e.target.value);
        console.log("Selected Meal:", e.target.value);
    };

    const handleChairChange = (e) => {
        setSelectedChair(e.target.value);
        console.log("Selected Chair:", e.target.value);
    };
    // form start

    return (
        <div className="ml-3">
            {selectedBookingSide === "travelerDetails" && (
                <div className="rounded-lg shadow-lg bg-white relative">
                    <div className="flex items-center justify-between px-4 py-2">
                        <h2 className="font-bold text-gray-700">
                            Provide Traveler Details
                        </h2>
                        <p className="text-sm text-gray-600">0 of 1 validated</p>
                    </div>

                    <p className="flex justify-center items-center gap-1 font-medium text-sm py-3 bg-blue-200 border-b-2 border-blue-500 mt-3">
                        <span className="px-[6px] py-[1px]  bg-blue-600 rounded-full text-white font-medium text-xs">
                            1
                        </span>
                        Primary Traveler
                    </p>

                    {/* scrollable form start */}
                    <div className="max-h-96 overflow-y-auto px-4 pb-4 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* favorite travelers start */}
                            <div>
                                <select
                                    {...register("favoriteTravelers")}
                                    className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100"
                                >
                                    <option value="">Select from favorite travelers</option>
                                    <option value="Male">MySelf</option>
                                </select>
                            </div>
                            {/* favorite travelers start */}

                            <div className="mt-5 flex items-center gap-2 text-center w-full">
                                <div className="border border-gray-300 w-full"></div>
                                <p className="text-xs text-gray-500 whitespace-nowrap">
                                    Or,Enter Traveler Details below
                                </p>
                                <div className="border border-gray-300 w-full"></div>
                            </div>

                            {/* Name start*/}
                            <div className="flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Given Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                                    )}
                                </div>

                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Surname <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("surname", { required: "Surname is required" })}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                    />
                                    {errors.surname && (
                                        <p className="text-red-500 text-sm">{errors.surname.message}</p>
                                    )}
                                </div>
                            </div>
                            {/* Name end*/}

                            {/* Gender and Nationality start */}
                            <div className="flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Gender <span className="text-red-600">*</span>
                                    </label>
                                    <select
                                        {...register("gender", { required: "Gender is required" })}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.gender && (
                                        <p className="text-red-500 text-sm">{errors.gender.message}</p>
                                    )}
                                </div>

                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Nationality <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("nationality", {
                                            required: "Nationality is required",
                                        })}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                    />
                                    {errors.nationality && (
                                        <p className="text-red-500 text-sm">{errors.nationality.message}</p>
                                    )}
                                </div>
                            </div>
                            {/* Gender and Nationality start */}

                            {/* Date of Birth and Frequent Flyer Number start*/}
                            <div className="flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Date of Birth <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        {...register("dob", { required: "Date of Birth is required" })}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                    />
                                    {errors.dob && (
                                        <p className="text-red-500 text-sm">{errors.dob.message}</p>
                                    )}
                                </div>

                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Frequent Flyer Number
                                    </label>
                                    <input
                                        type="text"
                                        {...register("frequentFlyer")}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                    />
                                </div>
                            </div>
                            {/* Date of Birth and Frequent Flyer Number start*/}

                            {/* Phone Number and start */}
                            <div className="flex items-center gap-4">
                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        {...register("phone", {
                                            required: "Phone Number is required",
                                            pattern: {
                                                value: /^[0-9]{10,15}$/,
                                                message: "Enter a valid phone number",
                                            },
                                        })}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                        placeholder="1234567890"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                    )}
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Email <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: "Enter a valid email address",
                                            },
                                        })}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                        placeholder="example@mail.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>
                            {/* Phone Number and end */}

                            {/* Post Code start*/}
                            <div className="flex gap-4 w-full">
                                <div className="w-full">
                                    <label className="block text-gray-600 text-sm font-medium">
                                        Post Code <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("postcode", { required: "Post Code is required" })}
                                        className="w-full p-2 border rounded-md text-gray-600 border-none bg-gray-100 mt-1"
                                    />
                                    {errors.postcode && (
                                        <p className="text-red-500 text-sm">{errors.postcode.message}</p>
                                    )}
                                </div>
                                <div className="w-full"></div>
                            </div>
                            {/* Post Code end*/}

                            <div className="mt-5 flex items-center gap-2 text-center">
                                <div className="border border-gray-300 w-full"></div>
                                <p className="text-xs text-gray-500 whitespace-nowrap">
                                    Select optional services
                                </p>
                                <div className="border border-gray-300 w-full"></div>
                            </div>

                            {/* dropdown start */}
                            <div>
                                <div className="border border-gray-400 rounded-md">
                                    {/* meal start */}
                                    <div
                                        className="flex justify-between items-center cursor-pointer px-4 py-2 bg-gray-100"
                                        onClick={() => toggleDropdown("meal")}
                                    >
                                        <div>
                                            <p className="font-medium">Select Meal type</p>
                                            <p className="text-sm text-gray-500">Optional</p>
                                        </div>
                                        <div className="flex gap-2 text-gray-500 items-center">
                                            <p>{selectedMeal}</p>
                                            {openDropdown === "meal" ? (
                                                <ChevronUp size={20} />
                                            ) : (
                                                <ChevronDown size={20} />
                                            )}
                                        </div>
                                    </div>

                                    {openDropdown === "meal" && (
                                        <div className="pb-4">
                                            <p className="py-2 px-3 bg-orange-100 border-t border-orange-300 border-b break-normal w-full text-sm">
                                                Meals are accessible if provided by the Airlines.
                                            </p>
                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="meal"
                                                        value="None"
                                                        checked={selectedMeal === "None"}
                                                        onChange={handleMealChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <span>None</span>
                                                </label>
                                            </div>

                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="meal"
                                                        value="Asian Vegetarian Meal"
                                                        checked={selectedMeal === "Asian Vegetarian Meal"}
                                                        onChange={handleMealChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <span>Asian Vegetarian Meal</span>
                                                </label>
                                            </div>

                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="meal"
                                                        value="Infant/baby Food"
                                                        checked={selectedMeal === "Infant/baby Food"}
                                                        onChange={handleMealChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <span>Infant/baby Food</span>
                                                </label>
                                            </div>

                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="meal"
                                                        value="Child Meal"
                                                        checked={selectedMeal === "Child Meal"}
                                                        onChange={handleMealChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <span>Child Meal</span>
                                                </label>
                                            </div>

                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="meal"
                                                        value="Diabetic Meal"
                                                        checked={selectedMeal === "Diabetic Meal"}
                                                        onChange={handleMealChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <span>Diabetic Meal</span>
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {/* meal end */}
                                </div>

                                <div className="border border-gray-400 rounded-md mt-4">
                                    {/* chair start */}
                                    <div
                                        className="flex justify-between items-center cursor-pointer px-4 py-2 bg-gray-100"
                                        onClick={() => toggleDropdown("chair")}
                                    >
                                        <div>
                                            <p className="font-medium">Request Wheel Chair</p>
                                            <p className="text-sm text-gray-500">Optional</p>
                                        </div>
                                        <div className="flex gap-2 text-gray-500 items-center">
                                            <p>{selectedChair}</p>
                                            {openDropdown === "chair" ? (
                                                <ChevronUp size={20} />
                                            ) : (
                                                <ChevronDown size={20} />
                                            )}
                                        </div>
                                    </div>

                                    {openDropdown === "chair" && (
                                        <div className="pb-4">
                                            <p className="py-2 px-3 bg-orange-100 border-t border-orange-300 border-b break-words whitespace-normal w-full">
                                                Wheel Chair services are accessible by the Airlines.

                                            </p>
                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="chair"
                                                        value="No"
                                                        checked={selectedChair === "No"}
                                                        onChange={handleChairChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <span>No</span>
                                                </label>
                                            </div>

                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="chair"
                                                        value="Yes"
                                                        checked={selectedChair === "Yes"}
                                                        onChange={handleChairChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                    />
                                                    <span>
                                                        Passenger can not walk up or down stairs.
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="chair"
                                                        value="Yes"
                                                        checked={selectedChair === "Yes"}
                                                        onChange={handleChairChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 break-words"
                                                    />
                                                    <span>
                                                        Passenger can not walk short distance,
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="chair"
                                                        value="Yes"
                                                        checked={selectedChair === "Yes"}
                                                        onChange={handleChairChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 break-words"
                                                    />
                                                    <span>
                                                        Passenger cannot walk any distance.
                                                    </span>
                                                </label>
                                            </div>

                                            <div className="px-4">
                                                <label className="flex px-4 py-4 items-center space-x-3 bg-gray-200 mt-4 rounded-md border border-gray-400">
                                                    <input
                                                        type="radio"
                                                        name="chair"
                                                        value="Yes"
                                                        checked={selectedChair === "Yes"}
                                                        onChange={handleChairChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 break-words"
                                                    />
                                                    <span>On-board aisle wheelchair requested</span>
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                    {/* chair start */}
                                </div>
                            </div>
                            {/* dropdown start */}

                            <div className="py-2 px-3 bg-orange-100 text-sm rounded-md flex items-center justify-between">
                                <p>Save this traveler info future use</p>
                                <label
                                    htmlFor="Toggle1"
                                    className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800"
                                >
                                    <span className="relative">
                                        <input id="Toggle1" type="checkbox" className="hidden peer" />
                                        <div className="w-10 h-5 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-blue-500"></div>
                                        <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
                                    </span>
                                </label>
                            </div>
                        </form>
                    </div>
                    {/* scrollable form end */}

                    {/* fixed buttons start */}
                    <div className="flex gap-4 justify-between mt-4 sticky rounded-b-lg pb-2 pl-3 pr-3">
                        <button
                            type="button"
                            className="px-2 py-2 bg-gray-40 rounded-md bg-gray-500 hover:bg-gray-600 text-center text-white w-full"
                        >
                            Back to Payment Options
                        </button>
                        <button
                            onClick={handleSubmit(onSubmit)}
                            className="px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center w-full"
                        >
                            Save & Continue
                        </button>
                    </div>
                    {/* fixed buttons end */}
                </div>
            )}
        </div>
    );
};

export default DetailsForm;