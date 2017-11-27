const validate = (values) => {
  const errors = {
    usuario: {},
  };

  if (values.usuario) {
    if (!values.usuario.email) {
      errors.usuario.email = 'required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.usuario.email)) {
      errors.usuario.email = 'invalid';
    }
  }

  return errors;
};

export default validate;
