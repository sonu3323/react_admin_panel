import {SHOW_TREDEINS} from "./tredeinsTypes"


const intialState = {
    tredeins: ["tredeins", "tredeins2"]
}


export const tredeinsReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_TREDEINS:
             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}