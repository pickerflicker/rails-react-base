import React from 'react';
import TweetBox from './TweetBox';
import { Link } from 'react-router';
import TweetList from './TweetList';
import TweetActions from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() }; 
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id: Date.now(), name: 'new name', body: tweetToAdd});
    this.setState(newTweetsList);
  }

  _onChange() {
    this.setState(getAppState());
  }

  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeEventListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeEventListener(this._onChange);
  }

  render() {
    return (
      <div className="container">
        <Link to="/follow">Who to Follow</Link>
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}