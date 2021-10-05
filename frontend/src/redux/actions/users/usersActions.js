import axios from 'axios';
import {USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from '../actionTypes'

const registerUserAction =  userData =>{

        return async dispatch => {
         try{
             dispatch({
                 type : USER_REGISTER_REQUEST
             });

             const config = {
                 headers : {
                     'Content-Type' : 'application/json',
                     
                 },
             }

             const {data} = await axios.post('http://localhost:5000/api/users/register', userData, config);

             dispatch({
                 type : USER_REGISTER_SUCCESS,
                 payload : data
             });

             //save user into local storage
             localStorage.setItem('userAuthData', JSON.stringify(data))
         }
         catch(error){
            dispatch({
                type : USER_REGISTER_FAIL,
                payload : error.response && error.response.data.message,
            })
         }
        }
}


export {registerUserAction}