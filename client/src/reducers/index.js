import { combineReducers } from 'redux'
import click from './click'
import books from './books'

const reducers = combineReducers({
    click,
    books
});

export default reducers