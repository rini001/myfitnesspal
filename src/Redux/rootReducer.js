import {combineReducers} from 'redux'
import { exreducer } from './Exercise/Exreducer'

const rootReducer = combineReducers({
    exercise : exreducer
})

export {rootReducer}