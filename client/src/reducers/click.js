
const click = (state = {}, action) => {
    switch (action.type) {
        case 'TEST':
            return {resultat: 'Fantastic!!!'}
        default:
            return state
    }
}

export default click