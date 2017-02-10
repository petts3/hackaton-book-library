import {createStore, applyMiddleware, compose} from 'redux'
import React from 'react'
import thunk from 'redux-thunk'
import {render} from 'react-dom'
import { Route, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import reducers from './reducers'
import App from './App'
import Main from './Main'

const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant')(), thunk] :
    [thunk];

const store = createStore(reducers,
    {},
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);