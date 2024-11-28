

const HolidayQuery = () => {
    return (
        <div className="uppercase flex w-full my-7 lg:w-[1152px] px-7 gap-7 text-black">
            <select  className="w-full p-2 border-2 rounded-md border-primary">
                <option value="">Top Adventure Destination</option>
                <option value="">Top Expermental Tour</option>
                <option value="">Domestic</option>
                <option value="">Chardam</option>
            </select>
            <div className="">
                <button className="btn btn-outline w-full border-primary hover:bg-primary ">Submit</button>
            </div>
        </div>
    );
};

export default HolidayQuery;