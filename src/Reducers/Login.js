import { LOGIN_SUCCESS, LOGIN_FAILURE, START_API_CALL } from "../Types/Login";

const initial_state = {
    lading: false,
    data: {},
    error: ""
}

const loginReducer = (state = initial_state, action) => {

    switch(action.type) {

        case LOGIN_SUCCESS: {

            return {
                ...state,
                loading: false,
                error: "",
                data: action.payload
            }
        }

        case LOGIN_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload,
                data: {}
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

export default loginReducer