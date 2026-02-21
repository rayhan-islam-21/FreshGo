import LowerNav from '@/components/navitems/LowerNav';
import Navbar from '@/components/navitems/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <header>
                <Navbar/>
                <LowerNav/>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default layout;