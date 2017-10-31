import propTypes from 'prop-types';
import intl from 'react-intl-universal';

const Field = ({ input,
  label,
  placeholder,
  title,
  fieldId,
  maxDigits,
  meta: { touched, error, warning } }) =>
  (
    <div className={`simple-form__control-group textarea-control ${(touched && error) ? 'has-error' : ''}`}>
      {title !== '' && <label htmlFor={fieldId} className="control-label">{title}</label>}
      <div className="simple-form__control-group">
        <textarea {...input} id={fieldId} placeholder={placeholder} title={title} />
        {
          maxDigits && <p className="simple-form__control-group_counter">
            {maxDigits - input.value.length}</p>
        }

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
    </div>
  );


Field.propTypes = {
  input: propTypes.object.isRequired,
  meta: propTypes.object.isRequired,
  label: propTypes.string,
  title: propTypes.string,
  placeholder: propTypes.string,
  fieldId: propTypes.string,
  maxDigits: propTypes.number,
};

Field.defaultProps = {
  label: '',
  placeholder: '',
  fieldId: '',
  title: '',
  maxDigits: 0,
};

export default Field;
