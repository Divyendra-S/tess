"use client";
import React, { useState } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { MessageCircle, NotebookPen, CheckCircle, User } from "lucide-react";
import DesignSlide from "./designslide";
import CommentSlide from "./commentslide";
import NotesSlide from "./notesSlide";
import { cn } from "@/lib/utils";

const Rsidebar = () => {
  const [openComponent, setOpenComponent] = useState(0);

  const handleIconClick = (componentId: number) => {
    setOpenComponent((prevComponent: number) =>
      prevComponent === componentId ? 0 : componentId
    );
  };
  return (
    <div className=" flex ">
      {openComponent == 1 && (
        <DesignSlide setOpenComponent={setOpenComponent} />
      )}
      {openComponent == 2 && (
        <CommentSlide setOpenComponent={setOpenComponent} />
      )}
      {openComponent == 3 && <NotesSlide setOpenComponent={setOpenComponent} />}

      <div className="  flex flex-col items-center mt-1 border rounded-lg shadow  gap-y-2 mr-4 h-[259px] border-[#F3F4F6]">
        <div
          className={cn(
            " w-[48px] h-[44px] flex justify-center items-center   "
          )}
        >
          <div
            onClick={() => handleIconClick(1)}
            className={cn(
              "  flex justify-center items-center  rounded-md w-[40px] h-[40px] hover:text-[#7661fb] hover:bg-[#edebfc]",
              {
                "text-[#7661fb] bg-[#e5e1fc] hover:bg-[#e5e1fc]":
                  openComponent == 1,
              }
            )}
          >
            <MdOutlineDesignServices className=" h-6 w-6 " />
          </div>
        </div>
        <div className=" w-[48px] h-[44px] flex justify-center items-center">
          <div
            onClick={() => handleIconClick(2)}
            className={cn(
              "  flex justify-center items-center  rounded-md w-[40px] h-[40px] hover:text-[#7661fb] hover:bg-[#edebfc]",
              {
                "text-[#7661fb] bg-[#e5e1fc] hover:bg-[#e5e1fc]":
                  openComponent == 2,
              }
            )}
          >
            <MessageCircle size={24} />
          </div>
        </div>
        <div className=" w-[48px] h-[44px] flex justify-center items-center">
          <div
            onClick={() => handleIconClick(3)}
            className={cn(
              "  flex justify-center items-center  rounded-md w-[40px] h-[40px] hover:text-[#7661fb] hover:bg-[#edebfc]",
              {
                "text-[#7661fb] bg-[#e5e1fc] hover:bg-[#e5e1fc]":
                  openComponent == 3,
              }
            )}
          >
            <NotebookPen size={24} />
          </div>
        </div>

        <div className="  h-[1px] bg-[#E0E1E6] w-[24px]"></div>
        <div>
          <div className=" w-[48px] h-[44px] flex justify-center items-center">
            <CheckCircle size={24} />
          </div>
          {/* <IoIosCheckmarkCircleOutline className=' h-7 w-7' /> */}
          <div className=" w-[48px] h-[44px] flex justify-center items-center">
            <User size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rsidebar;
