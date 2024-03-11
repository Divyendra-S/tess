import { Minus } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

interface ShareModalProps {
  setOpenComponent: Dispatch<SetStateAction<number>>;
}

const NotesSlide = ({ setOpenComponent }: ShareModalProps) => {
  return (
    <div className=" resize-y w-[264px] mr-[8px] mt-1 mb-3 border border-[#F3F4F6] shadow h-[870px] font-lato text-sm rounded-[8px]">
      <div className="flex py-3 pb-4 px-4 justify-between font-kanit h-[49px] font-medium text-lg border-b border-[#F3F4F6] ">
        <span>Notes</span>{" "}
        <span>
          <Minus onClick={() => setOpenComponent(0)} />
        </span>{" "}
      </div>
      <div className="px-4 pt-4 pb-2">
      <textarea className="outline-none w-full h-full" placeholder="Add speaker notes..."></textarea>
      </div>
    </div>
  );
};

export default NotesSlide;
