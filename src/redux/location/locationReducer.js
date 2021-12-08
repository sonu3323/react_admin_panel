import { SHOW_LOCATION } from "./locationTypes"


const intialState = {
    location: ["LA", "USA"]
}


export const locationReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_LOCATION:
             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}