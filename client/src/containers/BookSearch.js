import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {fetchBookByName} from '../actions/fetch'

class BookSearch extends Component {
    constructor() {
        super()
        this.state = {text: ''}
    }

    onChange = (event) => {
        this.setState({text: event.target.value})
    }

    doSearch = () => {
        this.props.dispatch(fetchBookByName(this.state.text))
    }

    render() {
        return (
            <div>
                <label>Søk etter tittel:</label>
                <input
                       type="text"
                       onChange={this.onChange}
                       value={this.state.text}/>
                <button onClick={this.doSearch}>Søk</button>
            </div>
        )
    }
}

BookSearch.propTypes = {
    dispatch: PropTypes.func
}

export default connect()(BookSearch)