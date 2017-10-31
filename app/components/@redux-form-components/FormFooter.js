import propTypes from 'prop-types';

const FormFooter = (props) => {
  const { submitting, pristine, reset } = props;
  return (
    <div className="simple-form__footer">
      <a
        href="#"
        className="btn btn-danger btn-bordred"
        onClick={reset}
      >
        Cancelar
      </a>
      <button
        type="submit"
        className="btn btn-success btn-bordred"
        disabled={pristine || submitting}
      >
        Salvar
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
  reset: propTypes.func.isRequired,
};

export default FormFooter;
