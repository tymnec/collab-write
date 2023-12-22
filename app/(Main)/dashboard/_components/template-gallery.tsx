"use client";

import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdUnfoldMore } from "react-icons/md";
import TemplateView from "./template-view";

const TemplateGallery = () => {
  return (
    <div className="flex">
      <div className="mt-[4.5rem] bg-slate-100 p-4 text-slate-800 w-full flex flex-col">
        {/* Top Section */}
        <div className="flex px-10 justify-between">
          <div>Start a new document</div>
          <div className="flex place-items-center gap-2">
            <button className="font-medium hover:bg-slate-200 p-2 rounded-full flex gap-1 place-items-center">
              Template gallery
              <MdUnfoldMore className="w-5 h-5 text-slate-500" />
            </button>
            <p className="text-slate-400 text-xl font-thin">|</p>
            <div className="text-slate-800 hover:bg-slate-200 p-2 rounded-full cursor-pointer">
              <CiMenuKebab className="w-5 h-5" />
            </div>
          </div>
        </div>
        {/* View Section */}
        <div className="flex gap-4 justify-center p-10">
          {/* First Template - Blank */}
          <TemplateView title="Blank document" />
          <TemplateView title="First template" />
          <TemplateView title="Second template" />
          <TemplateView title="Third template" />
          <TemplateView title="Fourth template" />
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;
