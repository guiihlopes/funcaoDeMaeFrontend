import propTypes from 'prop-types';
import intl from 'react-intl-universal';

const Field = ({ input,
  label,
  placeholder,
  type,
  children,
  meta: { touched, error } }) =>
  (
    <div className="form-group">
      <div className="col-xs-12">
        {label && <label htmlFor={input.id}>{label}</label>}
        <input {...input} className="form-control" placeholder={placeholder} type={type} />
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
    </div>
  );

Field.propTypes = {
  input: propTypes.object.isRequired,
  type: propTypes.string.isRequired,
  meta: propTypes.object.isRequired,
  label: propTypes.string,
  placeholder: propTypes.string,
  children: propTypes.node,
};

Field.defaultProps = {
  label: '',
  placeholder: '',
  fieldId: '',
  children: '',
};

export default Field;
