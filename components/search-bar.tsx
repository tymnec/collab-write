import React from "react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <>
      <div className="flex relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          {/* Icon */}
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <Input
          className="h-12 w-[40rem] bg-slate-100/90 rounded-full pl-12 focus-visible:bg-white focus-visible:shadow-md"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchBar;
