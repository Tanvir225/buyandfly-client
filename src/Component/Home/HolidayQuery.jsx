import { motion } from "motion/react";

const HolidayQuery = () => {
  return (
    <div className="">
      <form className="uppercase flex w-full lg:w-[1152px] gap-7 text-black rounded-xl rounded-tl-none bg-white p-10">
        <motion.select
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-md border px-4"
        >
          <option value="">Top Adventure Destination</option>
          <option value="">Top Expermental Tour</option>
          <option value="">Domestic</option>
          <option value="">Chardam</option>
        </motion.select>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className=""
        >
          <button className="btn btn-outline w-full border-primary hover:bg-primary ">
            Submit
          </button>
        </motion.div>

        <div className="text-center absolute mt-16 left-1/2 ">
          <button
            type="submit"
            className="btn btn-outline text-white w-40  bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-t hover:from-secondary hover:to-primary "
          >
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default HolidayQuery;
