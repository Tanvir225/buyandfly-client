import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";


const MemoriesSection = () => {

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    setPlaying(!playing);
    setShowControls(true);
    autoHideControls();
  };

  const autoHideControls = () => {
    setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    autoHideControls();
  };

  useEffect(() => {
    autoHideControls();
  }, []);

  return (
    <div className="text-center my-16 p-5">
      <p className="font-semibold text-xl lg:text-3xl lg:leading-normal">
        Unforgettable Travel <br /> Experiences  Get Your Guide
      </p>

      <p className="font-medium leading-6 text-[#7B6E7E] md:mt-5 mt-3 max-w-2xl mx-auto">
        Make your vacation memorable with hand picked customized packages Make your vacation
        memorable with hand picked customized packages
      </p>

      <div className="items-center relative max-w-6xl md:h-[400px] h-[200px] mx-auto mt-10  overflow-hidden" onMouseMove={handleMouseMove}>
        <div className="px-5 ">
          <ReactPlayer
            ref={playerRef}
            url={"https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
            playing={playing}
            controls={false}
            width="100%"
            height="100%"
            style={{ borderRadius: "20px", overflow: "hidden" }}
          />
        </div>

        {showControls && (
          <button
            onClick={togglePlay}
            className="p-5 bg-[#EF5B0C] text-white rounded-full shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center text-center"
          >
            {playing ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default MemoriesSection;
