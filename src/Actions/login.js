import { LOGIN } from "../Types/Login";

export const login = (user_data) => ({
    type: LOGIN,
    payload: user_data
})