import { BUY_ICE_CREAM, TAMBAH_STOCK } from "./iceCreamTypes";

const initState = {
    numOfIceCream: 20
}

const iceCreamReducer = ( state = initState, action ) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state, //make a copy of state
            numOfIceCream: state.numOfIceCream - 1   //numOfIceCream result produced 
        }  
        case TAMBAH_STOCK:{
            console.log(
                {
                    ...state,
                    numOfIceCream1: state.numOfIceCream + action.payload,
                    numOfIceCream2: state.numOfIceCream + action.payload,
                    numOfIceCream3: state.numOfIceCream + action.payload
                }
            )
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            }

        }
        default:
            return state
    }
}

export default iceCreamReducer