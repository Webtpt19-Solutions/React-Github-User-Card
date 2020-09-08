import React from 'react';
import Axios from 'axios';
import './App.css';

// Component Imports
import FollowerList from './components/followerList';
import UserCard from './components/userCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      myProfile: {},
      followers: []
    }
  }

  componentDidMount(){
    Axios.get('https://api.github.com/users/Dazmen')
      .then(res => {
        console.log('My Profile', res)
        this.setState({
          ...this.state,
          myProfile: res.data
        })
      })
      .catch(err => console.log('My Profile Error', err))

    Axios.get('https://api.github.com/users/Dazmen/followers')
      .then(res => {
        console.log('My Followers', res)
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
      .catch(err => console.log('Follower Err', err))
  }

  render(){
    return (
      <div className="App">
       <header>
          <h1>Github-User-Card</h1>
          <h2>This time, with React!</h2>
        </header>
        <section>
          <UserCard myProfile={this.state.myProfile}/>
          <FollowerList followers={this.state.followers}/>
        </section>
      </div>
    );
  }
}

export default App;
