import types from './types';

const updateLocale = locale => (dispatch) => {
  dispatch({ type: types.LOAD_LOCALE, locale });
};

export default {
  updateLocale,
};
