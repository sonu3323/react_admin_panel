import { SHOW_DEPOSITS } from "./depositsTypes"



const intialState = {
    deposits: ["dep1", "dep2"]
}


export const depositsReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_DEPOSITS:
             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}