function getShelfReducer (state = [], action) {
    switch (action.type) {
        case 'GET_SHELF':
            return action.payload;
        default:
            return state;
    }
}

export default getShelfReducer;