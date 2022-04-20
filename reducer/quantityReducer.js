export const quantityReducer = (state , action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'REMOVE':
            if (state === 1) {
                return 1;
            }
            return state - 1;
        case 'RESET':
            return 1;
        default:
            return state;
    }
}