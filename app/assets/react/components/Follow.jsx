import React from 'react';
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions';
import { Link } from 'react-router';

let getAppState = () => {
  return { users: UserStore.getAllUsers() };
};

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState(getAppState());
  }

  componentDidMount() {
    UserActions.getAllUsers();
    UserStore.addChangeEventListener(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeEventListener(this._onChange);
  }

  followUser(userId) {
    UserActions.followUser(userId);
  }

  followClasses(following) {
    return "secondary-content button-floating " + (following ? "green": "grey");
  }

  render() {
    let users = this.state.users.map( user => {
      return (
        <li key={user.id} className="collection-item avatar">
          <span className="title">{user.name}</span>
          <a className={this.followClasses(user.following)}
             onClick={this.followUser.bind(this, user.id)}
          >
            <i className="material-icons">person_pin</i>
          </a>
        </li>
      );
    });

    return (
      <div>
        <h3>Who to Follow?</h3>
        <Link to="/">Back to Index</Link>
        <ul className="collection">{users}</ul>
      </div>
    );
  }
}