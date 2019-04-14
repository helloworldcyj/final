import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import _ from 'lodash';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import './App.scss';
import { CONFIGS } from './configs';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Article from './page/Article';
import Archive from './page/Archive';
import Course from './page/Course';
import Message from './page/Message';
import About from './page/About';
import MainLayout from './layout/MainLayout';
import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware();
let storeEnhancers;
if(process.env.NODE_ENV==='production'){
    storeEnhancers = compose(
        applyMiddleware(sagaMiddleware)
    );
}else {
    storeEnhancers = compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
}
const store = createStore(
    reducer,
    storeEnhancers
  );
sagaMiddleware.run(rootSaga);

const ROUTES = [
    {
        path: CONFIGS.article.path,
        component: Article
    },
    {
        path: CONFIGS.archive.path,
        component: Archive
    },
    {
        path: CONFIGS.course.path,
        component: Course
    },
    {
        path: CONFIGS.message.path,
        component: Message
    },
    {
        path: CONFIGS.about.path,
        component: About
    }
];

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path={CONFIGS.home.path} component={Home} exact={true} />    
                    <Route path={CONFIGS.notFound.path} component={NotFound} />    
                    {_.map(ROUTES, (item, index) => (
                        <MainLayout key={index} path={item.path} component={item.component} />      
                    ))}
                    <Redirect from='*' to={CONFIGS.notFound.path} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
