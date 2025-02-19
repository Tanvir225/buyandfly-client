import TicketList from "../../Component/Prices/TicketList";


const Prices = () => {
    return (
        <div className="mt-24 bg-[#f5f5f5] ">


            {/* top div */}
            <div className="h-28 bg-base-100 w-full shadow-md flex justify-center items-center">
                    topbar
            </div>


           {/* container */}
           <section className="max-w-6xl mx-auto py-7 grid grid-cols-12 gap-5   w-full">
                {/* filter */}
                <div className="w-full col-span-3 space-y-5">

                    <section className="h-60 bg-base-100 rounded-md shadow-md p-5">popular filter</section>
                    <section className="h-44 bg-base-100 rounded-md shadow-md p-5">Price Ranges</section>
                    <section className="h-60 bg-base-100 rounded-md shadow-md p-5">Flight schedule</section>
                    <section className="h-60 bg-base-100 rounded-md shadow-md p-5">Times</section>

                </div>

                {/* price list */}
                <div className=" w-full col-span-9 space-y-4">
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