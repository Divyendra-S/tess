import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import {
  CircleUserRound,
  MessageCircle,
  NotebookPen,
  CheckCircle,
  User,
} from "lucide-react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Rsidebar = () => {
  return (
    <div className="  flex flex-col items-center mt-1 border rounded-lg shadow-sm gap-y-2 mr-4">
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
  );
};
export default Rsidebar;
