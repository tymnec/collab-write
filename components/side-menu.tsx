import React from "react";
import Icon from "./icon";
import { Separator } from "./ui/separator";
import {
  MdOutlineClose,
  MdOutlineQuestionMark,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import { MenuContext } from "./sidebar";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Renders the side menu component.
 *
 * @return {JSX.Element} The rendered side menu component.
 */
const SideMenu = (): JSX.Element => {
  const { open, setOpen } = React.useContext(MenuContext);

  return (
    <div className="z-20">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        className="h-max w-72 drop-shadow-xl absolute inset-y-0 left-0 border bg-white px-4 py-8 rounded-3xl flex flex-col z-[99] gap-5"
      >
        {/* Icon Section */}
        <div className="relative">
          {/* Icon */}
          <Icon />

          {/* Cross Icon */}
          <div
            className="absolute -top-2 right-2 hover:bg-slate-400 rounded-full p-1 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => setOpen(false)}
          >
            <MdOutlineClose className="w-5 h-5" />
          </div>
        </div>

        {/* Separator */}
        <Separator />

        {/* Menu Items */}
        <div className="text-slate-700 font-medium gap-2 flex flex-col ml-2">
          {/* Settings */}
          <button className="flex gap-2 place-items-center hover:bg-slate-100 p-1 rounded-full cursor-pointer focus:bg-slate-100">
            {/* Settings Icon */}
            <MdOutlineSettingsSuggest className="w-5 h-5" />
            Settings
          </button>

          {/* Help & Feedback */}
          <Link href={"/help-and-feedback"} className="w-full">
            <button className="flex gap-2 place-items-center hover:bg-slate-100 p-1 rounded-full cursor-pointer focus:bg-slate-100 w-full">
              {/* Help Icon */}
              <MdOutlineQuestionMark className="w-4 h-4 border-2 border-slate-500 rounded-full focus-visible:bg-slate-100" />
              Help & Feedback
            </button>
          </Link>
          {/* <div>Item 3</div>
        <div>Item 4</div> */}
        </div>

        {/* Separator */}
        <Separator />

        {/* Privacy and Policies */}
        <div className="flex justify-center w-full text-center text-[10px] text-slate-700 pt-5 cursor-pointer">
          <Link href={"/privacy-policy"}>
            <p>Privacy Policy | Terms of Service</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SideMenu;
