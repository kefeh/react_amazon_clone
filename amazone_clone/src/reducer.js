export const initialState = {
    basket: [],
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BBASKET':
            // logic for adding item to basket
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from Basket
            break;
        default:
            return state;
    }
}

export default reducer;