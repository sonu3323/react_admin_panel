import { ADD_USER, SHOW_USER } from "./userTypes"

const intialState = {
    users: ["abc", "dev"]
}


export const userReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_USER:
             return store
        case ADD_USER: 
        return {
            users:[...store.users , action.payload]
        }
         default:
           return store
     }
}