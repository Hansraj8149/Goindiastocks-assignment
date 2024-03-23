'use client'
import { useState, useEffect } from 'react';
import DisscussionFourm from '@/components/DisscussionFourm';
import MarketStories from '@/components/MarketStories';
import Navbar from '@/components/Navbar';
import LargeNavbar from '@/components/LargeNavbar';
import { MobileSidebar } from '@/components/MobileSidebar';
const Page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); 
    };


    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize); 
    };
  }, []);

  return (
    <div className='flex items-center justify-center'>
      <div className='ml-10'>
        <MobileSidebar />
      </div>
      <div className=''>
        {isSmallScreen ? <Navbar /> : <LargeNavbar />}
        {!isSmallScreen && 
          <div className="grid gap-4 grid-cols-4 lg:grid-cols-6">
            <DisscussionFourm />
            <MarketStories />
          </div>
        }
      </div>
    </div>
  );
};

export default Page;
