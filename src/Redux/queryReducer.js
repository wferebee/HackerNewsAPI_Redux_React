import { GET_QUERY } from './actionTypes';


let Id = 0
export const queries = (state = [], action) => {
  switch (action.type) {
      case GET_QUERY: 
      return [
        ...state,{
            id: Id ++,
            text: action.payload.Query,
            
        }
    ]
      default: 
          return state;
      
  }
}

export default queries;