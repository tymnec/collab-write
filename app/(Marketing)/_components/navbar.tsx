import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();
  return (
    <div className="sticky bg-slate-100 w-full p-3 shadow-lg flex justify-between place-items-center rounded-full">
      {/* Icon */}
      <div>
        <Icon />
      </div>

      {/* Headding */}
      {/* <div>Marketing Page</div> */}

      {/* Login */}
      {user ? (
        <UserButton />
      ) : (
        <div>
          {" "}
          <div className="flex gap-3">
            <Button
              variant={"outline"}
              className="shadow-md shadow-blue-500 border rounded-full"
            >
              <Link href={"/authentication/sign-in"}>Login</Link>
            </Button>
            <Button className="rounded-full shadow-md shadow-blue-500">
              <Link href={"/authentication/sign-up"}>Register</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
