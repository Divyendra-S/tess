'use client'
import { Home, Menu, Type, Shapes, StopCircle, BarChart3 } from "lucide-react";
import { HomeIcon, HomeModernIcon } from "@heroicons/react/16/solid";
import { CiStickyNote } from "react-icons/ci";
import { FiTable } from "react-icons/fi";
import { ImEmbed2 } from "react-icons/im";
import { LuSquareCode } from "react-icons/lu";
import { BsRecordCircle } from "react-icons/bs";
import { LuShapes } from "react-icons/lu";
import { MdPermMedia } from "react-icons/md";
import { PiSticker } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { GrMultimedia } from "react-icons/gr";
import Dropmedia from "./dropmedia";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Navdrop from "./navdrop";
import ChartModal from "./chartmodal";

export const Topbar = () => {
  const [clicked, setClicked] = useState(0)
  const [modalClicked, setModalClicked] = useState(false);
  
    const menudropdown = [
        {
          id: 2,
          dropdown: <Dropmedia/> ,
        },
        {
          id: 3,
          dropdown: <Dropmedia/> ,
        }
    ]
  const menu = [
    { 
      id: 1,
      name: "Text",
      logo: <Type size={23} className="  " />,
    },
    {
      id: 2,
      name: "Media",
      logo: <GrMultimedia className=" h-6 w-6" />,
    },
    {
      id: 3,
      name: "Shape",
      logo: <LuShapes className=" h-6 w-6" />,
    },
    {
      id: 4,
      name: "Sticker",
      logo: <PiSticker className=" h-6 w-6" />,
    },
    {
      id: 5,
      name: "Embed",
      logo: <LuSquareCode className=" h-6 w-6" />,
    },
    {
      id: 6,
      name: "Table",
      logo: <FiTable className=" h-6 w-6" />,
    },
    {
      id: 7,
      name: "Record",
      logo: <BsRecordCircle className=" h-6 w-6" />,
    },
  ];
  return (
    <div className=" px-4 py-3 flex font-lato justify-between h-[56px]">
      {modalClicked && <ChartModal/> }
      
      <div className="flex">
        <HomeIcon className="w-6 h-6 mr-4 mt-[4px]" />
        <div>
        <AiOutlineMenu className=" w-5 h-5 mt-[7px] mr-4" />
        
        </div>
        

        <div className=" flex flex-col pl-2 mr-2">
          <span className=" text-sm truncate">Set up your Workspace </span>
          <span className=" text-xs truncate text-[#6F7387] ">Private</span>
        </div>
      </div>
      <div className="flex -mt-2">
        {menu.map((item, i) => (
          <div className=" relative" key={i}>
          <div key={i} className="flex flex-col  hover:bg-slate-300 px-3 py-2 items-center rounded-lg" onClick={()=> {
            setClicked((prevClicked) => {
              if (prevClicked === item.id) {
                return 0;
              } else {
                return item.id;
              }
            });
            
            }}>
            <span className="">{item.logo}</span>
            <span className=" text-xs font-normal text-tiny">{item.name}</span>
          </div>{clicked == item.id && 
          <div className=" absolute">{menudropdown.map((drop,j)=>(
            <div key={j} className={cn("hidden",
            {
              " block " : clicked == drop.id
            })}> {drop.dropdown}</div>
          ))}</div>}
          </div>
        ))}
      </div>
      <div>
        <div className="flex gap-x-[14px] items-center">
          <span>
            <IoNotificationsOutline className=" h-6 w-6" />
          </span>
          <span className="flex flex-col">
            <BarChart3 size={20} className="" onClick={()=> setModalClicked(true)}/>

          </span>
          <button className=" py-[6px] px-3  border rounded-lg flex gap-x-1 items-center text-sm">
            <span>
              <FaPlay />
            </span>
            <span>Present</span>
          </button>
          <button className=" py-[6px] px-3  border rounded-lg flex gap-x-1 items-center text-sm bg-[#6B53FF] text-white">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
