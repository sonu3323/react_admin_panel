import { SHOW_CUSTOMER } from "./customerTypes"



const intialState = {
    customers: []
}


export const customerReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {

         case SHOW_CUSTOMER:
         
         return {...store, 
         
            customers: action.payload
            }
            
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}