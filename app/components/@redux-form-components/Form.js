import propTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import FormFooter from './FormFooter';

let formName = '';

//eslint-disable-next-line
let Form = (props) => {
  const { handleSubmit, formClass, children } = props;
  formName = props.formName;
  return (
    <form
      onSubmit={handleSubmit}
      className={`simple-form ${formClass}`}
    >

      <div className="simple-form__content">
        {children}
      </div>
      <FormFooter onCancel={props.onCancel} />
    </form>
  );
};

Form.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  formClass: propTypes.string.isRequired,
  formName: propTypes.string.isRequired,
};

console.log(formName);

Form = reduxForm({
  form: formName,
})(Form);

export default Form;
