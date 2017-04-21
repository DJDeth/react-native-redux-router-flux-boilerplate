import { combineReducers } from 'redux';
import * as scenesReducer from './scenes'
import * as loginReducer from './login'
import { ActionConst } from 'react-native-router-flux';

export default combineReducers(Object.assign(
  scenesReducer,
  loginReducer
));
