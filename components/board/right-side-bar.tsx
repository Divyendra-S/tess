'use client'
import React, { useState } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import {
  CircleUserRound,
  MessageCircle,
  NotebookPen,
  CheckCircle,
  User,
} from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import DesignSlide from "./designslide";

const Rsidebar = () => {
  const [openComponent, setOpenComponent] = useState(0);

  const handleIconClick = (componentId : number) => {
    setOpenComponent((prevComponent : number ) =>
      prevComponent === componentId ? 0 : componentId
    );
  };
  return (
    <div className=" flex ">
      <DesignSlide/>
      
    <div className="  flex flex-col items-center mt-1 border rounded-lg shadow  gap-y-2 mr-4 h-[259px] border-[#F3F4F6]">
      <div className=" w-[48px] h-[44px] flex justify-center items-center  ">
        <MdOutlineDesignServices className=" h-6 w-6 " />
      </div>
      <div className=" w-[48px] h-[44px] flex justify-center items-center">
        <MessageCircle size={24} />
      </div>
      <div className=" w-[48px] h-[44px] flex justify-center items-center">
        <NotebookPen size={24} />
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
