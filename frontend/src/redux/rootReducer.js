import postsReducer from './reducers/postsReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
