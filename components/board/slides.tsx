import React from 'react'
import { GoPlus } from "react-icons/go";
import { Plus } from 'lucide-react';
import sideboard from "@/public/sideboard.avif"
import Image from 'next/image';

const Slides = () => {
  return (
    <section className='w-[170px] font-lato'>
      <div className='px-4 pt-1'>
        <button className=' border rounded-lg py-[6px] px-[26px] text-sm  flex items-center'>
          <span className=' mr-[6px] '><Plus  size={16}/></span>
          <span>Add slide</span>
        </button>
      </div>
      <div className=' py-4 pr-4 flex  '>
        <div className='flex h-[64px] '>
        <span className=' mt-6 ml-[6px]'></span>
        <span className=' pt-6 text-sm w-6 flex justify-center'>1</span>
        <button className=' outline outline-2 outline-offset-1 outline-[#6B53FF] rounded-lg '>
          <Image src={sideboard} width={114} height={64} alt='board' className='rounded-lg'/>
        </button>
        </div>
      </div>
    </section>
  )
}
export default Slides;