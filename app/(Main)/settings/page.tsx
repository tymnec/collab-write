import { Button } from "@/components/ui/button";
import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex justify-center flex-col mx-auto p-4 w-full text-center">
      <div className="flex flex-col w-full justify-center">
        <Button className="w-max" variant={"outline"}>
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
        <h1 className="text-3xl m-5 font-bold">Settings</h1>
        <UserProfile />
      </div>
    </div>
  );
};

export default SettingsPage;
