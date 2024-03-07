import React from "react";
import Slides from "@/components/board/slides";
import Rsidebar from "@/components/board/right-side-bar";
import Topbar from "@/components/board/top-editing-bar";
import Mainboard from "@/components/board/mainboard";

const PitchBoard = () => {
  return (
    <div>
      <div className=" top-0">
        <Topbar />
      </div>
      <div className=" flex w-screen  flex-1">
        <Slides />
        <div className="flex-1 pr-6"><Mainboard /></div>
        
        <div className=" right-0">
        <Rsidebar />
        </div>
        
      </div>
    </div>
  );
};
export default PitchBoard;
