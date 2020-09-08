import React from 'react';

const FollowerCard = ({follower}) => {

  return(
      <div className="card">
          <img src={follower.avatar_url} alt='profile thumbnail' />
          <div className="card-info">
              <p className="username">{follower.login}</p>
              <p>Profile:   
                  <a href={follower.html_url}> Check out {follower.login}'s GitHub Profile!</a>
              </p>
          </div>
      </div>
  )
}

export default FollowerCard;