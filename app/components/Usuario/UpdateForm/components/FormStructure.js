import propTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import ControlGroup from '~/components/@redux-form-components/ControlGroup';
import FormFooter from '~/components/@redux-form-components/FormFooter';
import validate from './validate';

const UserUpdateForm = ({ handleSubmit, pristine, reset, submitting }) =>
  (
    <form className="form-horizontal m-t-20" onSubmit={handleSubmit}>
      <Field
        name="usuario[name]"
        placeholder="Nome"
        component={ControlGroup}
        id="usuario_name"
      />
      <Field
        name="usuario[cpf]"
        placeholder="CPF"
        component={ControlGroup}
        id="usuario_cpf"
      />
      <Field
        name="usuario[dtNasc]"
        placeholder="Data de nascimento"
        component={ControlGroup}
        id="usuario_data_nascimento"
      />
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
      <Field
        name="usuario[telefone]"
        placeholder="Telefone"
        component={ControlGroup}
        id="usuario_telefone"
      />
      <Field
        name="usuario[logradouro]"
        placeholder="Logradouro"
        component={ControlGroup}
        id="usuario_logradouro"
      />
      <Field
        name="usuario[cep]"
        placeholder="CEP"
        component={ControlGroup}
        id="usuario_CEP"
      />
      <Field
        name="usuario[numero]"
        placeholder="Numero"
        component={ControlGroup}
        id="usuario_numero"
      />
      <Field
        name="usuario[complemento]"
        placeholder="Complemento"
        component={ControlGroup}
        id="usuario_complemento"
      />
      <Field
        name="usuario[bairro]"
        placeholder="Bairro"
        component={ControlGroup}
        id="usuario_bairro"
      />
      <Field
        name="usuario[cidade]"
        placeholder="Cidade"
        component={ControlGroup}
        id="usuario_cidade"
      />
      <Field
        name="usuario[estado]"
        placeholder="Estado"
        component={ControlGroup}
        id="usuario_estado"
      />
      <FormFooter
        pristine={pristine}
        reset={reset}
        cancel={false}
        submitButtonValue="Cadastrar"
        submitButtonClassName="btn btn-custom btn-bordred btn-block waves-effect waves-light"
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
