import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import TweetActions from './actions/TweetActions';
import TweetStore from './stores/TweetStore';

TweetActions.getAllTweets();  // initializes store

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() }; 
};

class Main extends React.Component {
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
    TweetStore.addChangeEventListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeEventListener(this._onChange);
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
  let reactRoot = document.getElementById('react')

  if (reactRoot) {
    ReactDOM.render(<Main />, reactRoot);
  }
};

$(documentReady);
