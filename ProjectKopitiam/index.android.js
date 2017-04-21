
import React, { Component } from 'react';
import { AppRegistry,  StyleSheet} from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';

import appReducer from './app/reducers';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Home from './app/components/Home';


const Scenes = Actions.create(
  <Scene key='root' hideNavBar>
    <Scene key="login" title="Login" component={Login} initial={true}></Scene>
    <Scene key='register' title="Register" component={Register}></Scene>
    <Scene key='home' title="home" component={Home}></Scene>
  </Scene>
);

const ConnectedRouter = connect()(Router);
const middleware = applyMiddleware(thunk , createLogger());
const store = createStore(appReducer, middleware)

export default class ProjectKopitiam extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ProjectKopitiam', () => ProjectKopitiam);
