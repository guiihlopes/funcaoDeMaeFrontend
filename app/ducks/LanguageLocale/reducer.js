import types from './types';

export default (state = 'pt-BR', action) => {
  switch (action.type) {
    case types.LOAD_LOCALE:
      return action.locale;
    default:
      return state;
  }
};
