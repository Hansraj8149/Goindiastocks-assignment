import React from 'react'
import { discussionFormData } from '@/data'
import DiscussionForumCard from './DiscussionForumCard'
const DisscussionFourm = () => {

  return (
    <div className='lg:col-span-4 col-span-2'>
   
        {discussionFormData.map((data)=> (
            
            <DiscussionForumCard key={data.comments} name={data.name} description={data.description} likes={data.likes} impressions={data.impressions} 
             comments={data.comments} createdAt={data.createdAt}/>
             

        ))}
      
    </div>
  )
}

export default DisscussionFourm
