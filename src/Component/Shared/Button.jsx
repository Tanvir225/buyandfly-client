import { FaSearch } from "react-icons/fa";

const Button = ({ width, text, align,height }) => {
  return (
    <button
      className={`btn w-${width} h-${height} px-4 text-white bg-primary hover:bg-gradient-to-r transition-colors hover:from-secondary hover:to-primary text-${align}`}
    >
      <FaSearch size={32}></FaSearch> {text}
    </button>
  );
};

export default Button;
