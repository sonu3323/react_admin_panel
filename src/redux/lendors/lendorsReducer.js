import { SHOW_LENDORS } from "./lendorsTypes"


const intialState = {
    lendors: ["lenodrs1", "denors2"]
}


export const lendorsReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_LENDORS:
             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}