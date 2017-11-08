import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as actionUsuario } from '~/ducks/Usuario';
import ComponentForm from './components/Form';


const mapDispatchToProps = dispatch => ({
  updateUsuario: bindActionCreators(actionUsuario.updateUsuario, dispatch),
});


export default connect(null, mapDispatchToProps)(ComponentForm);
