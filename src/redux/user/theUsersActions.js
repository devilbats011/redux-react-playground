import axios from "axios";

export const FETCH_REQUEST = "FETCH_USER_REQUEST"
export const FETCH_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_FAILED = "FETCH_USER_FAILED"

const userRequest = () =>{
    return {
        type: FETCH_REQUEST,
        payload: '',
        loading: true
    }
}

const userSuccess = (users) =>{
    return {        
        type: FETCH_SUCCESS,
        payload: users,
        loading: false
    }
}
const userFailed = (err) =>{
    return {        
        type: FETCH_FAILED,
        payload: err,
        loading: false
    }
}

export const fecthUsers = param => dispatch => {
    console.log(param,dispatch)
    dispatch(userRequest())
    //set timeout saje nk bagi nampak loading tu ada lama sikit..
    setTimeout(() => {
        // dispatch(userSuccess({name:"Afnan"}))
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          console.log("then")
          const users = response.data
          dispatch(userSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(userFailed(error.message))
        })

    }, 1000);
  };

export { userRequest, userSuccess, userFailed } 

export default fecthUsers
