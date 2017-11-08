import propTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import ControlGroup from '~/components/@redux-form-components/ControlGroup';
import FormFooter from '~/components/@redux-form-components/FormFooter';
import validate from './validate';

const UserUpdateForm = ({ handleSubmit, pristine, reset, submitting }) =>
  (
    <form className="form-horizontal m-t-20" onSubmit={handleSubmit}>
      <Field
        name="usuario[email]"
        placeholder="Email"
        component={ControlGroup}
        id="usuario_email"
      />
      <Field
        name="usuario[senha]"
        placeholder="Senha"
        component={ControlGroup}
        id="usuario_senha"
      />
      <FormFooter
        pristine={pristine}
        reset={reset}
        submitButtonClassName="btn btn-custom btn-bordred btn-block waves-effect waves-light"
        cancel={false}
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
