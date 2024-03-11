"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  FolderPen,
  FolderInput,
  CopyPlus,
  BellOff,
  CalendarFold,
  Upload,
  Undo2,
  Redo2,
  Trash,
  Clock9,
  ArrowRight,
} from "lucide-react";

const Navdrop = () => {
  const search = [
    {
      logo: <FolderPen size={18} />,
      title: "Rename presentation",
    },
    {
      logo: <FolderInput size={18} />,
      title: "Move to folder",
    },
    {
      logo: <CopyPlus size={18} />,
      title: "Duplicate",
    },
    {
      logo: <BellOff size={18} />,
      title: "Unsubscribe",
    },
    {
      logo: <CalendarFold size={18} />,
      title: "Convert to template",
    },
    {
      logo: <Upload size={18} />,
      title: "Export presentation",
    },
  ];
  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 22 }}
      className="p-1 w-[242px] bg-white rounded-xl border border-[#F3F4F6] shadow-md text-sm text-[#5a5b5f]"
    >
      <div className="flex py-2 px-2 items-center h-8 w-full   ">
        <span className="mr-3">
          <Search size={16} />
        </span>
        <input className=" outline-none " placeholder="Search and command"></input>
        <span className="  px-[6px] rounded-md bg-[#f6f4f4] w-[23px] h-[20px] text-center flex justify-center items-center  text-xs">
          ⌘
        </span>
        <span className="ml-[4px] px-[6px] rounded-md bg-[#f6f4f4] w-[23px] h-[20px] text-center flex justify-center items-center  text-xs">
          k
        </span>
      </div>
      <div className="border-b my-[4px] mb-[6px] "></div>
      {search.map((item, i) => (
        <div key={i} className="flex w-[232px] h-[32px] mb-[2px] px-2 py-1  hover:bg-gray-100 rounded-md items-center">
          <span className="mr-3">{item.logo}</span>
          <span>{item.title}</span>
        </div>
      ))}
      <div className="border-b my-[4px] mb-[6px] "></div>
      <div className="flex w-[232px] h-[32px] mb-[2px] px-2 py-1 justify-between hover:bg-gray-100 rounded-md items-center">
        <div className="flex">
          <span className="mr-3">
            <Undo2 size={18} />
          </span>
          <span>Undo</span>
        </div>
        <div className="flex">
          <span className="ml-[8px] px-[6px] rounded-md bg-[#f6f4f4] w-[23px] h-[20px] text-center flex justify-center items-center  text-xs">
            ⌘
          </span>
          <span className="ml-[4px] px-[6px] rounded-md bg-[#f6f4f4] w-[23px] h-[20px] text-center flex justify-center items-center  text-xs">
            Z
          </span>
        </div>
      </div>
      <div className="flex w-[232px] h-[32px] mb-[2px] px-2 py-1 justify-between hover:bg-gray-100 rounded-md items-center">
        <div className="flex">
          <span className="mr-3">
            <Redo2 size={18} />
          </span>
          <span>Redo</span>
        </div>
        <div className="flex">
          <span className="ml-[8px] px-[6px] rounded-md bg-[#f6f4f4] w-[23px] h-[20px] text-center flex justify-center items-center  text-xs">
            ⌘
          </span>
          <span className="ml-[8px] px-[6px] rounded-md bg-[#f6f4f4]  h-[20px] text-center flex justify-center items-center  text-xs">
            Shift
          </span>
          <span className="ml-[4px] px-[6px] rounded-md bg-[#f6f4f4] w-[23px] h-[20px] text-center flex justify-center items-center  text-xs">
            Z
          </span>
        </div>
      </div>
      <div className="border-b my-[4px] mb-[6px] "></div>
      <div className="flex w-[232px] h-[32px] mb-[2px] px-2 py-1 hover:bg-gray-100 rounded-md items-center">
        <span className="mr-3">
          <Trash size={18} />
        </span>
        <span>Show deleted slides</span>
      </div>
      <div className="flex w-[232px] h-[32px] mb-[2px] px-2 py-1 hover:bg-gray-100 rounded-md items-center">
        <span className="mr-3">
          <Clock9 size={18} />
        </span>
        <span>Version history</span>
      </div>
      <div className="border-b my-[4px] mb-[6px] "></div>
      <div className="flex w-[232px] h-[30px]  px-2 py-1 hover:bg-gray-100 rounded-md items-center">
        <span className="mr-3">
          <ArrowRight size={18} />
        </span>
        <span>Show deleted slides</span>
      </div>
    </motion.div>
  );
};

export default Navdrop;
