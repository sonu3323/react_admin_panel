import { SHOW_PRODUCT } from "./productTypes"



const intialState = {
    products: ["iphone", "dell","android"]
}


export const productReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_PRODUCT:
             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}