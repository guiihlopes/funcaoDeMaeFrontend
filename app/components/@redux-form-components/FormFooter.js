import propTypes from 'prop-types';

const FormFooter = (props) => {
  const { submitting, pristine, reset, cancel, submitButtonClassName, submitButtonValue } = props;
  return (
    <div className="simple-form__footer">
      {cancel &&
        <a
          href="#"
          className="btn btn-danger btn-bordred"
          onClick={reset}
        >
          Cancelar
        </a>
      }
      <button
        type="submit"
        className={submitButtonClassName}
        disabled={pristine || submitting}
      >
        {submitButtonValue}
      </button>
      {submitting &&
        <span className="loader" />
      }
    </div>
  );
};

FormFooter.propTypes = {
  submitting: propTypes.bool.isRequired,
  pristine: propTypes.bool.isRequired,
  cancel: propTypes.bool,
  submitButtonClassName: propTypes.string,
  submitButtonValue: propTypes.string,
  reset: propTypes.func.isRequired,
};

FormFooter.defaultProps = {
  submitButtonValue: 'Salvar',
  submitButtonClassName: 'btn btn-success btn-bordred',
  cancel: true,
};

export default FormFooter;
