import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'
import theUserReducer from './user/theUsersReducer'
import  iceCreamReducer2  from "./iceCream2/iceCreamReducers";

const rootReducer = combineReducers({
  cakey: cakeReducer,
  iceCream: iceCreamReducer,
  iceCreamMurah: iceCreamReducer2,
  user: userReducer,
  theUser: theUserReducer
})

export default rootReducer
