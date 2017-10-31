import Link from 'next/link';

// eslint-disable-next-line
class UserBoxMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(ev) {
    ev.preventDefault();
    this.test = 1;
    console.log(ev);
  }
  render() {
    return (
      <ul className="list-inline">
        <li>
          <Link prefetch href="/usuario/editar">
            <a>
              <i className="zmdi zmdi-settings" />
            </a>
          </Link>
        </li>
        <li>
          <a href="#" className="text-custom" onClick={this.handleLogout}>
            <i className="zmdi zmdi-power" />
          </a>
        </li>
      </ul>
    );
  }
}

export default UserBoxMenu;
