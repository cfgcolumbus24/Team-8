"use client";

import React, { useState, useRef, useEffect } from 'react';

const MultiSelectDropdown = ({ onChange, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const toggleOption = (value) => {
    setSelectedOptions((prev) => {
      const newSelectedOptions = prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value];

      // Call the onChange function to update the parent state
      onChange(newSelectedOptions);
      return newSelectedOptions;
    });
  };

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <button
        onClick={handleDropdownToggle}
        className="w-full border border-gray-300 rounded-md bg-white p-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Select options'}
      </button>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="max-h-60 overflow-auto p-2">
            {options.map((option) => (
              <li key={option.value} className="flex items-center p-1">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
