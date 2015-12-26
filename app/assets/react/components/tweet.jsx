export default class Tweet extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <i className="material-icons circle">person_pin</i>
        <span className="title">{this.props.name}</span>
        <p>{this.props.body}</p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    );
  }
}