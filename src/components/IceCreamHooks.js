import React from 'react'
import { beliIceCream, tambahStockIceCream } from "../redux";
import { useSelector, useDispatch } from 'react-redux'


function IceCreamHooks () {
  const numOfProduct = useSelector(state => state.iceCreamMurah.numOfIceCream)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of IceCream - 
           {numOfProduct}
            </h2>
            <button onClick={() => dispatch(beliIceCream())}>Buy ice cream murah</button>
            <button onClick={() => dispatch(tambahStockIceCream(10))}>+ tambah stock ice cream </button>
    </div>
  )
}

export default IceCreamHooks

