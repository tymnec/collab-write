import Editor from "@/components/editor";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="p-3 flex justify-center flex-col mx-auto gap-3">
      Marketing Page
      <div>
        <Button variant={"outline"}>
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
