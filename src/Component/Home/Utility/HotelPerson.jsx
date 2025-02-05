import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";


const HotelPerson = ({ child, setChild, adult, setAdult,room_no }) => {

    // increment function
    const handleIncrement = (passenger, setPassenger) => {

        setPassenger(passenger + 1)

    }

    const handleDecrement = (passenger, setPassenger) => {
        if (passenger >= 1) {
            setPassenger(passenger - 1)
        }
        if (passenger < 1) {
            setPassenger(passenger)
        }
    }


    return (
        <section className="p-2 space-y-3 border-2 rounded-md">
            <p className="font-semibold ">Room : {room_no}</p>
            <div className="flex justify-between items-center gap-5 text-center ">
                <div>
                    <h2>Adult</h2>
                </div>

                <div className="flex justify-center items-center gap-5 ">
                    <CiCircleMinus onClick={() => handleDecrement(adult, setAdult)} size={24} className={`${adult < 1 && 'text-gray-200'}`}></CiCircleMinus>
                    <p className="text-base">{adult}</p>
                    <CiCirclePlus onClick={() => handleIncrement(adult, setAdult)} size={24} className="cursor-pointer"></CiCirclePlus>
                </div>
            </div>
            <div className="flex justify-between items-center gap-5 text-center ">
                <div>
                    <h2>Child</h2>
                </div>

                <div className="flex justify-center items-center gap-5 ">
                    <CiCircleMinus onClick={() => handleDecrement(child, setChild)} size={24} className={`${child < 1 && 'text-gray-200'}`}></CiCircleMinus>
                    <p className="text-base">{child}</p>
                    <CiCirclePlus onClick={() => handleIncrement(child, setChild)} size={24} className="cursor-pointer"></CiCirclePlus>
                </div>
            </div>
        </section>
    );
};

export default HotelPerson;