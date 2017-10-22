
// eslint-disable-next-line
class CardBoxOptions extends React.Component {
  render() {
    return (
      <div className="dropdown pull-right">
        <a
          href="#"
          className="dropdown-toggle card-drop"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="zmdi zmdi-more-vert" />
        </a>
        <ul className="dropdown-menu" role="menu">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li className="divider" />
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CardBoxOptions;
