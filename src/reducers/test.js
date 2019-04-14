
export default function reducer(state = 0, action) {
    switch (action.type) {
        case 'sagaadd':
            return state + action.payload;
        default:
            return state;
    }
}