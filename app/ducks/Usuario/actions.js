import types from './types';

const updateUsuario = usuario => (dispatch) => {
  dispatch({ type: types.UPDATE_USUARIO, usuario });
};

export default {
  updateUsuario,
};
