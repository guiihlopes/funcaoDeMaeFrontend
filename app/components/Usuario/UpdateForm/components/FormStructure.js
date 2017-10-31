import propTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import ControlGroup from '~/components/@redux-form-components/ControlGroup';
import FormFooter from '~/components/@redux-form-components/FormFooter';
import validate from './validate';

const UserUpdateForm = ({ handleSubmit, pristine, reset, submitting }) =>
  (
    <form className="form-horizontal simple-form" onSubmit={handleSubmit}>
      <Field
        name="usuario[nome]"
        label="Nome"
        component={ControlGroup}
        id="usuario_nome"
      />
      <FormFooter
        pristine={pristine}
        reset={reset}
        submitting={submitting}
      />
    </form>
  );

UserUpdateForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  pristine: propTypes.bool.isRequired,
  submitting: propTypes.bool.isRequired,
  reset: propTypes.func.isRequired,
};

export default reduxForm({
  form: 'usuario_edit',
  validate,
})(UserUpdateForm);
