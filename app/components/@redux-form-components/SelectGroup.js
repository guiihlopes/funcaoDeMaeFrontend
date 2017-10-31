import propTypes from 'prop-types';
import intl from 'react-intl-universal';

const SelectGroup = ({
  label,
  children,
  fieldId,
  meta: { touched, error, warning } }) =>
  (
    <div className={`simple-form__control-group ${(touched && error) ? 'has-error' : ''}`}>
      {label !== '' && <label className="control-label" htmlFor={fieldId}>{label}</label>}
      <div className="simple-form__control-group-input">
        {children}
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


SelectGroup.propTypes = {
  meta: propTypes.object.isRequired,
  fieldId: propTypes.string,
  label: propTypes.string,
  children: propTypes.node.isRequired,
};

SelectGroup.defaultProps = {
  label: '',
  fieldId: '',
};

export default SelectGroup;
