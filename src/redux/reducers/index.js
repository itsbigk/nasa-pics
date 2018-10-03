import { combineReducers } from 'redux'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  astronomy: appReducer
})

export default rootReducer
