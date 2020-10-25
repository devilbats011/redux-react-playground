import React, { Fragment, useEffect } from 'react'
import fetch from './../redux/user/theUsersActions'
import { useSelector, useDispatch } from 'react-redux'

function UsersHooks() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.theUser.users)
    const loading = useSelector(state => state.theUser.loading)
    useEffect(() => {
        console.log("usersHooks mounted")
        //if does not need any data to pass ,u can just pass empty like fetch()
        //if u need any data to pass, u can put inside the first argument like syntax below fecth(5)
        //THE SECOND ARGUMENT IT AUTOMATICALLY PASS dispatch -- this is called thunk 
        //with passing the dispatch automatically / thunk, programmer can use action to the reducer then mutated the redux store 
        dispatch(fetch(5))
        
      }, [dispatch])

    return (
        <div>
          {loading ?  <Fragment> <h4> LOADING LIST OF USERS </h4> </Fragment> :
           <div>
              <h3>  List of Users </h3>
                {users.map((user) => { return (<p key={ user.id } >  -- {user.name} --</p>) })}
                
            </div>}
        <br/>
        </div>
    )
}

export default UsersHooks
