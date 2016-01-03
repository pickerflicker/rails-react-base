import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import Follow from './components/follow';
import { Router, Route, Link, browserHistory } from 'react-router'

class App extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

let documentReady = () => {
  let reactRoot = document.getElementById('react')

  if (reactRoot) {
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Index}></Route>
          <Route path="/follow" component={Follow}></Route>
        </Route>
      </Router>,
      reactRoot);
  }
};

$(documentReady);
