import propTypes from 'prop-types';
import intl from 'react-intl-universal';

const Select = ({
  input,
  children,
  label,
  meta: { touched, error, warning } }) =>
  (
    <div className={`simple-form__control-group-input ${(touched && error) ? 'has-error' : ''}`}>
      <select {...input}>
        {children}
      </select>
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


Select.propTypes = {
  input: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
  meta: propTypes.object.isRequired,
  label: propTypes.string,
};

Select.defaultProps = {
  label: '',
};

export default Select;
