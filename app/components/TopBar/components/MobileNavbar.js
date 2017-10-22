import propTypes from 'prop-types';

// eslint-disable-next-line
class MobileNavbar extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="navbar navbar-default" role="navigation">
        <div className="container">
          <ul className="nav navbar-nav navbar-left">
            <li>
              <button className="button-menu-mobile open-left">
                <i className="zmdi zmdi-menu" />
              </button>
            </li>
            <li>
              <h4 className="page-title">{title}</h4>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

MobileNavbar.propTypes = {
  title: propTypes.string.isRequired,
};

export default MobileNavbar;
