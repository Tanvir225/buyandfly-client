const Banner = () => {
  return (
    <div
      className="hero h-[65vh] md:h-[85vh] border-secondary border-b-[20px] lg:border-b-[40px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1536258426657-fabb174a2bbf?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center mt-10">
        <div className="w-full lg:w-[900px] h-48 rounded-md shadow-md border-2 border-secondary bg-base-100">
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
