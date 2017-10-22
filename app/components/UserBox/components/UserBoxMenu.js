
// eslint-disable-next-line
class UserBoxMenu extends React.Component {
  render() {
    return (
      <ul className="list-inline">
        <li>
          <a href="#">
            <i className="zmdi zmdi-settings" />
          </a>
        </li>
        <li>
          <a href="#" className="text-custom">
            <i className="zmdi zmdi-power" />
          </a>
        </li>
      </ul>
    );
  }
}

export default UserBoxMenu;
