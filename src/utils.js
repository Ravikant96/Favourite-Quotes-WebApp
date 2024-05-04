import axios from 'axios';
import { API_KEY } from './constants';
// import { toaster } from './Components/Toaster';

export const api_call =  async (data) => {

    const { url, method, headers = {} } = data;
    
    return new Promise((resolve, reject) => {

        try {
            
            let combined_headers = {...headers, "X-Api-Key": API_KEY};
    
            axios({
                method,
                url,
                headers: combined_headers
            })
            .then(data => resolve({
                data: data.data,
                error: ""
            }))
            .catch(err => reject({
                data: [],
                error: "Something went wrong"
            }))

        } catch (error) {
            // toaster('error', 'Something went wrong', 3000);
            reject({
                data: [],
                error: "Error while making API Call",
                api_error: error
            });
        }

    })


}
