import React from "react";
import { UserButton } from "@clerk/nextjs";

const ProfileMenu = () => {
  return (
    <div className="shadow-md rounded-full cursor-pointer">
      <UserButton />
    </div>
  );
};

export default ProfileMenu;
