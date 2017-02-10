import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class Results extends Component {

    render() {
        return(
            <div>
                {
                    this.props.bookTitles.map(title => <p>{title}</p>)
                }
            </div>
        )
    }
}

Results.propTypes = {
    bookTitles: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        bookTitles: state.books ? state.books.map(book => book.volumeInfo.title) : undefined
    }
}

export default connect(mapStateToProps)(Results)