import React from 'react'
import Sidebar from '@/components/dashboard/sidebar';
import MainContent from '@/components/dashboard/maincontent';

const Pitch = () => {
  return (
    <>
    <div className='flex w-screen '>
        <section className=' '>
            <Sidebar/>
        </section>
        <section className=''>
            <MainContent/>
        </section>
    </div>
    </>
  )
}
export default Pitch;
