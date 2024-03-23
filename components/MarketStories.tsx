import { marketStoriesData } from '@/data'; // Ensure this path is correctly configured
import MarketStoriesCard from './MarketStoriesCard';

const MarketStories = () => {
  return (
    <div className='lg:col-span-2 col-span-2'>
     
        {marketStoriesData.map((data)=> (
            <MarketStoriesCard key={data.imageUrl} title={data.title} description={data.description} imageUrl={data.imageUrl}/>

        ))}
      
    </div>
  );
};

export default MarketStories;
