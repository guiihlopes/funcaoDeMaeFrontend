import types from './types';

const createTags = tags => (dispatch) => {
  dispatch({ type: types.CREATE_TAGS, tags });
};
const updateTags = (id, tags) => (dispatch) => {
  dispatch({ type: types.UPDATE_TAGS, tags });
};

export default {
  createTags,
  updateTags,
};
