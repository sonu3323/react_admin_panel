import { SHOW_FINANCE_REQUESTS } from "./financeRequestsTypes"


const intialState = {
    financerequests: ["abc", "def"]
}


export const financeRequestsReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_FINANCE_REQUESTS:
             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}