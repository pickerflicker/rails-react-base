import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets: rawTweets
    });
  },
  createdTweet(tweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CREATED_TWEET,
      tweet: tweet
    });
  },
  receivedUsers(rawUsers) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers: rawUsers
    });
  },
  createdFollower(follower) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CREATED_FOLLOWER,
      follower: follower
    });
  }
}

