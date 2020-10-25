//rfce <-- react template 
import React from 'react'
import { useSelector } from "react-redux";

function CakeHooks() {
    const numOfCakes = useSelector(state => state.cakey.numOfCakes)
    return (
        <div>
            <h3> Number of cakes - { numOfCakes }</h3>
            <button>Buy Cake</button>
        </div>
    )
}

export default CakeHooks
