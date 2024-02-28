"use client";
import { useState } from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  Bell,
  Rocket,
  Search,
  Clock3,
  GanttChartSquare,
  Link2,
  UserRoundPlus,
  Download,
  UsersRound,
  FolderPlus,
  CircleUserRound,
} from "lucide-react";

const Sidebar = () => {
  const [value, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function toggleClose() {
    setIsClose(!isClose);
  }

  const Sidebart = [
    {
      name: "Recents",
      link: "/recent",
      id: 1,
      logo: <Clock3 size={20} />,
    },
    {
      name: "Manage Library",
      link: "/manageLibrary",
      id: 2,
      logo: <GanttChartSquare size={20} />,
    },
    {
      name: "Links overview",
      link: "",
      id: 3,
      logo: <Link2 size={20} />,
    },
  ];

  const handleItemClick = (itemId: number) => {
    setValue(itemId);
  };

  return (
    <>
      <div className="flex flex-col justify-between w-[264px] h-screen font-lato border border-r-1 ">
        <section className="p-3 flex-col font-[400] font-lato text-[#3f4250] text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <span className="ml-2 text-sm font-lato font-semibold">
                Divyendra
              </span>
              <ChevronDown size={16} color="black" className="ml-1 mt-[2px]" />
            </div>
            <Bell size={21} color="black" className="" />
          </div>
          <div className="flex my-5 font-lato text-sm font-normal text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-fuchsia-600">
            <Rocket color="blue" size={16} className="mt-1" />
            <span className="ml-2">Upgrade this workspace</span>
          </div>
          <div className="border rounded-md flex items-center px-1 my-3">
            <Search size={18} />
            <input
              type="text"
              className="ml-1 placeholder-gray-400 text-sm w-full h-8 font-lato rounded-md px-1"
              placeholder="Search & commands"
            />
          </div>
          <ul className="mt-4">
            {Sidebart.map((item, i) => (
              <li
                key={i}
                onClick={() => handleItemClick(item.id)}
                className={cn(" items-center p-2 h-[32px] rounded-md  flex gap-x-2", {
                  " bg-zinc-200": value === item.id,
                  "hover:bg-zinc-100": value !== item.id,
                })}
              >
                {item.logo}
                {item.name}
              </li>
            ))}
            <li className=" mt-3">
              <button
                className="flex items-center  w-full  hover:bg-gray-200 focus:outline-none gap-x-1 p-2 rounded-md"
                onClick={toggleMenu}
              >
                
                <ChevronDown className={`h-5 w-5 transition duration-300 ${isOpen ? '' : 'rotate-counterclockwise-90'}`} />
                <UsersRound size={17}/>
                <span>Team</span>
              </button>
              {isOpen && (
                <ul className={`ml-4 pl-8 mt-1 space-y-2 ${isOpen ? 'dropdown-animation' : ''}`} style={{ maxHeight: isOpen ? '100px' : '0' }}>
                  <li className=" text-gray-400 flex">
                    <Link className="flex gap-x-1" href="/page1">
                      <FolderPlus size={19}/>
                      <div className=" text-gray-400">Create folder</div>
                    </Link>
                  </li>
                  
                </ul>
              )}
            </li>


            <li className=" mt-3">
              <button
                className="flex items-center  w-full  hover:bg-gray-200 focus:outline-none gap-x-1 p-2 rounded-md"
                onClick={toggleClose}
              >
                
                <ChevronDown className={`h-5 w-5 transition duration-300 ${isClose ? '' : 'rotate-counterclockwise-90'}`} />
                <CircleUserRound size={19}/>
                <span>Personal</span>
              </button>
              {isClose && (
                <ul className={`ml-4 pl-8 mt-1 space-y-2 ${isClose ? 'dropdown-animation' : ''}`} style={{ maxHeight: isClose ? '100px' : '0' }}>
                  <li className=" text-gray-400 flex">
                    <Link className="flex gap-x-1" href="/page1">
                      <FolderPlus size={19}/>
                      <div className=" text-gray-400">Create folder</div>
                    </Link>
                  </li>
                  
                </ul>
              )}
            </li>
          </ul>
        </section>
        {/* second section */}
        <section>
          <div className=" w-full h-[1px] bg-gray-200"></div>
          <div>
            <ul className=" text-sm flex flex-col p-3">
              <li className=" flex gap-x-2  hover:bg-slate-100 p-2 rounded-md">
                <UserRoundPlus size={17} />
                <span className="">Invite members</span>
              </li>
              <li className=" flex gap-x-2  hover:bg-slate-100 p-2 rounded-md">
                <Download size={17} />
                <span>Install app</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
