import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Bell, Rocket, Search} from "lucide-react";
import { Input } from "@/components/ui/input";

const Sidebar = () => {
  return (
    <>
      <div className=" p-3 flex-col font-fredoka text-slate-600 text-sm">
        <div className="flex items-center">
          <Avatar className=" w-7 h-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <span className=" ml-2 text-xs font-fredoka font-medium ">
            Divyendra
          </span>
          <ChevronDown size={13} color=" grey" className=" ml-1" />
          <Bell size={17} color="black" className="ml-7" />
        </div>
        <div className="flex mt-4 font-fredoka text-xs font-normal text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-fuchsia-600">
          <Rocket color="blue" size={16} />
          <span>Upgrade this workspace</span>
        </div>
        <div className=" border rounded-md flex items-center px-1 my-3">
        <Search size={15}/>
        <input type="text" className=" ml-1 placeholder-slate-400 text-xs w-full h-6 font-fredoka  rounded-md px-1  " 
        placeholder="Search & commands"/>
        </div>
        <ul>
            <li><span>Recents</span></li>
            <li><span></span></li>
            <li><span></span></li>
        </ul>
        
      </div>
    </>
  );
};
export default Sidebar;
