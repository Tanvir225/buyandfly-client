const Button = ({ width, text, align }) => {
  return (
    <button
      className={`btn w-${width} text-white bg-primary hover:bg-gradient-to-r transition-colors hover:from-secondary hover:to-primary text-${align}`}
    >
      {text}
    </button>
  );
};

export default Button;
