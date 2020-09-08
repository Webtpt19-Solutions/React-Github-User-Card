import React from 'react';
import FollowerCard from './followerCard'

const FollowerList = ({followers}) => {
    
    return(
        <div>
            {followers.map(item => {
                return <FollowerCard 
                        key={item.id}
                        follower={item}
                        />        
            })}
        </div>
    ) 
}

export default FollowerList;