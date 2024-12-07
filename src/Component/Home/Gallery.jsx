import React from "react";
import cruise from "../../assets/cruise.jpg";
import bali from "../../assets/bali.jpg";
import baki from "../../assets/baki.jpg";
import america from "../../assets/america.jpg";
import sri from "../../assets/sri.jpg";
import nepal from "../../assets/nepal.jpg";
const Gallery = () => {
  return (
    <div className="w-full h-80  grid grid-cols-12 gap-5">
      <div className="col-span-4  w-full h-full space-y-2">
        <div className="h-1/2  overflow-hidden relative">
          <img
            src={bali}
            alt="cruise"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="bg-black absolute bottom-0 w-full bg-opacity-30 text-white p-2 rounded-xl">
            <h2 className="text-xl font-semibold">Bali</h2>
            <p>Startting from AED 1969*</p>
          </div>
        </div>
        <div className=" h-1/2 overflow-hidden flex gap-2">
          <div className="relative">
            <img
              src={baki}
              alt="cruise"
              className="h-full w-full object-cover rounded-xl"
            />

            <div className="bg-black absolute bottom-0 w-full bg-opacity-30 text-white p-2 rounded-xl">
              <h2 className="text-xl font-semibold">Baku</h2>
              <p>Startting from AED 1969*</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={america}
              alt="cruise"
              className="h-full w-full object-cover rounded-xl"
            />

            <div className="bg-black absolute bottom-0 w-full bg-opacity-30 text-white p-2 rounded-xl">
              <h2 className="text-xl font-semibold">Baku</h2>
              <p>Startting from AED 1969*</p>
            </div>
          </div>
        </div>
      </div>

      {/* middle */}
      <div className="col-span-4  overflow-hidden relative">
        <img
          src={cruise}
          alt="cruise"
          className="h-full w-full object-cover rounded-xl"
        />

        <div className="bg-black absolute bottom-0 w-full bg-opacity-45 text-white p-2 rounded-xl">
          <h2 className="text-xl font-semibold">Cruise</h2>
          <p>Startting from AED 1969*</p>
        </div>
      </div>

      {/* last */}
      <div className="col-span-4  space-y-2 overflow-hidden">
        <div className="h-1/2 relative">
          <img
            src={sri}
            alt="cruise"
            className="h-full w-full object-cover rounded-xl"
          />

          <div className="bg-black absolute bottom-0 w-full bg-opacity-30 text-white p-2 rounded-xl">
            <h2 className="text-xl font-semibold">Srilanka</h2>
            <p>Startting from AED 1969*</p>
          </div>
        </div>
        <div className="h-1/2 relative">
          <img
            src={nepal}
            alt="cruise"
            className="h-full w-full object-cover rounded-xl"
          />

          <div className="bg-black absolute bottom-0 w-full bg-opacity-30 text-white p-2 rounded-xl">
            <h2 className="text-xl font-semibold">Armenia</h2>
            <p>Startting from AED 1969*</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
