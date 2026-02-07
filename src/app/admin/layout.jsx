import Sidebar from '@/components/admin/Sidebar';
import React from 'react';

const layout = () => {
  return (
    <div className='grid grid-cols-9'>
      <div className='grid-cols-1'>
        <Sidebar/>
      </div>
      <div className='col-span-8'>
        <h1>Contenty</h1>
      </div>
    </div>
  );
};

export default layout;