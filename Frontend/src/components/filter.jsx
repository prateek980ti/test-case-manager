import React from 'react';
import { FiFilter } from 'react-icons/fi'; // Import a filter icon

const FilterButton = () => {
  return (
    <button
      className="flex items-center justify-center mt-5 mb-2 mx-auto bg-[#0a3773] text-white pr-2 pl-2 rounded-md hover:bg-[#002b64] focus:outline-none focus:ring-2 focus:ring-[#00193c]
        sm:ml-[180px] sm:mx-0"
    >
      <span className="mr-1">Filter</span>
      <FiFilter />
    </button>
  );
};

export default FilterButton;
