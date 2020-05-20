import { combineReducers } from 'redux';

import modelsReducer from './models';
import colorsReducer from './colors';
import summaryReducer from './summary';

export default combineReducers({
  models: modelsReducer,
  colors: colorsReducer,
  summary: summaryReducer,
});
