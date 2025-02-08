import React, { useCallback } from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter, country, setCountry }) => {
    // Sort countries without mutating the original state
    const sortCountries = useCallback((order) => {
        const sorted = [...country].sort((a, b) => 
            order === "asc" 
                ? a.name.common.localeCompare(b.name.common) 
                : b.name.common.localeCompare(a.name.common)
        );
        setCountry(sorted);
    }, [country, setCountry]); // useCallback prevents unnecessary re-renders

    return (
        <div className="flex flex-wrap justify-evenly items-center px-5 py-4 gap-4">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-white bg-inherit outline-none border border-white px-3 py-2 font-bold text-sm rounded-lg w-64 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            />

            {/* Sort Buttons */}
            <button
                className="hover:bg-gray-950 text-white bg-black outline-none border border-white px-3 py-2 font-bold text-sm rounded-lg transition-all duration-200"
                onClick={() => sortCountries("asc")}
            >
                Asc
            </button>
            <button
                className="hover:bg-gray-950 text-white bg-black outline-none border border-white px-3 py-2 font-bold text-sm rounded-lg transition-all duration-200"
                onClick={() => sortCountries("desc")}
            >
                Desc
            </button>

            {/* Filter Select */}
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="text-white bg-black outline-none border border-white px-3 py-2 font-bold text-sm rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500"
            >
                <option value="all">All</option>
                <option value="Asia">Asia</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
            </select>
        </div>
    );
};

export default SearchFilter;
