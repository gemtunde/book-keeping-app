const { FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, FETCH_BOOK_FAIL } = require("../../actions/actionTypes");


const bookListReducer = (state=[], action)=> {
        switch(action.type){
            case FETCH_BOOK_REQUEST : 
                return {
                    loading : true,
                };

            case FETCH_BOOK_SUCCESS : 
                return {
                    books : action.payload
                };
            case FETCH_BOOK_FAIL : 
            return {
                error : action.payload
            };
            default : 
                return state
        }
}



export {bookListReducer}
