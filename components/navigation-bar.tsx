import React from "react";
import SearchBar from "./search-bar";
import Sidebar from "./sidebar";
import ProfileMenu from "./profile-menu";

const NavigationBar = () => {
  return (
    <div className="fixed top-0 bg-white border w-full p-3 place-items-center flex justify-between">
      {/* Menu Icon */}
      <div>
        <Sidebar />
      </div>

      {/* Search Bar */}
      <div>
        <SearchBar />
      </div>

      {/* User Profile */}
      <div>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default NavigationBar;
