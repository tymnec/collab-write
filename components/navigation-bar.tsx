import React from "react";
import SearchBar from "./search-bar";

const NavigationBar = () => {
  return (
    <div className="fixed top-0 bg-white border w-full p-3 place-items-center flex justify-between">
      {/* Menu Icon */}
      <div>MenuIcon</div>

      {/* Search Bar */}
      <div>
        <SearchBar />
      </div>

      {/* User Profile */}
      <div>User Profile</div>
    </div>
  );
};

export default NavigationBar;
