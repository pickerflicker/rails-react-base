import Tweet from './components/tweet';

class Main extends React.Component {
  render() {
    return (
      <Tweet />
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
