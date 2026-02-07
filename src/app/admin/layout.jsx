"use client"
import Sidebar from '@/components/admin/Sidebar';
import React from 'react';
import { useSelector } from 'react-redux';

const layout = () => {
  const isSidebarOpen = useSelector((state)=>state.ui.isSidebarOpen)
  return (
    <div className={`${isSidebarOpen? "grid grid-cols-[260px_1fr]" : "grid grid-cols-[72px_1fr]"} relative mx-auto`}>
      <div className=''>
        <Sidebar/>
      </div>
      <div className=' bg-blue-600'>
        <h1>Contenty</h1>
      </div>
    </div>
  );
};

export default layout;