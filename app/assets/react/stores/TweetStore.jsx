import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import AppEventEmitter from './AppEventEmitter';

let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {
  getAll() {
    return _tweets;
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    case ActionTypes.CREATED_TWEET:
      _tweets.unshift(action.tweet);
      TweetStore.emitChange();
    default:
      // no op
  }

})

export default TweetStore;