import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import { EventEmitter } from 'events';

let _tweets = [];
const CHANGE_EVENT = 'CHANGE'

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeEventListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeEventListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      _tweets = action.rawTweets;
      console.log("dispatched!");
      TweetStore.emitChange();
      break;
    default:
      // no op
  }

})

export default TweetStore;