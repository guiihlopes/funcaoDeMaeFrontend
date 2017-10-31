import propTypes from 'prop-types';
import intl from 'react-intl-universal';

const Field = ({ input,
  label,
  placeholderLabel,
  type,
  children,
  meta: { touched, error } }) =>
  (
    <div className="form-group">
      <label htmlFor={input.id}>{label}</label>
      <input {...input} placeholder={placeholderLabel} type={type} />
      {children}
      {
        (touched && error &&
          <ul className="parsley-errors-list filled">
            <li className="parsley-required">
              {intl.get(`form.validation.${error}`, { label: label.toLowerCase() })}
            </li>
          </ul>
        )
      }
    </div>
  );

Field.propTypes = {
  input: propTypes.object.isRequired,
  type: propTypes.string.isRequired,
  meta: propTypes.object.isRequired,
  label: propTypes.string,
  placeholderLabel: propTypes.string,
  children: propTypes.node,
};

Field.defaultProps = {
  label: '',
  placeholderLabel: '',
  fieldId: '',
  children: '',
};

export default Field;
