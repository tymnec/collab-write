"use client";

import React, { useEffect, useRef } from "react";
import Icon from "./icon";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SideMenu from "./side-menu";

interface MenuContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = React.createContext<MenuContextProps>({
  open: false,
  setOpen: () => {},
});

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: any) => {
    // Check if the click is outside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []); // Empty dependency array ensures the event listener is attached only once

  // Context for menu open and close
  return (
    <div className="flex gap-3 place-items-center relative" ref={sidebarRef}>
      {/* MenuIcon */}
      <div
        className="font-bold hover:bg-slate-100 p-3 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <HamburgerMenuIcon className="w-5 h-5" />
      </div>
      {/* Logo */}
      <Icon />

      {/* Side Menu */}
      <>
        {open && (
          <MenuContext.Provider value={{ open, setOpen }}>
            <SideMenu />
          </MenuContext.Provider>
        )}
      </>
    </div>
  );
};

export default Sidebar;
