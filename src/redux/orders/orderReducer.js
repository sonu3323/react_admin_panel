import { GET_ORDERS } from "./orderTypes"


const intialState = {
    orders: []
}


export const orderReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) { //type getOrder
         case GET_ORDERS: //type
             return {
                 ...store,
                 orders:action.payload
             }
         default:
           return store
     }
}