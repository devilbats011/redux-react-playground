import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
// import CakeContainer from './components/CakeContainer'
// import CakeHooks from "./components/CakeHooks";
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamMurah from './components/IceCreamHooks'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
// import UsersContainer from './components/UsersContainer'
import TheUsersHooks from './components/UsersHooks'

function App () {
  //REMEMBER REACT COMPONENT MUST HAVE UPPCASELATER for the FIRST LETTER!!!!!!
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <UsersContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
        {/* <CakeContainer /> */}
        {/* <CakeHooks/> */}
        <HooksCakeContainer/>
        <IceCreamMurah/>
        <TheUsersHooks />
      </div>
    </Provider>
  )
}

export default App
