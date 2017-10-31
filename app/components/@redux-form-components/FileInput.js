import propTypes from 'prop-types';

const adaptFileEventToValue = delegate =>
  e =>
    delegate(e.target.files[0]);

const FileInput = ({
  input: {
    value: omitValue, onChange, onBlur, ...inputProps
  },
  meta: omitMeta,
  ...props
}) =>
  (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...inputProps}
      {...props}
    />
  );

FileInput.propTypes = {
  input: propTypes.object.isRequired,
  label: propTypes.string,
  type: propTypes.string.isRequired,
  meta: propTypes.object.isRequired,
};

FileInput.defaultProps = {
  label: '',
};

export default FileInput;
