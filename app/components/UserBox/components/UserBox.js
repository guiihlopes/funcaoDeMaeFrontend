import UserBoxMenu from './UserBoxMenu';

// eslint-disable-next-line
class UserBox extends React.Component {
  render() {
    return (
      <div className="user-box">
        <div className="user-img">
          <img
            src="http://www.ensis.eng.br/uploads/img_avatar_2.jpeg"
            alt="user-img"
            title="Mat Helme"
            className="img-circle img-thumbnail img-responsive"
          />
          <div className="user-status offline">
            <i className="zmdi zmdi-dot-circle" />
          </div>
        </div>
        <h5>
          <a href="#">Mat Helme</a>
        </h5>
        <UserBoxMenu />
      </div>
    );
  }
}

export default UserBox;
