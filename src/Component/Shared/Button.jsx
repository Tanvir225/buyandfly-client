import { FaSearch } from "react-icons/fa";

const Button = ({ width, text, align }) => {
  return (
    <button
      className={`btn w-${width} p-2 text-white bg-primary hover:bg-gradient-to-r transition-colors hover:from-secondary hover:to-primary text-${align}`}
    >
      <FaSearch size={30}></FaSearch> {text}
    </button>
  );
};

export default Button;
