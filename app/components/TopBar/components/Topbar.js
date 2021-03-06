import Link from 'next/link';
import propTypes from 'prop-types';
import Logo from '~/components/@ui/Logo';
import MobileNavbar from './MobileNavbar';

// eslint-disable-next-line
class Topbar extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="topbar">
        <div className="topbar-left" data-compnent="TopbarLeft">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <MobileNavbar title={title} />
      </div>
    );
  }
}

Topbar.propTypes = {
  title: propTypes.string.isRequired,
};

export default Topbar;
