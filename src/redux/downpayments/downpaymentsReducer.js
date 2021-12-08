import { SHOW_DOWNPAYMENTS } from "./downpaymentsTypes"


const intialState = {
    downpayments: ["downpayments1", "downpayments2"]
}


export const downpaymentsReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_DOWNPAYMENTS:

             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}