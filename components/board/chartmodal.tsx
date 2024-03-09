import React from "react";
import { Link2, Users} from "lucide-react";
import Image from "next/image";

const ChartModal = () => {
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center text-sm  font-lato">
      <div className=" bg-white w-[960px] h-[660px] rounded-[12px] flex">
        <div className=" w-[228px] h-full border-r flex flex-col p-3 text-[#3F4250] ">
          <button className=" rounded-md pl-[8px] pr-[16px] mb-[3px] flex items-center h-9  w-full">
            <span className="mr-3 ">
              <Link2 size={20} />
            </span>
            <span className=" ">Analytic links</span>
          </button>
          <button className=" rounded-md pl-[8px] pr-[16px] mb-[3px] flex items-center h-9  w-full bg-[#eeeded]">
            <span className="mr-3 ">
              <Users size={18} />
            </span>
            <span className=" ">Members & guests</span>
          </button>

          <span></span>
        </div>
        <div className=" w-[732px] h-full flex flex-col ">
            <div className="w-full h-[55px] px-[16px] pt-4 font-medium text-lg font-fredoka">Members & guests activity</div>
            <div className="flex items-center justify-center px-[72px] flex-col">
                <Image src ='https://img.freepik.com/free-vector/stock-exchange-data-concept_23-2148590844.jpg?t=st=1709996496~exp=1710000096~hmac=0d1bc29e672907449851ca32ae58fd82a60b8375e19f98bf142dbd7a8f4bac7c&w=1800' height={240} width={360} alt="images"/>
                <div className="w-full mb-2 px-[16px] pt-4 font-medium text-lg font-fredoka text-center">Know your audience</div>
                <p className=" text-sm flex justify-center text-center text-[#474a56] mb-6">Presentation analytics let you see interactions across all sources,
                    <br/>
                    from workspace members and guests to public visitors.
                </p>
                <button className=" py-[6px] px-3 mb-3  rounded-md gradient-border bg-gradient-to-br   border-gradient-to-r from-[rgba(45,58,247,0.35)] to-[rgba(201,10,221,0.35)] ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#2d3af7] to-[#c90add]">Discover premium plans</span></button>
                    <div className=" text-center text-[#474a56] py-1">Learn more</div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ChartModal;
