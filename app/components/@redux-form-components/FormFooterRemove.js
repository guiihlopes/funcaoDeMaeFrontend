// TODO: remove isso depois de migrar tudo para o FormFooter
import propTypes from 'prop-types';

//eslint-disable-next-line
let FormFooter = (props) => {
  const { submitting, pristine, remove, reset, onCancel } = props;
  return (
    <div className="simple-form__footer">
      <a
        href="#"
        className="btn btn-danger button--remover"
        onClick={(ev, value) => (remove(ev, value))}
      >
        <span className="glyphicon glyphicon-trash" />
        Remover
      </a>
      <a
        href="#"
        className="btn btn-danger button--cancelar"
        onClick={ev => (reset() && onCancel(ev))}
      >
        <span className="glyphicon glyphicon-remove" />
        Cancelar
        </a>
      <button
        type="submit"
        className="btn btn-primary button--success"
        disabled={pristine || submitting}
      >
        <span className="glyphicon glyphicon-ok" />
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
  onCancel: propTypes.func.isRequired,
  remove: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
};

export default FormFooter;
