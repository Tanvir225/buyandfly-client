import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaHotelSolid, LiaGlassMartiniAltSolid } from "react-icons/lia";
import FlightQuery from "./FlightQuery";
import HotelQuery from "./HotelQuery";
import HolidayQuery from "./HolidayQuery";

const Banner = () => {
  return (
    <div
      className="hero h-fit md:h-[90vh] border-secondary border-b-[20px] lg:border-b-[40px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1536258426657-fabb174a2bbf?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center mt-10">
        <div className="max-w-6xl  rounded-md shadow-md border-2 border-secondary bg-base-100">
          <Tabs className="w-full">
            <TabList className="space-x-7 text-left border-b-2 border-primary">
              <Tab>
                <PiAirplaneTakeoffLight
                  size={40}
                  color="purple"
                ></PiAirplaneTakeoffLight>{" "}
                <span className="text-secondary text-lg font-semibold">
                  Flights
                </span>
              </Tab>
              <Tab>
                <LiaHotelSolid size={40} color="purple"></LiaHotelSolid>{" "}
                <span className="text-secondary text-lg font-semibold">
                  Hotels
                </span>
              </Tab>
              <Tab>
                <LiaGlassMartiniAltSolid
                  size={40}
                  color="purple"
                ></LiaGlassMartiniAltSolid>{" "}
                <span className="text-secondary text-lg font-semibold">
                  Hotels
                </span>
              </Tab>
            </TabList>

            <TabPanel className="text-black">
              <FlightQuery></FlightQuery>
            </TabPanel>
            <TabPanel>
              <HotelQuery></HotelQuery>
            </TabPanel>
            <TabPanel>
              <HolidayQuery></HolidayQuery>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Banner;
