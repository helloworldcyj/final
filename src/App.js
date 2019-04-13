import React, { Component } from 'react';
import {
    BrowserRouter,
    // Route,
    // Link
  } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import Home from './page/home';
import './App.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
