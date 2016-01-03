import ServerActions from './actions/ServerActions'

export default {
  getAllTweets() {
    $.get('/tweets').success(
      rawTweets => {
        ServerActions.receivedTweets(rawTweets);
      }
    ).error(error => console.log(error));
  },
  createTweet(body) {
    $.post('/tweets', {body}).success(
      tweet => {
        ServerActions.createdTweet(tweet);
      }
    ).error(error => console.log(error));
  },
  getAllUsers() {
    $.get('/followers/random').success(
      rawUsers => {
        ServerActions.receivedUsers(rawUsers);
      }
    ).error(error => console.log(error));
  },
  followUser(userId) {
    $.post('/followers', {user_id: userId}).success(
      follower => {
        ServerActions.createdFollower(follower);
      }
    ).error(error => console.log(error));
  }
}