import { FETCH_QUOTES_FAILURE, FETCH_QUOTES_SUCCESS, START_API_CALL } from "../Types/quotes";

const initial_state = {
    loading: true,
    data: [],
    error: ""
}

const quotesReducer = (state = initial_state, action) => {

    switch(action.type) {

        case FETCH_QUOTES_SUCCESS: {

            return {
                ...state,
                loading: false,
                error: "",
                data: action.payload
            }
        }

        case FETCH_QUOTES_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        }

        case START_API_CALL: {
			return {
				...state,
				error: '',
				loading: true,
			};
		}

        default: 
            return {...state}
    }
}

export default quotesReducer;