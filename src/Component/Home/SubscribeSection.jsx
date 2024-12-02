import Button from "../Shared/Button";

const SubscribeSection = () => {
  return (
    <div className="text-center flex justify-center items-center gap-5">
      <input
        className="input input-bordered w-[35%] focus:outline-none"
        type="text"
        placeholder="email address"
      />
      <Button text="Subscribe"></Button>
    </div>
  );
};

export default SubscribeSection;
