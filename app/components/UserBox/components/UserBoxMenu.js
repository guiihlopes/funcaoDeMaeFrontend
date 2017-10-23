import Link from 'next/link';

// eslint-disable-next-line
class UserBoxMenu extends React.Component {
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
          <Link prefetch href="/usuario/editar">
            <a href="#" className="text-custom">
              <i className="zmdi zmdi-power" />
            </a>
          </Link>
        </li>
      </ul>
    );
  }
}

export default UserBoxMenu;
