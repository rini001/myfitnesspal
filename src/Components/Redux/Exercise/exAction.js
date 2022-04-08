
import axios from 'axios'
import { GET_EXERCISE, GET_FAILURE, GET_SUCCESS } from "./exTypes"

const getData = (query) => {
    return (dispatch) => {
        dispatch(getExercise())
        axios
        .get(`http://localhost:3000/exercise?q=${query}`)
        .then(response => {
            const exercise = response.data
            dispatch(getSuccess(exercise))
        })
        .catch(error =>{
            dispatch(getFailure(error.message))
        })
    }
}



const getExercise = () => {
    return{
        type: GET_EXERCISE
    }
}

const getSuccess = (exercise) => {
    return {
        type: GET_SUCCESS,
        payload: exercise
    }
}
const getFailure = (error) => {
    return{
        type: GET_FAILURE,
        payload:error
    }
}
export {getData, getExercise, getSuccess, getFailure}