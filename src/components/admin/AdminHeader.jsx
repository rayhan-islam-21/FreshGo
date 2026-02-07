import { Search } from 'lucide-react';
import React from 'react';
import { IoNotifications } from 'react-icons/io5';
import { Switch } from '../ui/switch';
import Image from 'next/image';
import { Input } from '../ui/input';

const AdminHeader = () => {
    return (
        <div className='grid grid-cols-2 p-3'>
            <div>
                <h1>Dashboard</h1>
            </div>
            <div className='flex items-center justify-center gap-12'>
                <div className='flex relative md:w-64 lg:w-88 items-center'>
                    <Input type='text'
                    placeholder='search data,users,or reports'/>
                    <Search className='absolute right-3 place-content-center'/>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <IoNotifications/>
                   <Switch />

                   <div className='w-10 relative h-10 rounded-full'>
                    <Image
                    src="/admin.jpg"
                    fill
                    alt='adminiamge'
                    className='w-full h-full object-center object-cover rounded-full'
                    />
                   </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHeader;