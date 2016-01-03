import AppEventEmitter from './AppEventEmitter';
import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

let _users = [];
let _followed_ids = [];

class UserEventEmitter extends AppEventEmitter {
  getAllUsers() {
    return _users.map( user => {
      user.following = (_followed_ids.indexOf(user.id) >= 0);
      return user;
    });
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
  switch (action.actionType) {
    case ActionTypes.RECEIVED_USERS:
      _users = action.rawUsers;
      UserStore.emitChange();
      break;
    case ActionTypes.CREATED_FOLLOWER:
      _followed_ids.push(action.follower.user_id)
      UserStore.emitChange();
      break;
    default:
      // no op
  }
});

export default UserStore;