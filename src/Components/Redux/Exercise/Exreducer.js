import { GET_EXERCISE, GET_FAILURE, GET_SUCCESS } from "./exTypes"

const inital = {
    loading: false,
    exercise: [],
    error: ''
}

const exreducer = (state = inital, action) => {
    switch(action.type){
        case GET_EXERCISE:
            return{
                ...state,
                loading: true
            }
        case GET_SUCCESS:
            return{
                ...state,
                exercise: action.payload,
                error: ''
            }
        case GET_FAILURE:
            return{
                loading: false,
                exercise: [],
                error: action.payload
            }
        default : return state
    }
}

export {exreducer}