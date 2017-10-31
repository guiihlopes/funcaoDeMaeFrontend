import types from './types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_USUARIO:
      return action.usuario;
    default:
      return state;
  }
};
