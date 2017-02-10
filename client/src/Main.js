import React, {Component, PropTypes} from 'react'
import BookSearch from './containers/BookSearch'
import Results from './containers/Results'

export default class Main extends Component {
    render() {
        return (
            <div>
                <p>Hello, world of books!</p>
                <BookSearch/>
                <Results/>
            </div>
        )
    }
}