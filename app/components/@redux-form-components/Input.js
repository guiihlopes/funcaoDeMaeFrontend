import propTypes from 'prop-types';
import intl from 'react-intl-universal';

const Field = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={`simple-form__control-group-input ${(touched && error) ? 'has-error' : ''}`}>
    <input {...input} placeholder={label} type={type} />
    {
      touched &&
      (
        (error &&
          <p className="validate-error">
            {intl.get(`form.validation.${error}`, { label: label.toLowerCase() })}
          </p>
        )
        ||
        (warning &&
          <p className="validate-warning">
            {warning}
          </p>
        )
      )
    }
  </div>
);


Field.propTypes = {
  input: propTypes.object.isRequired,
  label: propTypes.string,
  type: propTypes.string.isRequired,
  meta: propTypes.object.isRequired,
};

Field.defaultProps = {
  label: '',
};

export default Field;
