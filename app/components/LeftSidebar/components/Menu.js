import Link from 'next/link';
import Router from 'next/router';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.urls = {
      dashboard: 'zmdi zmdi-view-dashboard',
      dispositivos: 'zmdi zmdi-format-underlined',
      tags: 'zmdi zmdi-calendar',
    };
    this.state = {
      url: '',
    };
  }
  componentDidMount() {
    const url = Router.route;
    // eslint-disable-next-line
    this.setState({
      url: url.replace('/', ''),
    });
  }
  render() {
    const { url } = this.state;
    const links = Object.keys(this.urls).map((obj) => {
      const isActive = url === obj;
      return (<li key={obj} className={isActive ? 'active' : ''}>
        <Link prefetch href={`/${obj}`}>
          <a className={`waves-effect${isActive ? ' active' : ''}`}>
            <i className={this.urls[obj]} />
            <span> {obj.charAt(0).toUpperCase() + obj.substring(1)} </span>
          </a>
        </Link>
      </li>);
    });
    return (
      <div id="sidebar-menu">
        <ul>
          <li className="text-muted menu-title">Navigation</li>
          {links.map(obj => obj)}
        </ul>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Menu;
