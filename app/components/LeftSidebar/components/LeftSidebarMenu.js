import UserBox from '../../UserBox';
import Menu from './Menu';

// eslint-disable-next-line
class LeftSidebarMenu extends React.Component {
  render() {
    return (
      <div className="left side-menu">
        <div className="sidebar-inner slimscrollleft">
          <UserBox />
          <Menu />
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default LeftSidebarMenu;
