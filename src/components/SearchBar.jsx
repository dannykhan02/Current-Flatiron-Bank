import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    onSearchChange(newValue); 
  };

  return (
    <div className= "Bar">
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;