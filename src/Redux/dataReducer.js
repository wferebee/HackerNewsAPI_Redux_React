import { FETCH_DATA } from './actionTypes';

const dataReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case FETCH_DATA :              // typical switch statement commonly used in Redux, especially when there are multiple cases and reducers
        return payload
        default :
    return state
};
};
export default dataReducer;