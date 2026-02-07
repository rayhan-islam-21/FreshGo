import { Search } from 'lucide-react';
import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { Switch } from '../ui/switch';
import Image from 'next/image';

const AdminHeader = () => {
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
            </div>
            <div>
                <div className='flex items-center'>
                    <input
                    type='text'
                    placeholder='search data,users,or reports'
                    
                    />
                    <Search/>
                </div>
                <div>
                    <IoNotifications/>
                   <Switch/>

                   <div className='w-20 relative h-20'>
                    <Image
                    src="/admin.jpg"
                    fill
                    alt='adminiamge'
                    />
                   </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHeader;