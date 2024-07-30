import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching for:', query);
  };

  return (
    <div className="bg-[#002864] rounded-full flex items-center w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search issue..."
        className=" rounded-full ml-3 p-3 flex-grow focus:outline-none bg-transparent text-white"
      />
      <button
        onClick={handleSearch}
        className="bg-[#e64ba0] rounded-full flex items-center justify-center hover:bg-pink-600"
        style={{ width: '85px', height: '60px' }}  // Adjust size if needed
      >
        <FaSearch className="text-white text-2xl" />
      </button>
    </div>
  );
}

export default SearchBar;
