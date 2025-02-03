import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const HButton = ({ width, text, align,fun }) => {
    return (
        <button
          onClick={()=>fun}
          className={`btn w-${width} text-secondary hover:bg-primary hover:text-white border-primary bg-transparent  text-${align}`}
        >
          <FaPlus></FaPlus> {text}
        </button>
      );
};

export default HButton;