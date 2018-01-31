import { combineReducers } from 'redux';
import reducer_type from './reducer_type';
import { reducer_yearFrom, reducer_yearTo } from './reducer_year';

const rootReducer = combineReducers({
  watch_type:       reducer_type,
  watch_yearFrom:   reducer_yearFrom,
  watch_yearTo:     reducer_yearTo
});

export default rootReducer;