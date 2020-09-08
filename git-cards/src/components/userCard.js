import React from 'react';

const UserCard = ({myProfile}) => {

    return(
        <div className="card">
            <img src={myProfile.avatar_url} alt='profile thumbnail' />
            <div className="card-info">
                <h3 className="name"><strong>{myProfile.name}</strong></h3>
                <p className="username"><strong>{myProfile.login}</strong></p>
                <p>Location: <strong>{myProfile.location}</strong></p>
                <p>Profile:   
                    <a href={myProfile.url}> Check out {myProfile.name}'s GitHub Profile!</a>
                </p>
                <p>Followers: <strong>{myProfile.followers}</strong></p>
                <p>Following: <strong>{myProfile.following}</strong></p>
                <p>Bio: {myProfile.bio}</p>
            </div>
        </div>
    )
}

export default UserCard