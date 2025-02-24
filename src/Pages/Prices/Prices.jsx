import CustomaizeFilter from "../../Component/Prices/CustomaizeFilter";
import DateOverview from "../../Component/Prices/DateOverview";
import TicketList from "../../Component/Prices/TicketList";
import TopbarList from "../../Component/Prices/TopbarList";


const Prices = () => {
    return (
        <div className="mt-24 bg-[#f5f5f5] ">


            {/* top div */}
            <div className="h-18 bg-base-100 w-full shadow-md flex  items-center">
                <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
                    <TopbarList></TopbarList>
                </div>
            </div>


            {/* container */}
            <section className="max-w-7xl mx-auto py-7 grid grid-cols-12 gap-5   w-full">
                {/* filter */}
                <div className="w-full col-span-3 space-y-5">
                    <CustomaizeFilter></CustomaizeFilter>

                </div>

                {/* price list */}
                <div className=" w-full col-span-9 space-y-4">
                    <DateOverview></DateOverview>
                    <TicketList></TicketList>
                    <TicketList></TicketList>
                    <TicketList></TicketList>
                    <TicketList></TicketList>
                    <TicketList></TicketList>
                </div>
            </section>
        </div>
    );
};

export default Prices;