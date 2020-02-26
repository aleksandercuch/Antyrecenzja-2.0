const initState = {
    books: []
};

const bookReducer = ( state = initState, action) => {
    switch(action.type){
        case 'CREATE_BOOK':
            return state;
        case 'CREATE_BOOK_ERROR':
            return state;
        default:
            return state;
    }
};

export default bookReducer
