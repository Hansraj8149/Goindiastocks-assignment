import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import MarketStories from './MarketStories';
import DisscussionFourm from './DisscussionFourm';
import { MobileSidebar } from './MobileSidebar';

const Navbar = () => {
  const [showDiscussionForum, setShowDiscussionForum] = useState(true);
  const [showMarketStories, setShowMarketStories] = useState(false);

  const renderDiscussionForum = () => {
    setShowDiscussionForum(true);
    setShowMarketStories(false);
  };

  const renderMarketStories = () => {
    setShowDiscussionForum(false);
    setShowMarketStories(true);
  };

  return (
    <>
    <MobileSidebar/>
    <div className='flex font-bold py-4 justify-around text-white bg-[#111827]'>
      <Button className={`${showDiscussionForum ? 'bg-[#05070b]' :''} py-2 px-4 rounded-md`} onClick={renderDiscussionForum}>DISCUSSION FORUM</Button>
      <Button className={`${showMarketStories ? 'bg-[#05070b]': ''} py-2 px-4 rounded-md`} onClick={renderMarketStories}>MARKET STORIES</Button>
    </div>

      {showDiscussionForum && <DisscussionFourm />}
      {showMarketStories && <MarketStories />}
    </>
  );
};

export default Navbar;
