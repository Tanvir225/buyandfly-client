import { Player } from "video-react";

const MemoriesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full">
      <div className="space-y-3 w-full">
        <h1 className="text-xl lg:text-4xl font-semibold text-primary">
          Create Memories
        </h1>
        <p className="text-gray-700 ">
          Make your vacation memorable with hand picked customized packages
        </p>
      </div>
      <div className="w-full">
        <iframe
          src={`https://www.youtube.com/embed/9HqJlhF4mDs?si=NBjDz6i7A2bojBvn?autoplay=1&loop=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full lg:w-[500px] h-[300px] rounded"
        ></iframe>
      </div>
    </section>
  );
};

export default MemoriesSection;
