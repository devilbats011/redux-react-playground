import { BUY_ICE_CREAM } from "./iceCreamTypes";
import { TAMBAH_STOCK } from "./iceCreamTypes";

export const beliIceCream = (number = 1) => {
    return {
        type: BUY_ICE_CREAM,
        payload:number
    }
}

export const tambahStockIceCream = (number = 1) => {
    return {
        type: TAMBAH_STOCK,
        payload: number
    }
}