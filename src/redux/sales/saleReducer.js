import { SHOW_SALES } from "./saleTypes"


const intialState = {
    sales: ["abc", "def"]
}


export const saleReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_SALES:
             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}