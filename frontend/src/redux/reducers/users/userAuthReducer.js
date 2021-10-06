const { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } = require("../../actions/actionTypes");



const userReducer = (state={}, action) =>{
    switch(action.type){

        //register user
        case USER_REGISTER_REQUEST : 
            return {
                loading : true,
            };
        case USER_REGISTER_SUCCESS : 
            return {
                userInfo : action.payload,
            };
        case USER_REGISTER_FAIL : 
            return {
                error : action.payload,
                loading : false,
            };

            //login user
            case USER_LOGIN_REQUEST :
                return {
                    loading : true,
                };

            case USER_LOGIN_SUCCESS : 
            return{
                userInfo: action.payload,
            };

            case USER_LOGIN_FAIL : 
            return {
                error : action.payload,
                login : false,
            }

        default :
        return state ;
    }
}


export {userReducer}