import { combineReducers } from 'redux'
import authentication from './authentication'
import features from './features'

export default combineReducers({
    authentication,
    features,
})
