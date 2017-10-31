import propTypes from 'prop-types';
import actionHandler from '~/helpers/actionHandler';
import UsuarioForm from './FormStructure';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const submitValues = values.usuario;
    const { updateUsuario } = this.props;

    return actionHandler({
      action: updateUsuario,
      values: submitValues,
      block: 'usuario',
    });
  }

  render() {
    return (

      <UsuarioForm
        onSubmit={this.submit}
      />
    );
  }
}

Form.propTypes = {
  updateUsuario: propTypes.func.isRequired,
};

export default Form;
