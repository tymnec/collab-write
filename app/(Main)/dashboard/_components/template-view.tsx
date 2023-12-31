import React from "react";
import { FaPlus } from "react-icons/fa";

const TemplateView = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div className="border bg-white h-36 w-32 rounded-lg p-4">
        <div className="text-center justify-center flex place-items-center align-middle h-full">
          <FaPlus className="w-10 h-10 text-slate-500" />
        </div>
      </div>
      <div className="text-slate-600 text-sm font-bold ml-1">{title}</div>
    </div>
  );
};

export default TemplateView;
