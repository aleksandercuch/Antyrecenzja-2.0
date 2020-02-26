const initState = {
    image: []
};

const imageReducer = ( state = initState, action) => {
    switch(action.type){
        case 'CREATE_IMAGE':
            return state;
        case 'CREATE_IMAGE_ERROR':
            return state;
        default:
            return state;
    }
};

export default imageReducer
