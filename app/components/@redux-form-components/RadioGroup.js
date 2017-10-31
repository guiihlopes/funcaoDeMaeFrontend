import propTypes from 'prop-types';
import intl from 'react-intl-universal';

const Field = ({ input,
  label,
  options,
  children,
  className,
  divStyle,
  meta: { touched, error, warning } }) =>
  (
    <div className={`simple-form__control-group${divStyle ? '-column' : ''}${` ${className}`}${error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div className="input-group">
        {
          options.map(
            o =>
              (
                <label className="control-label" key={o.value} htmlFor={o.id}>
                  <input
                    type="radio"
                    {...input}
                    value={o.value}
                    id={o.id}
                    checked={(o.value === input.value) || o.checked}
                  />
                  {o.title}
                </label>
              ),
          )
        }
        {children !== null && children &&
          <div className="simple-form__field-group">
            {children}
          </div>
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
  divStyle: propTypes.string,
  className: propTypes.string,
  options: propTypes.array.isRequired,
  children: propTypes.node,
};

Field.defaultProps = {
  label: '',
  className: '',
  divStyle: '',
  placeholderLabel: '',
  fieldId: '',
  children: null,
};

export default Field;
