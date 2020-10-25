import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED } from "./theUsersActions";

const initState = {
    loading: true,
    users: [],
    error: '',
}

const reducers = (state = initState, action )=>{
    switch (action.type) {
        case  FETCH_REQUEST: return{
            ...state,
            loading : action.loading,
            users: '',
            error: ''
        }
        case  FETCH_SUCCESS:{
        // console.log("FETCH_SUCCESS",action.payload)
        return{
            ...state,
            loading: action.loading,
            users: action.payload,
            error: ''
        }
        }
        case  FETCH_FAILED: return{
            ...state,
            loading: action.loading,
            users: '',
            error: action.payload
        }
    
        default:
            return state
    }
}

export default reducers