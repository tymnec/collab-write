import React from "react";
import Icon from "./icon";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Sidebar = () => {
  return (
    <div className="flex gap-3 place-items-center">
      {/* MenuIcon */}
      <div className="font-bold hover:bg-slate-100 p-3 rounded-full cursor-pointer">
        <HamburgerMenuIcon className="w-5 h-5" />
      </div>
      {/* Logo */}
      <Icon />
    </div>
  );
};

export default Sidebar;
