import React from 'react'
import Sidebar from '@/components/dashboard/sidebar';

const Pitch = () => {
  return (
    <>
    <div className='flex'>
        <section className='flex flex-col w-1/5 '>
            <Sidebar/>
        </section>
        <div className=' h-screen bg-gray-200 w-[1px]'></div>
        <section></section>
    </div>
    </>
  )
}
export default Pitch;
