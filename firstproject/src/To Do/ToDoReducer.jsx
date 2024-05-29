const initialValue = []

const ToDoReducer = (state = initialValue,Action) => {
    switch(Action.type){
        case 'add':
            return [...state,Action.payload]
        default:
            return state
    }
}

export default ToDoReducer;