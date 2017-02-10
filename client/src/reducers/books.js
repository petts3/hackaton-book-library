const books = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'BOOK_DATA':
            return action.data ? action.data.items : []
        default:
            return state
    }
}

export default books