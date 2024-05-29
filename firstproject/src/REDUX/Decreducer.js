/* eslint-disable no-unused-vars */  
const initialValue = {
    add : 0
}

const Decreducer = (state=initialValue,action)=>{
    switch(action.type){
        case 'increment':
            return {add:state.add+1}
        case 'decrement':
            return {add:state.add-1}
        default:
            return state
    }
}