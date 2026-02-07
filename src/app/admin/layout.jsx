import Sidebar from '@/components/admin/Sidebar';
import React from 'react';

const layout = () => {
  return (
    <div className='grid grid-cols-[260px_1fr] mx-auto'>
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