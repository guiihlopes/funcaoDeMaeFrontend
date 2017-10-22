import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import languageLocale from '../ducks/LanguageLocale';

export default combineReducers({
  form,
  languageLocale,
});
