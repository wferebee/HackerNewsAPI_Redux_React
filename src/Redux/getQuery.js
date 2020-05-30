import { GET_QUERY } from "./actionTypes"

    export const getQuery = (Query, QueryId) => ({
            type: GET_QUERY,
            payload:{ 
                Query,  // here i want to store the query and give it an associated Id because that is part of the assignment
                QueryId
        }}
    )

export default getQuery;