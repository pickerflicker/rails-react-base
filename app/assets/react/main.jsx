import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  {id: 1, name: 'pickerflicker', body: 'body1111'},
  {id: 2, name: 'pickerflicker222', body: 'body2222'},
  {id: 3, name: 'pickerflicker333', body: 'body3333'},
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] };
  }
  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id: Date.now(), name: 'new name', body: tweetToAdd});
    this.setState(newTweetsList);
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
