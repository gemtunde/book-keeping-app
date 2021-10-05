const { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } = require("../../actions/actionTypes");



const userReducer = (state={}, action) =>{
    switch(action.type){

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
        default :
        return state ;
    }
}


export {userReducer}