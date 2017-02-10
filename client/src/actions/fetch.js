import fetch from 'isomorphic-fetch'

const receiveBookResults = (json) => {
    return {
        type: 'BOOK_DATA',
        data: json
    }
}

export const fetchBookByName = (searchString) => {
    let error = false
    return (dispatch) => {
        let searchResults = fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}`, {method: 'GET'})
            .then((response) => {
                if (response.status != 200) {
                    throw Error('feil');
                }
                return response.json()
            })
            .catch(() => error = true)

        return Promise.all([searchResults])
            .then((data) => {
                if (!error) {
                    dispatch(receiveBookResults(data[0]))
                }
            })
    }
}