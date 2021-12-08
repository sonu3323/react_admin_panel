import { SHOW_DOCUMENTS } from "./documentsTypes"



const intialState = {
    documents: ["documents1", "documents2"]
}


export const documentsReducer = (store = intialState , action) => {
      console.log(action)
     switch (action.type) {
         case SHOW_DOCUMENTS:
             return store
        // case ADD_USER: 
        // return {
        //     users:[...store.users , action.payload]
        // }
         default:
           return store
     }
}