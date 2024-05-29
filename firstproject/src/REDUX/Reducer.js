const initialValue = {
    counter: 0,
}
const Reducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + action.payload }
        case 'decrement':
            return { counter: state.counter - action.payload }
        default:
            return state
    }
}
export default Reducer;